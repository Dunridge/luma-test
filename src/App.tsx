import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll, Environment, Scroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet
} from "@theatre/r3f";

import Sword from "./modelComps/GLBModel";
import GLBModel from "./modelComps/GLBModel";

function App() {
  const sheet = getProject('Model animation').sheet('Scene');

  return (
    <Canvas gl={{ useLegacyLights: false, preserveDrawingBuffer: true }}>
      <ScrollControls pages={10} damping={1} maxSpeed={0.1}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
        <Scroll html>
          <div style={{ background: 'blue' }}>
            <h1>Here's out H1</h1>
          </div>
          <div style={{ background: 'blue' }}>
            <h1>Here's out H1</h1>
          </div>
          <div style={{ background: 'blue' }}>
            <h1>Here's out H1</h1>
          </div>
          <div style={{ background: 'blue' }}>
            <h1>Here's out H1</h1>
          </div>
        </Scroll>
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
    {/* <Environment preset="forest" background /> */}
    {/* TODO: set your custom hdr background if you figure out why it's not showing */}
    {/* <Environment files='puresky.hdr'/> */}
    {/* <Environment files='src/assets/preset/puresky.hdr'/> */}
    <PerspectiveCamera theatreKey="Camera" makeDefault position={[1, 0, 0]} fov={90} near={0.1} far={70} />
    <ambientLight intensity={1} />
    <directionalLight intensity={3} />
    <GLBModel />
  </>);
}
