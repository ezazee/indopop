@extends('backend.master.app')
@section('content')
    @include('backend.components.breadcrumb')
    <div class="page-body page-content">
        <div class="container-xl">
            <form method="POST" action="https://cms.botble.com/admin/system/roles/edit/1" accept-charset="UTF-8"
                id="botble-a-c-l-forms-role-form" class="js-base-form dirty-check">
                <input name="_token" type="hidden" value="U1lk1x2RAY1jBoJbF9pPgEkmfRrsgMp78U2kvbE6">
                <div class="row">
                    <div class="gap-3 col-md-9">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="form-body">
                                    <div class="mb-3 position-relative">
                                        <label class="form-label form-label required" for="name">
                                            Name
                                        </label>
                                        <input class="form-control" data-counter="120" placeholder="Name"
                                            required="required" name="name" type="text" value="Admin">
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label class="form-label" for="description">
                                            Description
                                        </label>
                                        <textarea class="form-control" data-counter="400" rows="4" placeholder="Short description" name="description"
                                            cols="50" id="">Admin users role</textarea>
                                    </div>
                                    <div class="mb-3 position-relative">
                                        <label class="form-check form-switch ">
                                            <input name="is_default" type="hidden" value="0" />
                                            <input class="form-check-input" name="is_default" type="checkbox" value="1"
                                                id="is_default" checked />
                                            <span class="form-check-label">Is default?</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-header">
                                <h4 class="card-title">
                                    Permission Flags
                                </h4>
                                <div class="card-actions">
                                    <div class="d-flex">
                                        <label class="form-check form-check m-0">
                                            <input type="checkbox" id="allTreeChecked"
                                                class="form-check-input label label-default allTree" value="">
                                            <span class="form-check-label">
                                                <span class="badge bg-primary-lt">
                                                    All Permissions
                                                </span>
                                            </span>
                                        </label>
                                        <div id="sidetreecontrol" class="ms-3"><a href="?#">Collapse all</a> | <a
                                                href="?#">Expand all</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="permissions-tree" id="checkboxes-permisstions" data-name="foo">
                                    <ul class="parent_tree m-0 p-0 list-unstyled" id="node0">
                                        <li class="permissions-item list-unstyled">
                                            <div class="permissions-header">
                                                <label class="form-check">
                                                    <input type="checkbox" id="checkbox_one_0" name="flags[]"
                                                        class="form-check-input check-success" value="core.cms" checked>
                                                    <span class="form-check-label">
                                                        <span class="badge bg-success-lt">
                                                            CMS
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <ul class="row permissions-body has-children">
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_0">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_0" name="flags[]"
                                                            class="form-check-input" value="media.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Media
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0" name="flags[]"
                                                                    class="form-check-input check-yellow"
                                                                    value="files.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        File
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="files.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="files.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="files.trash" checked>
                                                                        <span class="form-check-label">
                                                                            Trash
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child3">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_3"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="files.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="folders.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Folder
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="folders.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="folders.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="folders.trash" checked>
                                                                        <span class="form-check-label">
                                                                            Trash
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child3">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_3"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="folders.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_1">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_1" name="flags[]"
                                                            class="form-check-input" value="pages.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Pages
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="pages.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="pages.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="pages.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_2">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_2" name="flags[]"
                                                            class="form-check-input" value="block.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Static Blocks
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="block.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="block.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="block.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_3">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_3" name="flags[]"
                                                            class="form-check-input" value="plugins.blog" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Blog
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="posts.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Posts
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="posts.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="posts.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="posts.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="categories.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Categories
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="categories.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="categories.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="categories.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="tags.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Tags
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="tags.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="tags.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="tags.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_4">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_4" name="flags[]"
                                                            class="form-check-input" value="contacts.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Contact
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="contacts.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="contacts.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="contact.custom-fields">
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Custom Fields
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_5">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_5" name="flags[]"
                                                            class="form-check-input" value="custom-fields.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Custom Fields
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="custom-fields.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="custom-fields.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="custom-fields.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_6">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_6" name="flags[]"
                                                            class="form-check-input" value="galleries.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Galleries
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="galleries.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="galleries.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="galleries.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_0_7">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_0_7" name="flags[]"
                                                            class="form-check-input" value="member.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Members
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="member.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="member.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="member.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="parent_tree m-0 p-0 list-unstyled" id="node1">
                                        <li class="permissions-item list-unstyled">
                                            <div class="permissions-header">
                                                <label class="form-check">
                                                    <input type="checkbox" id="checkbox_one_1" name="flags[]"
                                                        class="form-check-input check-success" value="settings.index"
                                                        checked>
                                                    <span class="form-check-label">
                                                        <span class="badge bg-success-lt">
                                                            Settings
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <ul class="row permissions-body has-children">
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_1_0">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_1_0" name="flags[]"
                                                            class="form-check-input" value="settings.common" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Common
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.options" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        General
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.email" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Email
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.media" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Media
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_3">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_3"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.admin-appearance" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Admin Appearance
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_4">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_4"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.cache" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Cache
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_5">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_5"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.datatables" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Datatables
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_6">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_6"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.email.rules" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Email Rules
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_7">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_7"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="optimize.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Optimize
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_8">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_8"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="settings.website-tracking" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Website Tracking
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_9">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_9"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="languages.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Languages
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="languages.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="languages.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="languages.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_1_1">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_1_1" name="flags[]"
                                                            class="form-check-input" value="settings.others" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Others
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="analytics.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Analytics
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="blog.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Blog
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="captcha.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Captcha
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_3">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_3"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="contact.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Contact
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_4">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_4"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="member.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Member
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_5">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_5"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="social-login.settings" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Social Login
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_1_2">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_1_2" name="flags[]"
                                                            class="form-check-input" value="plugins.translation" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Localization
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="translations.locales" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Locales
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="translations.theme-translations" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Theme translations
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="translations.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Other translations
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="parent_tree m-0 p-0 list-unstyled" id="node2">
                                        <li class="permissions-item list-unstyled">
                                            <div class="permissions-header">
                                                <label class="form-check">
                                                    <input type="checkbox" id="checkbox_one_2" name="flags[]"
                                                        class="form-check-input check-success" value="core.system"
                                                        checked>
                                                    <span class="form-check-label">
                                                        <span class="badge bg-success-lt">
                                                            System
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <ul class="row permissions-body has-children">
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_0">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_0" name="flags[]"
                                                            class="form-check-input" value="users.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Users
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="users.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="users.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="users.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_1">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_1" name="flags[]"
                                                            class="form-check-input" value="roles.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Roles
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="roles.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="roles.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Edit
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="roles.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_2">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_2" name="flags[]"
                                                            class="form-check-input" value="core.manage.license" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Manage license
                                                            </span>
                                                        </span>
                                                    </label>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_3">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_3" name="flags[]"
                                                            class="form-check-input" value="systems.cronjob" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Cronjob
                                                            </span>
                                                        </span>
                                                    </label>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_4">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_4" name="flags[]"
                                                            class="form-check-input" value="plugins.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Plugins
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="plugins.edit" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Activate/Deactivate
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="plugins.remove" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Remove
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="plugins.marketplace" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Add New Plugins
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_5">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_5" name="flags[]"
                                                            class="form-check-input" value="core.appearance" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Appearance
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="menus.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Menu
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="menus.create" checked>
                                                                        <span class="form-check-label">
                                                                            Create
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="menus.edit" checked>
                                                                        <span class="form-check-label">
                                                                            Edit
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child2">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_2"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="menus.destroy" checked>
                                                                        <span class="form-check-label">
                                                                            Delete
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Theme
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <ul class="list-unstyled">
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child0">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_0"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="theme.activate" checked>
                                                                        <span class="form-check-label">
                                                                            Activate
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li style="background-color: inherit"
                                                                    id="node_grand_child1">
                                                                    <label class="form-check">
                                                                        <input type="checkbox" id="checkbox_four_1"
                                                                            name="flags[]" class="form-check-input"
                                                                            value="theme.remove" checked>
                                                                        <span class="form-check-label">
                                                                            Remove
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme.options" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Theme options
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_3">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_3"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme.custom-css" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Custom CSS
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_4">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_4"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme.custom-js" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Custom JS
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_5">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_5"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme.custom-html" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Custom HTML
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_6">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_6"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme.robots-txt" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Robots.txt Editor
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_7">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_7"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="widgets.index" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Widgets
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_6">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_6" name="flags[]"
                                                            class="form-check-input" value="analytics.general" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Analytics
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="analytics.page" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Top Page
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="analytics.browser" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Top Browser
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="analytics.referrer" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Top Referrer
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_7">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_7" name="flags[]"
                                                            class="form-check-input" value="audit-log.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Activity Logs
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="audit-log.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_8">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_8" name="flags[]"
                                                            class="form-check-input" value="backups.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Backup
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="backups.create" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Create
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="backups.restore" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Restore
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="backups.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_2_9">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_2_9" name="flags[]"
                                                            class="form-check-input" value="request-log.index" checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Request Logs
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="request-log.destroy" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Delete
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="parent_tree m-0 p-0 list-unstyled" id="node3">
                                        <li class="permissions-item list-unstyled">
                                            <div class="permissions-header">
                                                <label class="form-check">
                                                    <input type="checkbox" id="checkbox_one_3" name="flags[]"
                                                        class="form-check-input check-success" value="core.tools"
                                                        checked>
                                                    <span class="form-check-label">
                                                        <span class="badge bg-success-lt">
                                                            Tools
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <ul class="row permissions-body has-children">
                                                <li class="list-unstyled col-4 m-0" style="background-color: inherit"
                                                    id="node_sub_3_0">
                                                    <label class="form-check">
                                                        <input type="checkbox" id="checkbox_two_3_0" name="flags[]"
                                                            class="form-check-input" value="tools.data-synchronize"
                                                            checked>
                                                        <span class="form-check-label">
                                                            <span class="badge bg-primary-lt">
                                                                Import/Export Data
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <ul class="list-unstyled">
                                                        <li style="background-color: inherit" id="node_sub_sub_0">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_0"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="posts.export" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Export Posts
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_1">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_1"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="posts.import" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Import Posts
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_2">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_2"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme-translations.export" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Export Theme translations
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_3">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_3"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="other-translations.export" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Export Other Translations
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_4">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_4"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="theme-translations.import" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Import Theme Translations
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li style="background-color: inherit" id="node_sub_sub_5">
                                                            <label class="form-check">
                                                                <input type="checkbox" id="checkbox_three_5"
                                                                    name="flags[]" class="form-check-input check-yellow"
                                                                    value="other-translations.import" checked>
                                                                <span class="form-check-label">
                                                                    <span class="badge bg-yellow-lt">
                                                                        Import Other Translations
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
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
                        <div data-bb-waypoint data-bb-target="#form-actions"></div>
                        <header class="top-0 w-100 position-fixed end-0 z-1000" id="form-actions"
                            style="display: none;">
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
                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                                        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M14 4l0 4l-6 0l0 -4" />
                                                    </svg>
                                                    Save
                                                </button>
                                                <button class="btn" type="submit" name="submitter"
                                                    value="save">
                                                    <svg class="icon icon-left svg-icon-ti-ti-transfer-in"
                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
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
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
