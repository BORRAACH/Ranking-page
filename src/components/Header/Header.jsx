import {
  Container,
  HStack,
  ListItem,
  StackDivider,
  UnorderedList,
} from "@chakra-ui/react";
import ColorModeButton from "./setColorModeButton";

const Header = () => {
  return (
    <Container p={8} pl={20} pr={20} minW={"100%"}>
      <UnorderedList
        listStyleType={"none"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <HStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
          <ListItem>Exemple</ListItem>
          <ListItem>Exemple</ListItem>
        </HStack>
        <ListItem>
          <ColorModeButton />
        </ListItem>
      </UnorderedList>
    </Container>
  );
};

export default Header;
