import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
// import Blog from './Pages/Blog/Blog';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
// import AllTools from './Pages/Home/AllTools';
import About from './Pages/About/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ToolDetail from './Pages/ToolDetail/ToolDetail';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAdmin from './Pages/Dashboard/AddAdmin';
import UpdateTool from './UpdateTool/UpdateTool';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
// import AddTool from './Pages/Dashboard/AddTool';
// import Purchase from './Pages/Purchase/Purchase';


function App() {
  useEffect(() => {
    AOS.init({ disable: 'mobile' });
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/tool/:toolId" element={
            // <RequireAuth>
            <UpdateTool />
            // <ToolDetail />
            // </RequireAuth>} />
          } />
          {/*  <Route path='/blog' element={<Blog />}></Route> */}
          <Route path='/myItems' element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          } />
          <Route path='/addItem' element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          } />
          {/*   <Route path='/manageItems' element={
            <PrivateRoute>
              <ManageItems />
            </PrivateRoute>
          }></Route> */}
          {/* <Route path="/tool/:toolId" element={<ToolDetail />} /> */}
          {/*   <Route path="alltools" element={
            <RequireAuth>
              <AllTools />
            </RequireAuth>
          } />   */}
          <Route path="about" element={
            <RequireAuth>
              <About />
            </RequireAuth>
          } />
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-admin' element={<AddAdmin />} />
              {/* <Route path='add-tool' element={<AddTool />} /> */}
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </Navbar >
    </>
  );
}

export default App;