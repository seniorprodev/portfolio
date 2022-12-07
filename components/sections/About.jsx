import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Goran! I studied computer science at the University of
        Singapore Institute of Technology, and I&apos;m currently working at{" "}
        <Link href="https://www.simon.com/" isExternal>
          Simon Propery Group
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Front End Developer</strong>{" "}
        on the Platform Workflows team. Prior to that, I was at{" "}
        <Link href="https://www.delighteck.com/" isExternal>
          DELIGHTECK
        </Link>{" "}
        &{"  "}
        <Link href="https://www.itengine.rs/" isExternal>
          IT ENGINE
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Front End Developer</strong>.
      </Text>
      <Text>
        I enjoy creating scalable & elegant web/mobile applications that have a
        real world impact. I&apos;m always learning new technologies or studying
        - and recently became an{" "}
        <strong style={{ color: secondary }}>Senior NextJS Developer</strong>.
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.gif"
      alt="Goran Vujic"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/goran-vuja-855759246/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
