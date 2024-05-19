import React, { useState } from "react";
import { Container, VStack, Input, HStack, SimpleGrid, Box, Text, useColorModeValue, IconButton, CloseButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleAddNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Note Keeper
        </Text>
        <HStack>
          <Input placeholder="Add a new note..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(event) => event.key === "Enter" && handleAddNote()} />
          <IconButton icon={<FaPlus />} onClick={handleAddNote} aria-label="Add note" colorScheme="blue" />
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="full">
          {notes.map((note, index) => (
            <Box p={4} bg={bg} rounded="md" shadow="md" key={index} position="relative">
              <Text>{note}</Text>
              <CloseButton position="absolute" right="4px" top="4px" onClick={() => handleDeleteNote(index)} />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
