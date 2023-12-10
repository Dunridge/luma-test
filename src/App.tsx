import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sword from "./modelComps/Sword";

function App() {
  
  return (
    <Canvas>
      <color attach='background' args={['lightblue']} />
      <OrbitControls/>
      <ambientLight intensity={1}/>
      <Sword/>
    </Canvas>
  );
}

export default App;
