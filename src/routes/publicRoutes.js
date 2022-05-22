import About from '../pages/About/About';
import BusinessSummary from '../pages/BusinessSummary/BusinessSummary';
import Home from '../pages/Home/Home';
import Reviews from '../pages/Reviews/Reviews';
import Tools from '../pages/Tools/Tools';


export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/tools", name: "Tools", Component: Tools },
    { path: "/reviews", name: "Reviews", Component: Reviews },
    { path: "/businesssummary", name: "BusinessSummary", Component: BusinessSummary },
    { path: "/about", name: "About", Component: About },
    // { path: "/login", name: "Login", Component: Login },
];