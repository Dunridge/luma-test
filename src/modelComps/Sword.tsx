import { useGLTF, useAnimations } from "@react-three/drei";

const Sword = () => {
    const model = useGLTF('./frostbite.glb');

    return (<>

        <mesh>
            <primitive object={model.scene}/>
        </mesh>
    </>)
}

export default Sword;

