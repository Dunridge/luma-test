import { useGLTF, useAnimations } from "@react-three/drei";

const GLBModel = () => {
    // TODO: configure the settings for inividual models here 
    const model = useGLTF('./mc_laren.glb');
    // const model = useGLTF('./mercedes.glb');

    return (<>
        <mesh>
            <primitive object={model.scene}/>
        </mesh>
    </>)
}

export default GLBModel;

