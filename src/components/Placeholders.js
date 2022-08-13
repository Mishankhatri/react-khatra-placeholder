import "./assets/placeholders.css";
import PCard from "./PCard";
import PCardContainer from "./PCardContainer";
import PLine from "./PLine";
import PBlock from "./PBlock";
import PInLineContainer from "./PInlineContainer";

const PlaceholderTest = () => {
  return (
    <>
      <PCardContainer>
        {/* ProfileCard */}
        <PCard w="400px" h="500px" br="12px" animateWave>
          <PBlock w="100%" h="150px" br="12px" align="center" />
          <PInLineContainer align="center">
            <PBlock
              w="100px"
              h="100px"
              rounded
              align="center"
              style={{
                position: "relative",
                top: "-5rem",
                marginBottom: "-5rem",
                border: "2px solid grey",
              }}
            />
            <PBlock w="75%" h="1rem" align="center" />
            <PBlock w="60%" h="0.8rem" align="center" />
            <PBlock w="60%" h="0.8rem" align="center" />
          </PInLineContainer>
          <PInLineContainer align="center">
            <PBlock w="40%" h="2rem" />
            <PBlock w="40%" h="2rem" />
            <PBlock w="10%" h="2rem" />
          </PInLineContainer>
          <PInLineContainer gap="0.8rem" align="center">
            <PLine w="20%" h="100px" />
            <PLine w="20%" h="100px" />
            <PLine w="20%" h="100px" />
            <PLine w="20%" h="100px" />
          </PInLineContainer>
        </PCard>
        {/* ProductCard */}
        <PCard w="320px" h="400px" animateWave>
          <PBlock h="50%" br="12px" />
          <PInLineContainer align="space-between">
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
        {/* ListCard */}
        <PCard w="400px" h="400px" animateGlow>
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
        {/* MobileCard */}
        <PCard w="400px" h="720px" animateWave>
          <PInLineContainer align="space-between">
            <PBlock w="40%" h="2rem" />
            <PInLineContainer w="20%">
              <PBlock w="2rem" h="2rem" rounded />
              <PBlock w="2rem" h="2rem" rounded />
            </PInLineContainer>
          </PInLineContainer>

          <PInLineContainer align="space-between">
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
            <PBlock h="300px" />
          </PInLineContainer>
        </PCard>
        {/* DetailCard */}
        <PCard w="800px" h="400px" gap="1rem" animateGlow>
          <PBlock h="100%" br="12px" />
          <PInLineContainer align="space-between">
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
        {/* DescriptionCard */}
        <PCard w="400px" h="400px" animateGlow>
          <PBlock h="50%" br="8px" />
          <PInLineContainer gap="0.5rem" br="3px">
            <PLine h="0.8rem" />
            <PLine w="70%" h="0.8rem" />
            <PLine w="80%" h="0.8rem" />
          </PInLineContainer>
          <PBlock w="30%" h="1.8rem" br="3px" />
        </PCard>
      </PCardContainer>
    </>
  );
};

export default PlaceholderTest;
