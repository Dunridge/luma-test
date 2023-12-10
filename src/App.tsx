import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

function App() {

  useEffect(() => {
  }, []); 
  
  return (
    <Canvas>
      <color attach='background' args={['lightblue']} />
    </Canvas>
  );
}

export default App;
