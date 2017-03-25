
var controllerId = 'app.views.pdri';
angular.module('app').controller(controllerId, [
    '$scope', 'upload', '$http', function ($scope, upload, $http) {
        var vm = this;
        $scope.singleSelect = {};
        $scope.target = 0;
        $scope.totalCapaian = 0;
        $scope.targetBulan = 0;
        $scope.realisasi = 0;
        $scope.persenTahun = 0;
        $scope.persenBulan = 0;

        $scope.gridOpts2 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'PIB', field: 'pib', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'PIBK', field: 'pibk', cellFilter: 'currency : "Rp"' },
                { name: 'PPKP', field: 'ppkp', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'CD', field: 'cd', minWidth: 50 },
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: { fontSize: 9 },
            exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
            exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
            exporterPdfHeader: { text: "SIMONA", style: 'headerStyle' },
            exporterPdfFooter: function (currentPage, pageCount) {
                return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            },
            data: []
        };
        $scope.gridOpts2.data = [
            {"bulan":"January","pib":"10000","pibk":"10000","ppkp":"10000","cd":"10000"},
            { "bulan": "February", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "March", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "April", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "May", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "June", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "July", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "August", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "September", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "October", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "November", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },
            { "bulan": "December", "pib": "10000", "pibk": "10000", "ppkp": "10000", "cd": "10000" },

        ];

        $scope.gridOpts3 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah', cellFilter: 'currency : "Rp"' },
                { name: 'Rata2 Per Dokumen', field: 'rata', minWidth: 50, cellFilter: 'currency : "Rp"' },
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: { fontSize: 9 },
            exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
            exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
            exporterPdfHeader: { text: "SIMONA", style: 'headerStyle' },
            exporterPdfFooter: function (currentPage, pageCount) {
                return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            },
            data: []
        };
        $scope.gridOpts3.data = [
            { "bulan": "January", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "February", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "March", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "April", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "May", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "June", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "July", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "August", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "September", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "October", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "November", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "December", "penerimaan": "10000", "jumlah": "10000", "rata": "10000", "cd": "10000" },

        ];


        $scope.getMonths = function () {
            // service.getMonths().success(function (result) {
            //     console.log(result);
            //     $scope.months = result;
            // });
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                  },
                  {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: true,
                      position: 'right'
                  }
                ]
            }
        };

        $scope.dashboard = {};

        $scope.dashboard.PIB = 0;
        $scope.dashboard.PIBB = 0;
        $scope.dashboard.PIBK = 0;
        $scope.dashboard.PPKP = 0;
        $scope.dashboard.CD = 0;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 0;
        $scope.dashboard.PBK = 0;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 0;
        $scope.dashboard.PIBB2 = 0;
        $scope.dashboard.PIBK2 = 0;
        $scope.dashboard.PPKP2 = 0;
        $scope.dashboard.CD2 = 0;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 0;
        $scope.dashboard.PBK2 = 0;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        $scope.dashboard.PIB2P = 0;
        $scope.dashboard.PIBB2P = 0;
        $scope.dashboard.PIBK2P = 0;
        $scope.dashboard.PPKP2P = 0;
        $scope.dashboard.CD2P = 0;
        $scope.dashboard.PE2P = 0;
        $scope.dashboard.SPKPBM2P = 0;
        $scope.dashboard.PBK2P = 0;
        $scope.dashboard.CK12P = 0;
        $scope.dashboard.CK1A2P = 0;
        $scope.dashboard.CK52P = 0;
        $scope.getMonths();
    }
])
