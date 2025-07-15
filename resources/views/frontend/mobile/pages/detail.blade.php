@extends('frontend.mobile.master.master-app')

<style>
    .article-detail--body img {
        width: 100% !important;
        height: auto !important;
        border-radius: 8px !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
    }

    .article-detail--body  iframe {
        width: 100% !important;
        height: 800px !important;
        margin: 10px 0 !important;
        border-radius: 8px !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
    }

    .article-detail--body i {
        display: flex ;
        justify-content: center;
        padding: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: var(--gray-color);
        background: #f2f2f2;
    }

    .bacajuga {
        margin: 0 0 1rem;
        padding: 1rem;
        background-color: #f9f9f9;
        border-left: 5px solid var(--red-primary);
        font-style: italic;
        color: #333;
        border-radius: 5px;
        font-size: 14px;
        line-height: 1.5;
    }

    .bacajuga a {
        color: var(--red-primary) !important;
        text-decoration: underline;
    }

</style>
@section('content')
    <div class="kanal-wrap">
        <h3 class="base-title-desc">{{ $post->kategori->nama_kategori }}</h3>
        <div class="date"><span style="font-size: 10px;">{{ $post->created_at ? \Carbon\Carbon::parse($post->created_at)->isoFormat('DD MMMM, YYYY') : '' }} | {{ $post->created_at ? \Carbon\Carbon::parse($post->created_at)->format('H:i:s') : '' }}</span>
 </div>
    </div>
    <article class="article-detail">
        <div class="t5-b20">
            <h1 class="article-detail--title">{{ $post->title }}</h1>
            @if ($post->description)
                <div class="article-detail--desc">{{ $post->description }}</div>
            @endif
            <div class="article-detail--info">
                <div class="author"> {{ $post->user->name }} </div>
            </div>
        </div>
        <div class="share-baru-header">
            <?php $url = urlencode(url()->current()); ?>

                        <a href="https://www.facebook.com/sharer/sharer.php?u={{ $url }}" target="_blank">
                            <img src="{{ asset('frontend/icons/fb.svg') }}" alt="Facebook">
                        </a>

                        <!-- Twitter -->
                        <a href="https://twitter.com/intent/tweet?url={{ $url }}" target="_blank">
                            <img src="{{ asset('frontend/icons/twitter.svg') }}" alt="Twitter">
                        </a>

                        <!-- Telegram -->
                        <a href="https://t.me/share/url?url={{ $url }}" target="_blank">
                            <img src="{{ asset('frontend/icons/tele.svg') }}" alt="Telegram">
                        </a>

                        <!-- WhatsApp -->
                        <a href="https://api.whatsapp.com/send?text={{ $url }}" target="_blank">
                            <img src="{{ asset('frontend/icons/wa.svg') }}" alt="WhatsApp">
                        </a>

                        <!-- Copy Link -->
                        <a href="javascript:void(0);" onclick="copyToClipboard()">
                            <img src="{{ asset('frontend/icons/link.svg') }}" alt="Copy Link">
                        </a>
        </div>
        <figure class="article-detail-figure">
            <img alt="image" src="{{ is_array($post->gambar) ? $post->gambar[0] : $post->gambar }}"
                class="card-headline-img" />
            <figcaption>{{ $post->image_caption }}</figcaption>
        </figure>
        <a href="#!" rel="">
            <div class="banner-ads--big">
                @include('frontend.mobile.components.ads-7')
            </div>
        </a>
        <div class="t0-b20">
            <div class="article-detail--body">
                         @php
                                $pCount = 0;
                                $bacaIndex = 0;

                                $content = preg_replace_callback(
                                    '/(?:<caption\b[^>]*>|\[caption[^\]]*\])(.*?)(?:<\/caption>|\[\/caption\])/is',
                                    function ($matches) {
                                        preg_match_all('/<img[^>]+>/i', $matches[1], $images);
                                        return implode('', $images[0]);
                                    },
                                    $post->content
                                );

                                $content = preg_replace_callback(
                                    '/<img[^>]+alt="([^"]*)"[^>]*>/i',
                                    function ($matches) {
                                        return $matches[0] . '<i>' . htmlspecialchars($matches[1]) . '</i><br>';
                                    },
                                    $content
                                );

                                $content = preg_replace("/\r\n|\r|\n/", "\n", $content);
                                $content = preg_replace("/\n{2,}/", "\n\n", $content);
                                $content = preg_replace('/\n\n/', "</p>\n<p>", $content);
                                $content = '<p>' . trim($content) . '</p>';

                                $finalContent = preg_replace_callback('/<p\b[^>]*>(.*?)<\/p>/is', function ($matches) use (&$pCount, &$bacaIndex, $bacaJuga) {
                                    $pCount++;
                                    $paragraph = $matches[0];

                                    $adsScripts = [
                                        2 => '',
                                        6 => '',
                                    ];

                                    $output = $paragraph;

                                    if (($pCount === 3 || $pCount === 6) && isset($bacaJuga[$bacaIndex])) {
                                        $related = $bacaJuga[$bacaIndex];
                                        $url = route('detail.desktop', ['slug' => $related->slug]);
                                        $title = htmlspecialchars($related->title);

                                        $bacaJugaHtml = '
                                            <blockquote class="bacajuga">
                                                <strong>Baca Juga:</strong>
                                                <a href="' . $url . '">' . $title . '</a>
                                            </blockquote>';

                                        $output .= $bacaJugaHtml;
                                        $bacaIndex++;
                                    }

                                    if (isset($adsScripts[$pCount])) {
                                        $output .= $adsScripts[$pCount];
                                    }

                                    return $output;
                                }, $content);

                            @endphp

                            {!! $finalContent !!}            
            </div>

            <div class="article-detail-tag">
                <span class="label card-headline-no-image-title">Tag</span>
                @foreach ($tagsdetail as $index => $tags)
                    <a href="{{ route('bytag', ['slug' => $tags->slug]) }}" class="tag-item"> {{ $tags->nama_tags }}</a>
                @endforeach
            </div>
            <div class="share-baru-bottom mb-20">
                <?php $url = urlencode(url()->current()); ?>

                <a href="https://www.facebook.com/sharer/sharer.php?u={{ $url }}" target="_blank">
                    <img src="{{ asset('frontend/icons/fb.svg') }}" alt="Facebook">
                </a>

                <!-- Twitter -->
                <a href="https://twitter.com/intent/tweet?url={{ $url }}" target="_blank">
                    <img src="{{ asset('frontend/icons/twitter.svg') }}" alt="Twitter">
                </a>

                <!-- Telegram -->
                <a href="https://t.me/share/url?url={{ $url }}" target="_blank">
                    <img src="{{ asset('frontend/icons/tele.svg') }}" alt="Telegram">
                </a>

                <!-- WhatsApp -->
                <a href="https://api.whatsapp.com/send?text={{ $url }}" target="_blank">
                    <img src="{{ asset('frontend/icons/wa.svg') }}" alt="WhatsApp">
                </a>

                <!-- Copy Link -->
                <a href="javascript:void(0);" onclick="copyToClipboard()">
                    <img src="{{ asset('frontend/icons/link.svg') }}" alt="Copy Link">
                </a>
            </div>
        </div>
    </article>
    <a href="#!" rel="">
        <div class="banner-ads--big">
            @include('frontend.mobile.components.ads-3')
        </div>
    </a>
    <div id="bn_8uYxT1RY61"></div><script>'use strict';(function(C,b,m,r){function t(){b.removeEventListener("scroll",t);f()}function u(){p=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(p.unobserve(n.target),f())})},{root:null,rootMargin:"400px 200px",threshold:0});p.observe(e)}function f(){(e=e||b.getElementById("bn_"+m))?(e.innerHTML="",e.id="bn_"+v,q={act:"init",id:m,rnd:v,ms:w},(d=b.getElementById("rcMain"))?c=d.contentWindow:D(),c.rcMain?c.postMessage(q,x):c.rcBuf.push(q)):g("!bn")}function E(a,n,F,y){function z(){var h=
n.createElement("script");h.type="text/javascript";h.src=a;h.onerror=function(){k++;5>k?setTimeout(z,10):g(k+"!"+a)};h.onload=function(){y&&y();k&&g(k+"!"+a)};F.appendChild(h)}var k=0;z()}function D(){try{d=b.createElement("iframe"),d.style.setProperty("display","none","important"),d.id="rcMain",b.body.insertBefore(d,b.body.children[0]),c=d.contentWindow,l=c.document,l.open(),l.close(),A=l.body,Object.defineProperty(c,"rcBuf",{enumerable:!1,configurable:!1,writable:!1,value:[]}),E("https://go.rcvlink.com/static/main.js",
l,A,function(){for(var a;c.rcBuf&&(a=c.rcBuf.shift());)c.postMessage(a,x)})}catch(a){B(a)}}function B(a){g(a.name+": "+a.message+"\t"+(a.stack?a.stack.replace(a.name+": "+a.message,""):""))}function g(a){console.error(a);(new Image).src="https://go.rcvlinks.com/err/?code="+m+"&ms="+((new Date).getTime()-w)+"&ver="+G+"&text="+encodeURIComponent(a)}try{var G="231101-0007",x=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),e=b.getElementById("bn_"+m),v=Math.random().toString(36).substring(2,
15),w=(new Date).getTime(),p,H=!("IntersectionObserver"in C),q,d,c,l,A;e?"scroll"==r?b.addEventListener("scroll",t):"lazy"==r?H?f():"loading"==b.readyState?b.addEventListener("DOMContentLoaded",u):u():f():"loading"==b.readyState?b.addEventListener("DOMContentLoaded",f):g("!bn")}catch(a){B(a)}})(window,document,"8uYxT1RY61","");
</script>
    <!-- terpopuler -->
    <div class="mt-20 bg1">
        <h3 class="base-title pl-20 pt-20">Terpopuler</h3>
        <div class="list">
            @foreach ($postTerpopuler as $item)
                <div class="list-element">
                    <article class="main-card">
                        <div class="main-card--infoml0">
                            <h4 class="main-card--title">
                                <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                            </h4>
                            <div class="category-and-time">
                            <span style="font-size: 10px;">{{ $item->created_at ? \Carbon\Carbon::parse($item->created_at)->isoFormat('DD MMMM, YYYY') : '' }} | {{ $item->created_at ? \Carbon\Carbon::parse($item->created_at)->format('H:i:s') : '' }}</span>
                            </div>
                        </div>
                    </article>
                </div>
            @endforeach
        </div>
    </div>
    <!-- end terpopuler -->
    <!-- dangdut -->
    <div class="mt-20">
        <h3 class="base-title pl-20 mb-10">{{ $post->kategori->nama_kategori }}</h3>
        @foreach ($relatedPosts->take(1) as $item)
            <article class="card-headline">
                <img alt="image" class="card-headline-img"
                    src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                <div class="card-headline-info">
                    <h4 class="card-headline-title">
                        <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                    </h4>
                    <p class="card-headline-desc">{!! Str::limit(strip_tags($item->content), 100) !!}</p>
                </div>
            </article>
        @endforeach
        <div>
            @foreach ($relatedPosts->slice(1, 5) as $item)
                <article class="main-card">
                    <div class="main-card-img-wrap">
                        <img alt="image" class="main-card-img"
                            src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                    </div>
                    <div class="main-card--info">
                        <h4 class="main-card--title">
                            <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                        </h4>
                        <div class="category-and-time">
                            <span style="font-size: 10px;">{{ $item->created_at ? \Carbon\Carbon::parse($item->created_at)->isoFormat('DD MMMM, YYYY') : '' }} | {{ $item->created_at ? \Carbon\Carbon::parse($item->created_at)->format('H:i:s') : '' }}</span>
                        </div>
                    </div>
                </article>
            @endforeach
            <div class="t10-b20 mb-20">
                <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
            </div>
        </div>
    </div>
    <!-- end Dangdut -->
    <!-- start terkini -->
    <div class="mt-20">
        <h3 class="base-title pl-20">Terkini</h3>
        <div>
            <div class="list">
                @foreach ($postTerkini as $item)
                    <div class="list-element">
                        <article class="main-card">
                            <div class="main-card-img-wrap">
                                <img alt="image" class="main-card-img"
                                    src="{{ is_array($item->gambar) ? $item->gambar[0] : $item->gambar }}" />
                            </div>
                            <div class="main-card--info">
                                <h4 class="main-card--title">
                                    <a
                                        href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->title }}</a>
                                </h4>
                                <div class="category-and-time">
                                    <a href="{{ route('detail.desktop', ['slug' => $item->slug]) }}">{{ $item->kategori->nama_kategori }}</a>
                            <span style="font-size: 10px;">{{ $item->created_at ? \Carbon\Carbon::parse($item->created_at)->isoFormat('DD MMMM, YYYY') : '' }} | {{ $item->created_at ? \Carbon\Carbon::parse($item->created_at)->format('H:i:s') : '' }}</span>
                                </div>
                            </div>
                        </article>
                    </div>
                @endforeach
            </div>
            <div class="t10-b20 mb-20">
                <button class="main-card-loadmore" id="loadmore">Tampilkan lebih banyak</button>
            </div>
            <script>
                function copyToClipboard() {
                var tempInput = document.createElement("input");
                tempInput.value = window.location.href;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                alert("Link copied to clipboard!");
            }

            </script>
        @endsection
