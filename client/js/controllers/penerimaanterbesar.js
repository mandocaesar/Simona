var controllerId = 'app.views.penerimaanterbesar';
angular.module('app').controller(controllerId, ['$scope', 'upload', '$http',
    function ($scope, upload, $http) {

        $scope.singleSelect = {};
        $scope.singleDocument = {};
        $scope.data = [];

        $scope.dataset = [
            {year:2016, month:1, company:[]}
        ]

        $scope.gridOpts2 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Nama PT', field: 'nama', minWidth: 50 },
                { name: 'Jumlah BM' , field: 'bm', minWidth: 50, cellFilter: 'currency : "Rp"' },
                { name: 'Total Dokumen', field: 'totaldoc'},
                { name: 'Rata-rata', field: 'rata', minWidth: 50, cellFilter: 'currency : "Rp"' },
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

        $scope.gridOpts2.data = [];

        $scope.init = function(){
            $scope.months = ['03-01-2017','02-01-2017','01-01-2017',
                '12-01-2016', '11-01-2016', '10-01-2016', '09-01-2016',
                '08-01-2016', '07-01-2016', '06-01-2016', '05-01-2016',
                '04-01-2016', '03-01-2016', '02-01-2016', '01-01-2016'
            ];

            $scope.doctypes = [{name:'BC 2.0 PIB Biasa', value:0},
                               {name:'BC 2.0 PIB Fas. Pembayaran Berkala',value:1},
                               {name:'SPSA',value:2},
                               {name:'BC 3.0',value:3},
                               {name:'SPTNP',value:4},
                               {name:'SPP',value:5},
                               {name:'SPKTNP',value:6},
                               {name:'SPPBK',value:7},
                               {name:'BC 2.5',value:8},
                               {name:'Surat Teguran',value:9},
                               {name:'Surat Paksa',value:10},
                               {name:'Kep. Dirjen BC Keberatan',value:11},
                               {name:'BC 2.1 PIBK',value:12},
                               {name:'PPKP',value:13},
                               {name:'BC 2.2. Customs Declaration',value:14},
                               {name:'Lain-Lain', value:15} 
                             ];
        
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.series = $scope.pluck($scope.doctypes,'name');
            debugger;
            console.log($scope.series);
        };

        $scope.update = function(){
            
        }

        $scope.init();
    }
])