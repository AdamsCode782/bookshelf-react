import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Browse, { loader as menuLoader } from "./features/browse/Browse";
import ReadingList from "./features/readinglist/ReadingList";

import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/browse"
            element={<Browse />}
            loader={menuLoader}
          />
          <Route path="/reading-list" element={<ReadingList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
}

export default App;
