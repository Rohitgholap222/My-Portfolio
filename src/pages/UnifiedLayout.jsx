import Navbar from "@/components/Navbar";
import { About, Certificates, Contact, Home, Projects, Resume, Skills } from "@/pages";

export default function UnifiedLayout() {
    return (
        <div className="bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 selection:text-white pb-20">
            <Navbar />

            <div id="home">
                <Home />
            </div>

            <div id="about">
                <About />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="projects">
                <Projects />
            </div>

            <div id="certificates">
                <Certificates />
            </div>

            <div id="resume">
                <Resume />
            </div>

            <div id="contact">
                <Contact />
            </div>

            {/* Simplified Footer */}
            <footer className="py-12 border-t border-white/5 text-center mt-20">
                <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
                    © {new Date().getFullYear()} Rohit Gholap • Full Stack Developer
                </p>
            </footer>
        </div>
    );
}
