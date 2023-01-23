import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, SlideFade } from "@chakra-ui/react";
import { useEffect } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  let yprev = window.pageYOffset;
  
  const handleScroll = () => {
    const heading =  document.getElementById('heading')
    console.log('scroll event', window.scrollY)
    const offset = window.pageYOffset
    if (offset > yprev) {
      heading.style.transform = 'translateY(-200px)';
      console.log('going down')
    }else {
      heading.style.transform = 'translateY(0)';
      console.log('going up')
    }
    yprev = offset <= 0 ? 0 : offset;
}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false)
    return () => window.removeEventListener('scroll', handleScroll, false)
  })
  return (
    <SlideFade in={window.scrollY < 1000}  offsetY='-30px'> 

    <Box
      id="heading"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
     
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
           {socials.map(social => {
            return <Link href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></Link>
           })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick('projects')}>Projects</Link>
              <Link onClick={handleClick('contactme')}>Contact Me</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    </SlideFade>
  );
};
export default Header;
