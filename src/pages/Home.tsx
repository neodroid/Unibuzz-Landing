import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Image,
  Center,
  HStack
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Logo } from "../Logo"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

export const Home = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor={"#F9F9F9"}>
      <Grid minH="100vh" p={3} >
       
        <Center  p={10}><Box maxW={[
      '150', // 0-30em
      '350', // 30em-48em
      '350', // 48em-62em
      '400', // 62em+
    ]} h={"auto"}><Image src='title.png' alt='Dan Abramov' /></Box></Center>
        <Heading as='h1' size='lg' pb={5} color={"#2B2B2B"} > Anonymous Campus Community,</Heading>
        <Heading as='h1' size='lg' pb={5} color={"#2B2B2B"} > Coming real soon to your campus!</Heading>
        <VStack >
        
<Box > <Image maxW={[
      '250', // 0-30em
      '400', // 30em-48em
      '400', // 48em-62em
      '400', // 62em+
    ]} src='simulator.png' alt='Unibuzz' /></Box>
       
          
          <HStack>

          <Text
          color={"#2B2B2B"}
          >
          Made with ❤️ by
          </Text>
          <Link
            color={"#F2D96F"}
            // href="https://twitter.com/kevinahmad"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unibuzz
          </Link>

          </HStack>
          <Text
          color={"#2B2B2B"}
          >
          © 2022 Unibuzz.app
          </Text>
          
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)

export default Home;
