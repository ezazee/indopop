<?php

namespace App\Http\Controllers;

use Jenssegers\Agent\Agent;
use App\Models\Post;
use App\Models\Tag;
use App\Models\Categori;
use Carbon\Carbon;
use Illuminate\Http\Request;


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

        $postheadline = Post::with('kategori', 'user')
        ->where('headline', 'yes')
        ->where('status', 'publish')
        ->whereNotIn('id', $usedPostIds)
        ->orderBy('id', 'desc')
        ->take(15)
        ->get();

        $topPostheadline = $postheadline->shift();

        $otherPostsheadline = $postheadline;

        $usedPostIds = array_merge($usedPostIds, $postheadline->pluck('id')->toArray());

        if ($topPostheadline) {
            $usedPostIds[] = $topPostheadline->id;
        }

        // if ($otherPostsheadline){
        //     $usedPostIds[] = $otherPostsheadline->id;
        // }

        $postTerkini = Post::with('kategori', 'user')
        ->where('status', 'publish')
        ->latest()
        ->take(5)
        ->get();

        $postTerpopuler = Post::with('kategori', 'user')
        ->where('status', 'publish')
        // ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
        // ->where('created_at')
        ->orderBy('view', 'desc')
        ->take(5)
        ->get();


        // dd($postTerpopuler);
        // if ($postTerpopuler->isEmpty()) {
        //     $weekCounter = 1;
        //     while ($postTerpopuler->isEmpty() && $weekCounter <= 4) {
        //         $postTerpopuler = Post::with('kategori', 'user')
        //             ->where('status', 'publish')
        //             ->whereBetween('created_at', [
        //                 Carbon::now()->subWeeks($weekCounter)->startOfWeek(),
        //                 Carbon::now()->subWeeks($weekCounter)->endOfWeek()
        //             ])
        //             ->orderBy('view', 'desc')
        //             ->take(5)
        //             ->get();

        //         $weekCounter++;
        //     }
        // }

        $getPostByCategory = function($categoryName, $limit = 6) use (&$usedPostIds) {
            $posts = Post::with('kategori', 'user')
                ->whereHas('kategori', function ($query) use ($categoryName) {
                    $query->where('nama_kategori', $categoryName);
                })
                ->whereNotIn('id', $usedPostIds)
                ->where('status', 'publish')
                ->latest()
                ->take($limit)
                ->get();

            $usedPostIds = array_merge($usedPostIds, $posts->pluck('id')->toArray());
            return $posts;
        };

       //kategori
        $postDangdut = $getPostByCategory('Dangdut', 5);
        $postFlexing = $getPostByCategory('Flexing', 5);
        $postGosip = $getPostByCategory('Gosip', 5);
        $postKPop = $getPostByCategory('K-POP', 5);
        $postVibes = $getPostByCategory('Vibes', 5);
        $postMeandmom = $getPostByCategory('Me and Moms', 5);

        // data Dangdut
        $topPostDangdut = $postDangdut->shift();
        $otherPostsDangdut = $postDangdut;

        // data Flexing
        $topPostFlexing = $postFlexing->shift();
        $otherPostsFlexing = $postFlexing;

        // data Gosip
        $topPostGosip = $postGosip->shift();
        $otherPostsGosip = $postGosip;

        // data KPop
        $topPostKPop = $postKPop->shift();
        $otherPostsKPop = $postKPop;

        // data Vibes
        $topPostVibes = $postVibes->shift();
        $otherPostsVibes = $postVibes;

        // data Meandmom
        $topPostMeandmom = $postMeandmom->shift();
        $otherPostsMeandmom = $postMeandmom;
        // dd($otherPostsFlexing,$topPostGosip);

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


        // dd($postDangdut);
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
        $post = Post::with(['kategori', 'user', 'reporter', 'tags'])->where('slug', $slug)->where('status', 'publish')->firstOrFail();

        $postTerkini = Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->latest()
            ->take(5)
            ->get();

        $postTerkiniBottom = Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->latest()
            ->take(20)
            ->get();

        $relatedPosts = Post::whereHas('tags', function ($q) use ($post) {
                $q->whereIn('tags.id', $post->tags->pluck('id'));
            })
            ->where('posts.id', '!=', $post->id)
            ->select('posts.*')
            ->take(2)
            ->get();

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
                6 => '<div class="gliaplayer-container mb-3" data-slot="indopop_mobile"></div>
                <script src="https://player.gliacloud.com/player/indopop_mobile" async></script>',
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
            $chunks = array_chunk($parts, ceil(count($parts) / 3));
            $formatted_chunks = array_map(function ($chunk) {
                return implode('', $chunk);
            }, $chunks);

            $formatted_content = $formatted_chunks[$currentPage - 1] ?? '';
            $totalPages = count($formatted_chunks);
        }

        $postTerpopuler = Post::with('kategori', 'user')
            ->where('status', 'publish')
            ->orderBy('view', 'desc')
            ->take(5)
            ->get();

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
        $postQuery = Post::with('kategori', 'user')->where('kategori_id', $category->id);
        $post = $postQuery->where('status', 'publish')->orderBy('created_at', 'desc')->latest()->paginate(25);

        // dd($category);
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
            return view('frontend.mobile.pages.kanal',compact('category','post','postTerkini','postTerpopuler', 'allPosts'));
        } else {
            return view('frontend.dekstop.pages.kanal',compact('category','post','postTerkini','postTerpopuler',));
        }
    }

    public function byIndex()
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

        $post = Post::where('status', 'publish')
        ->orderBy('created_at', 'desc')
        ->paginate(17);

        $allPosts = collect([$post->items(), $postTerpopuler, $postTerkini])->flatten();

        foreach ($allPosts as $singlePost) {
            if ($singlePost->gambar) {
                $singlePost->gambar = explode('|', $singlePost->gambar);
            }
        }

        if ($this->agent->isMobile()) {
            return view('frontend.mobile.pages.byIndex',compact('post','postTerkini','postTerpopuler'));
        } else {
            return view('frontend.dekstop.pages.byIndex',compact('post','postTerkini','postTerpopuler'));
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
