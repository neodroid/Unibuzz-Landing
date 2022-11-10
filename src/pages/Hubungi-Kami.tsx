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
    HStack,
    Flex
} from "@chakra-ui/react";

export const HubungiKami = () => (
    <ChakraProvider theme={theme}>
        <Box minH="100vh" textAlign="center" fontSize="xl" backgroundColor={"#474747"} >
            <Grid p={10} justifyItems="center">
                <Center
                    backgroundColor={"#FFEA8F"}
                    w={[
                        '80vw', // 0-30em
                        '80vw', // 30em-48em
                        '80vw', // 48em-62em
                        '70vw', // 62em+
                    ]}
                    minH={[
                        '40px', // 0-30em
                        '60px', // 30em-48em
                        '80px', // 48em-62em
                        '80px', // 62em+
                    ]}
                    borderRadius={25}
                ><Heading as='h1' size='md' color={"#222222"} >Hubungi Kami</Heading></Center>

                <Box
                    w={[
                        '80vw', // 0-30em
                        '80vw', // 30em-48em
                        '80vw', // 48em-62em
                        '70vw', // 62em+
                    ]}
                >
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Hubungi kami di:
                    </Heading>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                    Email
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    unibuzz.app@gmail.com
                    </Text>
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={4}>
                    Instagram
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    @unibuzz.app
                    </Text>
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={4}>
                    Linkedin
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    unibuzz.app
                    </Text>
                </Box>

                {/* FOOTER */}
                <VStack pt={20}>
                    <HStack>

                        <Text
                            color={"#F9F9F9"}
                        >
                            Made with ❤️ by
                        </Text>
                        <Link
                            color={"#F2D96F"}
                            fontSize="2xl"
                            href="/"
                        >
                            Unibuzz
                        </Link>

                    </HStack>
                    <Text
                        color={"#F9F9F9"}
                    >
                        © 2022 Unibuzz.app
                    </Text>

                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
)

export default HubungiKami;