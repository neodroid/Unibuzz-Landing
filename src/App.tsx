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
    <Box textAlign="center" fontSize="xl" backgroundColor={"#EBF2FE"} width={"auto"}>
      <Grid minH="100vh" p={3}>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
       
        <Center  p={10}><Box boxSize="sm" h={"auto"}><Image src='title.png' alt='Dan Abramov' /></Box></Center>
        
        <Heading as='h1' size='lg' pb={5} color={"#696969"} > Ethereum wallet tracker at your home screen!</Heading>
        <VStack >
        <Link
            color="transparent"
            href="https://apps.apple.com/id/app/widgeth-io/id1622378453"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Center  p={10}><Box boxSize="sm" h={"auto"}><Image src='appstore.png' alt='Dan Abramov' /></Box></Center>
          </Link>
        
<Box > <Image maxH={900} src='simulator.png' alt='Dan Abramov' /></Box>
       
          
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
