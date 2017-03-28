var controllerId = 'app.views.penerimaanterbesar';
angular.module('app').controller(controllerId, ['$scope', 'upload', '$http',
    function ($scope, upload, $http) {

        $scope.singleSelect = {};
        $scope.singleDocument = {};
        $scope.data = [];

        $scope.dataset = [
            {   
                year:2016, 
                month:1, 
                company:[
                        {name:"PT A", bm:10000, totaldoc:10000, rata:10000},
                        {name:"PT B", bm:20000, totaldoc:20000, rata:20000},
                        {name:"PT C", bm:30000, totaldoc:30000, rata:30000},
                        {name:"PT D", bm:40000, totaldoc:40000, rata:40000},
                        {name:"PT E", bm:50000, totaldoc:50000, rata:50000},
                        {name:"PT F", bm:60000, totaldoc:60000, rata:60000},                        
                        {name:"PT G", bm:70000, totaldoc:70000, rata:70000},
                        {name:"PT H", bm:80000, totaldoc:80000, rata:80000},
                        {name:"PT I", bm:90000, totaldoc:90000, rata:90000},
                        {name:"PT J", bm:100000, totaldoc:100000, rata:100000},
                    ],
                documents:[
                               {name:'BC 2.0 PIB Biasa', value:[100,200,300,400,500,600,700,100,200,100,100,120]},
                               {name:'BC 2.0 PIB Fas. Pembayaran Berkala',value:[10033,2030,3020,43030,35003,63003,7003,1030,2005,16007,16400,120]},
                               {name:'SPSA',value:[100,200,300,400,500,600,700,100,200,100,100,120]},
                               {name:'BC 3.0',value:[10440,200,30440,400,500,600,700,100,200,100,100,120]},
                               {name:'SPTNP',value:[10440,200,34400,400,500,600,700,100,200,100,100,120]},
                               {name:'SPP',value:[100,2400,301220,4210,5550,650,700,100,200,400,400,120]},
                               {name:'SPKTNP',value:[1400,24400,300,400,500,600,700,100,200,11,1123,120]},
                               {name:'SPPBK',value:[10440,200,300,400,500,600,700,100,200,100,100,120]},
                               {name:'BC 2.5',value:[1030,2020,3020,4020,500,600,700,100,200,100,100,120]},
                               {name:'Surat Teguran',value:[100,2003,300,40440,54400,600,700,112,200,100,100,120]},
                               {name:'Surat Paksa',value:[100,200,300,400,500,600,700,100,200,100,100,120]},
                               {name:'Kep. Dirjen BC Keberatan',value:[1020,200,30440,400,500,600,700,100,200,100,100,120]},
                               {name:'BC 2.1 PIBK',value:[100,200,300,40230,500,60440,700,100,200,100,100,120]},
                               {name:'PPKP',value:[100,200,300,400,500,600,700,1400,200,100,100,120]},
                               {name:'BC 2.2. Customs Declaration',value:[100,2400,300,4030,53300,6300,7100,100,200,100,100,120]},
                               {name:'Lain-Lain', value:[100,200,300,400,5010,6040,700,100,200,1030,10230,120]}
                ]
            }
        ]

        $scope.gridOpts2 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [
                { name: 'Nama PT', field: 'name', minWidth: 50 },
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
        
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July","Agustus","September","Oktober","November","December"];
            $scope.series = $scope.pluck($scope.doctypes,'name');
            $scope.gridOpts2.data = $scope.dataset[0].company;
            $scope.docvalue = $scope.pluck($scope.dataset[0].documents,'value');
            
            for(var i = 0;i<=$scope.docvalue.length;i++){
                $scope.data.push($scope.docvalue[i]);
            }
              $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
                $scope.options = {
                    legend: {display: true},
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
            console.log($scope.data);
        };

        $scope.update = function(){
            
        }

        $scope.init();
    }
])