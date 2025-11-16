import * as pages from "@/pages"
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    
    {   path : "/", element : <pages.Home/>    },
    {   path : "/projects", element : <pages.Projects/>    },
    {   path : "/skills", element : <pages.Skills/>    },
    {   path : "/certificate", element : <pages.Certificate/>    },
    {   path : "/about", element : <pages.About/>    },
    {   path : "/contact", element : <pages.Contact/>    },
    {   path : "/resume", element : <pages.Resume/>    },
    {   path : "*", element : <pages.NotFound/>    },
])

export default router;