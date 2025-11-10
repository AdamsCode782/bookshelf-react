import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Browse, { loader as menuLoader } from './features/browse/Browse';
import ReadingList from "./features/readinglist/ReadingList";


import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/browse',
        element: <Browse />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/reading-list', element: <ReadingList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
