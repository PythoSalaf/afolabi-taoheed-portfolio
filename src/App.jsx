import { createBrowserRouter, RouterProvider } from "react-router";
import {
  About,
  Blog,
  Contact,
  Education,
  Experience,
  Home,
  Layout,
  NotFound,
  Projects,
  SkillsStack,
} from "./pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "skills",
        element: <SkillsStack />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
