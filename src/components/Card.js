import { Box, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <Box bg="whitesmoke" color='black' borderRadius='lg'>
      <VStack>
        <Image src={imageSrc} objectFit="cover" borderRadius='lg' alt="Pete"/>
        <Box p='6'>
          <Heading as='h5' size='md'>{title}</Heading>
          <Text className="text">{description}</Text>
          <Link>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
        </Box>
      </VStack>
    </Box>
  )
};

export default Card;
