@extends('frontend.master.master-app')

@section('content')
    <div class="main-content">

        {{-- Ads --}}
        @include('frontend.components.ads-1')

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
            <div class="content-sidebar">
                <div>
                    {{-- Ads --}}
                    @include('frontend.components.ads-2')
                    <div>
                        <h3 class="card-headline-no-image-title">Terkini</h3>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">8 Fakta Megan Fox, Aktris yang Tampil Sangat Seksi di MTV VMA
                                        2021</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Flexing</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">8 Fakta Megan Fox, Aktris yang Tampil Sangat Seksi di MTV VMA
                                        2021</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Gosip</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">8 Fakta Megan Fox, Aktris yang Tampil Sangat Seksi di MTV VMA
                                        2021</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Me And Moms</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">8 Fakta Megan Fox, Aktris yang Tampil Sangat Seksi di MTV VMA
                                        2021</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">K-Pop</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">8 Fakta Megan Fox, Aktris yang Tampil Sangat Seksi di MTV VMA
                                        2021</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Vibes</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    {{-- Ads --}}
                    @include('frontend.components.ads-3')

                    <div class="live-report-card mb-20">
                        <h2 class="live-report-card--heading-side">Video</h2>
                        <div class="live-report-card-img-wrap">
                            <img alt="image" class="live-report-card-img" width="270" height="201"
                                src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            <svg class="live-report-card-img--play" xmlns="http://www.w3.org/2000/svg" width="32"
                                height="32" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </svg>
                        </div>
                        <h3 class="live-report-card--title">
                            <a href="https://www.youtube.com/watch?v=rH33JpvE4yo" target="_blank">8 Fakta Megan Fox,
                                Aktris yang Tampil Sangat Seksi di MTV VMA 2021</a>
                        </h3>
                        <a href="https://www.youtube.com/@indopopid" target="_blank" class="live-report-card-more">Video
                            Lainnya</a>
                    </div>

                    <div>
                        <h3 class="card-headline-no-image-title">Terpopuler</h3>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">Heboh Kasus P. Diddy, Penolakan Agnez Mo Ikut Pergaulan
                                        Seleb</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Gosip</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">Siap-Siap! Lisa BLACKPINK Gelar Fan Meet Up Pada 15</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Parenting</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">Nikita Mirzani Ngomel Pakai Filter Lemon, Diduga Ada Luka
                                        Kegampar Lolly</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Flexing</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">Video Andre Taulany Rangkulan Mesra Sama Eca Aura Tuai
                                        Kritik</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Dangdut</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                        <article class="card-four">
                            <div class="card-four-img-wrap">
                                <img alt="image" class="card-four-img"
                                    src="https://staging.indopop.id/desktop/assets/images/detailpage.jpg" />
                            </div>
                            <div class="card-four--info">
                                <h4 class="card-four--title">
                                    <a href="?page=detail">Bernadya Buka Suara usai Kontennya Penuh Komentar Pelecehan</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="?page=detail">Me And Moms</a>
                                    <span>11:15 WIB</span>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
