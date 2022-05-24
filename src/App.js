import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { publicRoute } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RequireAuth from './authentication/RequireAuth';
import { privateRoutes } from './routes/privateRoutes';
import Footer from './Pages/Shared/Footer';


function App() {
  useEffect(() => {
    AOS.init({ disable: 'mobile' });
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<RequireAuth />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
        <Footer />
      </Navbar>



    </>
  );
}

export default App;