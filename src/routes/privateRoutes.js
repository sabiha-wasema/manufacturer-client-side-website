import About from "../Pages/About/About";
import Purchase from "../Pages/Purchase";

export const privateRoutes = [
    { path: "/about", name: "About", Component: About },
    // { path: "/tools", name: "Tools", Component:  },
    { path: "/purchase", name: "Purchase", Component: Purchase },
];