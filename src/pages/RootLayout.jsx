import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="bg-white text-black min-h-screen font-josefin selection:bg-primary selection:text-white relative">
            <div className="relative z-10">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}
