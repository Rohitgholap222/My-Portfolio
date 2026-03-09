import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="bg-[#0a0a0a] text-[#fcfcfc] min-h-screen selection:bg-indigo-500 selection:text-white relative">
            {/* Shared Decorative Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}
