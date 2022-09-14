import { useState } from "react";

import {
  PCardContainer,
  PCard,
  PBlock,
  PInLineContainer,
  PLine,
  KhatraPlaceholder,
  useTheme,
} from "../lib";
import {
  ListMediaPlaceholder,
  ImagePlaceholder,
} from "../lib/components/builtinPlaceholders";

const PlaceHolderDemo = () => {
  const { darkTheme, handleTheme } = useTheme();
  const [waveAnimation, setWaveAnimation] = useState(false);
  const [glowAnimation, setGlowAnimation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const activateWave = () => {
    setWaveAnimation(true);
    setGlowAnimation(false);
  };
  const activateGlow = () => {
    setGlowAnimation(true);
    setWaveAnimation(false);
  };
  const clearAnimation = () => {
    setGlowAnimation(false);
    setWaveAnimation(false);
  };
  return (
    <>
      <div style={{ marginLeft: "5rem", marginRight: "5rem" }}>
        <h1 style={{ textAlign: "center" }}>"React Khatra Placeholder Test"</h1>
        <button
          onClick={() => setIsLoading(!isLoading)}
          style={{
            padding: "0.25rem 0.5rem",
            border: "none",
            borderRadius: "5px",
            margin: "2rem",
            cursor: "pointer",
            backgroundColor: "white",
            marginTop: "1rem",
          }}
        >
          Toggle loading
        </button>
        <button
          onClick={() => handleTheme(!darkTheme)}
          style={{
            padding: "0.25rem 0.5rem",
            border: "none",
            borderRadius: "5px",
            margin: "2rem",
            cursor: "pointer",
            backgroundColor: "white",
            marginTop: "1rem",
          }}
        >
          Toggle Theme
        </button>
        <button
          onClick={() => activateWave()}
          style={{
            padding: "0.25rem 0.5rem",
            border: "none",
            borderRadius: "5px",
            margin: "2rem",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          Wave Animation
        </button>
        <button
          onClick={() => activateGlow()}
          style={{
            padding: "0.25rem 0.5rem",
            border: "none",
            borderRadius: "5px",
            margin: "2rem",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          Glow Animation
        </button>
        <button
          onClick={() => clearAnimation()}
          style={{
            padding: "0.25rem 0.5rem",
            border: "none",
            borderRadius: "5px",
            margin: "2rem",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          Clear Animation
        </button>
        <KhatraPlaceholder
          isLoading={isLoading}
          style={{
            backgroundColor: "orange",
            color: "brown",
            padding: "1rem",
            width: "50%",
            borderRadius: "0.75rem",
          }}
          animateGlow={glowAnimation}
          animateWave={waveAnimation}
          type={"ProductPlaceholder"}
        >
          <div>Content without delay</div>
          <div>Content without delay</div>
        </KhatraPlaceholder>
        <br />
        <KhatraPlaceholder
          isLoading={isLoading}
          type={"ParagraphPlaceholder"}
          delay={300}
          animateGlow={glowAnimation}
          animateWave={waveAnimation}
          style={{
            backgroundColor: "lightgreen",
            color: "green",
            padding: "1rem",
            width: "50%",
            borderRadius: "0.75rem",
          }}
        >
          <div>Content with delay</div>
          <div>Content with delay</div>
        </KhatraPlaceholder>
        <br />
        <KhatraPlaceholder
          isLoading={isLoading}
          customPlaceholder={<ListMediaPlaceholder />}
          delay={300}
          animateGlow={glowAnimation}
          animateWave={waveAnimation}
          style={{
            backgroundColor: "orange",
            color: "brown",
            padding: "1rem",
            width: "50%",
            borderRadius: "0.75rem",
          }}
        >
          <div>Content with delay</div>
          <div>Content with delay</div>
        </KhatraPlaceholder>
        <br />
        <KhatraPlaceholder
          isLoading={isLoading}
          customPlaceholder={<ImagePlaceholder />}
          delay={300}
          animateGlow={glowAnimation}
          animateWave={waveAnimation}
          style={{
            backgroundColor: "lightgreen",
            color: "green",
            padding: "1rem",
            width: "50%",
            borderRadius: "0.75rem",
          }}
        >
          <div>Content with delay</div>
          <div>Content with delay</div>
        </KhatraPlaceholder>
        <PCardContainer>
          <div>
            <h2>Profile Card</h2>
            <PCard
              w="400px"
              h="500px"
              br="12px"
              animateWave={waveAnimation}
              animateGlow={glowAnimation}
            >
              <PBlock w="100%" h="150px" br="12px" align="center" />
              <PInLineContainer justify="center">
                <PBlock
                  w="100px"
                  h="100px"
                  rounded
                  align="center"
                  style={{
                    position: "relative",
                    top: "-5rem",
                    marginBottom: "-5rem",
                    border: ` 2px solid ${darkTheme ? "grey" : "white"}`,
                  }}
                />
                <PBlock w="75%" h="1rem" align="center" />
                <PBlock w="60%" h="0.8rem" align="center" />
                <PBlock w="60%" h="0.8rem" align="center" />
              </PInLineContainer>
              <PInLineContainer justify="center">
                <PBlock w="40%" h="2rem" />
                <PBlock w="40%" h="2rem" />
                <PBlock w="10%" h="2rem" />
              </PInLineContainer>
              <PInLineContainer gap="0.8rem" justify="center">
                <PLine w="20%" h="100px" />
                <PLine w="20%" h="100px" />
                <PLine w="20%" h="100px" />
                <PLine w="20%" h="100px" />
              </PInLineContainer>
            </PCard>
          </div>
          <div>
            <h2>Product Card</h2>
            <PCard
              w="320px"
              h="400px"
              animateWave={waveAnimation}
              animateGlow={glowAnimation}
            >
              <PBlock h="50%" br="12px" />
              <PInLineContainer justify="space-between">
                <PBlock w="30%" h="1.5rem" />
                <PBlock w="20%" h="1.5rem" />
              </PInLineContainer>
              <PInLineContainer gap="0.3rem" br="3px">
                <PLine h="0.8rem" />
                <PLine w="70%" h="0.8rem" />
                <PLine w="80%" h="0.8rem" />
              </PInLineContainer>
              <PBlock w="30%" h="1.8rem" />
            </PCard>
          </div>

          <div>
            <h2>ListCard</h2>
            <PCard
              w="400px"
              h="400px"
              animateWave={waveAnimation}
              animateGlow={glowAnimation}
            >
              <PInLineContainer gap="1rem">
                <PBlock w="80px" h="80px" br="12px" />
                <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
                  <PLine w="100%" h="0.8rem" />
                  <PLine w="60%" h="0.8rem" />
                </PInLineContainer>
              </PInLineContainer>
              <PInLineContainer gap="1rem">
                <PBlock w="80px" h="80px" br="12px" />
                <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
                  <PLine w="100%" h="0.8rem" />
                  <PLine w="60%" h="0.8rem" />
                </PInLineContainer>
              </PInLineContainer>
              <PInLineContainer gap="1rem">
                <PBlock w="80px" h="80px" br="12px" />
                <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
                  <PLine w="100%" h="0.8rem" />
                  <PLine w="60%" h="0.8rem" />
                </PInLineContainer>
              </PInLineContainer>
              <PInLineContainer gap="1rem">
                <PBlock w="80px" h="80px" br="12px" />
                <PInLineContainer w="60%" style={{ marginTop: "0.5rem" }}>
                  <PLine w="100%" h="0.8rem" />
                  <PLine w="60%" h="0.8rem" />
                </PInLineContainer>
              </PInLineContainer>
            </PCard>
          </div>

          <div>
            <h2> Mobile View</h2>
            <PCard
              h="600px"
              animateWave={waveAnimation}
              animateGlow={glowAnimation}
            >
              <PInLineContainer justify="space-between">
                <PBlock w="40%" h="2rem" />
                <PInLineContainer w="20%">
                  <PBlock w="2rem" h="2rem" rounded />
                  <PBlock w="2rem" h="2rem" rounded />
                </PInLineContainer>
              </PInLineContainer>
              <PInLineContainer justify="space-between">
                <PBlock w="4rem" h="2rem" />
                <PBlock w="4rem" h="2rem" />
                <PBlock w="4rem" h="2rem" />
                <PBlock w="4rem" h="2rem" />
                <PBlock w="4rem" h="2rem" />
              </PInLineContainer>
              <PInLineContainer>
                <PBlock w="2rem" h="2rem" rounded />
                <PLine w="85%" h="2rem" br="18px" />
              </PInLineContainer>
              <PInLineContainer gap="0.8rem">
                <PLine w="22%" h="120px" />
                <PLine w="22%" h="120px" />
                <PLine w="22%" h="120px" />
                <PLine w="22%" h="120px" />
              </PInLineContainer>
              <PInLineContainer>
                <PBlock w="2rem" h="2rem" rounded />
                <PInLineContainer w="50%">
                  <PLine w="60%" h="0.8rem" br="3px" />
                  <PLine w="40%" h="0.5rem" br="3px" />
                  <PBlock w="0.5rem" h="0.5rem" rounded />
                </PInLineContainer>
                <PBlock h="200px" />
              </PInLineContainer>
            </PCard>
          </div>

          <div>
            <h2>DetailView Card</h2>
            <PCard
              w="800px"
              h="400px"
              gap="1rem"
              animateWave={waveAnimation}
              animateGlow={glowAnimation}
            >
              <PBlock h="100%" br="12px" />
              <PInLineContainer justify="space-between">
                <PBlock w="50%" h="3rem" />
                <PInLineContainer w="30%">
                  <PBlock w="3rem" h="3rem" rounded />
                  <PBlock w="3rem" h="3rem" rounded />
                  <PBlock w="3rem" h="3rem" rounded />
                  <PBlock w="3rem" h="3rem" rounded />
                </PInLineContainer>
              </PInLineContainer>
              <PInLineContainer gap="0.8rem" br="3px">
                <PLine h="1rem" />
                <PLine w="70%" h="1rem" />
                <PLine w="80%" h="1rem" />
              </PInLineContainer>
            </PCard>
          </div>

          <div>
            <h2>Description Card</h2>
            <PCard
              w="400px"
              h="400px"
              animateWave={waveAnimation}
              animateGlow={glowAnimation}
            >
              <PBlock h="50%" br="8px" />
              <PInLineContainer gap="0.5rem" br="3px">
                <PLine h="0.8rem" />
                <PLine w="70%" h="0.8rem" />
                <PLine w="80%" h="0.8rem" />
              </PInLineContainer>
              <PInLineContainer rows={3} rowsHeight="0.8rem" />
              <PBlock w="30%" h="1.8rem" br="3px" />
            </PCard>
          </div>
        </PCardContainer>
      </div>
    </>
  );
};

export default PlaceHolderDemo;
