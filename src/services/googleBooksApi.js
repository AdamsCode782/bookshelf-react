const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

/**
 * Fetch books from Google Books and normalize the response into the app's shape.
 * @param {string} query 
 * @param {number} maxResults 
 * @returns {Promise<Array>} 
 */
export async function getBooks(query = "popular fiction", maxResults = 20) {
  try {
    const q = encodeURIComponent(query.trim() || "popular fiction");
    const res = await fetch(
      `${GOOGLE_BOOKS_API}?q=${q}&maxResults=${Math.min(maxResults, 40)}&printType=books&orderBy=relevance&key=${import.meta.env.VITE_GOOGLE_BOOKS_KEY}`
    );

    if (!res.ok) throw new Error("Failed fetching books from Google Books API");

    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];

    return items.map((item) => {
      const volume = item.volumeInfo ?? {};
      const access = item.accessInfo ?? {};
      const sale = item.saleInfo ?? {};

      // Pick the best available image
      const imageLinks = volume.imageLinks ?? {};
      let imageUrl =
        imageLinks.large ||
        imageLinks.medium ||
        imageLinks.thumbnail ||
        imageLinks.smallThumbnail ||
        imageLinks.small ||
        "";

      if (imageUrl.startsWith("http:")) imageUrl = imageUrl.replace("http:", "https:");
      if (!imageUrl)
        imageUrl = "https://via.placeholder.com/128x192?text=No+Cover";

      // Determine a good preview link
      const googlePlayLink = `https://play.google.com/store/books/details?id=${item.id}`;
      const previewLink =
        volume.previewLink ||
        access.webReaderLink ||
        sale.buyLink ||
        googlePlayLink;

      // Stable deterministic “price” just for UI
      const id = item.id || Math.random().toString(36).slice(2, 9);
      let hash = 0;
      for (let i = 0; i < id.length; i++) {
        hash = (hash << 5) - hash + id.charCodeAt(i);
        hash |= 0;
      }
      const pseudoPrice = Math.abs(hash) % 25 + 5; // $5–$30

      return {
        // Core fields
        id,
        title: volume.title || "Untitled",
        authors: volume.authors || ["Unknown Author"],
        description: volume.description || volume.subtitle || "No description available.",
        imageUrl,
        previewLink,
        publisher: volume.publisher || "Unknown Publisher",
        publishedDate: volume.publishedDate || "N/A",
        pageCount: volume.pageCount || null,
        categories: volume.categories || [],

        name: volume.title || "Untitled",
        unitPrice: pseudoPrice,
        buyLink: previewLink,

        displayPrice: pseudoPrice,
        _raw: item,
      };
    });
  } catch (err) {
    console.error("📚 Error fetching books:", err);
    throw new Error(err?.message || "Failed fetching books");
  }
}
