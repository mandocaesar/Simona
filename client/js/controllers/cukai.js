
var controllerId = 'app.views.cukai';
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
                { name: 'CK1', field: 'ck1', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'CK-1A', field: 'ck1a', cellFilter: 'currency : "Rp"' },
                { name: 'CK5', field: 'ck5', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'PBK', field: 'pbk', minWidth: 50, cellFilter: 'currency : "Rp"' },
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
            {"bulan":"January","ck1":"0","ck1a":"0","ck5":"0","pbk":"0"},
            { "bulan": "February", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"86499091" },
            { "bulan": "March", "ck1": "0", "ck1a": "0", "ck5": "0" ,"pbk":"48354545"},
            { "bulan": "April", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"218481820" },
            { "bulan": "May", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"0" },
            { "bulan": "June", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"36545455" },
            { "bulan": "July", "ck1": "0", "ck1a": "0", "ck5": "0" ,"pbk":"127272728"},
            { "bulan": "August", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"63636364" },
            { "bulan": "September", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"104545455" },
            { "bulan": "October", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"100000002" },
            { "bulan": "November", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"40909091" },
            { "bulan": "December", "ck1": "0", "ck1a": "0", "ck5": "0","pbk":"73462274" },

        ];

        $scope.gridOpts3 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah', cellFilter: 'currency : " "' },
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
            { "bulan": "January", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "February", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "March", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "April", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "May", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "June", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "July", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "August", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "September", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "October", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "November", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "December", "penerimaan": "0", "jumlah": "0", "rata": "0" },

        ];

        $scope.gridOpts4 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah', cellFilter: 'currency : " "' },
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
            { "bulan": "January", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "February", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "March", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "April", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "May", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "June", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "July", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "August", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "September", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "October", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "November", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "December", "penerimaan": "0", "jumlah": "0", "rata": "0" },

        ];

        $scope.gridOpts5 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah', cellFilter: 'currency : " "' },
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
            { "bulan": "January", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "February", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "March", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "April", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "May", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "June", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "July", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "August", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "September", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "October", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "November", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "December", "penerimaan": "0", "jumlah": "0", "rata": "0" },

        ];

        $scope.gridOpts6 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Jumlah Dokumen', field: 'jumlah', cellFilter: 'currency : " "' },
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
        $scope.gridOpts6.data = [
            { "bulan": "January", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "February", "penerimaan": "86499091", "jumlah": "5", "rata": "17299818.2" },
            { "bulan": "March", "penerimaan": "48354545", "jumlah": "4", "rata": "12088636.25" },
            { "bulan": "April", "penerimaan": "218481820", "jumlah": "16", "rata": "13655113.75" },
            { "bulan": "May", "penerimaan": "0", "jumlah": "0", "rata": "0" },
            { "bulan": "June", "penerimaan": "36545455", "jumlah": "4", "rata": "9136363.75" },
            { "bulan": "July", "penerimaan": "127272728", "jumlah": "4", "rata": "31818182" },
            { "bulan": "August", "penerimaan": "63636364", "jumlah": "4", "rata": "15909091" },
            { "bulan": "September", "penerimaan": "104545455", "jumlah": "6", "rata": "17424242.5" },
            { "bulan": "October", "penerimaan": "100000002", "jumlah": "9", "rata": "11111111.3" },
            { "bulan": "November", "penerimaan": "40909091", "jumlah": "2", "rata": "20454545.5" },
            { "bulan": "December", "penerimaan": "73462274", "jumlah": "7", "rata": "10494610.5" },

        ];
        
        $scope.getMonths = function () {
              $scope.months = ['01-01-2016', '02-01-2016', '03-01-2016', '04-01-2016',
                '05-01-2016', '06-01-2016', '07-01-2016', '08-01-2016',
                '09-01-2016', '10-01-2016', '11-01-2016', '12-01-2016'
            ]
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
        $scope.series = ['Series A', 'Series B'];
    //     $scope.data = [
      //    [65, 59, 80, 81, 56, 55, 40],
     //     [28, 48, 40, 19, 86, 27, 90]
     //   ];
        $scope.datack = [
          [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
            [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0]
        ];
         $scope.datack1a = [
           [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
            [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0]
        ];
         $scope.datack5 = [
          [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
            [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0]
        ];
         $scope.datapbk = [
          [0, 86499091,48354545,218481820,0, 36545455,127272728,63636364,104545455,100000002,40909091,73462274 ],
          [0, 5, 4, 16,0, 4,4,4,6,9,2,7]
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

        $scope.dashboard.PBK = 0;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PBK2 = 0;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

       
        $scope.dashboard.PBK2P = 0;
        $scope.dashboard.CK12P = 0;
        $scope.dashboard.CK1A2P = 0;
        $scope.dashboard.CK52P = 0;

        $scope.update = function(){
            if ($scope.singleSelect === '01/01/2016') {
                
                $scope.target = 0;
                $scope.totalCapaian = 0;
                $scope.targetBulan = 0;
                $scope.realisasi = 0;

                $scope.dashboard.PBK = 0;
                $scope.dashboard.CK1 = 0;
                $scope.dashboard.CK1A = 0;
                $scope.dashboard.CK5 =0;

                $scope.dashboard.PBK2 = 0;
                $scope.dashboard.CK12 = 0;
                $scope.dashboard.CK1A2 =0;
                $scope.dashboard.CK52 = 0;

            
                $scope.dashboard.PBK2P = 1;
                $scope.dashboard.CK12P = 1;
                $scope.dashboard.CK1A2P = 1;
                $scope.dashboard.CK52P = 1;
            }

            if ($scope.singleSelect === '02/01/2016') {
                
                 $scope.target = 0;
                $scope.totalCapaian = 86499091;
                $scope.targetBulan = 0;
                $scope.realisasi = 86499091;

                $scope.dashboard.PBK = 2;
                $scope.dashboard.CK1 = 2;
                $scope.dashboard.CK1A = 2;
                $scope.dashboard.CK5 = 2;

                $scope.dashboard.PBK2 = 2;
                $scope.dashboard.CK12 = 2;
                $scope.dashboard.CK1A2 = 2;
                $scope.dashboard.CK52 = 2;

            
                $scope.dashboard.PBK2P = 2;
                $scope.dashboard.CK12P = 2;
                $scope.dashboard.CK1A2P = 2;
                $scope.dashboard.CK52P = 2;
            }

            if ($scope.singleSelect === '03/01/2016') {
                
                $scope.target = 3000000;
                $scope.totalCapaian = 300000;
                $scope.targetBulan = 300000;
                $scope.realisasi = 300000;

                $scope.dashboard.PBK = 3;
                $scope.dashboard.CK1 = 3;
                $scope.dashboard.CK1A = 3;
                $scope.dashboard.CK5 = 3;

                $scope.dashboard.PBK2 = 3;
                $scope.dashboard.CK12 = 3;
                $scope.dashboard.CK1A2 = 3;
                $scope.dashboard.CK52 = 3;

            
                $scope.dashboard.PBK2P = 3;
                $scope.dashboard.CK12P = 3;
                $scope.dashboard.CK1A2P = 3;
                $scope.dashboard.CK52P = 3;
            }

            if ($scope.singleSelect === '04/01/2016') {
                
                $scope.target = 4000000;
                $scope.totalCapaian = 400000;
                $scope.targetBulan = 400000;
                $scope.realisasi = 400000;

                $scope.dashboard.PBK = 4;
                $scope.dashboard.CK1 = 4;
                $scope.dashboard.CK1A = 4;
                $scope.dashboard.CK5 = 4;

                $scope.dashboard.PBK2 = 4;
                $scope.dashboard.CK12 = 4;
                $scope.dashboard.CK1A2 = 4;
                $scope.dashboard.CK52 = 4;

            
                $scope.dashboard.PBK2P = 4;
                $scope.dashboard.CK12P = 4;
                $scope.dashboard.CK1A2P = 4;
                $scope.dashboard.CK52P = 4;
            }

            if ($scope.singleSelect === '05/01/2016') {
                
                $scope.target = 5000000;
                $scope.totalCapaian = 500000;
                $scope.targetBulan = 500000;
                $scope.realisasi = 500000;

                $scope.dashboard.PBK = 5;
                $scope.dashboard.CK1 = 5;
                $scope.dashboard.CK1A = 5;
                $scope.dashboard.CK5 = 5;

                $scope.dashboard.PBK2 = 5;
                $scope.dashboard.CK12 = 5;
                $scope.dashboard.CK1A2 = 5;
                $scope.dashboard.CK52 = 5;

            
                $scope.dashboard.PBK2P = 5;
                $scope.dashboard.CK12P = 5;
                $scope.dashboard.CK1A2P = 5;
                $scope.dashboard.CK52P = 5;
            }
            
            if ($scope.singleSelect === '06/01/2016') {
                
                $scope.target = 6000000;
                $scope.totalCapaian = 600000;
                $scope.targetBulan = 600000;
                $scope.realisasi = 600000;

                $scope.dashboard.PBK = 6;
                $scope.dashboard.CK1 = 6;
                $scope.dashboard.CK1A = 6;
                $scope.dashboard.CK5 = 6;

                $scope.dashboard.PBK2 = 6;
                $scope.dashboard.CK12 = 6;
                $scope.dashboard.CK1A2 = 6;
                $scope.dashboard.CK52 = 6;

            
                $scope.dashboard.PBK2P = 6;
                $scope.dashboard.CK12P = 6;
                $scope.dashboard.CK1A2P = 6;
                $scope.dashboard.CK52P = 6;
            }
            
            if ($scope.singleSelect === '07/01/2016') {
                
                $scope.target = 7000000;
                $scope.totalCapaian = 700000;
                $scope.targetBulan = 700000;
                $scope.realisasi = 700000;

                $scope.dashboard.PBK = 7;
                $scope.dashboard.CK1 = 7;
                $scope.dashboard.CK1A = 7;
                $scope.dashboard.CK5 = 7;

                $scope.dashboard.PBK2 = 7;
                $scope.dashboard.CK12 = 7;
                $scope.dashboard.CK1A2 = 7;
                $scope.dashboard.CK52 = 7;

            
                $scope.dashboard.PBK2P = 0;
                $scope.dashboard.CK12P = 0;
                $scope.dashboard.CK1A2P = 0;
                $scope.dashboard.CK52P = 0;
            }
            
            if ($scope.singleSelect === '08/01/2016') {
                
                $scope.target = 8000000;
                $scope.totalCapaian = 800000;
                $scope.targetBulan = 800000;
                $scope.realisasi = 800000;

                $scope.dashboard.PBK = 8;
                $scope.dashboard.CK1 = 8;
                $scope.dashboard.CK1A = 8;
                $scope.dashboard.CK5 = 8;

                $scope.dashboard.PBK2 = 8;
                $scope.dashboard.CK12 = 8;
                $scope.dashboard.CK1A2 = 8;
                $scope.dashboard.CK52 = 8;

            
                $scope.dashboard.PBK2P = 8;
                $scope.dashboard.CK12P = 8;
                $scope.dashboard.CK1A2P = 8;
                $scope.dashboard.CK52P = 8;
            }

            
            if ($scope.singleSelect === '09/01/2016') {
                
                $scope.target = 9000000;
                $scope.totalCapaian = 900000;
                $scope.targetBulan = 900000;
                $scope.realisasi = 900000;

                $scope.dashboard.PBK = 9;
                $scope.dashboard.CK1 = 9;
                $scope.dashboard.CK1A = 9;
                $scope.dashboard.CK5 = 9;

                $scope.dashboard.PBK2 = 9;
                $scope.dashboard.CK12 = 9;
                $scope.dashboard.CK1A2 = 9;
                $scope.dashboard.CK52 = 9;

            
                $scope.dashboard.PBK2P = 9;
                $scope.dashboard.CK12P = 9;
                $scope.dashboard.CK1A2P = 9;
                $scope.dashboard.CK52P = 9;
            }
            
            if ($scope.singleSelect === '10/01/2016') {
                
                $scope.target = 10000000;
                $scope.totalCapaian = 1000000;
                $scope.targetBulan = 1000000;
                $scope.realisasi = 1000000;

                $scope.dashboard.PBK = 10;
                $scope.dashboard.CK1 = 10;
                $scope.dashboard.CK1A = 10;
                $scope.dashboard.CK5 = 10;

                $scope.dashboard.PBK2 = 10;
                $scope.dashboard.CK12 = 10;
                $scope.dashboard.CK1A2 = 10;
                $scope.dashboard.CK52 = 10;

            

                $scope.dashboard.PBK2P = 10;
                $scope.dashboard.CK12P = 10;
                $scope.dashboard.CK1A2P = 10;
                $scope.dashboard.CK52P = 10;
            }

            
            if ($scope.singleSelect === '11/01/2016') {
                
                $scope.target = 11000000;
                $scope.totalCapaian = 1100000;
                $scope.targetBulan = 1100000;
                $scope.realisasi = 1100000;

                $scope.dashboard.PBK = 11;
                $scope.dashboard.CK1 = 11;
                $scope.dashboard.CK1A = 11;
                $scope.dashboard.CK5 = 11;

                $scope.dashboard.PBK2 = 11;
                $scope.dashboard.CK12 = 11;
                $scope.dashboard.CK1A2 = 11;
                $scope.dashboard.CK52 = 11;

            
                $scope.dashboard.PBK2P = 11;
                $scope.dashboard.CK12P = 11;
                $scope.dashboard.CK1A2P = 11;
                $scope.dashboard.CK52P = 11;
            }

            
            if ($scope.singleSelect === '12/01/2016') {
                
                $scope.target = 12000000;
                $scope.totalCapaian = 1200000;
                $scope.targetBulan = 1200000;
                $scope.realisasi = 1200000;

                $scope.dashboard.PBK = 12;
                $scope.dashboard.CK1 = 12;
                $scope.dashboard.CK1A = 12;
                $scope.dashboard.CK5 = 12;

                $scope.dashboard.PBK2 = 12;
                $scope.dashboard.CK12 = 12;
                $scope.dashboard.CK1A2 = 12;
                $scope.dashboard.CK52 = 12;

            
                $scope.dashboard.PBK2P = 12;
                $scope.dashboard.CK12P = 12;
                $scope.dashboard.CK1A2P = 12;
                $scope.dashboard.CK52P = 12;
            } 
        }
       
        $scope.getMonths();
    }
])
