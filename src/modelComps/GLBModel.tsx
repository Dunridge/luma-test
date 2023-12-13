import { useGLTF, OrbitControls } from "@react-three/drei";

const GLBModel = () => {
    // TODO: change lambo-2 to lambo 
    const model = useGLTF('./lambo-2.glb');
    
    return (<>
        {/* TODO: make turn on every screen scroll  */}
        <OrbitControls enableRotate={true} rotation={undefined} autoRotate/>
        <mesh>
            <primitive object={model.scene}/>
        </mesh>
    </>)
}

export default GLBModel;

