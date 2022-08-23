function Hero() {
    return (
        <div className="hero relative h-screen w-screen px-12 py-6">
            <div className="introduction relative top-1/2 w-[76%] -translate-y-1/2">
                <p className="text-left">
                    <span className="block text-4xl">
                        <span>👋</span> <span>Hello! My name is Nathaniel.</span>
                    </span>
                    <span className="mt-20 block text-2xl">
                        I am a self-taught web-developer located in Seoul.
                        <br />I specialize in web development.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Hero;
