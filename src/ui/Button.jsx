// import { Link } from 'react-router-dom';

// function Button({ children, disabled, to, type, onClick }) {
//   const base =
//     'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

//   const styles = {
//     primary: base + ' px-4 py-3 md:px-6 md:py-4',
//     small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
//     round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
//     secondary:
//       'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
//   };

//   if (to)
//     return (
//       <Link to={to} className={styles[type]}>
//         {children}
//       </Link>
//     );

//   if (onClick)
//     return (
//       <button onClick={onClick} disabled={disabled} className={styles[type]}>
//         {children}
//       </button>
//     );

//   return (
//     <button disabled={disabled} className={styles[type]}>
//       {children}
//     </button>
//   );
// }

// export default Button;
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    // ✨ Primary: Indigo theme for BookShelf
    primary:
      base +
      " bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-300 px-4 py-3 md:px-6 md:py-4",

    // 🪶 Small variant (used for actions like 'Add to list', 'View')
    small:
      base +
      " bg-indigo-500 text-white hover:bg-indigo-400 focus:ring-indigo-300 px-4 py-2 md:px-5 md:py-2.5 text-xs",

    // ⚪ Round variant (for icons or quantity)
    round:
      base +
      " bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-300 px-2.5 py-1 md:px-3.5 md:py-2 text-sm",

    // 🌤 Secondary: neutral look for less emphasis
    secondary:
      base +
      " border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-100 focus:ring-indigo-200 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  const className = styles[type] || styles.primary;

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
