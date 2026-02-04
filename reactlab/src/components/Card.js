import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      spacing={0}
      align="stretch"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" />
      <VStack p={6} spacing={4} align="flex-start">
        <Heading as="h3" size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
        <HStack spacing={2} color="gray.800">
          <Text fontSize="sm" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
