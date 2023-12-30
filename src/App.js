// import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Root } from "./Pages/Root/Root";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

// const router = createBrowserRouter(
//     {
//         path: '/',
//         element: <Root />,
//         children:[
//             { path: true, element: <Homepage /> }
//         ]
//     }
// )

function App() {
  return (
    // <RouterProvider router={router} />
      <>
        <Header />
          <div className="content-main">
            <Homepage />
          </div>
          <Footer />
      </>
  );
}

export default App;
