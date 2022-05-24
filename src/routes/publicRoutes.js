import Blog from "../Pages/Blog/Blog";
// import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import SignUp from "../Pages/Login/SignUp";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
// import Reviews from "../Pages/Reviews";
// import Tools from "../Pages/Tools";

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    // { path: "/tools", name: "Tools", Component: Tools },
    { path: "/blog", name: "Blog", Component: Blog },
    // { path: "/reviews", name: "Reviews", Component: Reviews },
    // { path: "/contact", name: "ContactUs", Component: ContactUs },
    // { path: "/login", name: "Login", Component: Login },
    // { path: "/signup", name: "SignUp", Component: SignUp },
    { path: "*", name: "PageNotFound", Component: PageNotFound },
];