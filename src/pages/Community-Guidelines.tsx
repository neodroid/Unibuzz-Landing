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
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { Logo } from "./Logo"

export const CommunityGuidelines = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor={"#474747"} >



      <Grid minH= "100vh" p={10} justifyItems="center">
      <Center 
        backgroundColor={"#988FFF"}
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
      ><Heading as='h1' size='lg' color={"#222222"} > Community Guidelines</Heading></Center>
       
       <Box
       w={[
        '80vw', // 0-30em
        '80vw', // 30em-48em
        '80vw', // 48em-62em
        '70vw', // 62em+
      ]} 
      >
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        Welcome to Unibuzz. We are happy to provide you with a special forum where you may discuss 
        your ideas, experiences, and challenges as a college student. Our goal is to assist you in 
        settling into college life socially. We are dedicated to running a space where our deeds reflect
         our goals and objectives. We prepared the following community guidelines for guidance on how to
          interact with other users in the community and what you should anticipate from others.
        </Text>
        <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
          Do's
        </Heading>
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        • Use appropriate language in hive or in messages! <br/>
        • Share your stories, thoughts, and struggles in Hive or <br/>
        • Interact with other college students in Hive <br/>
        • Become friends with the people in this community! <br/>
        • Message someone if you want follow-up conversations! <br/>
        • Be kind to everybody in Hive or in messages   <br/>
        </Text>
        <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
          Dont's
        </Heading>
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        • Use inappropriate, harmful, and hateful language in hive or in messages! <br/>
        • Do hate speech, harrassment, bullying, discrimination or other targeted attacks. Personal attacks, 
        trolling and abuse will not be tolerated. This includes hatred toward vulnerable groups of people, 
        such as by race, sexual orientation, sex, gender identity, individuals with disabilities, and weight. <br/>
        • Sexually harrass someone. This refers to the Indonesian law regulating about sexual violence, “UU TPKS” <br/>
        • Glorify self-injury. Please seek professional help if you need it. <br/>
        • Spam or self-promote. <br/>
        • Speard false information. <br/>
        • Dox! Do not share private personal information. <br/>
        • Engage in illegal activites. <br/>
        • Use threats. <br/>
        </Text>
        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        The moderating staff puts a lot of effort into maintaining this Support Community for sharing stories and guidance, and we ask for your help. By selecting the "Report as Objectionable?" link in the bottom-right corner of a post, you can report any post or item you believe to be unsuitable. The moderators will examine each concern and take any necessary further action. Please contact our community moderators for more assistance with the Support Community by sending an email to unibuzz.app@gmail.com .
        </Text>

        <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
        How we moderate <br/>
Every community post is immediately visible. Before it goes live, we do not review community activities. Reactive moderation refers to the process where moderators monitor for inappropriate content while simultaneously relying on member feedback. You'll find Report buttons all around the app to inform us of that content. By moderating in this way, we can keep the community active every minute, ensuring that you have access to support when needed.
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

export default CommunityGuidelines;