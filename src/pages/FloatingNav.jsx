import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function FloatingNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const paths = ["/hero1", "/hero2", "/hero3", "/hero4"];
    const currentIndex = paths.indexOf(location.pathname);

    const next = () => {
        if (currentIndex < paths.length - 1) {
            navigate(paths[currentIndex + 1]);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            navigate(paths[currentIndex - 1]);
        }
    };

    return (
        <motion.div
            drag
            dragMomentum={false}
            className="fixed bottom-6 right-6 z-[9999] p-2 
                 flex gap-3 shadow-xl 
                 bg-white/20 backdrop-blur-lg border border-white/20
                 rounded-2xl cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
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
