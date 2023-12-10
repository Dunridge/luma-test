import { useGLTF, useAnimations } from "@react-three/drei";

const GLBModel = () => {
    const model = useGLTF('./mc_laren.glb');

    return (<>
        <mesh>
            <primitive object={model.scene}/>
        </mesh>
    </>)
}

export default GLBModel;

