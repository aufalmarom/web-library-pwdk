-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Nov 2022 pada 09.23
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_library`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `image`, `title`, `description`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Jejak petualang.jpg', 'Jejak petualang', 'Desa Eliasa, desa muda di Kepulauan Selaru, Maluku Tenggara Barat. Desa ini merupakan desa terluar dan desa terdepan Indonesia yang langsung menghadap ke perbatasan Australia. Letaknya yang strategis, membuatnya sempat dijadikan posko pengintaian pada masa perang dunia kedua oleh Jepang. Eliasa surga perairan di ujung Pulau Selaru. Laut yang luas terbentang di Selaru di manfaatkan oleh masyarakatnya mencari gurita', 2, '2022-11-01 12:49:11', '0000-00-00 00:00:00'),
(2, 'Pendidikan kewarganegaraan untuk perguruan tinggi.jpg', 'Pendidikan kewarganegaraan untuk perguruan tinggi', 'Termasuk bibliografi', 3, '1900-01-30 00:00:00', '0000-00-00 00:00:00'),
(3, 'Masa depan pesantren.jpg', 'Masa depan pesantren', 'Kedua pesantren salafiyah yang dikaji dalam buku ini bukan hanya mempertahankan eksistensinya sebagai lembaga tafaqquh fiddin (pendalaman ilmu-ilmu keagamaan), melainkan juga mampu mengkreasi peran-peran baru yang sangat strategis dan dibutuhkan masyarakat terkini. Penulis berhasil menunjukkan bahwa kedua pesantren tersebut tetap istiqomah mengembangkan peran utamanya, yaitu sebagai: pertama, transmisi ilmu-ilmu dan pengetahuan Islam (transmission of Islamic knowledge); kedua, pemeliharaan tradisi Islam (maintenance of Islamics tradition); dan ketiga, reproduksi (mencetak calon-calon) ulama (reproduction of ulama). Semua itu didukung oleh faktor manajemen dan kepemimpinan kedua pengasuh dari kedua pesantren tersebut', 2, '1900-01-01 00:00:00', '0000-00-00 00:00:00'),
(4, 'Diawali dari asal muasal manusia di Roma.jpg', 'Diawali dari asal muasal manusia di Roma', '100 scene series : History of the world ; 1', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Why simbiosis dan musuh alami.jpg', 'Why simbiosis dan musuh alami', 'Judul asli : why? gongsaenggwa cheonjeok, Teks dalam Bahasa Indonesia, diterjemahkan dari Bahasa Korea', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Trio Ucul dan nyonya Pink Ting.jpg', 'Trio Ucul dan nyonya Pink Ting', 'Novel anak Islami', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Saatnya menjerit.jpg', 'Saatnya menjerit', 'Novel anak Islami', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Kisah rumah kasih.jpg', 'Kisah rumah kasih', 'Novel anak Islami', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Gaharts 2020 Intravenous medications.jpg', 'Gaharts 2020 Intravenous medications', 'Selama 45 tahun, Pengobatan Intravenous Gahart: Buku 400 intravenous drugs! For 45 years, Gahart’s Intravenous Medications: A Handbook for Nurses and Health Professionals telah menjadi sumber tepercaya untuk cakupan obat yang komprehensif, akurasi yang baik, dan format akses cepat yang intuitif. Selain memperbarui interaksi obat, tindakan pencegahan, peringatan, dan instruksi pengajaran pasien untuk semua 15 obat yang ada, edisi ke-36 baru ini mencakup lebih dari selusin monograf baru dari 15 obat terbaru yang akan disetujui oleh FDA', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'The Evaluation and measurement of library services.jpg', 'The Evaluation and measurement of library services', 'Dalam buku ini, penulis menjelaskan beragam alat yang ada yang dapat digunakan untuk mengevaluasi layanan perpustakaan apa pun. Penulis menguraikan dan mengemukakan untuk adopsi yang lebih luas dan lebih kuat dari teknik evaluasi untuk membantu manajer perpustakaan menggabungkan pengukuran internal tradisional, seperti sirkulasi dan transaksi referensi, dengan metrik yang lebih berpusat pada pelanggan seperti seberapa baik pelanggan merasa dilayani, dan seberapa puas pelanggan mereka dengan cabang perpustakaan. Hasil dari strategi ini adalah kemampuan untuk membentuk gambaran yang lebih benar tentang nilai perpustakaan bagi para pemangku kepentingan dan pelanggannya.', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Globalizing the library.jpg', 'Globalizing the library', 'Globalisasi Perpustakaan berfokus pada globalisasi informasi dan perpustakaan pada periode setelah Perang Dunia Kedua. memberikan uraian pengujian terhadap ide dan aspirasi seputar informasi dan perpustakaan, serta praktik dan tindakan nyata para profesional informasi dari Amerika Serikat, Inggris, dan mereka yang bekerja dengan organisasi seperti Unesco untuk mengembangkan layanan perpustakaan, buku ini menguraikan pentingnya cerita tentang sejarah internasional yang juga memberikan wawasan tentang sejarah informasi, globalisasi, dan hubungan budaya. Berupaya untuk membantu membangun layanan perpustakaan dan melatih kelompok pustakawan profesional di seluruh dunia, buku ini meneliti negara-negara di Asia, Afrika, dan Pasifik selama periode Perang Dingin dan dekolonisasi. Menggunakan ide-ide diplomasi perpustakaan dan imperialisme perpustakaan untuk membingkai keterlibatan Anglo-Amerika dalam karya ini, Laugesen meneliti dampak kegiatan pengembangan perpustakaan di berbagai negara. Buku ini juga mempertimbangkan tentang bantuan asing bagi negara-negara di Selatan yang secara global memotivasi mereka menggunakan bantuan asing untuk membantu mengembangkan layanan perpustakaan dan infrastruktur informasi mereka. Globalisasi Perpustakaan mendorong refleksi tentang cara pengembangan layanan perpustakaan dan cara mentransfer pengetahuan secara profesional, dan juga memberikan pencerahan terhadap struktur kekuasaan yang telah membentuk infrastruktur informasi global. Buku ini harus menjadi bacaan penting bagi akademisi dan siswa yang terlibat dalam studi perpustakaan, pengembangan, dan informasi. Buku ini juga sangat menarik bagi para profesional informasi dan sejarawan informasi yang merefleksikan secara kritis bagaimana informasi telah ditransfer, dikonsumsi, dan dibentuk di dunia modern.', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Ragam rona kebaya.jpg', 'Ragam rona kebaya', 'Kembalinya batik Betawi ditandai dengan munculnya batik dalam kombinasi warna cerah dan motif kontemporer yang menggambarkan warna-warni kehidupan kota Jakarta. Corak kontemporer itu ternyata tidak membatasi batik Betawi untuk tampil selaras dengan kebaya berdesain cantik lagi elegan. Dilengkapi dengan cara berkain yang mudah namun apik, aplikasi riasan wajah dan tatanan rambut, serta pilihan aksesori yang tepat, buku ini hadir untuk menginspirasi siapa pun agar bisa tampil menawan dan bersahaja dengan padu padan batik Betawi dan kebaya khas Indonesia yang penuh warna. Itulah tujuan utama dari buku Ragam Rona Kebaya yang merupakan buku kedua dari Seri Batik Cantik! - Inspirasi Batik Betawi ini. Semoga terinspirasi!', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Mers-CoV.jpg', 'Mers-CoV', 'Tidak diketahui / tidak ditentukan', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Journal of Forestry.jpg', 'Journal of Forestry', 'Tidak diketahui / tidak ditentukan', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Solusi sehat mengatasi asam urat dan rematik.jpg', 'Solusi sehat mengatasi asam urat dan rematik', 'Asam urat dan rematik merupakan dua penyakit yang sering dianggap berhubungan. Hal ini disebabkan karena salah satu penyebab rematik adalah terbentuknya kristal di sendi akibat tingginya kadar asam urat. Setiap manusia memiliki kandungan asam urat dalam tubuhnya. Hal ini merupakan hal yang alami karena asam urat terbentuk dari hasil metabolisme purin yang terdapat dalam makanan. Akan tetapi, permasalahan muncul pada saat kadarnya dalam tubuh jauh di atas normal. Buku ini membahas mengenai asam urat dan rematik. Mulai dari pengenalan hingga mengontrol kadar asam urat di dalam tubuh, serta ramuan herbal, resep makanan, dan terapi jus untuk mengatasi tingginya kadar asam urat dan rematik.', 4, '2022-11-30 00:00:00', '0000-00-00 00:00:00'),
(16, 'Aneka penganan dari sukun.jpg', 'Aneka penganan dari sukun', 'Aneka penganan dari sukun', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Berbohong itu nikmat.jpg', 'Berbohong itu nikmat', 'Berbuat jahat dengan cara menghembuskan angin kebohongan adalah pekerjaan mudah yang mungkin sering menggelincirkan kita. dan anehnya, kita melakukan itu bisa jadi dengan tidak sadar. Kita senang ketika si korban mendapatkan kesulitan dan menderita akibat ulah jahil atau jahat kita. Rasulullah SAW pernah bersabda bahwa pilar agama adalah lidah. Lidah harus dapat di kendalikan.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Cara mudah memperbaiki daya ingat.jpg', 'Cara mudah memperbaiki daya ingat', 'Ingatan tidak hadir sebagaimana sebuah objek, karena ingatan mengacu pada proses mengingat. Ada tiga kunci kesuksesan dalam memperoleh ingatan yang lebih bagus yaitu kunci pertama memperhatikan, kunci kedua mengenali, dan kunci ketiga menggambarkan. Ada beberapa kunci untuk menghilangkan sifat pelupa dan mengubah menjadi mempunyai daya ingat yang kuat yaitu, pertama berdiam diri, kedua menfokuskan diri, ketiga, mengetahui arah yang dituju, keempat bertindak dengan cepat.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Teka-teki tubuh kita hmmmm.jpg', 'Teka-teki tubuh kita hmmmm', 'Memori adalah suatu hal yang luar biasa, bayangkan saja berapa banyak memori yang kita ingat, serta berapa banyak ingatan yang ada dalam otak kita. Kita pun tak akan kehabisan ruang untuk menyimpan memori dan informasi yang kita butuhkan. Memori merupakan perangkat canggih yang mampu mengingat semua peristiwa, karena memori suatu peristiwa memiliki arti bagi setiap orang. Memori tersimpan di otak manusia yang terdiri dari 3 bagian, dan tersimpan pada otak besar dan otak kecil.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'The best of me = yang terbaik dariku.jpg', 'The best of me = yang terbaik dariku', 'The best of me adalah kisah menyentuh tentang sepasang anak SMU di kota kecil. Sekarang, mereka telah dewasa dan mengambil jalan yang berbeda. Namun tak satupun dari mereka yang dapat melupakan cinta pertama itu. Pada suatu hari mereka kembali ke kampung halaman dan dipaksa untuk menghadapi pilihan yang telah mereka buat.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Lewat tengah malam.jpg', 'Lewat tengah malam', 'Hal-hal aneh dan gaib terus menerus dialami Alice sejak ia pindah ke apartemen baru bersama ibunya. Namun ibunya tidak mempercayai cerita Alice, dan Alice yakin ada misteri di dalam apartemen itu. Lewat buku harian temannya, Alice berusaha mengungkap misteri yang mengejutkan dari apartemen itu', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Anak-anak revolusi.jpg', 'Anak-anak revolusi', 'Buku yang merupakan otobiografi dari sang penulis ini ditulis dengan gaya bahasa populer, walaupun tema yang diangkat cukup pelik. Tema yang diangkat adalah tentang para anak-anak ingusan, aktivis mahasiswa era 90-an yang melawan rezim Jenderal Soeharto yang kokoh dan tak tertembus perlawanan-perlawanan lain yang pernah ada.', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `book_id`, `createdAt`, `updatedAt`) VALUES
(4, 5, 5, '2022-11-19 05:35:51', '2022-11-19 05:35:51'),
(5, 5, 4, '2022-11-19 05:36:10', '2022-11-19 05:36:10'),
(6, 5, 3, '2022-11-19 06:03:10', '2022-11-19 06:03:10'),
(7, 5, 2, '2022-11-19 06:03:20', '2022-11-19 06:03:20'),
(8, 5, 1, '2022-11-19 06:04:28', '2022-11-19 06:04:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Anak-anak', '2022-11-20 04:55:00', '2022-11-20 04:55:00'),
(2, 'Remaja', '2022-11-20 04:55:00', '2022-11-20 04:55:00'),
(3, 'Dewasa', '2022-11-20 04:55:00', '2022-11-20 04:55:00'),
(4, 'Lansia', '2022-11-20 04:55:00', '2022-11-20 04:55:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `loans`
--

CREATE TABLE `loans` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `start_loan_date` datetime NOT NULL DEFAULT current_timestamp(),
  `max_return_date` datetime NOT NULL,
  `return_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `loans`
--

INSERT INTO `loans` (`id`, `user_id`, `book_id`, `start_loan_date`, `max_return_date`, `return_date`, `createdAt`, `updatedAt`) VALUES
(12, 6, 5, '2022-11-19 09:56:59', '2022-11-24 09:56:59', NULL, '2022-11-19 09:56:59', '2022-11-19 09:56:59'),
(13, 6, 4, '2022-11-19 09:57:15', '2022-11-24 09:57:15', NULL, '2022-11-19 09:57:15', '2022-11-19 09:57:15'),
(14, 6, 3, '2022-11-19 09:57:20', '2022-11-24 09:57:20', NULL, '2022-11-19 09:57:20', '2022-11-19 09:57:20'),
(15, 6, 1, '2022-11-19 09:57:21', '2022-11-24 09:57:21', NULL, '2022-11-19 09:57:21', '2022-11-19 09:57:21'),
(16, 6, 2, '2022-11-19 09:57:22', '2022-11-24 09:57:22', NULL, '2022-11-19 09:57:22', '2022-11-19 09:57:22'),
(17, 6, 11, '2022-11-22 08:22:24', '2022-11-27 08:22:24', NULL, '2022-11-22 08:22:24', '2022-11-22 08:22:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `NIM` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verification` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'User',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `NIM`, `email`, `email_verification`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(5, 'user1237', '1234567', 'syashori@gmail.com', '1', '$argon2id$v=19$m=65536,t=3,p=4$I05ZFztUUl6xV5L0746Qzg$xlwm8dYOqwg4FQ1Hy0kBDY48A1mGeb8fm3FmW1jWW54', 'Admin', '2022-11-19 01:20:42', '2022-11-19 02:15:45'),
(6, 'user222', '12345678', 'user2@gmail.com', '1', '$argon2id$v=19$m=65536,t=3,p=4$WI/s9pxP+R0wLvOiMYOcZQ$acM1NW6PrU0HHiY2gdCRj8XI/zpI4qLjZwN1hIJ73Gc', 'User', '2022-11-19 04:55:48', '2022-11-19 04:55:48'),
(8, '123456789', '123456789', '123456789@gmail.com', '1', '$argon2id$v=19$m=65536,t=3,p=4$nHKp7HSUlxpbROBPCt0vzw$q9bw0+0uryXY17IawEbKOxx+gLHQYmtVtg4367XzkX8', 'User', '2022-11-19 06:59:46', '2022-11-19 06:59:46'),
(10, '1234567890', '1234567890', '1234567890@gmail.com', '1', '$argon2id$v=19$m=65536,t=3,p=4$i3SFVTaG9GANjxaFqPqQmw$eQ1tOmf1oiI2jsvOldROVAKD5X09d3vgS4AhT1vABac', 'User', '2022-11-19 07:01:38', '2022-11-19 07:01:38');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `image` (`image`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indeks untuk tabel `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `NIM` (`NIM`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `loans`
--
ALTER TABLE `loans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
