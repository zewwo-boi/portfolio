import {motion} from "framer-motion";

// TODO: Add animation to waving hand emoji

function Hero() {
    return (
        <div className="hero relative h-screen w-screen px-12 py-6">
            <div className="introduction relative top-1/2 w-[76%] -translate-y-1/2">
                <p className="text-left">
                    <motion.span
                        className="block text-4xl"
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        initial={{ y: "105%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}>
                        <span>👋</span> <span>Hello! My name is Nathaniel.</span>
                    </motion.span>
                    <motion.span
                        className="mt-20 block text-2xl"
                        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        initial={{ y: "-55%", opacity: 0 }}
                        animate={{ y: "-100%", opacity: 1 }}>
                        I am a self-taught web-developer located in Seoul.
                        <br />I specialize in web development.
                    </motion.span>
                </p>
            </div>
        </div>
    );
}

export default Hero;
