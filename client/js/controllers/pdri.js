
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
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' }
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
            { "bulan": "January", "penerimaan": "40000" },
            { "bulan": "February", "penerimaan": "0"},
            { "bulan": "March", "penerimaan": "0"},
            { "bulan": "April", "penerimaan": "752000"},
            { "bulan": "May", "penerimaan": "2795000" },
            { "bulan": "June", "penerimaan": "2701000"  },
            { "bulan": "July", "penerimaan": "0"  },
            { "bulan": "August", "penerimaan": "0"  },
            { "bulan": "September", "penerimaan": "0"  },
            { "bulan": "October", "penerimaan": "0"  },
            { "bulan": "November", "penerimaan": "0"  },
            { "bulan": "December", "penerimaan": "0"  },

        ];

        
        $scope.gridOpts4 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },

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
            { "bulan": "January", "penerimaan": "44976136000"  },
            { "bulan": "February", "penerimaan": "52602234000"  },
            { "bulan": "March", "penerimaan": "64403619000"  },
            { "bulan": "April", "penerimaan": "54674447000"  },
            { "bulan": "May", "penerimaan": "63443115000"  },
            { "bulan": "June", "penerimaan": "84474023000"  },
            { "bulan": "July", "penerimaan": "50630668000"  },
            { "bulan": "August", "penerimaan": "50630668000"  },
            { "bulan": "September", "penerimaan": "57960474000"  },
            { "bulan": "October", "penerimaan": "56539163000"  },
            { "bulan": "November", "penerimaan": "61976801520"  },
            { "bulan": "December", "penerimaan": "70384038000"  },

        ];

        
        $scope.gridOpts5 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' },
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
            { "bulan": "January", "penerimaan": "12440842000"  },
            { "bulan": "February", "penerimaan": "14436233400"  },
            { "bulan": "March", "penerimaan": "17220639000"  },
            { "bulan": "April", "penerimaan": "11574308100"  },
            { "bulan": "May", "penerimaan": "16899406000"  },
            { "bulan": "June", "penerimaan": "22215561000"  },
            { "bulan": "July", "penerimaan": "13384756000"  },
            { "bulan": "August", "penerimaan": "18251574000"  },
            { "bulan": "September", "penerimaan": "15267894000"  },
            { "bulan": "October", "penerimaan": "15054330000"  },
            { "bulan": "November", "penerimaan": "17055442780"  },
            { "bulan": "December", "penerimaan": "19530793000"  },

        ];


        $scope.gridOpts6 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Bulan', field: 'bulan', minWidth: 50 },
                { name: 'Penerimaan', field: 'penerimaan', minWidth: 50, cellFilter: 'currency : "Rp"' }
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
          $scope.months = ['03-01-2017', '02-01-2017', '01-01-2017', '12-01-2016',
        '11-01-2016', '10-01-2016', '09-01-2016', '08-01-2016',
        '07-01-2016', '06-01-2016', '05-01-2016', '04-01-2016','03-01-2016'
        ,'02-01-2016','01-01-2016'
      ]
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datappnbm = [
            
          [40000, 0, 0, 752000, 2795000, 2701000, 0,0,0,0,0,0,0,0,0,0],
         
        ];

        $scope.datappnimpor = [
          [44976136000, 52602234000, 64403619000, 54674447000,63443115000,84474023000,50630668000,50630668000,57960474000,56539163000,61976801520,70384038000]
         
        ];

        $scope.datapph22 = [
          [12440842000, 14436233400,17220639000, 11574308100, 16899406000,22215561000, 13384756000,18251574000,15267894000,15054330000,17055442780,19530793000]
         
        ];

        $scope.datappncukaiht = [
          [0,0,0,0,0,0,0,0,0,0,0,0]
         
        ];

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        $scope.options = {
            scales: {
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
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
                    
                    $scope.totalCapaian = 27508668000;
                   
                    $scope.realisasi = 27508668000;

                    $scope.dashboard.PPNBM = 40000;
                    $scope.dashboard.PPNIMPOR = 44976136000;
                    $scope.dashboard.PPH22 = 12440842000;
                    $scope.dashboard.PPNCUKAIHT = 0;

               }

               if ($scope.singleSelect === '02/01/2016') {
                    $scope.totalCapaian = 51289226400;
                   
                    $scope.realisasi = 23780558400;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 52602234000;
                    $scope.dashboard.PPH22 = 14436233400;
                    $scope.dashboard.PPNCUKAIHT = 0;

               }

               if ($scope.singleSelect === '03/01/2016') {
                    $scope.totalCapaian = 82440530760;
                   
                    $scope.realisasi = 31151304360;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 64403619000;
                    $scope.dashboard.PPH22 = 17220639000;
                    $scope.dashboard.PPNCUKAIHT = 0;

               }

               if ($scope.singleSelect === '04/01/2016') {
                    $scope.totalCapaian = 116321105351;
                   
                    $scope.realisasi = 33880574591;

                    $scope.dashboard.PPNBM = 752000;
                    $scope.dashboard.PPNIMPOR = 54674447000;
                    $scope.dashboard.PPH22 = 11574308100;
                    $scope.dashboard.PPNCUKAIHT = 0;

               }

               if ($scope.singleSelect === '05/01/2016') {
                     $scope.totalCapaian = 146406487351;
                   
                    $scope.realisasi = 30085382000;

                    $scope.dashboard.PPNBM = 2795000;
                    $scope.dashboard.PPNIMPOR = 63443115000;
                    $scope.dashboard.PPH22 = 16899406000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }

               if ($scope.singleSelect === '06/01/2016') {
                    $scope.totalCapaian = 146406487351;
                   
                    $scope.realisasi = 30085382000;

                    $scope.dashboard.PPNBM = 2795000;
                    $scope.dashboard.PPNIMPOR = 63443115000;
                    $scope.dashboard.PPH22 = 16899406000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }

               if ($scope.singleSelect === '07/01/2016') {
                    $scope.totalCapaian = 207590853351;
                   
                    $scope.realisasi = 35123205480;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 84474023000;
                    $scope.dashboard.PPH22 = 22215561000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }

               if ($scope.singleSelect === '08/01/2016') {
                     $scope.totalCapaian = 207590853351;
                   
                    $scope.realisasi = 22467579000;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 50630668000;
                    $scope.dashboard.PPH22 = 13384756000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }
               if ($scope.singleSelect === '09/01/2016') {
                     $scope.totalCapaian = 273561430831;
                   
                    $scope.realisasi = 30847372000;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 57960474000;
                    $scope.dashboard.PPH22 = 18251574000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }
               if ($scope.singleSelect === '10/01/2016') {
                  $scope.totalCapaian = 300931240659;
                   
                    $scope.realisasi = 27369809828;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 56539163000;
                    $scope.dashboard.PPH22 = 15267894000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }
               if ($scope.singleSelect === '11/01/2016') {
                   $scope.totalCapaian = 332066460459;
                   
                    $scope.realisasi = 31135219800;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 61976801520;
                    $scope.dashboard.PPH22 = 15054330000;
                    $scope.dashboard.PPNCUKAIHT = 0;
               }

               if ($scope.singleSelect === '12/01/2016') {
                    $scope.totalCapaian = 357487308959;
                   
                    $scope.realisasi = 25420848500;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 70384038000;
                    $scope.dashboard.PPH22 = 17055442780;
                    $scope.dashboard.PPNCUKAIHT = 0;
                    $scope.persenTahun = 0;
                    $scope.persenBulan = 0;
               }
               if ($scope.singleSelect === '01/01/2017') {
                    $scope.target = 393202279000;
                    $scope.totalCapaian = 21665640000;
                    $scope.targetBulan = 22748922000;
                    $scope.realisasi = 21665640000;

                    $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 49800465000;
                    $scope.dashboard.PPH22 = 13890748000;
                    $scope.dashboard.PPNCUKAIHT = 0;
                    $scope.persenTahun = 0;
                    $scope.persenBulan = 0;
               }
                 if ($scope.singleSelect === '02/01/2017') {
                    $scope.target = 393202279000;
                    $scope.totalCapaian = 44917201000;
                    $scope.targetBulan = 22748922000;
                    $scope.realisasi = 23251561000;

                     $scope.dashboard.PPNBM = 3970000;
                    $scope.dashboard.PPNIMPOR = 49099621000;
                    $scope.dashboard.PPH22 = 13302743812;
                    $scope.dashboard.PPNCUKAIHT = 0;
                    $scope.persenTahun = 0;
                    $scope.persenBulan = 0;

               }  if ($scope.singleSelect === '03/01/2017') {
                    $scope.target = 393202279000;
                    $scope.totalCapaian = 72629218000;
                    $scope.targetBulan = 34770443000;
                    $scope.realisasi = 28052487000;

                     $scope.dashboard.PPNBM = 0;
                    $scope.dashboard.PPNIMPOR = 49800465000;
                    $scope.dashboard.PPH22 = 13890748000;
                    $scope.dashboard.PPNCUKAIHT = 0;
                    $scope.persenTahun = 0;
                    $scope.persenBulan = 0;
               }

        }

        $scope.getMonths();
    }
])
