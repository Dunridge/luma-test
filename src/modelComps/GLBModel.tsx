import { useGLTF, useAnimations } from "@react-three/drei";

const GLBModel = () => {
    // TODO: change lambo-2 to lambo 
    const model = useGLTF('./lambo-2.glb');
    
    return (<>
        <mesh>
            <primitive object={model.scene}/>
        </mesh>
    </>)
}

export default GLBModel;

