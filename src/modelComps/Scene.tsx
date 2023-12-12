import { Environment, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import {
    PerspectiveCamera,
    useCurrentSheet
} from "@theatre/r3f";
import GLBModel from "./GLBModel";

export const Scene = () => {
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        //@ts-ignore
        const sequenceLength = val(sheet.sequence.pointer.length);
        //@ts-ignore
        sheet.sequence.position = scroll.offset * sequenceLength;

    })

    return (<>
        <color attach='background' />
        <Environment files='puresky.hdr' background/>
        <PerspectiveCamera theatreKey="Camera" makeDefault position={[2, 0, 0]} fov={90} near={0.1} far={70} />
        <ambientLight intensity={10} />
        <directionalLight intensity={3} />
        <GLBModel />
    </>);
}
