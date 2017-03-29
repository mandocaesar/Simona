
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
                { name: 'PPN Impor', field: 'ppnimpor', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'PPnBM', field: 'ppnbm', cellFilter: 'currency : "Rp"' },
                { name: 'PPH Psl 22', field: 'pph22', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'PPN Cukai HT', field: 'ppncukaiht', minWidth: 50, cellFilter: 'currency : "Rp"' },                
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
            {"bulan":"January","ppnimpor":"44976136000","ppnbm":"40000","pph22":"12440842000","ppncukaiht":"0"},
            { "bulan": "February", "ppnimpor": "52602234000", "ppnbm": "0", "pph22": "144362334000", "ppncukaiht": "0" },
            { "bulan": "March", "ppnimpor": "64403619000", "ppnbm": "0", "pph22": "17220639000", "ppncukaiht": "0" },
            { "bulan": "April", "ppnimpor": "54674447000", "ppnbm": "752000", "pph22": "115743081000", "ppncukaiht": "0" },
            { "bulan": "May", "ppnimpor": "63443115000", "ppnbm": "2795000", "pph22": "16899406000", "ppncukaiht": "0" },
            { "bulan": "June", "ppnimpor": "84474023000", "ppnbm": "2701000", "pph22": "10022215561000", "ppncukaiht": "0" },
            { "bulan": "July", "ppnimpor": "50630668000", "ppnbm": "0", "pph22": "13384756000", "ppncukaiht": "0" },
            { "bulan": "August", "ppnimpor": "74476856000", "ppnbm": "0", "pph22": "18251574000", "ppncukaiht": "0" },
            { "bulan": "September", "ppnimpor": "57960474000", "ppnbm": "0", "pph22": "15267894000", "ppncukaiht": "0" },
            { "bulan": "October", "ppnimpor": "56539163000", "ppnbm": "0", "pph22": "15054330000", "ppncukaiht": "0" },
            { "bulan": "November", "ppnimpor": "61976801520", "ppnbm": "0", "pph22": "17055442780", "ppncukaiht": "0" },
            { "bulan": "December", "ppnimpor": "70384038000", "ppnbm": "0", "pph22": "19530793000", "ppncukaiht": "0" },

        ];

        $scope.gridOpts3 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah' },
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
            { "bulan": "January", "penerimaan": "40000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "February", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "March", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "April", "penerimaan": "752000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "May", "penerimaan": "2795000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "June", "penerimaan": "2701000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "July", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "August", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "September", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "October", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "November", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "December", "penerimaan": "0", "jumlah": "10000", "rata": "10000", "cd": "10000" },

        ];

        
        $scope.gridOpts4 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah' },
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
        $scope.gridOpts4.data = [
            { "bulan": "January", "penerimaan": "44976136000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "February", "penerimaan": "52602234000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "March", "penerimaan": "64403619000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "April", "penerimaan": "54674447000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "May", "penerimaan": "63443115000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "June", "penerimaan": "84474023000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "July", "penerimaan": "50630668000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "August", "penerimaan": "50630668000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "September", "penerimaan": "57960474000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "October", "penerimaan": "56539163000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "November", "penerimaan": "61976801520", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "December", "penerimaan": "70384038000", "jumlah": "10000", "rata": "10000", "cd": "10000" },

        ];

        
        $scope.gridOpts5 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
 //               { name: 'Jumlah Dokumen', field: 'jumlah', cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah' },
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
        $scope.gridOpts5.data = [
        //pph 22
            { "bulan": "January", "penerimaan": "12440842000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "February", "penerimaan": "144362334000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "March", "penerimaan": "17220639000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "April", "penerimaan": "115743081000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "May", "penerimaan": "16899406000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "June", "penerimaan": "10022215561000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "July", "penerimaan": "13384756000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "August", "penerimaan": "18251574000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "September", "penerimaan": "15267894000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "October", "penerimaan": "15054330000", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "November", "penerimaan": "17055442780", "jumlah": "10000", "rata": "10000", "cd": "10000" },
            { "bulan": "December", "penerimaan": "19530793000", "jumlah": "10000", "rata": "10000", "cd": "10000" },

        ];


        $scope.gridOpts6 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah' },
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
       //cukai ht
        $scope.gridOpts6.data = [
            { "bulan": "January", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "February", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "March", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "April", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "May", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "June", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "July", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "August", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "September", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "October", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "November", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },
            { "bulan": "December", "penerimaan": "0", "jumlah": "0", "rata": "0", "cd": "0" },

        ];

        $scope.getMonths = function () {
            // service.getMonths().success(function (result) {
            //     console.log(result);
            //     $scope.months = result;
            // });
            $scope.months = ['01-01-2016', '02-01-2016', '03-01-2016', '04-01-2016',
                '05-01-2016', '06-01-2016', '07-01-2016', '08-01-2016',
                '09-01-2016', '10-01-2016', '11-01-2016', '12-01-2016'
            ]
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datappnbm = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datappnimpor = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datapph22 = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datappncukaiht = [
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

        $scope.dashboard.PPNBM = 0;
        $scope.dashboard.PPNIMPOR = 0;
        $scope.dashboard.PPH22 = 0;
        $scope.dashboard.PPNCUKAIHT = 0;

        $scope.dashboard.PPNBM2 = 0;
        $scope.dashboard.PPNIMPOR2 = 0;
        $scope.dashboard.PPH222 = 0;
        $scope.dashboard.PPNCUKAIHT2 = 0;

        $scope.dashboard.PPNBM2P = 0;
        $scope.dashboard.PPNIMPOR2P = 0;
        $scope.dashboard.PPH222P = 0;
        $scope.dashboard.PPNCUKAIHT2P = 0;

        $scope.update = function(){

               if ($scope.singleSelect === '01/01/2016') {
                    $scope.target = 339942425295;
                    $scope.totalCapaian = 27508668000;
                    $scope.targetBulan = 27508668000;
                    $scope.realisasi = 27508668000;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 0;
                    $scope.dashboard.PPH22 = 0;
                    $scope.dashboard.PPNCUKAIHT = 0;

                    $scope.dashboard.PPNBM2 = 0;
                    $scope.dashboard.PPNIMPOR2 = 0;
                    $scope.dashboard.PPH222 = 0;
                    $scope.dashboard.PPNCUKAIHT2 = 0;

                    $scope.dashboard.PPNBM2P = 0;
                    $scope.dashboard.PPNIMPOR2P = 0;
                    $scope.dashboard.PPH222P = 0;
                    $scope.dashboard.PPNCUKAIHT2P = 0;
               }

               if ($scope.singleSelect === '02/01/2016') {
                    $scope.target = 2000000;
                    $scope.totalCapaian = 200000;
                    $scope.targetBulan = 200000;
                    $scope.realisasi = 200000;

                    $scope.dashboard.PPNBM = 2;
                    $scope.dashboard.PPNIMPOR = 2;
                    $scope.dashboard.PPH22 = 2;
                    $scope.dashboard.PPNCUKAIHT = 2;

                    $scope.dashboard.PPNBM2 = 2;
                    $scope.dashboard.PPNIMPOR2 = 2;
                    $scope.dashboard.PPH222 = 2;
                    $scope.dashboard.PPNCUKAIHT2 = 2;

                    $scope.dashboard.PPNBM2P = 2;
                    $scope.dashboard.PPNIMPOR2P = 2;
                    $scope.dashboard.PPH222P = 2;
                    $scope.dashboard.PPNCUKAIHT2P = 2;
               }

               if ($scope.singleSelect === '03/01/2016') {
                    $scope.target = 3000000;
                    $scope.totalCapaian = 300000;
                    $scope.targetBulan = 300000;
                    $scope.realisasi = 300000;

                    $scope.dashboard.PPNBM = 3;
                    $scope.dashboard.PPNIMPOR = 3;
                    $scope.dashboard.PPH22 = 3;
                    $scope.dashboard.PPNCUKAIHT = 3;

                    $scope.dashboard.PPNBM2 = 3;
                    $scope.dashboard.PPNIMPOR2 = 3;
                    $scope.dashboard.PPH222 = 3;
                    $scope.dashboard.PPNCUKAIHT2 = 3;

                    $scope.dashboard.PPNBM2P = 3;
                    $scope.dashboard.PPNIMPOR2P = 3;
                    $scope.dashboard.PPH222P = 3;
                    $scope.dashboard.PPNCUKAIHT2P = 3;
               }

               if ($scope.singleSelect === '04/01/2016') {
                    $scope.target = 4000000;
                    $scope.totalCapaian = 400000;
                    $scope.targetBulan = 400000;
                    $scope.realisasi = 400000;

                    $scope.dashboard.PPNBM = 4;
                    $scope.dashboard.PPNIMPOR = 4;
                    $scope.dashboard.PPH22 = 4;
                    $scope.dashboard.PPNCUKAIHT = 4;

                    $scope.dashboard.PPNBM2 = 4;
                    $scope.dashboard.PPNIMPOR2 = 4;
                    $scope.dashboard.PPH222 = 4;
                    $scope.dashboard.PPNCUKAIHT2 = 4;

                    $scope.dashboard.PPNBM2P = 4;
                    $scope.dashboard.PPNIMPOR2P = 4;
                    $scope.dashboard.PPH222P = 4;
                    $scope.dashboard.PPNCUKAIHT2P = 4;
               }

               if ($scope.singleSelect === '05/01/2016') {
                    $scope.target = 5000000;
                    $scope.totalCapaian = 500000;
                    $scope.targetBulan = 500000;
                    $scope.realisasi = 500000;

                    $scope.dashboard.PPNBM = 5;
                    $scope.dashboard.PPNIMPOR = 5;
                    $scope.dashboard.PPH22 = 5;
                    $scope.dashboard.PPNCUKAIHT = 5;

                    $scope.dashboard.PPNBM2 = 5;
                    $scope.dashboard.PPNIMPOR2 = 5;
                    $scope.dashboard.PPH222 = 5;
                    $scope.dashboard.PPNCUKAIHT2 = 5;

                    $scope.dashboard.PPNBM2P = 5;
                    $scope.dashboard.PPNIMPOR2P = 5;
                    $scope.dashboard.PPH222P = 5;
                    $scope.dashboard.PPNCUKAIHT2P = 5;
               }

               if ($scope.singleSelect === '06/01/2016') {
                    $scope.target = 6000000;
                    $scope.totalCapaian = 600000;
                    $scope.targetBulan = 600000;
                    $scope.realisasi = 600000;

                    $scope.dashboard.PPNBM = 6;
                    $scope.dashboard.PPNIMPOR = 6;
                    $scope.dashboard.PPH22 = 6;
                    $scope.dashboard.PPNCUKAIHT = 6;

                    $scope.dashboard.PPNBM2 = 6;
                    $scope.dashboard.PPNIMPOR2 = 6;
                    $scope.dashboard.PPH222 = 6;
                    $scope.dashboard.PPNCUKAIHT2 = 6;

                    $scope.dashboard.PPNBM2P = 6;
                    $scope.dashboard.PPNIMPOR2P = 6;
                    $scope.dashboard.PPH222P = 6;
                    $scope.dashboard.PPNCUKAIHT2P = 6;
               }

               if ($scope.singleSelect === '07/01/2016') {
                    $scope.target = 7000000;
                    $scope.totalCapaian = 700000;
                    $scope.targetBulan = 70000;
                    $scope.realisasi = 700000;

                    $scope.dashboard.PPNBM = 7;
                    $scope.dashboard.PPNIMPOR = 7;
                    $scope.dashboard.PPH22 = 7;
                    $scope.dashboard.PPNCUKAIHT = 7;

                    $scope.dashboard.PPNBM2 = 7;
                    $scope.dashboard.PPNIMPOR2 = 7;
                    $scope.dashboard.PPH222 = 7;
                    $scope.dashboard.PPNCUKAIHT2 = 7;

                    $scope.dashboard.PPNBM2P = 7;
                    $scope.dashboard.PPNIMPOR2P = 7;
                    $scope.dashboard.PPH222P = 7;
                    $scope.dashboard.PPNCUKAIHT2P = 7;
               }

               if ($scope.singleSelect === '08/01/2016') {
                    $scope.target = 8000000;
                    $scope.totalCapaian = 800000;
                    $scope.targetBulan = 800000;
                    $scope.realisasi = 800000;

                    $scope.dashboard.PPNBM = 8;
                    $scope.dashboard.PPNIMPOR = 8;
                    $scope.dashboard.PPH22 = 8;
                    $scope.dashboard.PPNCUKAIHT = 8;

                    $scope.dashboard.PPNBM2 = 8;
                    $scope.dashboard.PPNIMPOR2 = 8;
                    $scope.dashboard.PPH222 = 8;
                    $scope.dashboard.PPNCUKAIHT2 = 8;

                    $scope.dashboard.PPNBM2P = 8;
                    $scope.dashboard.PPNIMPOR2P = 8;
                    $scope.dashboard.PPH222P = 8;
                    $scope.dashboard.PPNCUKAIHT2P = 8;
               }
               if ($scope.singleSelect === '09/01/2016') {
                    $scope.target = 9000000;
                    $scope.totalCapaian = 900000;
                    $scope.targetBulan = 900000;
                    $scope.realisasi = 900000;

                    $scope.dashboard.PPNBM = 9;
                    $scope.dashboard.PPNIMPOR = 9;
                    $scope.dashboard.PPH22 = 9;
                    $scope.dashboard.PPNCUKAIHT = 9;

                    $scope.dashboard.PPNBM2 = 9;
                    $scope.dashboard.PPNIMPOR2 = 9;
                    $scope.dashboard.PPH222 = 9;
                    $scope.dashboard.PPNCUKAIHT2 = 9;

                    $scope.dashboard.PPNBM2P = 9;
                    $scope.dashboard.PPNIMPOR2P = 9;
                    $scope.dashboard.PPH222P = 9;
                    $scope.dashboard.PPNCUKAIHT2P = 9;
               }
               if ($scope.singleSelect === '10/01/2016') {
                    $scope.target = 10000000;
                    $scope.totalCapaian = 1000000;
                    $scope.targetBulan = 1000000;
                    $scope.realisasi = 1000000;

                    $scope.dashboard.PPNBM = 10;
                    $scope.dashboard.PPNIMPOR = 10;
                    $scope.dashboard.PPH22 = 10;
                    $scope.dashboard.PPNCUKAIHT = 10;

                    $scope.dashboard.PPNBM2 = 10;
                    $scope.dashboard.PPNIMPOR2 = 10;
                    $scope.dashboard.PPH222 = 10;
                    $scope.dashboard.PPNCUKAIHT2 = 10;

                    $scope.dashboard.PPNBM2P = 10;
                    $scope.dashboard.PPNIMPOR2P = 10;
                    $scope.dashboard.PPH222P = 10;
                    $scope.dashboard.PPNCUKAIHT2P = 10;
               }
               if ($scope.singleSelect === '11/01/2016') {
                    $scope.target = 11000000;
                    $scope.totalCapaian = 1100000;
                    $scope.targetBulan = 1100000;
                    $scope.realisasi = 1100000;

                    $scope.dashboard.PPNBM = 11;
                    $scope.dashboard.PPNIMPOR = 11;
                    $scope.dashboard.PPH22 = 11;
                    $scope.dashboard.PPNCUKAIHT = 11;

                    $scope.dashboard.PPNBM2 = 11;
                    $scope.dashboard.PPNIMPOR2 = 11;
                    $scope.dashboard.PPH222 = 11;
                    $scope.dashboard.PPNCUKAIHT2 = 11;

                    $scope.dashboard.PPNBM2P = 11;
                    $scope.dashboard.PPNIMPOR2P = 11;
                    $scope.dashboard.PPH222P = 11;
                    $scope.dashboard.PPNCUKAIHT2P = 11;
               }

               if ($scope.singleSelect === '12/01/2016') {
                    $scope.target = 12000000;
                    $scope.totalCapaian = 1200000;
                    $scope.targetBulan = 1200000;
                    $scope.realisasi = 1200000;

                    $scope.dashboard.PPNBM = 12;
                    $scope.dashboard.PPNIMPOR = 12;
                    $scope.dashboard.PPH22 = 12;
                    $scope.dashboard.PPNCUKAIHT = 12;

                    $scope.dashboard.PPNBM2 = 12;
                    $scope.dashboard.PPNIMPOR2 = 12;
                    $scope.dashboard.PPH222 = 12;
                    $scope.dashboard.PPNCUKAIHT2 = 12;

                    $scope.dashboard.PPNBM2P = 12;
                    $scope.dashboard.PPNIMPOR2P = 12;
                    $scope.dashboard.PPH222P = 12;
                    $scope.dashboard.PPNCUKAIHT2P = 12;
               }
        }

        $scope.getMonths();
    }
])
