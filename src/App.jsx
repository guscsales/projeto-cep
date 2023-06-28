import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import ZipCodeDetails from './pages/ZipCodeDetails';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/detalhes/:zipCode',
        element: <ZipCodeDetails />,
      },
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

const fetcher = axios.create();

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <SkeletonTheme baseColor="#374151" highlightColor="#4b5563">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </SWRConfig>
  );
}

export default App;
