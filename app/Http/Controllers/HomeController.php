<?php

namespace App\Http\Controllers;

use Jenssegers\Agent\Agent;
use App\Models\Post;
use App\Models\Tag;
use App\Models\Categori;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Helpers\CacheHelper;

class HomeController extends Controller
{
    protected $agent;

    public function __construct()
    {
        $this->agent = new Agent();
    }

    public function index()
    {
        $usedPostIds = [];
        $postheadline = CacheHelper::remember('home_headline', now()->addMinutes(2), function () use (&$usedPostIds) {
            return Post::with('kategori', 'user')
            ->where('headline', 'yes')
            ->where('status', 'publish')
            ->orderBy('created_at', 'desc')
            ->take(15)
            ->get();
        });

        $topPostheadline = $postheadline->shift();

        $otherPostsheadline = $postheadline;

        $usedPostIds = array_merge($usedPostIds, $postheadline->pluck('id')->toArray());

       if ($topPostheadline) {
           $usedPostIds[] = $topPostheadline->id;
       }

        $postTerkini = CacheHelper::remember('home_terkini', now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->latest()
            ->take(5)
            ->get();
        });

        $postTerpopuler = CacheHelper::remember('home_terpopuler', now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->whereBetween('created_at', [
                Carbon::today()->subDays(3)->startOfDay(),
                Carbon::now()->endOfDay()              
            ])
            ->orderBy('view', 'desc')
            ->take(5)
            ->get();
        });
        
        $getPostByCategory = function($categoryName, $limit = 6) use (&$usedPostIds) {
            return CacheHelper::remember("home_category_{$categoryName}", now()->addMinutes(2), function () use ($categoryName, $limit, &$usedPostIds) {
                $posts = Post::with('kategori','user')
                    ->whereHas('kategori', function ($query) use ($categoryName) {
                        $query->where('nama_kategori', $categoryName);
                    })
                    ->whereNotIn('id', $usedPostIds)
                    ->where('status','publish')
                    ->latest()
                    ->take($limit)
                    ->get();

                $usedPostIds = array_merge($usedPostIds, $posts->pluck('id')->toArray());
                return $posts;
            });
        };

        $postDangdut = $getPostByCategory('Dangdut', 5);
        $postFlexing = $getPostByCategory('Flexing', 5);
        $postGosip = $getPostByCategory('Gosip', 5);
        $postKPop = $getPostByCategory('K-POP', 5);
        $postVibes = $getPostByCategory('Vibes', 5);
        $postMeandmom = $getPostByCategory('Me and Moms', 5);

        $topPostDangdut = $postDangdut->shift();
        $otherPostsDangdut = $postDangdut;

        $topPostFlexing = $postFlexing->shift();
        $otherPostsFlexing = $postFlexing;

        $topPostGosip = $postGosip->shift();
        $otherPostsGosip = $postGosip;

        $topPostKPop = $postKPop->shift();
        $otherPostsKPop = $postKPop;

        $topPostVibes = $postVibes->shift();
        $otherPostsVibes = $postVibes;

        $topPostMeandmom = $postMeandmom->shift();
        $otherPostsMeandmom = $postMeandmom;

        $collections = [$otherPostsheadline,$topPostheadline,$postDangdut, $topPostDangdut, $otherPostsDangdut, $topPostFlexing, $otherPostsFlexing, $topPostGosip, $otherPostsGosip, $topPostKPop, $otherPostsKPop, $topPostVibes, $otherPostsVibes, $topPostMeandmom, $otherPostsMeandmom, $postTerkini, $postTerpopuler];

        foreach ($collections as &$collection) {
            if (empty($collection)) {
                $collection = null;
                continue;
            }

            foreach ($collection as $post) {
                if (is_object($post) && isset($post->gambar) && is_string($post->gambar)) {
                    $post->gambar = explode('|', $post->gambar);
                }
            }
        }
        unset($collection);


        if ($this->agent->isMobile()) {
            return view('frontend.mobile.mobile', compact('otherPostsheadline','topPostheadline','postTerkini','postTerpopuler','topPostDangdut','otherPostsDangdut','topPostFlexing','otherPostsFlexing','topPostGosip','otherPostsGosip','topPostKPop','otherPostsKPop','topPostVibes','otherPostsVibes','topPostMeandmom','otherPostsMeandmom'))->with([
                'content' => 'frontend.mobile.pages.index',
            ]);
        } else {
            return view('frontend.dekstop.dekstop', compact('otherPostsheadline','topPostheadline','postTerkini','postTerpopuler','topPostDangdut','otherPostsDangdut','topPostFlexing','otherPostsFlexing','topPostGosip','otherPostsGosip','topPostKPop','otherPostsKPop','topPostVibes','otherPostsVibes','topPostMeandmom','otherPostsMeandmom'))->with([
                'content' => 'frontend.desktop.pages.index',
            ]);
        }

    }

    public function detail($slug)
    {
        $post = CacheHelper::remember("article_{$slug}", now()->addHours(24), function () use ($slug) {        
            return Post::with(['kategori', 'user', 'reporter', 'tags'])->where('slug', $slug)->where('status', 'publish')->firstOrFail();
        });

        $postTerkini = CacheHelper::remember("detail_terkini", now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
                ->where('status', 'publish')
                ->latest()
                ->take(5)
                ->get();
        });

        $postTerkiniBottom = CacheHelper::remember("detail_terkini_bottom", now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->latest()
            ->take(20)
            ->get();
        });

        $relatedPosts = CacheHelper::remember("article_related_{$post->id}", now()->addMinutes(2), function () use ($post) {
            return Post::whereHas('tags', function ($q) use ($post) {
                $q->whereIn('tags.id', $post->tags->pluck('id'));
            })
            ->where('posts.id', '!=', $post->id)
            ->select('posts.*')
            ->take(2)
            ->get();
        });

        $firstRelated = $relatedPosts->get(0);
        $secondRelated = $relatedPosts->get(1);

        $bacaJuga = [
            3 => $firstRelated,
            6 => $secondRelated
        ];

        if ($this->agent->isMobile()) {
            $adsScripts = [
                1 => '<div>
                        <p style="display:none;">rb-1</p>
                    </div>',
                3 => '<div>
                        <p style="display:none;">rb-2</p>
                    </div>',
                4 => '<div data-type="_mgwidget" data-widget-id="1799012"> 
                                                </div> 
                                                <script>(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq"); 
                                                </script>',
                6 => '
                    <div id="bn_NZOkwkiISs"></div><script>;(function(C,b,m,r){function t(){b.removeEventListener("scroll",t);f()}function u(){p=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(p.unobserve(n.target),f())})},{root:null,rootMargin:"400px 200px",threshold:0});p.observe(e)}function f(){(e=e||b.getElementById("bn_"+m))?(e.innerHTML="",e.id="bn_"+v,q={act:"init",id:m,rnd:v,ms:w},(d=b.getElementById("rcMain"))?c=d.contentWindow:D(),c.rcMain?c.postMessage(q,x):c.rcBuf.push(q)):g("!bn")}function E(a,n,F,y){function z(){var h=
                    n.createElement("script");h.type="text/javascript";h.src=a;h.onerror=function(){k++;5>k?setTimeout(z,10):g(k+"!"+a)};h.onload=function(){y&&y();k&&g(k+"!"+a)};F.appendChild(h)}var k=0;z()}function D(){try{d=b.createElement("iframe"),d.style.setProperty("display","none","important"),d.id="rcMain",b.body.insertBefore(d,b.body.children[0]),c=d.contentWindow,l=c.document,l.open(),l.close(),A=l.body,Object.defineProperty(c,"rcBuf",{enumerable:!1,configurable:!1,writable:!1,value:[]}),E("https://go.rcvlink.com/static/main.js",
                    l,A,function(){for(var a;c.rcBuf&&(a=c.rcBuf.shift());)c.postMessage(a,x)})}catch(a){B(a)}}function B(a){g(a.name+": "+a.message+"\t"+(a.stack?a.stack.replace(a.name+": "+a.message,""):""))}function g(a){console.error(a);(new Image).src="https://go.rcvlinks.com/err/?code="+m+"&ms="+((new Date).getTime()-w)+"&ver="+G+"&text="+encodeURIComponent(a)}try{var G="231101-0007",x=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),e=b.getElementById("bn_"+m),v=Math.random().toString(36).substring(2,
                    15),w=(new Date).getTime(),p,H=!("IntersectionObserver"in C),q,d,c,l,A;e?"scroll"==r?b.addEventListener("scroll",t):"lazy"==r?H?f():"loading"==b.readyState?b.addEventListener("DOMContentLoaded",u):u():f():"loading"==b.readyState?b.addEventListener("DOMContentLoaded",f):g("!bn")}catch(a){B(a)}})(window,document,"NZOkwkiISs","");
                    </script>
                    ',
                8 => '<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7366174212541814"			
                                                    crossorigin="anonymous"></script>
                                                    <ins class="adsbygoogle"
                                                    style="display:inline-block;width:336px;height:280px"
                                                    data-ad-client="ca-pub-7366174212541814"
                                                    data-ad-slot="1614428017"
                                                    data-ad-format="auto"
                                                    data-full-width-responsive="true"></ins>
                                                    <script>
                                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                                    </script></div>',
                9 => '<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7366174212541814"
                                                    crossorigin="anonymous"></script>
                                                    <ins class="adsbygoogle"
                                                    style="display:inline-block;width:336px;height:280px"
                                                    data-ad-client="ca-pub-7366174212541814"
                                                    data-ad-slot="6378102865"
                                                    data-ad-format="auto"
                                                    data-full-width-responsive="true"></ins>
                                                    <script>
                                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                                    </script></div>',
                10 => '<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7366174212541814"
                                                    crossorigin="anonymous"></script>
                                                    <ins class="adsbygoogle"
                                                    style="display:inline-block;width:336px;height:280px"
                                                    data-ad-client="ca-pub-7366174212541814"
                                                    data-ad-slot="5120861512"
                                                    data-ad-format="auto"
                                                    data-full-width-responsive="true"></ins>
                                                    <script>
                                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                                    </script></div>',
            ];
        } else {
            $adsScripts = [
                1 => '<div>
                        <p style="display:none;">rb-1</p>
                    </div>',
                3 => '<div>
                        <p style="display:none;">rb-2</p>
                        </div>',
                4 => '<div data-type="_mgwidget" data-widget-id="1799012"> 
                                                </div> 
                                                <script>(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq"); 
                                                </script>',
                6 => '<div id="bn_NZOkwkiISs"></div><script>;(function(C,b,m,r){function t(){b.removeEventListener("scroll",t);f()}function u(){p=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(p.unobserve(n.target),f())})},{root:null,rootMargin:"400px 200px",threshold:0});p.observe(e)}function f(){(e=e||b.getElementById("bn_"+m))?(e.innerHTML="",e.id="bn_"+v,q={act:"init",id:m,rnd:v,ms:w},(d=b.getElementById("rcMain"))?c=d.contentWindow:D(),c.rcMain?c.postMessage(q,x):c.rcBuf.push(q)):g("!bn")}function E(a,n,F,y){function z(){var h=
                        n.createElement("script");h.type="text/javascript";h.src=a;h.onerror=function(){k++;5>k?setTimeout(z,10):g(k+"!"+a)};h.onload=function(){y&&y();k&&g(k+"!"+a)};F.appendChild(h)}var k=0;z()}function D(){try{d=b.createElement("iframe"),d.style.setProperty("display","none","important"),d.id="rcMain",b.body.insertBefore(d,b.body.children[0]),c=d.contentWindow,l=c.document,l.open(),l.close(),A=l.body,Object.defineProperty(c,"rcBuf",{enumerable:!1,configurable:!1,writable:!1,value:[]}),E("https://go.rcvlink.com/static/main.js",
                        l,A,function(){for(var a;c.rcBuf&&(a=c.rcBuf.shift());)c.postMessage(a,x)})}catch(a){B(a)}}function B(a){g(a.name+": "+a.message+"\t"+(a.stack?a.stack.replace(a.name+": "+a.message,""):""))}function g(a){console.error(a);(new Image).src="https://go.rcvlinks.com/err/?code="+m+"&ms="+((new Date).getTime()-w)+"&ver="+G+"&text="+encodeURIComponent(a)}try{var G="231101-0007",x=location.origin||location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),e=b.getElementById("bn_"+m),v=Math.random().toString(36).substring(2,
                        15),w=(new Date).getTime(),p,H=!("IntersectionObserver"in C),q,d,c,l,A;e?"scroll"==r?b.addEventListener("scroll",t):"lazy"==r?H?f():"loading"==b.readyState?b.addEventListener("DOMContentLoaded",u):u():f():"loading"==b.readyState?b.addEventListener("DOMContentLoaded",f):g("!bn")}catch(a){B(a)}})(window,document,"NZOkwkiISs","");
                        </script>',
                7 => '<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7366174212541814"
                                                    crossorigin="anonymous"></script>
                                                    <ins class="adsbygoogle"
                                                    style="display:block"
                                                    data-ad-client="ca-pub-7366174212541814"
                                                    data-ad-slot="2212429475"
                                                    data-ad-format="auto"
                                                    data-full-width-responsive="true"></ins>
                                                    <script>
                                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                                    </script></div>',
                8 => '<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7366174212541814"					
                                                    crossorigin="anonymous"></script>
                                                    <ins class="adsbygoogle"
                                                    style="display:block"
                                                    data-ad-client="ca-pub-7366174212541814"
                                                    data-ad-slot="4647021127"								
                                                    data-ad-format="auto"
                                                    data-full-width-responsive="true"></ins>
                                                    <script>
                                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                                    </script></div>',
                9 => '<div><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7366174212541814"						
                                                    crossorigin="anonymous"></script>
                                                    <ins class="adsbygoogle"
                                                    style="display:block"
                                                    data-ad-client="ca-pub-7366174212541814"
                                                    data-ad-slot="4044487523"
                                                    data-ad-format="auto"
                                                    data-full-width-responsive="true"></ins>
                                                    <script>
                                                    (adsbygoogle = window.adsbygoogle || []).push({});	
                                                    </script></div>',
            ];
        }


        $content = $post->content;

        $content = preg_replace_callback('/(?:<caption\b[^>]*>|\[caption[^\]]*\])(.*?)(?:<\/caption>|\[\/caption\])/is', function ($matches) {
            preg_match_all('/<img[^>]+>/i', $matches[1], $images);
            return implode('', $images[0]);
        }, $content);

        $content = preg_replace_callback('/<img[^>]+alt="([^"]*)"[^>]*>/i', function ($matches) {
            return $matches[0] . '<i>' . htmlspecialchars($matches[1]) . '</i><br>';
        }, $content);

        $content = preg_replace("/\r\n|\r|\n/", "\n", $content);
        $content = preg_replace("/\n{2,}/", "\n\n", $content);
        $content = preg_replace('/\n\n/', "</p>\n<p>", $content);
        $content = '<p>' . trim($content) . '</p>';

        $pCount = 0;
        $formatted = preg_replace_callback('/<p\b[^>]*>(.*?)<\/p>/is', function ($matches) use (&$pCount, $bacaJuga, $adsScripts) {
            $pCount++;
            $output = $matches[0];

            if (isset($bacaJuga[$pCount])) {
                $related = $bacaJuga[$pCount];
                if ($related) {
                    $url = route('detail.desktop', ['slug' => $related->slug]);
                    $title = htmlspecialchars($related->title);
                    $output .= '<blockquote class="bacajuga"><strong>Baca Juga:</strong> <a href="' . $url . '">' . $title . '</a></blockquote>';
                }
            }

            if (isset($adsScripts[$pCount])) {
                $output .= $adsScripts[$pCount];
            }

            return $output;
        }, $content);

        $page = request()->get('page', 1);
        $currentPage = $page === 'all' ? 'all' : (int) $page;
        $totalPages = 1;
        $formatted_content = $formatted;

        if ($post->multipages === 'yes' && $currentPage !== 'all') {
            $parts = preg_split('/(<\/p>)/i', $formatted, -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY);
            $chunks = array_chunk($parts, ceil(count($parts) / 2));
            $formatted_chunks = array_map(function ($chunk) {
                return implode('', $chunk);
            }, $chunks);

            $formatted_content = $formatted_chunks[$currentPage - 1] ?? '';
            $totalPages = count($formatted_chunks);
        }
        $postTerpopuler = CacheHelper::remember("detail_terpopuler", now()->addMinutes(2), function () { 
            return Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->orderBy('view', 'desc')
            ->take(5)
            ->get();
        });

        $allPosts = collect([$post, $postTerpopuler, $postTerkini, $relatedPosts, $postTerkiniBottom])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost && $singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        $post->increment('view');
        $tagsdetail = $post->tags;

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.detail', compact(
                'relatedPosts', 'postTerkiniBottom', 'post', 'postTerkini',
                'postTerpopuler', 'tagsdetail', 'formatted_content',
                'totalPages', 'currentPage'
            ));
        } else {
            return view('frontend.dekstop.pages.detail', compact(
                'relatedPosts', 'postTerkiniBottom', 'post', 'postTerkini',
                'postTerpopuler', 'tagsdetail', 'formatted_content',
                'totalPages', 'currentPage'
            ));
        }
    }

    public function redaksi()
    {
        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();

        $allPosts = collect([$postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.redaksi',compact('postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.redaksi',compact('postTerkini','postTerpopuler'));
        }
    }


    public function kebijakanPrivasi()
    {

        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();

        $allPosts = collect([$postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.kebijakan-privasi',compact('postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.kebijakan-privasi',compact('postTerkini','postTerpopuler'));
        }
    }

    public function kodeEtik()
    {

        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();

        $allPosts = collect([$postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.kode-etik',compact('postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.kode-etik',compact('postTerkini','postTerpopuler'));
        }
    }

    public function visiMisi()
    {
        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();

        $allPosts = collect([$postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.visi-misi',compact('postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.visi-misi',compact('postTerkini','postTerpopuler'));
        }
    }

    public function siteMap()
    {

        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();

        $allPosts = collect([$postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.site-map',compact('postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.site-map',compact('postTerkini','postTerpopuler'));
        }
    }

    public function kanal($slug)
    {
        $category = Categori::where('slug', $slug)->firstOrFail();

        $post = CacheHelper::remember("kanal_{$slug}_posts", now()->addMinutes(2), function () use ($category) {
            return Post::with('kategori', 'user')
                ->where('kategori_id', $category->id)
                ->where('status', 'publish')
                ->orderBy('created_at', 'desc')
                ->latest()
                ->paginate(25);
        });

        $postTerkini = CacheHelper::remember("kanal_{$slug}_terkini", now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
                ->where('status', 'publish')
                ->latest()
                ->take(5)
                ->get();
        });

        $postTerpopuler = CacheHelper::remember("kanal_{$slug}_terpopuler", now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
                ->where('status', 'publish')
                ->orderBy('view', 'desc')
                ->take(5)
                ->get();
        });

        $allPosts = collect([$post->items(), $postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost && $singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.kanal', compact('category','post','postTerkini','postTerpopuler','allPosts'));
        } else {
            return view('frontend.dekstop.pages.kanal', compact('category','post','postTerkini','postTerpopuler','allPosts'));
        }
    }


    public function byIndex()
    {
        $postTerkini = CacheHelper::remember("byindex_terkini", now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
                ->where('status', 'publish')
                ->latest()
                ->take(5)
                ->get();
        });

        $postTerpopuler = CacheHelper::remember("byindex_terpopuler", now()->addMinutes(2), function () {
            return Post::with('kategori', 'user')
                ->where('status', 'publish')
                ->orderBy('view', 'desc')
                ->take(5)
                ->get();
        });

        $post = CacheHelper::remember("byindex_posts_page_" . request('page', 1), now()->addMinutes(2), function () {
            return Post::where('status', 'publish')
                ->orderBy('created_at', 'desc')
                ->paginate(17);
        });

        $allPosts = collect([$post->items(), $postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost && $singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.byIndex', compact('post','postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.byIndex', compact('post','postTerkini','postTerpopuler'));
        }
    }


    public function byTag($slug){
        $tag = Tag::where('slug', $slug)->firstOrFail();
        $post = $tag->posts()->where('status', 'publish')->orderBy('created_at', 'desc')->paginate(17);

        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();

        $allPosts = collect([$post->items(), $postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.bytag',compact('post','postTerkini','postTerpopuler', 'tag'));
        } else {
            return view('frontend.dekstop.pages.bytag',compact('post','postTerkini','postTerpopuler', 'tag'));
        }
    }

    public function searchResult(Request $request)
    {

        $query = $request->input('q', '');

        if (is_array($query)) {
            $query = implode(' ', $query);
        }

        $posts = Post::with(['kategori', 'user', 'tags'])
            ->where('status', 'publish')
            ->where(function ($q) use ($query) {
                $q->where('title', 'ILIKE', "%{$query}%")
                  ->orWhereHas('kategori', function ($q) use ($query) {
                      $q->where('nama_kategori', 'ILIKE', "%{$query}%");
                  })
                  ->orWhereHas('tags', function ($q) use ($query) {
                      $q->where('nama_tags', 'ILIKE', "%{$query}%");
                  });
            })
            ->latest()
            ->paginate(25);

            $postTerkini = Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->latest()
            ->take(5)
            ->get();

            $postTerpopuler = Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->orderBy('view', 'desc')
            ->take(5)
            ->get();

            $allPosts = collect([$posts->items(), $postTerpopuler, $postTerkini])->flatten();

            foreach ($allPosts as $singlePost) {
                if ($singlePost->gambar) {
                    $singlePost->gambar = explode('|', $singlePost->gambar);
                }
            }
        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.search-result',compact('postTerkini','posts','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.search-result',compact('postTerkini','posts','postTerpopuler'));
        }
    }
}
