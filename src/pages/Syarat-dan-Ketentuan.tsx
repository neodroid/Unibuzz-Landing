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

export const SyaratDanKetentuan = () => (
    <ChakraProvider theme={theme}>
        <Box minH="100vh" textAlign="center" fontSize="xl" backgroundColor={"#474747"} >
            <Grid p={10} justifyItems="center">
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
                ><Heading as='h1' size='md' color={"#222222"} >Syarat dan Ketentuan</Heading></Center>

                <Box
                    w={[
                        '80vw', // 0-30em
                        '80vw', // 30em-48em
                        '80vw', // 48em-62em
                        '70vw', // 62em+
                    ]}
                >
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Syarat dan Ketentuan
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Selamat datang di Unibuzz!
                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Syarat dan ketentuan berikut menjelaskan peraturan dan ketentuan penggunaan Website Unibuzz dengan alamat unibuzz.app.
                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Dengan mengakses website ini, kami menganggap Anda telah menyetujui syarat dan ketentuan ini. Jangan lanjutkan penggunaan Unibuzz jika Anda menolak untuk menyetujui semua syarat dan ketentuan yang tercantum di halaman ini.                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Cookie:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Website ini menggunakan cookie untuk mempersonalisasi pengalaman online Anda. Dengan mengakses Unibuzz, Anda menyetujui penggunaan cookie yang diperlukan.                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Cookie merupakan file teks yang ditempatkan pada hard disk Anda oleh server halaman web. Cookie tidak dapat digunakan untuk menjalankan program atau mengirimkan virus ke komputer Anda. Cookie yang diberikan telah disesuaikan untuk Anda dan hanya dapat dibaca oleh web server pada domain yang mengirimkan cookie tersebut kepada Anda.                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Kami dapat menggunakan cookie untuk mengumpulkan, menyimpan, dan melacak informasi untuk keperluan statistik dan pemasaran untuk mengoperasikan website kami. Ada beberapa Cookie wajib yang diperlukan untuk pengoperasian website kami. Cookie ini tidak memerlukan persetujuan Anda karena akan selalu aktif. Perlu diketahui bahwa dengan menyetujui Cookie wajib, Anda juga menyetujui Cookie pihak ketiga, yang mungkin digunakan melalui layanan yang disediakan oleh pihak ketiga jika Anda menggunakan layanan tersebut di website kami, misalnya, jendela tampilan video yang disediakan oleh pihak ketiga dan terintegrasi dengan website kami.
                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Lisensi:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Kecuali dinyatakan lain, Unibuzz dan/atau pemberi lisensinya memiliki hak kekayaan intelektual atas semua materi di Unibuzz. Semua hak kekayaan intelektual dilindungi undang-undang. Anda dapat mengaksesnya dari Unibuzz untuk penggunaan pribadi Anda sendiri dengan batasan yang diatur dalam syarat dan ketentuan ini.
                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Anda dilarang untuk:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Menyalin atau menerbitkan ulang materi dari Unibuzz <br></br>
                        Menjual, menyewakan, atau mensublisensikan materi dari Unibuzz <br />
                        Memproduksi ulang, menggandakan, atau menyalin materi dari Unibuzz <br />
                        Mendistribusikan ulang konten dari Unibuzz <br />
                        Perjanjian ini akan mulai berlaku pada tanggal perjanjian ini. <br />
                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Beberapa bagian website ini menawarkan kesempatan bagi pengguna untuk memposting serta bertukar pendapat dan informasi di area website tertentu. Unibuzz tidak akan memfilter, mengedit, memublikasikan, atau meninjau Komentar di hadapan pengguna di website. Komentar tidak mencerminkan pandangan dan pendapat Unibuzz, agennya, dan/atau afiliasinya. Komentar mencerminkan pandangan dan pendapat individu yang memposting pandangan dan pendapatnya. Selama diizinkan oleh undang-undang yang berlaku, Unibuzz tidak akan bertanggung jawab atas Komentar atau kewajiban, kerugian, atau pengeluaran yang disebabkan dan/atau ditanggung sebagai akibat dari penggunaan dan/atau penempatan dan/atau penayangan Komentar di website ini.
                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Unibuzz berhak memantau semua Komentar dan menghapus Komentar apa pun yang dianggap tidak pantas, menyinggung, atau menyebabkan pelanggaran terhadap Syarat dan Ketentuan ini.                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Anda menjamin dan menyatakan bahwa:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Anda berhak memposting Komentar di website kami serta memiliki semua lisensi dan persetujuan yang diperlukan untuk melakukannya; <br />
                        Komentar tidak melanggar hak kekayaan intelektual apa pun, termasuk tetapi tidak terbatas pada, hak cipta, paten, atau merek dagang pihak ketiga mana pun; <br />
                        Komentar tidak mengandung materi yang bersifat memfitnah, mencemarkan nama baik, menyinggung, tidak senonoh, atau melanggar hukum, yang merupakan pelanggaran privasi. <br />
                        Komentar tidak akan digunakan untuk membujuk atau mempromosikan bisnis atau kebiasaan atau memperkenalkan kegiatan komersial atau kegiatan yang melanggar hukum. <br />
                        Dengan ini Anda memberikan lisensi non-eksklusif kepada Unibuzz untuk menggunakan, memproduksi ulang, mengedit, dan mengizinkan orang lain untuk menggunakan, memproduksi ulang, dan mengedit Komentar Anda dalam segala bentuk, format, atau media. <br />

                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Membuat hyperlink yang mengarah ke Konten kami:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Organisasi berikut dapat membuat tautan menuju Website kami tanpa persetujuan tertulis sebelumnya:
                    </Text>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5}>
                        Lembaga pemerintah; <br />
                        Mesin pencari; <br />
                        Kantor berita; <br />
                        Distributor direktori online dapat membuat tautan menuju Website kami dengan cara yang sama seperti membuat tautan ke Website bisnis terdaftar lainnya; dan <br />
                        Bisnis Terakreditasi di Seluruh Sistem kecuali meminta organisasi nirlaba, pusat perbelanjaan amal, dan grup penggalangan dana amal yang mungkin tidak membuat hyperlink menuju Website kami. <br />
                        Organisasi-organisasi ini dapat menautkan ke halaman beranda, ke publikasi, atau ke informasi Website kami lainnya selama tautan tersebut: (a) tidak menipu dengan cara apa pun; (b) tidak menyiratkan secara keliru adanya hubungan sponsor, rekomendasi, atau persetujuan dari pihak yang menautkan beserta produk dan/atau layanannya; serta (c) sesuai dengan konteks website pihak yang menautkan.
                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Kami dapat mempertimbangkan dan menyetujui permintaan penautan lain dari jenis organisasi berikut:                    </Text>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={5}>
                        sumber informasi bisnis dan/atau konsumen yang sudah umum dikenal; <br />
                        website komunitas dot.com;<br />
                        asosiasi atau kelompok lain yang mewakili badan amal;<br />
                        distributor direktori online; <br />
                        portal internet;<br />
                        firma akuntansi, hukum, dan konsultan; dan<br />
                        lembaga pendidikan dan asosiasi dagang.<br />
                        Kami akan menyetujui permintaan penautan dari organisasi-organisasi tersebut jika kami memutuskan bahwa: (a) tautan tersebut tidak akan membuat kami terlihat merugikan kami sendiri atau bisnis terakreditasi kami; (b) organisasi tidak memiliki catatan negatif apa pun dengan kami; (c) keuntungan bagi kami dari keberadaan hyperlink mengkompensasi tidak adanya Unibuzz; dan (d) tautan tersebut dalam konteks informasi sumber daya umum.<br />

                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Organisasi-organisasi ini dapat menautkan ke halaman beranda kami selama tautan tersebut: (a) tidak menipu dengan cara apa pun; (b) tidak menyiratkan secara keliru adanya hubungan sponsor, rekomendasi, atau persetujuan dari pihak yang menautkan beserta produk dan/atau layanannya; dan (c) sesuai dengan konteks website pihak yang menautkan.                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                        Jika Anda merupakan salah satu organisasi yang tercantum dalam paragraf 2 di atas dan tertarik untuk membuat tautan ke website kami, Anda harus memberitahu kami dengan mengirimkan email ke Unibuzz. Harap cantumkan nama Anda, nama organisasi Anda, informasi kontak dan URL website Anda, daftar URL apa pun yang akan memuat tautan ke Website kami, serta daftar URL di website kami yang ingin Anda tautkan. Silakan tunggu tanggapan dari kami selama 2-3 minggu.
                    </Text>
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Organisasi yang telah disetujui dapat membuat hyperlink menuju Website kami seperti berikut:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                        Dengan menggunakan nama perusahaan kami; atau<br />
                        Dengan menggunakan Uniform Resource Locator yang ditautkan; atau<br />
                        Dengan menggunakan deskripsi lain dari Website kami yang ditautkan yang masuk akal dalam konteks dan format konten di website pihak yang menautkan.<br />
                        Tidak ada penggunaan logo Unibuzz atau karya seni lainnya yang diizinkan untuk menautkan perjanjian lisensi merek dagang.<br />
                    </Text>
                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                        Tanggung jawab atas Konten:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    Kami tidak akan bertanggung jawab atas konten yang muncul di Website Anda. Anda setuju untuk melindungi dan membela kami terhadap semua klaim yang diajukan atas Website Anda. Tidak ada tautan yang muncul di Website mana pun yang dapat dianggap sebagai memfitnah, cabul, atau kriminal, atau yang menyalahi, atau melanggar, atau mendukung pelanggaran lain terhadap hak pihak ketiga.                    </Text>
                    

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                    Pernyataan Kepemilikan Hak:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    Kami berhak meminta Anda menghapus semua tautan atau tautan tertentu yang menuju ke Website kami. Anda setuju untuk segera menghapus semua tautan ke Website kami sesuai permintaan. Kami juga berhak mengubah syarat ketentuan ini dan kebijakan penautannya kapan saja. Dengan terus menautkan ke Website kami, Anda setuju untuk terikat dan mematuhi syarat dan ketentuan penautan ini.
                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                    Penghapusan tautan dari website kami:
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    Jika Anda menemukan tautan di Website kami yang bersifat menyinggung karena alasan apa pun, Anda bebas menghubungi dan memberi tahu kami kapan saja. Kami akan mempertimbangkan permintaan untuk menghapus tautan, tetapi kami tidak berkewajiban untuk menanggapi Anda secara langsung.
                    </Text>

                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                    Kami tidak memastikan bahwa informasi di website ini benar. Kami tidak menjamin kelengkapan atau keakuratannya, dan kami juga tidak berjanji untuk memastikan bahwa website tetap tersedia atau materi di website selalu diperbarui.
                    </Text>

                    <Heading size='md' textAlign={"left"} textColor="#FFFFFF" pt={10}>
                    Penolakan:                    
                    </Heading>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={2}>
                    Sejauh diizinkan oleh undang-undang yang berlaku, kami mengecualikan semua representasi, jaminan, dan ketentuan yang berkaitan dengan website kami dan penggunaan website ini. Tidak ada bagian dari penolakan ini yang akan:
                    </Text>
                    
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                    membatasi atau mengecualikan tanggung jawab kami atau Anda terhadap kematian atau cedera pribadi;<br/>
                    membatasi atau mengecualikan tanggung jawab kami atau Anda terhadap penipuan atau pemberian keterangan yang tidak benar;<br/>
                    membatasi tanggung jawab kami atau Anda dengan cara apa pun yang tidak diizinkan oleh undang-undang yang berlaku; atau<br/>
                    mengecualikan tanggung jawab kami atau Anda yang tidak dapat dikecualikan berdasarkan undang-undang yang berlaku.<br/>
                    Batasan dan pengecualian tanggung jawab yang diatur dalam Bagian ini dan bagian lain dalam penolakan ini: (a) tunduk pada paragraf sebelumnya; dan (b) mengatur semua kewajiban yang timbul di bawah penolakan, termasuk kewajiban yang timbul dalam kontrak, dalam gugatan, dan untuk pelanggaran kewajiban hukum.<br/>

                    </Text>
                    <Text textAlign={"left"} textColor="#FFFFFF" size='md' pt={10}>
                    Selama website dan informasi serta layanan di website disediakan secara gratis, kami tidak akan bertanggung jawab atas kerugian atau kerusakan apa pun.
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

export default SyaratDanKetentuan;