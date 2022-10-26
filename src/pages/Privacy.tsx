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

export const Privacy = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor={"#474747"} >
      <Grid minH= "100vh" p={10} justifyItems="center">
      <Center 
        backgroundColor={"#8FC9FF"}
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
        borderRadius = {25}
      ><Heading as='h1' size='lg' color={"#222222"} >Privacy and Safety</Heading></Center>
       
       <Box
       w={[
        '80vw', // 0-30em
        '80vw', // 30em-48em
        '80vw', // 48em-62em
        '70vw', // 62em+
      ]} 
      >
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        Welcome to Unibuzz. We want to protect our community by being a safe and supportive place where you may discuss your ideas, experiences, and challenges as a college student. 
<br/><br/>
With that in mind, we’ve written our Privacy Policy to ensure you understand and know how to stay safe so you can freely express yourself. 
        </Text>
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        • Information we collect <br/>
To use our application, you need to have an account. To create an account, you need to provide us with certain information,  including a university email, pseudo name, and password.
        </Text>
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        • Account Security <br/>
Unibuzz is an exclusive community where you can only create an account if you have  university email, beside that we also take step to verify your email to prove the authentication of the email. 
<br/><br/>

We called this an exclusive community because we only brings you together with user who are in the same university as you, so that the sense of familiarity and relatability can be estabilish. 

         </Text>

        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
       
        • Safety Tools <br/>
Unibuzz content, including your profile information (pseudo name and profile picture), is available for viewing by the public in the unibuzz case by your university friends.  
Consequently, Unibuzz enables you to keep your account safe from unwanted behavior and harassment. 
          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5} pl={5}>
          a. Block Account 
          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={0} pl={10}>
          When you block someone, they won't be able to see your profile and post. People aren't notified when you block them.  
          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5} pl={5}>
          b. Report
          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={0} pl={10}>
          If you find something against our community guidelines or offensive to you, report it. The unibuzz team will review it and take action. You can do this activity on the Hive and Message pages. 
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
            target="_blank"
            rel="noopener noreferrer"
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

export default Privacy;