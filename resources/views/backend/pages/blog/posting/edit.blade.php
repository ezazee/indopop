@extends('backend.master.app')
@section('content')

@include('backend.components.breadcrumb')


    <div class="page-body page-content">
        <div class="container-xl">


            <form method="POST" action="https://cms.botble.com/admin/blog/posts/edit/1" accept-charset="UTF-8"
                id="botble-blog-forms-post-form" class="js-base-form dirty-check"><input name="_token" type="hidden"
                    value="EGKDYzJQHTvg3imLuwwvZNoWCr4La2CczJtS4ZZQ">

                <div role="alert" class="alert alert-info">
                    <div class="d-flex">
                        <div>
                            <svg class="icon alert-icon svg-icon-ti-ti-info-circle" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M12 9h.01" />
                                <path d="M11 12h1v4h1" />
                            </svg>
                        </div>
                        <div class="w-100">


                            You are editing "<strong class="current_language_text">English</strong>"
                            version

                        </div>
                    </div>



                </div>

                <div class="row">
                    <div class="col-md-9">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane active show" id="tabs-detail">
                                        <div class="mb-3 position-relative">
                                            <label for="name" class="form-label required">Name</label>
                                            <input class="form-control" data-counter="250" placeholder="Name"
                                                required="required" name="name" type="text"
                                                value="Breakthrough in Quantum Computing: Computing Power Reaches Milestone"
                                                id="name">
                                        </div>
                                        <input type="hidden" name="model" value="Botble\Blog\Models\Post">
                                        <div class="mb-3 ">
                                            <div class="slug-field-wrapper" data-field-name="name">
                                                <div class="mb-3 position-relative">
                                                    <label class="form-label required" for="slug">
                                                        Permalink
                                                    </label>
                                                    <div class="input-group input-group-flat">
                                                        <span class="input-group-text">
                                                            https://cms.botble.com/
                                                        </span>
                                                        <input class="form-control ps-0" type="text" name="slug"
                                                            id="slug"
                                                            value="breakthrough-in-quantum-computing-computing-power-reaches-milestone"
                                                            required="required" />
                                                        <span class="input-group-text slug-actions">
                                                            <a href="#" class="link-secondary"
                                                                data-bs-toggle="tooltip" aria-label="Generate URL"
                                                                data-bs-original-title="Generate URL"
                                                                data-bb-toggle="generate-slug">
                                                                <svg class="icon  svg-icon-ti-ti-wand"
                                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
                                                                    <path d="M15 6l3 3" />
                                                                    <path
                                                                        d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                                                    <path
                                                                        d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                                                                </svg> </a>
                                                        </span>

                                                    </div>
                                                </div>
                                                <small class="form-hint mt-n2 text-truncate">Preview: <a
                                                        href="https://cms.botble.com/breakthrough-in-quantum-computing-computing-power-reaches-milestone"
                                                        target="_blank">https://cms.botble.com/breakthrough-in-quantum-computing-computing-power-reaches-milestone</a></small>
                                                <input class="slug-current" name="slug" type="hidden"
                                                    value="breakthrough-in-quantum-computing-computing-power-reaches-milestone">
                                                <div class="slug-data" data-url="https://cms.botble.com/ajax/slug/create"
                                                    data-view="https://cms.botble.com/" data-id="22">
                                                </div>
                                                <input name="slug_id" type="hidden" value="22">
                                                <input name="is_slug_editable" type="hidden" value="1">
                                            </div>


                                        </div>




                                        <div class="mb-3 position-relative">

                                            <label for="description" class="form-label">Description</label>


                                            <textarea class="form-control" data-counter="400" rows="4" placeholder="Short description" name="description"
                                                cols="50" id="description">Researchers achieve a significant milestone in quantum computing, unlocking unprecedented computing power that has the potential to revolutionize various industries.</textarea>




                                        </div>




                                        <div class="mb-3 position-relative">



                                            <label class="form-check form-switch ">
                                                <input name="is_featured" type="hidden" value="0" />
                                                <input class="form-check-input" name="is_featured" type="checkbox"
                                                    value="1" id="is_featured" checked />

                                                <span class="form-check-label">Is featured?</span>
                                            </label>




                                        </div>




                                        <div class="mb-3 position-relative">

                                            <label for="content" class="form-label">Content</label>


                                            <div class="mb-2 btn-list">
                                                <button class="btn   show-hide-editor-btn" type="button"
                                                    data-result="content">

                                                    Show/Hide Editor

                                                </button>

                                                <button class="btn   btn_gallery" type="button" data-result="content"
                                                    data-multiple="true" data-action="media-insert-ckeditor">
                                                    <svg class="icon icon-left svg-icon-ti-ti-photo"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M15 8h.01" />
                                                        <path
                                                            d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                                        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                                    </svg>
                                                    Add media

                                                </button>

                                                <button class="btn   add_shortcode_btn_trigger" type="button"
                                                    data-bb-toggle="shortcode-list-modal" data-result="content">

                                                    <svg class="icon  svg-icon-ti-ti-box"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                                        <path d="M12 12l8 -4.5" />
                                                        <path d="M12 12l0 9" />
                                                        <path d="M12 12l-8 -4.5" />
                                                    </svg>
                                                    UI Blocks

                                                </button>

                                            </div>



                                            <textarea class="form-control form-control editor-ckeditor ays-ignore" data-counter="100000" rows="4"
                                                placeholder="Write your content" with-short-code id="content" name="content" cols="50">&lt;p&gt;[youtube-video]https://www.youtube.com/watch?v=SlPhMPnQ58k[/youtube-video]&lt;/p&gt;&lt;p&gt;I&#039;ve offended it again!&#039; For the Mouse was swimming away from him, and said anxiously to herself, &#039;the way all the jurymen on to himself as he spoke. &#039;UNimportant, of course, to begin with,&#039; the Mock Turtle in the sea, &#039;and in that poky little house, on the Duchess&#039;s cook. She carried the pepper-box in her French lesson-book. The Mouse looked at her with large round eyes, and feebly stretching out one paw, trying to invent something!&#039; &#039;I--I&#039;m a little timidly, &#039;why you are very dull!&#039; &#039;You ought to speak, but for a little snappishly. &#039;You&#039;re enough to look over their shoulders, that all the same, shedding gallons of tears, but said nothing. &#039;Perhaps it doesn&#039;t matter a bit,&#039; she thought to herself &#039;Suppose it should be like then?&#039; And she kept on puzzling about it just now.&#039; &#039;It&#039;s the stupidest tea-party I ever was at the house, and found that, as nearly as she could, &#039;If you knew Time as well to say it out into the teapot. &#039;At any rate a book written about me, that there ought! And.&lt;/p&gt;&lt;p class=&quot;text-center&quot;&gt;&lt;img src=&quot;https://cms.botble.com/storage/news/1-540x360.jpg&quot; style=&quot;width:100%;&quot; class=&quot;image_resized&quot; alt=&quot;image&quot;&gt;&lt;/p&gt;&lt;p&gt;Alice, &#039;and those twelve creatures,&#039; (she was so much into the jury-box, or they would call after her: the last few minutes it puffed away without being invited,&#039; said the Gryphon, and all must have been a holiday?&#039; &#039;Of course you know what a Gryphon is, look at it!&#039; This speech caused a remarkable sensation among the bright eager eyes were looking up into a line along the passage into the garden with one elbow against the roof of the soldiers remaining behind to execute the unfortunate.&lt;/p&gt;&lt;p class=&quot;text-center&quot;&gt;&lt;img src=&quot;https://cms.botble.com/storage/news/8-540x360.jpg&quot; style=&quot;width:100%;&quot; class=&quot;image_resized&quot; alt=&quot;image&quot;&gt;&lt;/p&gt;&lt;p&gt;He was an immense length of neck, which seemed to Alice an excellent plan, no doubt, and very soon found out that part.&#039; &#039;Well, at any rate he might answer questions.--How am I to get out at the mushroom for a minute, trying to explain the paper. &#039;If there&#039;s no harm in trying.&#039; So she set to work very diligently to write with one finger for the Duchess began in a very hopeful tone though), &#039;I won&#039;t indeed!&#039; said the young lady to see it quite plainly through the doorway; &#039;and even if I shall ever see such a rule at processions; &#039;and besides, what would be quite as safe to stay in here any longer!&#039; She waited for some minutes. Alice thought this a very respectful tone, but frowning and making quite a conversation of it appeared. &#039;I don&#039;t know one,&#039; said Alice. &#039;That&#039;s very curious.&#039; &#039;It&#039;s all his fancy, that: they never executes nobody, you know. Come on!&#039; &#039;Everybody says &quot;come on!&quot; here,&#039; thought Alice, &#039;it&#039;ll never do to come yet, please your Majesty,&#039; the Hatter were having tea at.&lt;/p&gt;&lt;p class=&quot;text-center&quot;&gt;&lt;img src=&quot;https://cms.botble.com/storage/news/11-540x360.jpg&quot; style=&quot;width:100%;&quot; class=&quot;image_resized&quot; alt=&quot;image&quot;&gt;&lt;/p&gt;&lt;p&gt;ME&#039; were beautifully marked in currants. &#039;Well, I&#039;ll eat it,&#039; said Alice. &#039;Why, there they are!&#039; said the Mouse, getting up and beg for its dinner, and all sorts of little Alice was more hopeless than ever: she sat on, with closed eyes, and half believed herself in a low voice. &#039;Not at first, perhaps,&#039; said the cook. &#039;Treacle,&#039; said a timid voice at her own children. &#039;How should I know?&#039; said Alice, always ready to agree to everything that was said, and went on in a more subdued tone, and everybody laughed, &#039;Let the jury asked. &#039;That I can&#039;t get out again. That&#039;s all.&#039; &#039;Thank you,&#039; said the Cat; and this Alice would not give all else for two Pennyworth only of beautiful Soup? Beau--ootiful Soo--oop! Beau--ootiful Soo--oop! Beau--ootiful Soo--oop! Soo--oop of the sort,&#039; said the Gryphon: &#039;I went to him,&#039; said Alice indignantly. &#039;Ah! then yours wasn&#039;t a bit of stick, and made believe to worry it; then Alice dodged behind a great hurry. &#039;You did!&#039; said the Hatter. &#039;Does YOUR watch tell.&lt;/p&gt;</textarea>




                                        </div>
                                    </div>
                                    <div class="tab-pane" id="revisions">
                                        <table class="table table-vcenter card-table table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Author
                                                    </th>
                                                    <th>
                                                        Column
                                                    </th>
                                                    <th>
                                                        Origin
                                                    </th>
                                                    <th>
                                                        After changes
                                                    </th>
                                                    <th>
                                                        Created At
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="text-center">
                                                    <td colspan="5">
                                                        No record
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="advanced-sortables" class="meta-box-sortables">
                            <div class="card meta-boxes mb-3" id="gallery_wrap">
                                <div class="card-header">
                                    <h4 class="card-title">
                                        Gallery images
                                    </h4>
                                </div>

                                <div class="card-body">
                                    <input id="gallery-data" class="form-control" name="gallery" type="hidden">
                                    <div>
                                        <div class="list-photos-gallery">
                                            <div class="row" id="list-photos-items">
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <a href="#" class="btn_select_gallery">Select
                                                images</a>
                                            <a href="#" class="text-danger reset-gallery  hidden ">Reset
                                                gallery</a>
                                        </div>
                                    </div>

                                    <div class="modal fade modal-blur" id="edit-gallery-item" tabindex="-1"
                                        role="dialog" aria-hidden="true" data-select2-dropdown-parent="true">
                                        <div class="modal-dialog modal-dialog-centered " role="document">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <h5 class="modal-title">Update photo&#039;s
                                                        description</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>


                                                <div class="modal-body">
                                                    <input type="text" class="form-control"
                                                        id="gallery-item-description"
                                                        placeholder="Photo&#039;s description...">
                                                </div>

                                                <div class="modal-footer">
                                                    <div class="btn-list">
                                                        <button class="btn btn-danger" type="button"
                                                            id="delete-gallery-item">

                                                            Delete this photo

                                                        </button>
                                                        <button class="btn" type="button" data-bs-dismiss="modal">

                                                            Cancel

                                                        </button>
                                                        <button class="btn btn-primary" type="button"
                                                            id="update-gallery-item">

                                                            Update

                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card meta-boxes mb-3" id="seo_wrap">
                                <div class="card-header">
                                    <h4 class="card-title">
                                        Search Engine Optimize
                                    </h4>

                                    <div class="card-actions"><a href="#" class="btn-trigger-show-seo-detail">
                                            Edit SEO meta
                                        </a></div>
                                </div>

                                <div class="card-body">
                                    <div class="seo-preview" v-pre>
                                        <p class="default-seo-description hidden">
                                            Setup meta title &amp; description to make your site easy to
                                            discovered on search engines such as Google
                                        </p>

                                        <div class="existed-seo-meta">

                                            <h4 class="page-title-seo text-truncate">
                                                Breakthrough in Quantum Computing: Computing Power Reaches
                                                Milestone
                                            </h4>

                                            <div class="page-url-seo">
                                                <p>https://cms.botble.com/breakthrough-in-quantum-computing-computing-power-reaches-milestone
                                                </p>
                                            </div>

                                            <div>
                                                <span style="color: #70757a;">Sep 01, 2024
                                                    - </span>
                                                <span class="page-description-seo">
                                                    Researchers achieve a significant milestone in quantum
                                                    computing, unlocking unprecedented computing power that
                                                    has the potential to revolutionize various industries.
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden seo-edit-section" v-pre>
                                        <hr class="my-4">
                                        </hr>

                                        <div class="mb-3 position-relative">

                                            <label for="seo_meta[seo_title]" class="form-label">SEO
                                                Title</label>


                                            <input class="form-control" data-counter="70" placeholder="SEO Title"
                                                data-allow-over-limit name="seo_meta[seo_title]" type="text"
                                                id="seo_meta[seo_title]">




                                        </div>



                                        <div class="mb-3 position-relative">

                                            <label for="seo_meta[seo_description]" class="form-label">SEO
                                                description</label>


                                            <textarea class="form-control" data-counter="160" rows="3" placeholder="SEO description" data-allow-over-limit
                                                name="seo_meta[seo_description]" cols="50" id="seo_meta[seo_description]"></textarea>




                                        </div>



                                        <div class="mb-3 position-relative">

                                            <label for="seo_meta_image" class="form-label">SEO
                                                image</label>


                                            <div class="image-box image-box-seo_meta_image" action="select-image"
                                                data-counter="250">
                                                <input class="image-data" name="seo_meta_image" type="hidden"
                                                    value="" class="" data-counter="250" />


                                                <div style="width: 8rem" class="preview-image-wrapper mb-1">
                                                    <div class="preview-image-inner">
                                                        <a data-bb-toggle="image-picker-choose" data-target="popup"
                                                            class="image-box-actions" data-result="seo_meta_image"
                                                            data-action="select-image" data-allow-thumb="1"
                                                            href="#">
                                                            <img class="preview-image default-image"
                                                                data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                                src="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                                alt="Preview image" />
                                                            <span class="image-picker-backdrop"></span>
                                                        </a>
                                                        <button
                                                            class="btn btn-pill btn-icon  btn-sm image-picker-remove-button p-0"
                                                            style="display: none; --bb-btn-font-size: 0.5rem;"
                                                            type="button" data-bb-toggle="image-picker-remove"
                                                            data-bs-toggle="tooltip" data-bs-placement="top"
                                                            title="Remove image">
                                                            <svg class="icon icon-sm icon-left svg-icon-ti-ti-x"
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M18 6l-12 12" />
                                                                <path d="M6 6l12 12" />
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </div>

                                                <a data-bb-toggle="image-picker-choose" data-target="popup"
                                                    data-result="seo_meta_image" data-action="select-image"
                                                    data-allow-thumb="1" href="#">
                                                    Choose image
                                                </a>

                                                <div data-bb-toggle="upload-from-url">
                                                    <span class="text-muted">or</span>
                                                    <a href="javascript:void(0)" class="mt-1" data-bs-toggle="modal"
                                                        data-bs-target="#image-picker-add-from-url"
                                                        data-bb-target=".image-box-seo_meta_image">
                                                        Add from URL
                                                    </a>
                                                </div>
                                            </div>




                                        </div>



                                        <div class="mb-3 position-relative">

                                            <label for="seo_meta[index]" class="form-label">Index</label>


                                            <div class="position-relative form-check-group">
                                                <label class="form-check form-check-inline">
                                                    <input class="form-check-input" id="seo_meta[index]" type="radio"
                                                        name="seo_meta[index]" value="index" checked>

                                                    <span class="form-check-label">Index</span>
                                                </label>
                                                <label class="form-check form-check-inline">
                                                    <input class="form-check-input" id="seo_meta[index]" type="radio"
                                                        name="seo_meta[index]" value="noindex">

                                                    <span class="form-check-label">No index</span>
                                                </label>
                                            </div>




                                        </div>







                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-md-3 gap-3 d-flex flex-column-reverse flex-md-column mb-md-0 mb-5">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    Publish
                                </h4>
                            </div>
                            <div class="card-body">
                                <div class="btn-list">
                                    <button class="btn btn-primary" type="submit" value="apply" name="submitter">
                                        <svg class="icon icon-left svg-icon-ti-ti-device-floppy"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                            <path d="M14 4l0 4l-6 0l0 -4" />
                                        </svg>
                                        Save

                                    </button>

                                    <button class="btn" type="submit" name="submitter" value="save">
                                        <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
                                            <path d="M4 14h9" />
                                            <path d="M10 11l3 3l-3 3" />
                                        </svg>
                                        Save &amp; Exit

                                    </button>


                                </div>
                            </div>
                        </div>

                        <div data-bb-waypoint data-bb-target="#form-actions"></div>

                        <header class="top-0 w-100 position-fixed end-0 z-1000" id="form-actions" style="display: none;">
                            <div class="navbar">
                                <div class="container-xl">
                                    <div class="row g-2 align-items-center w-100">
                                        <div class="col">
                                            <div class="page-pretitle">
                                                <nav aria-label="breadcrumb">
                                                    <ol class="breadcrumb">
                                                    </ol>
                                                </nav>

                                            </div>
                                        </div>
                                        <div class="col-auto ms-auto d-print-none">
                                            <div class="btn-list">
                                                <button class="btn btn-primary" type="submit" value="apply"
                                                    name="submitter">
                                                    <svg class="icon icon-left svg-icon-ti-ti-device-floppy"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                                        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M14 4l0 4l-6 0l0 -4" />
                                                    </svg>
                                                    Save

                                                </button>

                                                <button class="btn" type="submit" name="submitter" value="save">
                                                    <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
                                                        <path d="M4 14h9" />
                                                        <path d="M10 11l3 3l-3 3" />
                                                    </svg>
                                                    Save &amp; Exit

                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>


                        <div id="top-sortables" class="meta-box-sortables">
                            <div class="card meta-boxes mb-3" id="language_advanced_wrap">
                                <div class="card-header">
                                    <h4 class="card-title">
                                        Languages
                                    </h4>
                                </div>

                                <div class="card-body">
                                    <input name="language" type="hidden" value="en_US">
                                    <div id="list-others-language">
                                        <a class="gap-2 d-flex align-items-center text-decoration-none"
                                            href="https://cms.botble.com/admin/blog/posts/edit/1?ref_lang=vi"
                                            target="_blank">
                                            <img src="https://cms.botble.com/vendor/core/core/base/img/flags/vn.svg"
                                                title="Tiếng Việt" class="flag" style="height: 16px" loading="lazy"
                                                alt="Tiếng Việt flag">
                                            <span>Tiếng Việt <svg class="icon  svg-icon-ti-ti-external-link"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                    <path d="M11 13l9 -9" />
                                                    <path d="M15 4h5v5" />
                                                </svg></span>
                                        </a>
                                        <a class="gap-2 d-flex align-items-center text-decoration-none"
                                            href="https://cms.botble.com/admin/blog/posts/edit/1?ref_lang=ar"
                                            target="_blank">
                                            <img src="https://cms.botble.com/vendor/core/core/base/img/flags/sa.svg"
                                                title="Arabic" class="flag" style="height: 16px" loading="lazy"
                                                alt="Arabic flag">
                                            <span>Arabic <svg class="icon  svg-icon-ti-ti-external-link"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                                    <path d="M11 13l9 -9" />
                                                    <path d="M15 4h5v5" />
                                                </svg></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="status" class="form-label required">Status</label>
                                </h4>
                            </div>

                            <div class="card-body">
                                <select class="form-control form-select" required="required" id="status"
                                    name="status">
                                    <option value="published" selected="selected">Published</option>
                                    <option value="draft">Draft</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="author_id" class="form-label">Author</label>
                                </h4>
                            </div>

                            <div class="card-body">
                                <select class="select-search-full form-select" data-placeholder="Select author"
                                    data-allow-clear="true" id="author_id" name="author_id">
                                    <option value="">Select author</option>
                                    <option value="1" selected="selected">Edmund Leffler</option>
                                    <option value="2">Blaze Ortiz</option>
                                    <option value="3">Madie Haley</option>
                                    <option value="4">Joany Olson</option>
                                    <option value="5">Vernice Kutch</option>
                                    <option value="6">Maddison Friesen</option>
                                    <option value="7">Alivia Watsica</option>
                                    <option value="8">Abby Von</option>
                                    <option value="9">Imani Rice</option>
                                    <option value="10">Curt Gleichner</option>
                                    <option value="11">John Smith</option>
                                </select>


                                <small class="form-hint">
                                    The list of authors is from Admin -> Members.
                                </small>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="categories[]" class="form-label">Categories</label>
                                </h4>
                            </div>

                            <div class="card-body">
                                <div class="mb-3">
                                    <div class="input-icon">
                                        <input type="text" id="search-category-input-1076830540" class="form-control"
                                            placeholder="Search..." onkeyup="filter_categories_1076830540(1076830540)"
                                            formnovalidate />
                                        <span class="input-icon-addon">
                                            <svg class="icon  svg-icon-ti-ti-search" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                                <path d="M21 21l-6 -6" />
                                            </svg> </span>
                                    </div>
                                </div>

                                <div data-bb-toggle="tree-checkboxes" class="tree-categories-list-1076830540">
                                    <ul class="list-unstyled ">

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="1">

                                                <span class="form-check-label">
                                                    Artificial Intelligence
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="2">

                                                <span class="form-check-label">
                                                    Cybersecurity
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="3">

                                                <span class="form-check-label">
                                                    Blockchain Technology
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="4" checked>

                                                <span class="form-check-label">
                                                    5G and Connectivity
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="5">

                                                <span class="form-check-label">
                                                    Augmented Reality (AR)
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="6" checked>

                                                <span class="form-check-label">
                                                    Green Technology
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="7">

                                                <span class="form-check-label">
                                                    Quantum Computing
                                                </span>

                                            </label>

                                        </li>

                                        <li>
                                            <label class="form-check">
                                                <input type="checkbox" name="categories[]" class="form-check-input"
                                                    value="8">

                                                <span class="form-check-label">
                                                    Edge Computing
                                                </span>

                                            </label>

                                        </li>
                                    </ul>
                                </div>

                                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                <script>
                                    function filter_categories_1076830540(inputSearchId) {
                                        const searchInput = document.getElementById('search-category-input-' + inputSearchId).value.toLowerCase();
                                        const categories = document.querySelectorAll('.tree-categories-list-' + inputSearchId + ' label');

                                        categories.forEach(category => {
                                            const text = category.textContent.toLowerCase();
                                            category.style.display = text.includes(searchInput) ? '' : 'none';
                                        });
                                    }
                                </script>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="image" class="form-label">Image</label>
                                </h4>
                            </div>

                            <div class="card-body">
                                <div class="image-box image-box-image" action="select-image" data-counter="250">
                                    <input class="image-data" name="image" type="hidden" value="news/1.jpg"
                                        class="" data-counter="250" />


                                    <div style="width: 8rem" class="preview-image-wrapper mb-1">
                                        <div class="preview-image-inner">
                                            <a data-bb-toggle="image-picker-choose" data-target="popup"
                                                class="image-box-actions" data-result="image" data-action="select-image"
                                                data-allow-thumb="1" href="#">
                                                <img class="preview-image"
                                                    data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                    src="https://cms.botble.com/storage/news/1-150x150.jpg"
                                                    alt="Preview image" />
                                                <span class="image-picker-backdrop"></span>
                                            </a>
                                            <button class="btn btn-pill btn-icon  btn-sm image-picker-remove-button p-0"
                                                style="--bb-btn-font-size: 0.5rem;" type="button"
                                                data-bb-toggle="image-picker-remove" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Remove image">
                                                <svg class="icon icon-sm icon-left svg-icon-ti-ti-x"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M18 6l-12 12" />
                                                    <path d="M6 6l12 12" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>

                                    <a data-bb-toggle="image-picker-choose" data-target="popup" data-result="image"
                                        data-action="select-image" data-allow-thumb="1" href="#">
                                        Choose image
                                    </a>

                                    <div data-bb-toggle="upload-from-url">
                                        <span class="text-muted">or</span>
                                        <a href="javascript:void(0)" class="mt-1" data-bs-toggle="modal"
                                            data-bs-target="#image-picker-add-from-url" data-bb-target=".image-box-image">
                                            Add from URL
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="banner_image" class="form-label">Banner image
                                        (1920x170px)</label>
                                </h4>
                            </div>

                            <div class="card-body">
                                <div class="image-box image-box-banner_image" action="select-image" data-counter="250">
                                    <input class="image-data" name="banner_image" type="hidden" value=""
                                        class="" data-counter="250" />


                                    <div style="width: 8rem" class="preview-image-wrapper mb-1">
                                        <div class="preview-image-inner">
                                            <a data-bb-toggle="image-picker-choose" data-target="popup"
                                                class="image-box-actions" data-result="banner_image"
                                                data-action="select-image" data-allow-thumb="1" href="#">
                                                <img class="preview-image default-image"
                                                    data-default="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                    src="https://cms.botble.com/vendor/core/core/base/images/placeholder.png"
                                                    alt="Preview image" />
                                                <span class="image-picker-backdrop"></span>
                                            </a>
                                            <button class="btn btn-pill btn-icon  btn-sm image-picker-remove-button p-0"
                                                style="display: none; --bb-btn-font-size: 0.5rem;" type="button"
                                                data-bb-toggle="image-picker-remove" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Remove image">
                                                <svg class="icon icon-sm icon-left svg-icon-ti-ti-x"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M18 6l-12 12" />
                                                    <path d="M6 6l12 12" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>

                                    <a data-bb-toggle="image-picker-choose" data-target="popup"
                                        data-result="banner_image" data-action="select-image" data-allow-thumb="1"
                                        href="#">
                                        Choose image
                                    </a>

                                    <div data-bb-toggle="upload-from-url">
                                        <span class="text-muted">or</span>
                                        <a href="javascript:void(0)" class="mt-1" data-bs-toggle="modal"
                                            data-bs-target="#image-picker-add-from-url"
                                            data-bb-target=".image-box-banner_image">
                                            Add from URL
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card meta-boxes">
                            <div class="card-header">
                                <h4 class="card-title">
                                    <label for="tag" class="form-label">Tags</label>
                                </h4>
                            </div>

                            <div class="card-body">
                                <input class="form-control tags" placeholder="Write some tags"
                                    data-url="https://cms.botble.com/admin/blog/tags/all" name="tag" type="text"
                                    value="Blockchain,AI,Data Security" id="tag">
                            </div>
                        </div>
                        <input class="form-control" name="author_type" type="hidden"
                            value="Botble\Member\Models\Member">
                    </div>
                </div>
            </form>
        </div>
    </div>
    @include('backend.components.modalMedia')
@endsection
