@php
    $path = request()->path();
    $canonical = request()->is('/') 
        ? config('app.url') 
        : (isset($post) && isset($post->slug) 
            ? url($post->slug) 
            : config('app.url'));
@endphp

<link rel="canonical" href="{{ $canonical }}" />

@if (request()->is('/'))
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://indopop.id/#website",
      "url": "https://indopop.id/",
      "name": "Indopopid",
      "description": "Berita terkini dari kalangan selebritis ternama Tanah Air maupun Internasional. Disajikan dengan cepat, tepat, ringan.",
      "publisher": {
        "@id": "https://indopop.id/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://indopop.id/search-result?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://indopop.id/#webpage",
      "url": "https://indopop.id/",
      "name": "Beranda",
      "isPartOf": {
        "@id": "https://indopop.id/#website"
      },
      "about": {
        "@id": "https://indopop.id/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://indopop.id/frontend/logo/favicon.png"
      },
      "description": "Berita terkini dari kalangan selebritis ternama Tanah Air maupun Internasional. Disajikan dengan cepat, tepat, ringan.",
    },
    {
      "@type": "Organization",
      "@id": "https://indopop.id/#organization",
      "name": "Indopopid",
      "url": "https://indopop.id/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indopop.id/frontend/logo/favicon.png",
        "width": 250,
        "height": 60
      },
      "sameAs": [
        "https://www.facebook.com/indopopid",
        "https://instagram.com/indopopid"
      ]
    }
  ]
}
</script>
@elseif (isset($post) && isset($post->slug) && $path === $post->slug)
<script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "{{ url($post->slug) }}"
    },
    "headline": "{{ Str::limit(strip_tags($post->title), 110, '') }}",
    "description": "{{ Str::limit(strip_tags($post->description ?? $post->content), 160, '') }}",
    "image": {
        "@type": "ImageObject",
        "url": "{{ !empty($post->gambar) ? url('/storage/gambar/' . (is_array($post->gambar) ? basename($post->gambar[0]) : basename($post->gambar))) : 'https://indopop.id/frontend/logo/favicon.png' }}"
    },
    "author": {
        "@type": "Person",
        "name": "{{ $post->user->name ?? 'Indopopid Reporter' }}"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Indopopid",
        "logo": {
        "@type": "ImageObject",
        "url": "https://indopop.id/frontend/logo/favicon.png"
        }
    },
    "datePublished": "{{ \Carbon\Carbon::parse($post->created_at)->toIso8601String() }}",
    "dateModified": "{{ \Carbon\Carbon::parse($post->updated_at)->toIso8601String() }}"
    }
</script>
@else
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://indopop.id/#website",
      "url": "https://indopop.id/",
      "name": "Indopopid",
      "description": "Berita terkini dari kalangan selebritis ternama Tanah Air maupun Internasional. Disajikan dengan cepat, tepat, ringan.",
      "publisher": {
        "@id": "https://indopop.id/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://indopop.id/search-result?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "{{ url()->current() }}",
      "url": "{{ url()->current() }}",
      "name": "Indopopid - {{ ucwords(str_replace('-', ' ', last(request()->segments()))) }}",
      "isPartOf": {
        "@id": "https://indopop.id/#website"
      },
      "about": {
        "@id": "https://indopop.id/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://indopop.id/frontend/logo/favicon.png"
      },
      "description": "Baca berita terkini dan terpercaya di kategori {{ ucwords(str_replace('-', ' ', last(request()->segments()))) }} hanya di Indopopid.",
      "datePublished": "2024-01-01",
      "dateModified": "2025-07-21"
    },
    {
      "@type": "Organization",
      "@id": "https://indopop.id/#organization",
      "name": "Indopopid",
      "url": "https://indopop.id/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indopop.id/frontend/logo/favicon.png",
        "width": 250,
        "height": 60
      },
      "sameAs": [
        "https://www.facebook.com/indopopid",
        "https://instagram.com/indopopid"
      ]
    }
  ]
}
</script>
@endif
