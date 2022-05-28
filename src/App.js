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
import PageNotFound from './Pages/PageNotFound/PageNotFound';
// import AllTools from './Pages/Home/AllTools';
import About from './Pages/About/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAdmin from './Pages/Dashboard/AddAdmin';
import UpdateTool from './UpdateTool/UpdateTool';
import ManageTools from './Pages/Dashboard/ManageTools';
import AddTool from './Pages/Dashboard/AddTool';
import Users from './Pages/Dashboard/Users';
import { QueryClient, QueryClientProvider } from "react-query";
import RequireAdmin from './authentication/RequireAdmin';
import MyProfile from './Pages/MyPortfolio/MyProfile';
import Blogs from './Pages/Blogs/Blogs';



function App() {
  const queryClient = new QueryClient();

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
            <RequireAuth>
              <UpdateTool />
            </RequireAuth>} />
          <Route path='/blog' element={<Blogs />}></Route>
          {/*   <Route path="alltools" element={
            <RequireAuth>
              <AllTools />
            </RequireAuth>
          } />   */}
          <Route path="/addtool" element={
            <RequireAuth>
              <AddTool />
            </RequireAuth>
          }></Route>
          <Route path="/manage" element={
            <RequireAuth>
              <ManageTools />
            </RequireAuth>
          }></Route>
          <Route path="about" element={
            <RequireAuth>
              <About />
            </RequireAuth>
          } />
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-admin' element={<AddAdmin />} />
              <Route path='manage' element={<ManageTools />} />
              <Route path='add-tool' element={<AddTool />} />

              <Route path='user' element={
                <QueryClientProvider client={queryClient}>
                  <RequireAdmin>
                    <Users />
                  </RequireAdmin>
                </QueryClientProvider>
              } />
            </Route>
          </Route>
          <Route path="portfolio" element={<MyProfile />}>MyPortfolio</Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />

      </Navbar >
      <Footer />
    </>
  );
}

export default App;