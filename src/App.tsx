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
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor={"#EBF2FE"}>
      <Grid minH="100vh" p={3} >
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
       
        <Center  p={10}><Box maxW={[
      '150', // 0-30em
      '350', // 30em-48em
      '350', // 48em-62em
      '400', // 62em+
    ]} h={"auto"}><Image src='title.png' alt='Dan Abramov' /></Box></Center>
        <Heading as='h1' size='lg' pb={5} color={"#696969"} > Ethereum wallet tracker at your home screen!</Heading>
        <VStack >
        <Link
            color="transparent"
            href="https://apps.apple.com/id/app/widgeth-io/id1622378453"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Center  p={5}><Box maxW={[
      '200', // 0-30em
      '350', // 30em-48em
      '350', // 48em-62em
      '350', // 62em+
    ]}><Image src='appstore.png' alt='Dan Abramov' /></Box></Center>
          </Link>
        
<Box > <Image maxW={[
      '250', // 0-30em
      '400', // 30em-48em
      '400', // 48em-62em
      '400', // 62em+
    ]} src='simulator.png' alt='Dan Abramov' /></Box>
       
          
          <HStack>

          <Text>
          Made with ❤️ by
          </Text>
          <Link
            color="teal.500"
            href="https://twitter.com/kevinahmad"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kevin
          </Link>

          </HStack>
          <Text>
          © 2022 Kevin Ahmad
          </Text>
          
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
