import { RoutesList } from '@/components/Routes/libs/constants/RoutesList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


export const Routes = () => {
  const router = createBrowserRouter(RoutesList);

  return <RouterProvider router={router} />;
};
