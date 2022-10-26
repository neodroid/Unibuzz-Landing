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
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import CommunityGuidelines from "./pages/Community-Guidelines"
import Privacy from "./pages/Privacy"
import Home from "./pages/Home"


export const App = () => (
  <Router>
  <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/Community-Guidelines" element = {<CommunityGuidelines/>} />
    <Route path = "/Privacy-and-Safety" element = {<Privacy/>} />
  </Routes>
  </Router>
)
