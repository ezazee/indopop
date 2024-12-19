@extends('frontend.dekstop.master.master-app')

@section('content')
    <div class="main-content">

        {{-- Ads --}}
        @include('frontend.dekstop.components.ads-1')

        <div class="mt-20">
            <h3 class="card-headline-no-image-title">{{ $post->kategori->nama_kategori }}</h3>
        </div>

        <div class="content-home" id="content">
            <div class="content-article">
                <article class="article-detail">
                    <h1 class="article-detail--title">{{ $post->title }}</h1>
                    @if ($post->description )
                    <div class="article-detail--desc">{{ $post->description }}</div>
                    @endif
                    <div class="article-detail--info">
                        <div class="author">
                            <strong>{{ $post->user->name }}</strong>
                        </div>
                        <div class="date">
                            {{ \Carbon\Carbon::parse($post->created_at)->translatedFormat('l, d F Y | H:i') }} WIB
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
                            src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}"
                            class="card-headline-img" />
                        <figcaption>{{ $post->image_caption }}</figcaption>
                    </figure>
                    <div class="article-detail--body">
                        <p><strong>Indopop.id</strong> {!! nl2br(str_replace(['[caption]', '[/caption]'], '', $post->content)) !!}
                        </p>
                    </div>
                    <div class="article-detail-tag">
                        <span class="label card-headline-no-image-title-detail2">Tag</span>
                        @foreach ($tagsdetail as $index => $tags)
                        <a href="" class="tag-item"> {{ $tags->nama_tags }}</a>
                        @endforeach
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
