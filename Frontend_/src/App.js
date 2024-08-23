import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/admin/Dashboard";
import Main from "./Pages/admin/Main";
import WebsiteBase from "./Pages/website/Base";
import Home from "./Pages/website/Home";
import About from "./Pages/website/About";
import Services from "./Pages/website/Services";
import Contact from "./Pages/website/Contact";
function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<WebsiteBase><Home/></WebsiteBase>} />
          <Route path='/about' element={<WebsiteBase><About title="About Us"/></WebsiteBase>} />
          <Route path='/services' element={<WebsiteBase><Services title="Services"/></WebsiteBase>} />
          <Route path='/contact' element={<WebsiteBase><Contact title="Contact Us"/></WebsiteBase>} />
          <Route path='*' element={<PageNotFound404 />} />

   

          {/* Admin Routes */}
          <Route path='/admin' element={<Dashboard><Main/></Dashboard>} />
          {/* <Route path='/admin/dashboard' element={<Dashboard />} /> */}

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
