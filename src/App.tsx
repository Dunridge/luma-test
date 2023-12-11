import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import {
  SheetProvider
} from "@theatre/r3f";
import ContactUs from "./components/ContactUs";
import { Details } from "./components/Details";
import { Introduction } from "./components/Introduction";
import { Pricing } from "./components/Pricing";
import ScrollPageContainer from "./components/ScrollPageContainer";
import { Scene } from "./modelComps/Scene";
import lamboAnimdationData from "./animations/lambo-animation.json";
import { ContentContainer } from "./components/ContentContainer";

function App() {
  const sheet = getProject('Model animation', { state: lamboAnimdationData }).sheet('Scene');

  // TODO: figure out how to give backgrounds to these
  const pageSections: JSX.Element[] = [
    <Introduction />,
    <Details />,
    <Pricing />,
    <ContactUs />
  ];

  return (
    <Canvas gl={{ useLegacyLights: false, preserveDrawingBuffer: true }}>
      <ScrollControls pages={4} damping={1}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
        <Scroll html>
          {
            pageSections.map(section => (
              <ScrollPageContainer>
                <ContentContainer>
                  {section}
                </ContentContainer>
              </ScrollPageContainer>))
          }
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
