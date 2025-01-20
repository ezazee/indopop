@extends('backend.master.app')
@section('content')
<style>
    .select-search-full {
    height: auto;
    max-height: 150px;
    overflow-y: auto;
}
</style>
    @include('backend.components.breadcrumb')
    <div class="page-body page-content">
        <div class="container-xl">
            <form method="POST" action="https://cms.botble.com/admin/blog/tools/data-synchronize/export/posts"
                accept-charset="UTF-8" data-bb-toggle="export-data" class="data-synchronize-export-form"
                data-success-message="Exported successfully." data-error-message="Export failed.">
                <input name="_token" type="hidden" value="42fIbQT6Xrovsd94lwR86DyRlKGguWCIqCcbupto">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">
                            Export Reports
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-5">
                            <div class="row g-3">
                                <div class="col">
                                    <label for="startDate" class="form-label">Start Date</label>
                                    <input type="date" id="startDate" class="form-control"
                                        placeholder="Pilih Tanggal Awal" required>
                                </div>
                                <div class="col">
                                    <label for="endDate" class="form-label">End Date</label>
                                    <input type="date" id="endDate" class="form-control"
                                        placeholder="Pilih Tanggal Akhir" required>
                                </div>
                            </div>
                            <div class="row g-3 mt-3">
                                <div class="col">
                                    <label for="userList" class="form-label">Select User</label>
                                    <select class="select-search-full form-select" data-placeholder="Select author"
                                            data-allow-clear="true" id="author_id" name="author_id[]" multiple>
                                        <option value="" disabled>Select author</option>
                                        <option value="1">Graciela Bogan</option>
                                        <option value="2">Sterling Krajcik</option>
                                        <option value="3">Lee Jenkins</option>
                                        <option value="4">Lucile Block</option>
                                        <option value="5">Torrey Wiegand</option>
                                        <option value="6">Beverly Schuppe</option>
                                        <option value="7">Mariam Green</option>
                                        <option value="8">Jacynthe Ratke</option>
                                        <option value="9">Ally Ortiz</option>
                                        <option value="10">Kurtis Huel</option>
                                        <option value="11">John Smith</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-3">
                                <button type="button" class="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </div>

                        <div class="container mt-5">
                            <div class="d-flex justify-content-between">
                                <h2>Generated Report</h2>
                                <p><em>From: <strong>2024-12-01</strong> To: <strong>2025-01-14</strong></em></p>
                            </div>
                            <label class="form-label">Report User (NamaUser)</label>
                            <table class="table table-bordered mt-3">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Total Positgan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mohamad Rezaa</td>
                                        <td>email.com</td>
                                        <td>admin</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Mohamad Rezaa</td>
                                        <td>email.com</td>
                                        <td>admin</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Mohamad Rezaa</td>
                                        <td>email.com</td>
                                        <td>admin</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {{-- <div class="mb-3 position-relative">
                            <label class="form-label">
                                Format
                            </label>
                            <div class="position-relative form-check-group">
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="format" value="pdf" checked>
                                    <span class="form-check-label">PDF</span>
                                </label>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="format" value="xlsx">
                                    <span class="form-check-label">Excel</span>
                                </label>
                            </div>
                        </div> --}}
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary" type="submit">
                            Export
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
