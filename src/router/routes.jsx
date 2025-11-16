import * as pages from "@/pages"
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    
    {   path : "/", element : <pages.Home/>    },
    {   path : "/projects", element : <pages.Projects/>    },
])

export default router;