import { Certificates, Contact, Home, Projects, Resume, Skills } from "@/pages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function UnifiedLayout() {
    const containerRef = useRef();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo;
            // Delay slightly to ensure content is rendered
            setTimeout(() => {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: `#${id}`, offsetY: 80 },
                    ease: "power4.inOut",
                });
            }, 100);
        }
    }, [location]);

    useGSAP(() => {
        // Scroll Progress Bar Animation
        gsap.to("#scroll-progress", {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
            }
        });

        const sections = gsap.utils.toArray(".reveal-section");

        sections.forEach((section) => {
            gsap.fromTo(section,
                {
                    opacity: 0,
                    y: 50,
                    filter: "blur(10px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%", // when the top of the element hits 85% of the viewport height
                        end: "top 50%",
                        toggleActions: "play none none reverse", // play on enter, reverse on leave-back
                    }
                }
            );
        });

        // Horizontal scrolling for projects or skill categories if needed
        // For now, focusing on basic vertical reveal
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="pb-1 relative overflow-x-hidden">
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-primary z-[150] transition-all duration-100 ease-out"
                id="scroll-progress"
                style={{ width: "0%" }}
            />

            <div className="relative z-10 flex flex-col gap-0">
                <div id="home" className="min-h-screen flex items-center">
                    <Home />
                </div>

                <div id="skills">
                    <Skills />
                </div>

                <div id="projects">
                    <Projects />
                </div>

                <div id="resume" className="bg-gray-50/50">
                    <Resume />
                </div>

                <div id="certificates">
                    <Certificates />
                </div>

                <div id="contact" className="pb-10">
                    <Contact />
                </div>
            </div>

            {/* Simplified Footer */}
            <footer className="py-12 border-t border-gray-100 text-center relative z-10 bg-white mt-10">
                <p className="text-gray-400 text-[13px] font-josefin font-medium tracking-wider uppercase">
                    © {new Date().getFullYear()} Rohit Gholap • Full Stack Developer
                </p>
            </footer>
        </div>
    );
}
