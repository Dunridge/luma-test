import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll, Environment } from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet
} from "@theatre/r3f";

import Sword from "./modelComps/Sword";

function App() {
  const sheet = getProject('Frostbit animation').sheet('Scene');

  return (
    <Canvas gl={{ useLegacyLights: false, preserveDrawingBuffer: true }}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene/>
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
}

export default App;

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    //@ts-ignore
    const sequenceLength = val(sheet.sequence.pointer.length);
    //@ts-ignore
    sheet.sequence.position = scroll.offset * sequenceLength;

  })

  return (<>
    <color attach='background' args={['lightblue']} />
    <Environment preset="forest" background />
    {/* TODO: set your custom hdr background if you figure out why it's not showing */}
    {/* <Environment files='puresky.hdr'/> */}
    <PerspectiveCamera theatreKey="Camera" makeDefault position={[0,0,0]} fov={90} near={0.1} far={70} />
    <ambientLight intensity={1} />
    <directionalLight intensity={3} />
    <Sword />
  </>);
}
