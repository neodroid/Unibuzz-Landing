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

export const PrivasiKeamanan = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" backgroundColor={"#474747"} >
      <Grid minH="100vh" p={10} justifyItems="center">
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
          borderRadius={25}
        ><Heading as='h1' size='md' color={"#222222"} >Privasi dan Keamanan</Heading></Center>

        <Box
          w={[
            '80vw', // 0-30em
            '80vw', // 30em-48em
            '80vw', // 48em-62em
            '70vw', // 62em+
          ]}
        >
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
            Selamat datang di Unibuzz.  Kami berharap untuk bisa menjaga dan melindungi komunitas ini menjadi komunitas yang aman dan suportif dimana kamu dapat untuk berbagi ide, pengalaman, dan informasi kamu sebagai mahasiswa.
            <br /><br />
            Dengan harapan tersebut, kami menuliskan Kebijakan Privasi untuk memastikan kamu paham dan mengetahui cara untuk tetap aman sehingga kamu dapat mengekspresikan dirimu secara bebas.         </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
            • Informasi yang kami gunakan  <br />
            Untuk menggunakan aplikasi kami, kamu harus memiliki akun. Dalam membuat akun kamu harus menyediakan beberapa informasi kepada kami, termasuk email universitas, nama samaran, dan kata sandi.        </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
            • Keamanan Akun<br />
            Unibuzz adalah komunitas eksklusif dimana kamu hanya dapat membuat akun jika kamu memiliki email universitas, selain itu kami juga memverifikasi email kamu untuk memastikan autentikasi email tersebut.
            <br /><br />
            Kami menyebut aplikasi ini komunitas eksklusif karena kami hanya mempertemukan kamu dengan pengguna yang berada di universitas yang sama denganmu sehingga terbentuk perasaan familiaritas dan relatabilitas.
          </Text>

          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>

            • Alat Keamanan<br />
            Koneten Unibuzz, termasuk informasi profilmu (nama samaran dan foto profil), dapat dilihat oleh public yang di dalam aplikasi ini adalah teman-teman komunitasmu.   <br />
            Dengan begitu, Unibuzz menjagaga kemanan akunmu dari perilaku atau pelecehan yang tidak diinginkan.          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5} pl={5}>
            a. Memblokir akun
          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={0} pl={10}>
            Ketika kamu memblokir seseorang, mereka tidak dapat melihat profil dan kontenmu. Orang lain tidak dinotifikasi ketika kamu memblokir mereka.          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5} pl={5}>
            b. Melaporkan
          </Text>
          <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={0} pl={10}>
            Jika kamu melihat sesuatu yang tidak sesuai dengan Community Guidelines kami atau bersifat menyerangmy, silakan laporkan. Tim Unibuzz akan mengkaji dan melakukan aksi. Kamu dapat melakukan aktivitas ini di Hive dan Chat.          </Text>

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

export default PrivasiKeamanan;