<div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="viewModalLabel">View Chart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <select id="dataType" class="form-select mb-3">
                    <option value="daily">Harian</option>
                    <option value="weekly">Mingguan</option>
                    <option value="monthly">Bulanan</option>
                </select>
                <div id="chart" style="width:100%; height:400px;"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
    var series = {
        dailyData: {
            posts: [5, 10, 15, 20, 25, 30, 35, 40, 45], // Data harian
            dates: ["2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05", "2023-01-06", "2023-01-07", "2023-01-08", "2023-01-09"]
        },
        weeklyData: {
            posts: [30, 70, 50, 90, 110], // Data mingguan
            dates: ["2023-01-01", "2023-01-08", "2023-01-15", "2023-01-22", "2023-01-29"]
        },
        monthlyData: {
            posts: [150, 200, 250], // Data bulanan
            dates: ["2023-01-01", "2023-02-01", "2023-03-01"]
        }
    };

    var chart; // Variabel untuk menyimpan instance chart

    // Fungsi untuk menginisialisasi grafik
    function renderChart(dataType) {
        var data, labels;

        // Menentukan data dan label berdasarkan jenis data
        if (dataType === 'daily') {
            data = series.dailyData.posts;
            labels = series.dailyData.dates;
        } else if (dataType === 'weekly') {
            data = series.weeklyData.posts;
            labels = series.weeklyData.dates;
        } else if (dataType === 'monthly') {
            data = series.monthlyData.posts;
            labels = series.monthlyData.dates;
        }

        // Jika chart sudah ada, hapus chart yang lama
        if (chart) {
            chart.destroy();
        }

        var options = {
            series: [{
                name: "Total Postingan",
                data: data
            }],
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Analisis Postingan',
                align: 'left'
            },
            subtitle: {
                text: 'Jumlah Postingan',
                align: 'left'
            },
            labels: labels,
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        };

        chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }

    // Event listener untuk membuka modal
    document.getElementById('viewModal').addEventListener('show.bs.modal', function() {
        var dataType = document.getElementById('dataType').value; // Ambil nilai dari dropdown
        renderChart(dataType); // Menampilkan grafik sesuai pilihan
    });

    // Event listener untuk mengubah grafik saat pilihan diubah
    document.getElementById('dataType').addEventListener('change', function() {
        var dataType = this.value;
        renderChart(dataType); // Menampilkan grafik sesuai pilihan
    });
    </script>

