import { Card, Heading, Image, Text, VStack, Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        key={id}
        my={4}
        p={4}
        cursor="pointer"
        _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
        transition="transform 0.2s ease-in-out"
      >
        <HStack align="start">
          <Image
            boxSize="100px"
            objectFit="cover"
            src={`http://localhost:8000/${image}`}
            alt={`${title} cover`}
            mr={4}
            borderRadius="md"
          />
          <VStack align="start" spacing={1}>
            <Heading size="md">{title} ({year})</Heading>
            <Text fontWeight="bold">{author}</Text>
            <Text>
              <Box as="span" fontWeight="bold">Publisher: </Box>
              {publisher}
            </Text>
          </VStack>
        </HStack>
      </Card>
    </Link>
  );
}
