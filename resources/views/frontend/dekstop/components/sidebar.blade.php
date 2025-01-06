<div class="content-sidebar">
    <div>
        @include('frontend.dekstop.components.ads-2')
        <div>
            <h3 class="card-headline-no-image-title">Terkini</h3>
            @foreach ($postTerkini as $item)
            <article class="card-four">
                <div class="card-four-img-wrap">
                    <img alt="image" class="card-four-img"
                        src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                </div>
                <div class="card-four--info">
                    <h4 class="card-four--title">
                        <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{$item->title}}</a>
                    </h4>
                    <div class="category-and-time">
                        <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{$item->kategori->nama_kategori}}</a>
                        <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                    </div>
                </div>
            </article>
            @endforeach
        </div>
        {{-- Ads --}}
        @include('frontend.dekstop.components.ads-3')
        <div class="live-report-card mb-20">
            <h2 class="live-report-card--heading-side">Video</h2>
            <div class="live-report-card-img-wrap">
                <img alt="image" class="live-report-card-img" width="270" height="201"
                    src="https://staging.indopop.id/desktop/assets/images/headline.jpg" />
                <svg class="live-report-card-img--play" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
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
            @foreach ($postTerpopuler as $item)
            <article class="card-four">
                <div class="card-four-img-wrap">
                    <img alt="image" class="card-four-img"
                        src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                </div>
                <div class="card-four--info">
                    <h4 class="card-four--title">
                        <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{$item->title}}</a>
                    </h4>
                    <div class="category-and-time">
                        <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{$item->kategori->nama_kategori}}</a>
                        <span>{{ \Carbon\Carbon::parse($item->created_at)->format('H:i') }} WIB</span>
                    </div>
                </div>
            </article>
            @endforeach
        </div>
    </div>
</div>
