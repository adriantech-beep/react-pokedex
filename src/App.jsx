import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { loader as pokemonsLoader } from "./services/apiPokemon";
import Pokemons from "./pokemon/pokemons";
import HomePage from "./ui/HomePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pokemons",
        element: <Pokemons />,
        errorElement: <Error />,
        loader: pokemonsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
