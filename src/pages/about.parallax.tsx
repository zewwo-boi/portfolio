import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";
import {
    AnimatePresence,
    MotionValue,
    animate,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { GLTF } from "three-stdlib";

import Blob from "@/components/Party/Blob/Blob";
import fragmentShaderPink from "@/components/Party/Blob/pink.frag";
import Wave from "@/components/Party/Wave/Wave";
import waveFrag from "@/components/Party/Wave/wave.frag";

// TODO: replace with https://www.theatrejs.com

interface IScroll {
    ratioY?: number;
    scrollY?: MotionValue<number>;
}

interface IObserve extends IScroll {
    first: boolean;
    second: boolean;
    third: boolean;
    third1: boolean;
    third2: boolean;
}

// ! Right handed coordinates
//  https://codesandbox.io/p/sandbox/framer-motion-scroll-velocity-r1dy4u

type GLTFResult = GLTF & {
    nodes: {
        Circle004_Circle008_1: THREE.Mesh;
        Circle004_Circle008_1_1: THREE.Mesh;
        Circle004_Circle008_1_2: THREE.Mesh;
        Circle004_Circle008_1_3: THREE.Mesh;
        Circle004_Circle008_1_4: THREE.Mesh;
    };
    materials: {
        FF9800: THREE.MeshStandardMaterial;
        F06292: THREE.MeshStandardMaterial;
        ["455A64"]: THREE.MeshStandardMaterial;
        DD9944: THREE.MeshStandardMaterial;
        ["1A1A1A"]: THREE.MeshStandardMaterial;
    };
};

interface IPencilProps extends Partial<typeof motion3d.group.defaultProps> {
    opacity?: number;
}

export function Pencil({ opacity = 1, ...props }: IPencilProps) {
    let { nodes, materials } = useGLTF("/models/Pencil.glb") as GLTFResult;

    return (
        <motion3d.group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004_Circle008_1.geometry}
                material={materials.FF9800}
                material-transparent
                material-opacity={opacity}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004_Circle008_1_1.geometry}
                material={materials.F06292}
                material-transparent
                material-opacity={opacity}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004_Circle008_1_2.geometry}
                material={materials["455A64"]}
                material-transparent
                material-opacity={opacity}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004_Circle008_1_3.geometry}
                material={materials.DD9944}
                material-transparent
                material-opacity={opacity}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004_Circle008_1_4.geometry}
                material={materials["1A1A1A"]}
                material-transparent
                material-opacity={opacity}
            />
        </motion3d.group>
    );
}

type MathObject = GLTF & {
    nodes: {
        Cube: THREE.Mesh;
        Cube001?: THREE.Mesh;
        Cube002?: THREE.Mesh;
    };
    materials: {};
};

export function MathStuff({ opacity = 1, ...props }: IPencilProps) {
    const { nodes: plusNodes } = useGLTF("/models/Plus.glb") as MathObject;
    const { nodes: minusNodes } = useGLTF("/models/Minus.glb") as MathObject;
    const { nodes: multiplyNodes } = useGLTF("/models/Multiply.glb") as MathObject;
    const { nodes: divideNodes } = useGLTF("/models/Divide.glb") as MathObject;

    return (
        <motion3d.group {...props} dispose={null}>
            <mesh
                geometry={plusNodes.Cube.geometry}
                material-transparent
                material-opacity={opacity}
                position={[2, 5, 0]}
                scale={[1, 1, 0.1]}
                rotation={[0, 0, -Math.PI]}
            />
            <mesh
                geometry={minusNodes.Cube.geometry}
                material-transparent
                material-opacity={opacity}
                position={[-5, -4, 0]}
                scale={[0.3, 0.1, 1]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
            />
            <group position={[8, -5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={divideNodes.Cube.geometry}
                    material-transparent
                    material-opacity={opacity}
                    scale={[1.1, 0.1, 0.3]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={divideNodes.Cube001.geometry}
                    material-transparent
                    material-opacity={opacity}
                    position={[0, 0, 0.8]}
                    scale={[0.3, 0.1, 0.3]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={divideNodes.Cube002.geometry}
                    material-transparent
                    material-opacity={opacity}
                    position={[0, 0, -0.8]}
                    scale={[0.3, 0.1, 0.3]}
                />
            </group>
            <mesh
                geometry={multiplyNodes.Cube.geometry}
                material-transparent
                material-opacity={opacity}
                rotation={[Math.PI / 2, Math.PI / 4, 0]}
                scale={[1, 0.1, 1]}
                position={[-4, 5, 0]}
            />
        </motion3d.group>
    );
}

function Objects({ ratioY, scrollY, ...observes }: Partial<IObserve>) {
    const PencilUnit = useTransform(scrollY, [3.6, 5.6], [0, 1]);
    const [PencilOpacity, setPencilOpacity] = useState(0);

    const MathUnit = useTransform(scrollY, [5.6, 7], [0, 1]);
    const [MathOpacity, setMathOpacity] = useState(0);

    useEffect(() => {
        if ((observes.third1 && PencilOpacity == 1) || (!observes.third1 && PencilOpacity == 0))
            return;

        if (observes.third1) {
            animate(0, 1, {
                onUpdate: (val) => setPencilOpacity(val),
                duration: 1,
            });
        } else {
            animate(1, 0, {
                onUpdate: (val) => setPencilOpacity(val),
                duration: 1,
            });
        }
    }, [observes.third1]);

    useEffect(() => {
        if ((observes.third2 && MathOpacity == 1) || (!observes.third2 && MathOpacity == 0)) return;

        if (observes.third2) {
            animate(0, 1, {
                onUpdate: (val) => setMathOpacity(val),
                duration: 1,
            });
        } else {
            animate(1, 0, {
                onUpdate: (val) => setMathOpacity(val),
                duration: 1,
            });
        }
    }, [observes.third2]);

    return (
        <>
            <Blob
                name="1"
                fragment_shader={fragmentShaderPink}
                initial={{ x: -2, y: 0, z: 3.25 }}
                animate={observes.first ? {} : { x: -8, z: 8 }}
                transition={{ type: "spring", stiffness: 65, restDelta: 0.005 }}
            />
            <Wave
                name="2"
                fragment_shader={waveFrag}
                intensity={0.2}
                initial={{ x: 0, y: -4, z: 6 }}
                animate={observes.second ? { y: -2 } : {}}
                transition={{ type: "spring", stiffness: 45 }}
            />
            <Pencil
                name="3"
                position={new Vector3(0, 0, -8 * PencilUnit.get())}
                rotation-x={Math.PI / 2}
                rotation-y={PencilUnit.get() * 2 * Math.PI}
                scale={0.2}
                opacity={PencilOpacity}
            />
            <MathStuff name="4" opacity={MathOpacity} position={[0, 0, -12]} />
        </>
    );
}

/**
 * {section}[subsection (optional)]
 * eg. first1, first
 */
function Elements({ ratioY, scrollY }: IScroll) {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [third1, setThird1] = useState(false);
    const [third2, setThird2] = useState(false);

    useEffect(() => {
        if (ratioY <= 0.6) setFirst(true);
        else setFirst(false);

        if (1.0 <= ratioY && ratioY <= 2.6) setSecond(true);
        else setSecond(false);

        if (3.6 <= ratioY && ratioY <= 7) setThird(true);
        else setThird(false);

        if (3.6 <= ratioY && ratioY <= 5.6) setThird1(true);
        else setThird1(false);

        if (5.6 <= ratioY && ratioY <= 7) setThird2(true);
        else setThird2(false);
    }, [ratioY]);

    return (
        <>
            <div id="canvas" className="fixed -z-10 h-screen w-full">
                <Canvas camera={{ position: [0, 0, 8], fov: 80 }} dpr={[1, 2]}>
                    <ambientLight intensity={5} />
                    <Objects
                        ratioY={ratioY}
                        scrollY={scrollY}
                        first={first}
                        second={second}
                        third1={third1}
                        third2={third2}
                    />
                </Canvas>
            </div>
            <section className="intro h-[160vh] w-full">
                <motion.div
                    className="fixed top-[20vh] flex h-[60vh] w-[30vw] flex-col items-center justify-center text-5xl font-bold text-black"
                    initial={{ x: "20vw" }}
                    animate={first ? {} : { x: "-30vw" }}
                    transition={{ type: "spring", stiffness: 65, restDelta: 0.005 }}>
                    Hello
                </motion.div>
            </section>
            <section className="names h-[240vh]">
                <motion.div
                    className={classNames(
                        `fixed left-1/2 top-1/2 h-12 -translate-x-1/2 text-center text-5xl font-bold`,
                        (0.8 >= ratioY || ratioY >= 3) && "hidden"
                    )}
                    initial={{ opacity: 0 }}
                    animate={second ? { opacity: 1 } : {}}>
                    I am{" "}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={second ? { opacity: 1, transition: { delay: 1 } } : {}}>
                        @zewwo
                    </motion.span>
                </motion.div>
            </section>
            <section className="h-[400vh]">
                <motion.div
                    className={classNames(
                        `fixed bottom-[30vh] left-1/2 -translate-x-1/2 text-center text-4xl font-bold`,
                        (3.2 >= ratioY || ratioY >= 7.4) && "hidden"
                    )}
                    initial={{ opacity: 0 }}
                    animate={third ? { opacity: 1 } : {}}>
                    <motion.div>I am a</motion.div>
                    <AnimatePresence mode="wait">
                        {third1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 1 } }}
                                exit={{ opacity: 0 }}
                                key="student">
                                student
                            </motion.div>
                        )}
                        {third2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key="thinker">
                                thinker
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    );
}

export default function Parallax() {
    const { scrollY } = useScroll();
    const [ratioY, setRatioY] = useState(0);
    const motionRatioY = useMotionValue(ratioY);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setRatioY(latest / window.visualViewport.height);
        motionRatioY.set(ratioY, true);
    });

    return (
        <>
            <div id="parallax" className="h-auto w-full">
                <Elements ratioY={ratioY} scrollY={motionRatioY} />
            </div>
        </>
    );
}

useGLTF.preload("/models/Pencil.glb");
