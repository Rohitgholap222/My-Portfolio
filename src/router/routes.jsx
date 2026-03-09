import * as pages from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <pages.UnifiedLayout /> },
    { path: "/projects", element: <pages.Projects /> },
    { path: "/skills", element: <pages.Skills /> },
    { path: "/certificates", element: <pages.Certificates /> },
    { path: "/about", element: <pages.About /> },
    { path: "/contact", element: <pages.Contact /> },
    { path: "/resume", element: <pages.Resume /> },
    { path: "*", element: <pages.NotFound /> },
]);

export default router;
