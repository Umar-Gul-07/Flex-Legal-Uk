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
import Login from "./Pages/website/Login";
<<<<<<< HEAD
=======
import Registration from "./Pages/website/Registration";  
>>>>>>> ba904c10267e8e27df0beeec66a52b48cc3f9d66
import Attorneys from "./Pages/website/Attorneys";
import AttorneyDetails from "./Pages/website/AttorneyDetails";
import AdminAttorneyDetails from "./Pages/admin/AttorneyDetails";
import Users from "./Pages/admin/UsersList";
import AttorneysList from "./Pages/admin/AttorneysList";
import TransactionList from "./Pages/admin/TransactionList";
import UserDashboard from "./Pages/users/Dashboard";
import UserMain from "./Pages/users/Main";
import AdminProtected from "./Security/AdminProtected";
import AttorneyProtected from "./Security/AttorneyProtected";
import Setting from "./Pages/users/Setting";
import Registration from "./Pages/website/Registration";

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
          <Route path='/attorneys' element={<WebsiteBase><Attorneys title="Attorneys"/></WebsiteBase>} />
          <Route path='/attorney-details' element={<WebsiteBase><AttorneyDetails title="Attorney Details"/></WebsiteBase>} />
          <Route path='/login' element={<WebsiteBase><Login title="Login"/></WebsiteBase>} />
          <Route path='/registration' element={<WebsiteBase><Registration title="Registration"/></WebsiteBase>} /> 

          <Route path='*' element={<PageNotFound404 />} />



          {/* User Routes */}
          <Route path='/user/dashboard' element={<AttorneyProtected><UserMain><UserDashboard/></UserMain></AttorneyProtected>} />
          <Route path='/user/settings' element={<AttorneyProtected><UserMain><Setting/></UserMain></AttorneyProtected>} />



          {/* Admin Routes */}
          <Route path='/admin/dashboard' element={<AdminProtected><Dashboard><Main/></Dashboard></AdminProtected>} />
          <Route path='/admin/users-list' element={<AdminProtected><Dashboard><Users/></Dashboard></AdminProtected>} />
          <Route path='/admin/attorneys-list' element={<AdminProtected><Dashboard><AttorneysList/></Dashboard></AdminProtected>} />
          <Route path='/admin/attorneys-details' element={<AdminProtected><Dashboard><AdminAttorneyDetails/></Dashboard></AdminProtected>} />
          <Route path='/admin/transactions-list' element={<AdminProtected><Dashboard><TransactionList/></Dashboard></AdminProtected>} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
