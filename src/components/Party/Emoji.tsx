import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const emojis = ["✨", "💖", "💯", "❤️‍🔥", "🔥", "🎉", "🎊", "🎁", "💎"];

function FloatingEmoji({ emoji }) {
    const radius = 32;

    const [angle, setAngle] = useState(Math.random() * Math.PI * 2);
    const [x, setX] = useState(Math.cos(angle) * radius);
    const [y, setY] = useState(Math.sin(angle) * radius);

    useEffect(() => {
        setAngle(Math.random() * Math.PI * 2);
    }, [emoji]);

    return (
        <motion.div
            initial={{ opacity: 0, x: "0", y: "0" }}
            animate={{
                rotate: [0, 360],
                scale: [0.6, 1, 0.6],
                opacity: 1,
                x,
                y,
                transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                },
            }}
            className="absolute m-auto">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                    },
                }}>
                {emoji}
            </motion.span>
        </motion.div>
    );
}

export default function Emoji() {
    const [currentEmoji, switchEmoji] = useState("");
    const span = useRef(); // For some reason if this doesn't exist, it doesn't work

    useEffect(() => {
        switchEmoji(emojis.at(Math.floor(Math.random() * emojis.length)));

        const interval = setInterval(() => {
            switchEmoji(emojis.at(Math.floor(Math.random() * emojis.length)));
        }, 5000);
    }, []);

    return <FloatingEmoji emoji={currentEmoji} key={new Date().getTime()} />;
}
