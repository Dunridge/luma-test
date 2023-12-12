import { Environment, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import {
    PerspectiveCamera,
    useCurrentSheet
} from "@theatre/r3f";
import GLBModel from "./GLBModel";
import React, { useEffect, useRef } from "react";
import { MathUtils } from "three";

export const Scene = () => {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const { scene, nodes, animations } = useGLTF("/lambo-2.glb");

    const initialRotation = { x: 0, y: 0, z: 0 };
    const currentRotation = useRef(initialRotation);

    const updateRotation = () => {
        // Adjust the rotation based on scroll offset
        currentRotation.current.y = scroll.offset * Math.PI * 2;
    };

    useEffect(() => {
        updateRotation();
        console.log('scroll.offset', scroll.offset);
    }, [scroll.offset]);

    useFrame(() => {
        //@ts-ignore
        const sequenceLength = val(sheet.sequence.pointer.length);
        //@ts-ignore
        sheet.sequence.position = scroll.offset * sequenceLength;

        scene.rotation.y = MathUtils.lerp(
            scene.rotation.y,
            currentRotation.current.y,
            0.1
          );
    })

    return (<>
        <color attach='background' />
        <Environment files='puresky.hdr' background />
        <PerspectiveCamera theatreKey="Camera" makeDefault position={[2, 0, 0]} fov={90} near={0.1} far={70} />
        <ambientLight intensity={10} />
        <directionalLight intensity={3} />
        <GLBModel />
    </>);
}
