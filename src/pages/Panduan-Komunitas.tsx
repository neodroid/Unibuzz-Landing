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
} from "@chakra-ui/react";

export const CommunityGuidelines = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl" backgroundColor={"#474747"} >
            <Grid minH="100vh" p={10} justifyItems="center">
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
                    borderRadius={25}
                ><Heading as='h1' size='md' color={"#222222"} >Panduan Komunitas</Heading></Center>

                <Box
                    w={[
                        '80vw', // 0-30em
                        '80vw', // 30em-48em
                        '80vw', // 48em-62em
                        '70vw', // 62em+
                    ]}
                >
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                    Selamat datang di Unibuzz. Kami menyediakan forum anonim untuk berbagi ide, pengalaman, dan informasi Kamu sebagai mahasiswa. Tujuan kami adalah membantu Kamu beradaptasi dengan kehidupan kampus secara sosial.
                    </Text>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5}>
                    Kami mendedikasikan diri untuk menyediakan ruang di mana platform kami mencerminkan tujuan dan sasaran kami. Harap perhatikan pedoman komunitas berikut khususnya cara berinteraksi dengan pengguna lain di platform dan apa yang harus Kamu antisipasi dari orang lain.
                    </Text>
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Do's
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        • Gunakan bahasa yang sesuai di Hive dan pesan! <br />
                        • Bagikan cerita, pemikiran, dan informasi Kamu di Hive atau <br />
                        • Berinteraksi dengan mahasiswa lain di Hive <br />
                        • Berteman dengan orang-orang di komunitas ini! <br />
                        • Kirim pesan ke pengguna lain jika Kamu ingin percakapan lanjutan! <br />
                        • Bersikap baiklah kepada semua orang di Hive atau saat mengirim pesan <br />
                    </Text>
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Dont's
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        • Menggunakan bahasa yang tidak pantas, mengancam, menyinggung golongan tertentu, dan ujaran kebencian di dalam Hive atau mengirim pesan! <br />
                        • Melakukan ujaran kebencian, pelecehan, bullying, diskriminasi, atau serangan tertarget lainnya. Serangan pribadi, trolling, dan pelecehan tidak akan ditoleransi. Ini termasuk kebencian terhadap kelompok orang yang rentan, seperti ras, orientasi seksual, jenis kelamin, identitas gender, usia, penyandang disabilitas, dan bentuk tubuh.<br />
                        • Melecehkan seseorang secara seksual. Ini mengacu pada hukum Indonesia yang mengatur kekerasan seksual, “UU TPKS” <br />
                        • Melukai diri sendiri. Silakan mencari bantuan profesional jika Kamu membutuhkannya. <br />
                        • Spam atau promosi.<br />
                        • Menyebarkan informasi palsu. <br />
                        • Doksing. Jangan membagikan informasi pribadi pribadi Kamu atau orang lain. <br />
                        • Menyebut nama seseorang tanpa menyensornya terlebih dahulu. Misalnya, "Michael Scott" tidak diperbolehkan. Sensor dengan angka atau karakter, seperti "M1ch43l 5c00t." <br />
                        • Terlibat dalam kegiatan ilegal. <br />
                        • Mengancam pengguna lain. <br />

                    </Text>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                    Staf moderator bekerja keras dalam mempertahankan komunitas Unibuzz untuk berbagi cerita dan panduan, dan kami meminta bantuan Kamu. Dengan memilih "Laporkan sebagai Tidak Pantas?" di tombol titik tiga, Kamu dapat melaporkan kiriman atau item apa pun yang Kamu yakini tidak pantas. Moderator akan memeriksa setiap masalah dan mengambil tindakan lebih lanjut yang diperlukan. Silakan hubungi moderator komunitas kami untuk bantuan lebih lanjut dengan Komunitas Dukungan dengan mengirimkan email ke unibuzz.app@gmail.com                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        How we moderate <br /> <br/>
                        Setiap pos komunitas langsung terlihat. Sebelum ditayangkan, kami tidak meninjau aktivitas komunitas. Moderasi reaktif mengacu pada proses di mana moderator memantau konten yang tidak pantas sambil secara bersamaan mengandalkan umpan balik anggota. Kamu akan menemukan tombol Laporkan di sekitar aplikasi untuk memberi tahu kami tentang konten itu. Dengan memoderasi dengan cara ini, kami dapat membuat komunitas tetap aktif setiap menit, memastikan bahwa Kamu memiliki akses ke dukungan saat dibutuhkan.                    </Text>
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
                            rel="noopener noreferrer"
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

export default CommunityGuidelines;