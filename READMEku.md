# Apa itu react js ?
React JS adalah sebuah pustaka/library javascript yang bersifat opensource untuk membangun User Interface yang dibuat oleh Facebook. React JS hanya mengurusi semua hal yang berkaitan dengan tampilan dan logika di sekitarnya. React JS ini diciptakan dengan tujuan untuk :

“Membangun aplikasi skala besar dengan data yang berubah dan terus berubah dari waktu ke waktu.”
# Keunggulan react js ?
Mudah dipahami
Gaya penulisan yang deklaratif membuat react js mudah dipahami dan membuat react mudah di prediksi jika ada kesalahan penulisan kode.
JSX
JSX adalah sebuah extension javascript yang di gunakan react untuk menulis HTML di dalam Javascript. JSX bukanlah sintaks javascript, sehingga browser tidak bisa membaca sintaks ini, di butuh kan sebuah JSX compiler yang di gunakan untuk menterjemahkan JSX kedalam bahasa regular javascript agar bisa terbaca oleh browser. Saya sendiri menggunakan BABEL JS sebagai JSX compilernya.
Modular
Untuk membuat aplikasi dengan skala besar, kita dapat menulis kode-kode dengan skala yang lebih kecil untuk di satukan menjadi aplikasi utuh, dan dapat di gunakan kembali (reusable).
Scalable
React js dapat menangani dengan sangat baik sebuah program dengan skala yang besar yang dapat menampilkan perubahan data yang sangat kompleks.
Flexibel
Dengan belajar 1 libary saja kita dapat membuat aplikasi Web, Moblie, maupun Desktop.
Effisien dan Cepat
React JS menciptakan Virtual DOM untuk mempercepat urusan perubahan DOM. Semua operasi di kerjakan di dalam Virtual DOM, setelah operasi selesai React JS menulis perubahan tersebut di dalam DOM. Contoh kasusnya seperti ini: “Jika kita menulis dalam secarik kertas menggunakan spidol, apabila terjadi kesalahan penulisan kita harus menulis di kertas yang baru. Berbeda jika kita menggunakan pensil, cukup menghapus dan memperbaiki pada bagian yang salah ”.
Mudah Debugging
Ketika kita mulai menggunakan React JS, jangan lupa menginstall extensi resmi React JS. Kita dapat dengan mudah menjelejah Virtual DOM pada aplikasi yang sudah kita buat, sehingga jika ada bug bisa cepat ditemukan.
SEO Bagus
Salah satu masalah terbesar dari library Javascript pada umumnya adalah mereka sidak support search engine. Meskipun sudah banyak perbaikan, mesin pencari umumnya masih mengalami kesulitan. Namun tidak dengan React JS, kita dapat menjalankan React JS pada server dan Virtual DOM diberikan ke browser sebagai halaman web biasa, sehingga sangat support SEO.
# Kelemahan react js ?
Meskipun React JS sangat powerfull, namun juga memiliki beberapa kelemahan antara lain:

Hanya View Layer
React js hanya sebuah pustaka View Layer, untuk membangun aplikasi besar kita harus menyusun sendiri kebutuhan aplikasi lainya seperti data layer, router, struktur aplikasi dan event system(kecuali event DOM).
Dokumentasi tidak bagus
Beberapa sumber artikel yang saya baca mengatakan bahwa dokumentasi react js tidak bagus karena informasi yang di berikan tidak lengkap, meskipun seperti itu kita tetap bisa mempelajarinya kok, tentunya dengan semangat dan ketekunan.
Permasalahan lisensi
Baru-baru ini muncul issue tentang lisensi react. Sebetulnya issue ini sudah ada sejak 2015, namun tampaknya ada pihak-pihak yang belum puas dan mempermasalahkanya. Menurut pemahaman saya bahwa “facebook memperbolehkan kita menggunakan react js untuk mengembangkan produk kita dengan catatan tidak untuk berkompetisi dengan produknya facebook”. Tapi sebenarnya ini tidak masalah , temen-teman bisa baca penjelasanya detail disini.
Dukungan browser
React js tidak mendukung browser versi lama, hanya browser versi baru. React js menghentikan dukungan pada browser Internet Explorer versi 8, sampai saat ini react yang bisa jalan di IE 8 adalah react versi v0.14. Versi terbaru dari react hanya mendukung Internet Explorer versi 9 keatas.

# Mengapa facebook membuat react js?
Data binding yang rumit, pernahkan anda mengolah form yang didalamnya ada 20 element text input ? jika kita menggunakan javascript biasa kita harus melakukan data binding(getElementById) sebanyak element text input yang ada didalam form, sangat jelimet bukan ? namun jika kita menggunakan react, kita cukup menyimpan data element didalam object state yang nantinya akan di re render oleh react ketika ada perubahan pada object state tersebut.
Banyak perubahan data pada element setiap waktu, jika kita pengguna facebook maka kita bisa mencermati setiap page facebook data elementnya update setiap sekian detik. Dengan mengusung konsep Virtual DOM, inilah mengapa react js sangat cocok digunakan pada aplikasi yang data pada elementya mengalami perubahan setiap waktu.


2. ReactJS vs React Native ?
Setelah sukses untuk aplikasi web, enginer facebook sepertinya masih kurang kerjaan dan mulai mencoba React ke mobile, akhirnya muncullah React Native pada January 2015. React Native memungkinkan developer menulis aplikasi dalam javascript dan di build ke 2 OS sekaligus yaitu iOS & Android. Bukan penemuan baru sebenarnya, toh sudah banyak teknologi seperti ini sebelumnya. Beda nya apa ? React Native mengklaim performance nyaris sama dengan native.

Tapi bukan berarti anda bisa menulis script untuk aplikasi web & mobile dalam satu codebase, tetap harus di tulis terpisah. Tapi dari sisi code tidak begitu jauh karena core nya sama-sama react. Artinya jika bisa ReactJS ke React Native cukup mudah begitu juga sebaliknya.


#caching
Dengan melakukan caching pada PWA, maka kita masih dapat mengakses aplikasi kita pada waktu offline atau pada waktu jaringan internet mati.

Prinsip caching pada PWA adalah

Install service worker
Caching file yang diperlukan
Service worker aktif
Mencoba akses saat offline

#manifest
Secara teknis web app manifest adalah  JSON yang sederhana yang menjelaskan secara sistematik dan terstruktur mengenai aplikasi kita. Pada web app manifest ini akan memberikan nama aplikasi, icon yang dipakai sebagai pembeda secara visual dengan aplikasi lain dan sebagainya.

#bg sync
Sinkronisasi latar belakang adalah API web baru yang memungkinkan Anda menunda tindakan hingga pengguna memiliki konektivitas yang stabil. Ini berguna untuk memastikan bahwa apa pun yang ingin dikirim pengguna, sebenarnya dikirim.

Masalah
Internet adalah tempat yang tepat untuk membuang waktu. Tanpa membuang waktu di internet, kita tidak akan tahu kucing tidak suka bunga, bunglon suka gelembung, atau bahwa Eric Bidelman kita sendiri adalah pahlawan golf putt putt golf pada akhir 90-an.

Tetapi kadang-kadang, kadang-kadang saja, kami tidak ingin membuang waktu. Pengalaman pengguna yang diinginkan lebih seperti:

Telepon keluar dari saku.
Mencapai tujuan kecil.
Telepon kembali di saku.
Lanjutkan hidup.
Sayangnya pengalaman ini sering terputus oleh konektivitas yang buruk. Kita semua ada di sana. Anda sedang menatap layar putih atau pemintal, dan Anda tahu Anda harus menyerah dan melanjutkan hidup Anda, tetapi Anda memberikannya 10 detik lagi untuk berjaga-jaga. Setelah itu 10 detik? Tidak ada. Tapi mengapa menyerah sekarang? Anda sudah menginvestasikan waktu, jadi berjalan pergi tanpa apa pun akan sia-sia, jadi Anda harus menunggu. Pada titik ini Anda ingin menyerah, tetapi Anda tahu yang kedua Anda lakukan, adalah yang kedua sebelum semuanya dimuat jika hanya Anda yang menunggu.

Pekerja layanan menyelesaikan bagian pemuatan halaman dengan membiarkan Anda menayangkan konten dari cache. Tetapi bagaimana dengan ketika halaman perlu mengirim sesuatu ke server?

Saat ini, jika pengguna menekan "kirim" pada sebuah pesan, mereka harus menatap seorang pemintal sampai selesai. Jika mereka mencoba menavigasi atau menutup tab, kami menggunakan pada sebelumunload untuk menampilkan pesan seperti, "Tidak, saya ingin Anda menatap pemintal ini lagi. Maaf". Jika pengguna tidak memiliki koneksi, kami memberi tahu pengguna "Maaf, Anda harus kembali lagi nanti dan coba lagi".

Ini sampah. Sinkronisasi latar belakang memungkinkan Anda melakukan lebih baik.

Solusinya
Video berikut ini menunjukkan Emojoy, demo obrolan khusus emoji-satunya ... hal. Ini adalah aplikasi web progresif. Ini bekerja secara offline terlebih dahulu. Ini menggunakan pesan push dan pemberitahuan, dan menggunakan sinkronisasi latar belakang.

Jika pengguna mencoba mengirim pesan ketika mereka memiliki konektivitas nol, maka, untungnya, pesan tersebut dikirim di latar belakang begitu mereka mendapatkan konektivitas.


Pada Maret 2016, Sinkronisasi latar belakang tersedia di Chrome dari versi 49 ke atas. Anda dapat melihatnya beraksi dengan mengikuti langkah-langkah di bawah ini:

Buka Emojoy.
Luring (baik menggunakan mode pesawat atau kunjungi kandang Faraday lokal Anda).
Ketik pesan.
Kembali ke layar beranda Anda (opsional tutup tab / browser).
Online.
Pesan terkirim di latar belakang!
Mampu mengirim di latar belakang seperti ini juga menghasilkan peningkatan kinerja yang dirasakan. Aplikasi tidak perlu membuat masalah besar tentang pengiriman pesan, sehingga dapat langsung menambahkan pesan ke output.

english version

Background sync is a new web API that lets you defer actions until the user has stable connectivity. This is useful for ensuring that whatever the user wants to send, is actually sent.

The problem
The internet is a great place to waste time. Without wasting time on the internet, we wouldn’t know cats dislike flowers, chameleons love bubbles, or that our very own Eric Bidelman is a putt putt golfing hero of the late 90s.

But sometimes, just sometimes, we’re not looking to waste time. The desired user experience is more like:

Phone out of pocket.
Achieve minor goal.
Phone back in pocket.
Resume life.
Unfortunately this experience is frequently broken by poor connectivity. We’ve all been there. You’re staring at a white screen or a spinner, and you know you should just give up and get on with your life, but you give it another 10 seconds just in case. After that 10 seconds? Nothing. But why give up now? You’ve invested time already, so walking away with nothing would be a waste, so you carry on waiting. By this point you want to give up, but you know the second you do so, is the second before everything would have loaded if only you’d waited.

Service workers solve the page loading part by letting you serve content from a cache. But what about when the page needs to send something to the server?

At the moment, if the user hits "send" on a message they have to stare at a spinner until it completes. If they try to navigate away or close the tab, we use onbeforeunload to display a message like, “Nope, I need you to stare at this spinner some more. Sorry”. If the user has no connection we tell the user “Sorry, you must come back later and try again”.

This is rubbish. Background sync lets you do better.

The solution
The following video shows Emojoy, a simple emoji-only chat demo… thing. It’s a progressive web app. It works offline-first. It uses push messages and notifications, and it uses background sync.

If the user tries to send a message when they have zero connectivity, then, thankfully, the message is sent in the background once they get connectivity.


As of March 2016, Background sync is available in Chrome from version 49 and above. You can see it action by following the steps below:

Open Emojoy.
Go offline (either using airplane-mode or visit your local Faraday cage).
Type a message.
Go back to your home screen (optionally close the tab/browser).
Go online.
Message sends in the background!
Being able to send in the background like this also yields a perceived performance improvement. The app doesn’t need to make such a big deal about the message sending, so it can add the message to the output straight away.

