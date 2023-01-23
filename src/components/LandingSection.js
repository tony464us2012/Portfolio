import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align='center'>
      <Avatar name={greeting} size='2xl' src='https://i.pravatar.cc/150?img=7' />
      <Heading as='h3' size='md'>{greeting}</Heading>
      <Heading as='h1' id="bio1" size='2xl'>{bio1}</Heading>
      <Heading as='h1' size='2xl'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
