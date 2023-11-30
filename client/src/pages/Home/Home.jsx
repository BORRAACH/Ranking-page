import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import ButtonIncludeData from "./includeDada";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataAndSetData();
  }, []);

  return (
    <Container borderRadius={"lg"}>
      <ButtonIncludeData />
      <VStack>
        {data.map((item) => (
          <Box
            key={item.id}
            bg={useColorModeValue("blackAlpha.100", "black")}
            borderRadius={"lg"}
          >
            <Heading
              color={useColorModeValue("gray.600", "gray.300")}
              p={6}
              fontSize={"lg"}
            >
              {item.title}
            </Heading>
            <Image src={item.img} alt={item.title} minH={10} />
            <Box>
              <Text color={useColorModeValue("black", "gray.100")} p={6} pb={0}>
                {item.body}
              </Text>
              <Divider orientation="horizontal" my={6} />
              <Text fontSize={"lg"} p={6} pt={0}>
                {item.footer}
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Home;
