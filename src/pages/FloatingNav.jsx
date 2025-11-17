import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const [showTour, setShowTour] = useState(false);

    const paths = ["/hero1", "/hero2", "/hero3", "/hero4"];
    const currentIndex = paths.indexOf(location.pathname);

    const next = () => {
        if (currentIndex < paths.length - 1) navigate(paths[currentIndex + 1]);
    };

    const prev = () => {
        if (currentIndex > 0) navigate(paths[currentIndex - 1]);
    };

    useEffect(() => {
        const seen = localStorage.getItem("heroTourSeen");
        if (!seen) {
            setTimeout(() => {
                setShowTour(true);
                localStorage.setItem("heroTourSeen", "true");
            }, 800);
        }
    }, []);

    return (
        <motion.div
            drag
            dragMomentum={false}
            className="fixed bottom-6 right-6 z-[9999] p-2 flex gap-3 shadow-xl 
                       bg-white/20 backdrop-blur-lg border border-white/20
                       rounded-2xl cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        >
            {/* 🎉 TOUR BUBBLE */}
            {showTour && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-16 right-0 bg-black/80 text-white 
                    px-4 py-2 rounded-xl text-sm shadow-xl border border-white/20"
                >
                    Explore all Hero Sections →
                    <div className="absolute bottom-[-6px] right-6 
                        w-3 h-3 bg-black/80 rotate-45"></div>
                </motion.div>
            )}

            {/* Buttons */}
            <button
                onClick={prev}
                className="px-3 py-1 rounded-xl bg-black/40 text-white 
                           hover:bg-black/60 transition-all duration-200"
            >
                Prev
            </button>

            <button
                onClick={next}
                className="px-3 py-1 rounded-xl bg-black/40 text-white 
                           hover:bg-black/60 transition-all duration-200"
            >
                Next
            </button>
        </motion.div>
    );
}
