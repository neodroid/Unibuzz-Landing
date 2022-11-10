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
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import CommunityGuidelines from "./pages/Community-Guidelines"
import Privacy from "./pages/Privacy"
import SnK from "./pages/Syarat-dan-Ketentuan"
import Home from "./pages/Home"
import Kontak from "./pages/Hubungi-Kami"
import Panduan from "./pages/Panduan-Komunitas"
import Privasi from "./pages/Privasi-dan-Keamanan"

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Community-Guidelines" element={<CommunityGuidelines />} />
      <Route path="/Privacy-and-Safety" element={<Privacy />} />
      <Route path="/Syarat-dan-Ketentuan" element={<SnK />} />
      <Route path="/Hubungi-Kami" element={<Kontak />} />
      <Route path="/Panduan-Komunitas" element={<Panduan />} />
      <Route path="/Privasi-dan-Keamanan" element={<Privasi />} />
    </Routes>
  </Router>
)
