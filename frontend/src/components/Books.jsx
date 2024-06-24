import { Box, Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card key={id} my={4} p={6} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" cursor="pointer">
        <VStack spacing={4} align="start">
          <Box>
            <Image borderRadius="md" boxSize="150px" objectFit="cover" src={`http://localhost:8000/${image}`} alt={`${title} cover`} />
          </Box>
          <Box>
            <Heading size="lg" mb={2}>
              {title} <Text as="span" color="gray.500" fontSize="md">({year})</Text>
            </Heading>
            <Text fontSize="md" color="gray.600">{author}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">
              <strong>Publisher:</strong> {publisher}
            </Text>
          </Box>
        </VStack>
      </Card>
    </Link>
  );
}
