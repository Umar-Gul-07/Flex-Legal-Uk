import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Pages/web_pages/Navbar'
import Footer from './Pages/web_pages/Footer'
import PageNotFound from './Pages/web_pages/ErrorsPages/PageNotFound';
import Home from './Pages/web_pages/Home';
import ToastContainers from './Services/ToastContainer';
import Practicing from './Pages/web_pages/PracticingArea';
import About from './Pages/web_pages/About.jsx';
import Contact from './Pages/web_pages/ContactUs.jsx';


import Login from './Pages/web_pages/Login.jsx';
import Registration from './Pages/web_pages/Registration.jsx';
import MainFile from './Pages/web_pages/Dashboard/MainFile.jsx';
import UserProfile from './Pages/web_pages/Dashboard/UserProfile.jsx';
import Setting from './Pages/web_pages/Dashboard/Setting.jsx';
import LawyerDash from './Pages/web_pages/Dashboard/LawyerDash.jsx';
import Search from './Pages/web_pages/Search.jsx'
import LawyerProtected from './Services/Protection.jsx';

 
function App() {
  
  const User = true;
  const Lawyer = true;
  return (
   <>
   <BrowserRouter>
   
    {/* ToastContainer */}
    <ToastContainers/>

    {/* Navbar */}

    {      User?null:<Navbar
/>}
    
    {/* Routes */}
   <Routes>
   <Route path='/' element={<Home/>} />  
   <Route path='/practicing' element={<Practicing/>} /> 
   <Route path='/About' element={<About/>} /> 
   <Route path='/Contact' element={<Contact/>} /> 
   <Route path='/Login' element={<Login/>} /> 
   <Route path='/Registration' element={<Registration/>} /> 
   <Route path='/UserProfile' element={<UserProfile/>  } />
   <Route path='/Setting' element={<LawyerProtected><Setting/></LawyerProtected> } /> 
   <Route path='/Dashboard' element={User ? <MainFile /> :  <LawyerProtected><Login /></LawyerProtected>} />
   <Route path='/LawyerDash' element={Lawyer ? <LawyerDash /> :  <LawyerProtected><Login /></LawyerProtected>} />
   <Route path='/Search' element={<Search/>} />
    <Route path='*' element={<PageNotFound/>} /> 
   </Routes>
 
        {      User?null:<Footer
/>}
      </BrowserRouter>
   </>
  );
}

export default App;
