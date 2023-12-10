import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject, val } from "@theatre/core";
import {
  PerspectiveCamera,
  SheetProvider,
  useCurrentSheet
} from "@theatre/r3f";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GLBModel from "./modelComps/GLBModel";
import ScrollPageContainer from "./components/ScrollPageContainer";
import { Introduction } from "./components/Introduction";
import { Details } from "./components/Details";
import { Pricing } from "./components/Pricing";
import ContactUs from "./components/ContactUs";

// TODO: separate into components 
// TODO: add a model that's colored correctly 
function App() {
  const sheet = getProject('Model animation').sheet('Scene');

  return (
    <Canvas gl={{ useLegacyLights: false, preserveDrawingBuffer: true }}>
      <ScrollControls pages={4} damping={1}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
        <Scroll html>
          <ScrollPageContainer>
            <Introduction/>
          </ScrollPageContainer>
          <ScrollPageContainer>
            <Details/>
          </ScrollPageContainer>
          <ScrollPageContainer>
            <Pricing/>
          </ScrollPageContainer>
          <ScrollPageContainer>
            <ContactUs/>
            {/* <h1>Contact us form</h1>
            <Footer /> */}
          </ScrollPageContainer>
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
    <color attach='background' />
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
