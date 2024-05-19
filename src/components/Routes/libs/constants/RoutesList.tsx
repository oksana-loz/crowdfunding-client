import { RoutesName } from '@/components/Routes/libs/constants/Routes.enum';
import CreateProjectForm from '@/pages/CreateProject/CreateProject';
import { Dashboard } from '@/pages/Dashboard/Dashboard';
import { ListProjects } from '@/pages/ListProjects/ListProjects';
import { MyDontats } from '@/pages/MyDonats/MyDonats';
import { MyProjects } from '@/pages/MyProject/MyProject';
import { ProjectDetails } from '@/pages/ProjectDetails/ProjectDetails';
import { Login } from '@/pages/login';
import { Registration } from '@/pages/registration/Registration';

export const RoutesList = [
  {
    path: RoutesName.MAIN,
    element: <Dashboard />,
  },
  {
    path: RoutesName.LOGIN,
    element: <Login />,
  },
  {
    path: RoutesName.REGISTR,
    element: <Registration />,
  },
  {
    path: RoutesName.CREATE_PROJECT,
    element: <CreateProjectForm />,
  },
  {
    path: RoutesName.LIST_PROJECTS,
    element: <ListProjects />,
  },

  {
    path: RoutesName.MY_PROJECTS,
    element: <MyProjects />,
  },

  {
    path: RoutesName.MY_DONTATS,
    element: <MyDontats />,
  },

  {
    path: RoutesName.PROJECT_DETAILS,
    element: <ProjectDetails />,
  },
];
