import Header from "./Components/Header";
import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import Store from "./Components/Utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Header />

        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
