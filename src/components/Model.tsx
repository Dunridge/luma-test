import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";

export function Model() {

    useEffect(() => {
    }, []); 

    return (
        <div className="model">
            <Canvas>
                <color attach='background' args={['lightblue']}/>
            </Canvas>
        </div>
    );
}
