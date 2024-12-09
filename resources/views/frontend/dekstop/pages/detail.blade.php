@extends('frontend.dekstop.master.master-app')

@section('content')
    <div class="main-content">

        {{-- Ads --}}
        @include('frontend.dekstop.components.ads-1')

        <div class="mt-20">
            <h3 class="card-headline-no-image-title">Dangdut</h3>
        </div>

        <div class="content-home" id="content">
            <div class="content-article">
                <article class="article-detail">
                    <h1 class="article-detail--title">Kimberly Ryder Belum Menjanda, Ibu Sudah Berharap Dapat Ganti yang
                        Lebih Baik</h1>
                    <div class="article-detail--desc">Irvina Zainal, ibu dari aktris Kimberly Ryder, mengungkapkan
                        harapannya agar putrinya bisa mendapatkan jodoh yang baik setelah resmi bercerai dari Edward Akbar.
                    </div>
                    <div class="article-detail--info">
                        <div class="author">
                            <strong>Admin</strong>
                        </div>
                        <div class="date">
                            Kamis, 16 September 2021 | 18:06 WIB
                        </div>
                    </div>

                    <div class="share-baru-header">
                        <a href="#">
                            <img src="{{ asset('frontend/icons/fb.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/twitter.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/tele.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/wa.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/link.svg') }}" alt="">
                        </a>
                    </div>

                    <figure class="article-detail-figure">
                        <img alt="image" width="660" height="497"
                            src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg"
                            class="card-headline-img" />
                        <figcaption>Nadiem Makarim (Instagram/Kemdikbud.RI)</figcaption>
                    </figure>
                    <div class="article-detail--body">
                        <p><strong>Indopop.id</strong> - Diplomat senior Indonesia Dino Patti Djalal membeberkan tiga bukti
                            yang menunjukkan bahwa seseorang bernama Fredy Kusnadi diduga terlibat dalam kasus penggelapan
                            sertifikat tanah milik ibundanya.</p>
                        <p>Dino menuding Fredy merupakan sindikat mafia tanah yang menggelapkan sertifikat tanah ibundanya
                            tersebut.</p>
                        <p>"Saya ingin memberikan tiga bukti mengenai keterlibatan Fredy dalam sindikat mafia tanah," ujar
                            Dino dalam video yang diunggah di akun Instagram miliknya, Senin (15/2/2021) dini hari.</p>
                        <p>Dino menuturkan, bukti pertama yang dimilikinya, yakni rekaman pengakuan dari seseorang bernama
                            Sherly. Sherly, kata Dino, saat ini telah ditangkap polisi dan berstatus tersangka.</p>
                        <div class="read-also-wrap">
                            <span class="read-also-wrap-title">Baca Juga:</span>
                            <a href="" class="read-also-wrap-item">Hurricane Ida updates: At least 1 death in
                                Louisiana as New Orleans loses power</a>
                        </div>
                        <p>"Saya memberikan apresiasi dan terima kasih karena Sherly telah memberikan pengakuan yang
                            sejujur-jujurnya mengenai peran Fredy dalam salah satu aksi penipuan terhadap rumah ibu saya,"
                            ucap Dino sebagaimana dilansir dari Antara.</p>
                        <p>Bukti kedua yang disampaikan Dino, yakni bukti transfer uang. Uang tersebut diduga merupakan
                            bagian dari hasil penggadaian sertifikat rumah milik ibunya di suatu koperasi.</p>
                        <p>"Bukti kedua yang saya miliki dan sudah saya berikan ke polisi adalah bukti transfer yang
                            diterima Fredy sebesar Rp 320 juta. Ini adalah sebagai bagian dari hasil penggadaian sertifikat
                            rumah milik ibu saya ke suatu koperasi. Dari sana diuangkan sekitar Rp 4 (miliar) sampai Rp 5
                            miliar dan dibagi-bagi di antara mereka. Paling besar mungkin itu bosnya mendapat Rp 1,7 miliar.
                            Yang lain antara Rp 1 miliar dan Rp 500 juta," kata Dino.</p>
                        <div class="read-also-wrap">
                            <span class="read-also-wrap-title">Baca Juga:</span>
                            <a href="" class="read-also-wrap-item">Hurricane Ida updates: At least 1 death in
                                Louisiana as New Orleans loses power</a>
                        </div>
                        <p>"Jadi jelas nama Fredy ada di berbagai kasus rumah, sedikitnya tiga rumah, tapi mungkin lebih
                            dari itu," sambung dia</p>
                    </div>
                    <div class="article-detail-pagination">
                        <a href="" class="active">1</a>
                        <a href="?page=detail">2</a>
                        <a href="?page=detail">3</a>
                        <a href="?page=detail">4</a>
                        <a href="" class="show-all">Tampilkan Semua</a>
                    </div>
                    <div class="article-detail-tag">
                        <span class="label card-headline-no-image-title-detail2">Tag</span>
                        <a href="" class="tag-item">SIKM</a>
                        <a href="" class="tag-item">Anies Baswedan</a>
                        <a href="" class="tag-item">PSBB</a>
                    </div>

                    <div class="share-baru-bottom">
                        <span>Share link :</span>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/fb.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/twitter.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/tele.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/wa.svg') }}" alt="">
                        </a>
                        <a href="#">
                            <img src="{{ asset('frontend/icons/link.svg') }}" alt="">
                        </a>
                    </div>
                </article>



                <div class="mt-30">

                    <h3 class="card-headline-no-image-title">Terkini</h3>
                    <div class="list">
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Darius Sinathrya Habiskan Lebih dari Rp2 Miliar untuk Anak
                                            Sekolah Bola di Eropa</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Jefri Nichol Tampil Culun Totalitas Perankan Penderita
                                            Asperger</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Gak Izin, Paula Verhoeven Ungkap Alasan Berangkat Umrah
                                            Tanpa Baim Wong</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Rumah Mewah Brisia Jodie Berdesain Minimalis Modern, Ada
                                            Studio Musiknya</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Tasyi Athasyia Bikin Dapur Termahal Versinya, 6 Barang Ini
                                            Total Ratusan Juta</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Inul Daratista Kenang Suka Duka Hidup Bareng Mertua Beda
                                            Agama</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Pamer Suami Kerja, Inul Daratista: Itu Yang Gue Mau</a>
                                    </h4>
                                    <p class="main-card--desc">Inul Daratista kembali pamer kemesraan dengan sang suami,
                                        Adam Suseno di media sosial.</p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Wika Salim Trauma Pernah Jerawatan Parah, Begini
                                            Perjuangannya</a>
                                    </h4>
                                    <p class="main-card--desc">Wika Salim pernah mengalami jerawatan parah yang membuatnya
                                        trauma.</p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Darius Sinathrya Habiskan Lebih dari Rp2 Miliar untuk Anak
                                            Sekolah Bola di Eropa</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Jefri Nichol Tampil Culun Totalitas Perankan Penderita
                                            Asperger</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Inul Daratista Kenang Suka Duka Hidup Bareng Mertua Beda
                                            Agama</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Pamer Suami Kerja, Inul Daratista: Itu Yang Gue Mau</a>
                                    </h4>
                                    <p class="main-card--desc">Inul Daratista kembali pamer kemesraan dengan sang suami,
                                        Adam Suseno di media sosial.</p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Wika Salim Trauma Pernah Jerawatan Parah, Begini
                                            Perjuangannya</a>
                                    </h4>
                                    <p class="main-card--desc">Wika Salim pernah mengalami jerawatan parah yang membuatnya
                                        trauma.</p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Darius Sinathrya Habiskan Lebih dari Rp2 Miliar untuk Anak
                                            Sekolah Bola di Eropa</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Jefri Nichol Tampil Culun Totalitas Perankan Penderita
                                            Asperger</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Inul Daratista Kenang Suka Duka Hidup Bareng Mertua Beda
                                            Agama</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Pamer Suami Kerja, Inul Daratista: Itu Yang Gue Mau</a>
                                    </h4>
                                    <p class="main-card--desc">Inul Daratista kembali pamer kemesraan dengan sang suami,
                                        Adam Suseno di media sosial.</p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Wika Salim Trauma Pernah Jerawatan Parah, Begini
                                            Perjuangannya</a>
                                    </h4>
                                    <p class="main-card--desc">Wika Salim pernah mengalami jerawatan parah yang membuatnya
                                        trauma.</p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Darius Sinathrya Habiskan Lebih dari Rp2 Miliar untuk Anak
                                            Sekolah Bola di Eropa</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="list-element">
                            <article class="main-card">
                                <div class="main-card-img-wrap">
                                    <img alt="image" class="main-card-img" width="213" height="130"
                                        src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                                </div>
                                <div class="main-card--info">
                                    <h4 class="main-card--title">
                                        <a href="?page=detail">Jefri Nichol Tampil Culun Totalitas Perankan Penderita
                                            Asperger</a>
                                    </h4>
                                    <p class="main-card--desc">Anak Nella Kharisma dan Dory Harsa telah lahir pada 21
                                        Agustus lalu, secantik apa? </p>
                                    <div class="category-and-time">
                                        <span>11:15 WIB</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div>
                        <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
                    </div>
                </div>

            </div>
            @include('frontend.dekstop.components.sidebar')
        </div>
    </div>
@endsection
