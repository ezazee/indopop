<script src="{{ asset('backend/js/notification.js') }}"></script>
{{-- <script src="{{ asset('backend/js/jquery.js') }}"></script> --}}
<script src="{{ asset('backend/js/app.js') }}"></script>
{{-- <script src="{{ asset('backend/js/vueGlobal.min.js') }}"></script>
<script src="{{ asset('backend/js/vueApp.min.js') }}"></script> --}}
<script src="{{ asset('backend/js/core-ui.js') }}"></script>
<script src="{{ asset('backend/js/excanvas.min.js') }}"></script>
<script src="{{ asset('backend/js/ie8.fix.min.js') }}"></script>
<script src="{{ asset('backend/js/modernminz.min.js') }}"></script>
<script src="{{ asset('backend/js/select2.min.js') }}"></script>
<script src="{{ asset('backend/js/flatPicker.min.js') }}"></script>
{{-- <script src="{{ asset('backend/js/jquery-cookie.js') }}"></script> --}}
<script src="{{ asset('backend/js/core.js') }}"></script>
<script src="{{ asset('backend/js/toaster.min.js') }}"></script>
<script src="{{ asset('backend/js/customScrollbar.js') }}"></script>
<script src="{{ asset('backend/js/stickyTable.js') }}"></script>
<script src="{{ asset('backend/js/waypoints.min.js') }}"></script>
<script src="{{ asset('backend/js/spectrum.js') }}"></script>
<script src="{{ asset('backend/js/fancyBox.min.js') }}"></script>
<script src="{{ asset('backend/js/fslightbox.min.js') }}"></script>
<script src="{{ asset('backend/js/sortable.min.js') }}"></script>
<script src="{{ asset('backend/js/counterup.min.js') }}"></script>
<script src="{{ asset('backend/js/raphael.min.js') }}"></script>
<script src="{{ asset('backend/js/morris.min.js') }}"></script>
<script src="{{ asset('backend/js/languageGlobal.js') }}"></script>
<script src="{{ asset('backend/js/dashboard.js') }}"></script>
<script src="{{ asset('backend/js/checkUpdate.js') }}"></script>
<script src="{{ asset('backend/js/jvectormap.js') }}"></script>
<script src="{{ asset('backend/js/jvectorWorld.js') }}"></script>
<script src="{{ asset('backend/js/annalytics.js') }}"></script>
<script src="{{ asset('backend/js/blog.js') }}"></script>
<script src="{{ asset('backend/js/audit-log.js') }}"></script>
<script src="{{ asset('backend/js/request-log.js') }}"></script>
<script src="{{ asset('backend/js/intergrate.js') }}"></script>
<script src="{{ asset('backend/js/global-search.js') }}"></script>
<script src="{{ asset('backend/js/boostrapTypeAhead.js') }}"></script>
<script src="{{ asset('backend/js/buttonBoostrap.min.js') }}"></script>
<script src="{{ asset('backend/js/dataTable.js') }}"></script>
<script src="{{ asset('backend/js/dataTableBoostrap.js') }}"></script>
<script src="{{ asset('backend/js/dataTableButton.js') }}"></script>
<script src="{{ asset('backend/js/dataTableResponsive.js') }}"></script>
<script src="{{ asset('backend/js/filter.js') }}"></script>
<script src="{{ asset('backend/js/momentLocales.min.js') }}"></script>
<script src="{{ asset('backend/js/table.js') }}"></script>
<script src="{{ asset('backend/js/areYouSure.js') }}"></script>
<script src="{{ asset('backend/js/galleryMain.js') }}"></script>
<script src="{{ asset('backend/js/htmlDif.js') }}"></script>
<script src="{{ asset('backend/js/jsValidation.js') }}"></script>
<script src="{{ asset('backend/js/revision.js') }}"></script>
<script src="{{ asset('backend/js/seoHelper.js') }}"></script>
<script src="{{ asset('backend/js/shortCode.js') }}"></script>
<script src="{{ asset('backend/js/slug.js') }}"></script>
<script src="{{ asset('backend/js/tagify.js') }}"></script>
<script src="{{ asset('backend/js/tags.js') }}"></script>
<script src="{{ asset('backend/js/dropZone.js') }}"></script>
{{-- <script src="{{ asset('backend/js/jqueryUi.js') }}"></script> --}}
<script src="{{ asset('backend/js/contextMenu.js') }}"></script>
<script src="{{ asset('backend/js/treeCategory.js') }}"></script>
<script src="{{ asset('backend/js/nestAble.js') }}"></script>
<script src="{{ asset('backend/js/dataSync.js') }}"></script>
<script src="{{ asset('backend/js/anywordHint.js') }}"></script>
<script src="{{ asset('backend/js/autoRefresh.js') }}"></script>
<script src="{{ asset('backend/js/codeMirror.js') }}"></script>
<script src="{{ asset('backend/js/css.js') }}"></script>
<script src="{{ asset('backend/js/cssHint.js') }}"></script>
<script src="{{ asset('backend/js/htmlHint.js') }}"></script>
<script src="{{ asset('backend/js/htmlMixed.js') }}"></script>
<script src="{{ asset('backend/js/showHint.js') }}"></script>
<script src="{{ asset('backend/js/xml.js') }}"></script>
<script src="{{ asset('backend/js/crop-image.js') }}"></script>
<script src="{{ asset('backend/js/cropper.js') }}"></script>
<script src="{{ asset('backend/js/javascript.js') }}"></script>
<script src="{{ asset('backend/js/profile.js') }}"></script>
<script src="{{ asset('backend/js/jqueryUI.min.js') }}"></script>
{{-- <script src="{{ asset('backend/js/jqueryTreeView.js') }}"></script> --}}
<script src="{{ asset('backend/js/roles.js') }}"></script>
{{-- <script src="{{ asset('backend/js/ckEditor.js') }}"></script>
<script src="{{ asset('backend/js/editor.js') }}"></script> --}}

{{-- <script>
    document.querySelectorAll('[data-bb-toggle-password]').forEach(button => {
        button.addEventListener('click', () => {
            const passwordField = button.parentElement.querySelector('[data-bb-password]');
            const icon = button.querySelector('svg');

            if (passwordField.getAttribute('type') === 'password') {
                passwordField.setAttribute('type', 'text');
                icon.setAttribute('class', 'icon icon-tabler icon-tabler-eye-off');
                icon.innerHTML = `
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 3l18 18"></path>
    <path d="M10.585 10.585a2 2 0 0 0 2.83 2.83"></path>
    <path d="M9.878 15.121c-2.735 -.948 -4.878 -2.735 -4.878 -3.121c0 -.386 2.143 -2.173 4.878 -3.121m3.5 -.621c1.562 .434 3.006 1.184 4.126 2.106c.956 .797 1.874 1.803 2.496 2.635"></path>
    <path d="M14.121 14.121c-.949 2.735 -2.735 4.878 -3.121 4.878c-.386 0 -2.173 -2.143 -3.121 -4.878m-.621 -3.5c.434 -1.562 1.184 -3.006 2.106 -4.126c.797 -.956 1.803 -1.874 2.635 -2.496"></path>
    `;
            } else {
                passwordField.setAttribute('type', 'password');
                icon.setAttribute('class', 'icon icon-tabler icon-tabler-eye');
                icon.innerHTML = `
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<circle cx="12" cy="12" r="2"></circle>
<path d="M22 12c0 3.866 -5.373 7 -10 7s-10 -3.134 -10 -7 5.373 -7 10 -7 10 3.134 10 7"></path>
`;
            }
        });
    });
</script> --}}
