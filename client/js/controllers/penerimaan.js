var controllerId = 'app.views.penerimaan';
angular.module('app').controller(controllerId, [
    '$scope', 'upload', '$http',
    function ($scope, upload, $http) {
        var vm = this;
        $scope.singleSelect = {};
        $scope.target = 0;
        $scope.totalCapaian = 0;
        $scope.targetBulan = 0;
        $scope.realisasi = 0;
        $scope.persenTahun = ($scope.totalCapaian / $scope.target) * 100;
        $scope.persenBulan = ($scope.realisasi / $scope.targetBulan) * 100;

        $scope.gridOpts2 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [{
                    name: 'Bulan',
                    field: 'bulan',
                    minWidth: 50
                },
                {
                    name: 'PIB',
                    field: 'pib',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'PIBK',
                    field: 'pibk',
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'PPKP',
                    field: 'ppkp',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'CD',
                    field: 'cd',
                    minWidth: 50
                },
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: {
                fontSize: 9
            },
            exporterPdfTableStyle: {
                margin: [30, 30, 30, 30]
            },
            exporterPdfTableHeaderStyle: {
                fontSize: 10,
                bold: true,
                italics: true,
                color: 'red'
            },
            exporterPdfHeader: {
                text: "SIMONA",
                style: 'headerStyle'
            },
            exporterPdfFooter: function (currentPage, pageCount) {
                return {
                    text: currentPage.toString() + ' of ' + pageCount.toString(),
                    style: 'footerStyle'
                };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = {
                    fontSize: 22,
                    bold: true
                };
                docDefinition.styles.footerStyle = {
                    fontSize: 10,
                    bold: true
                };
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
        $scope.gridOpts2.data = [{
                "bulan": "January",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "February",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "March",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "April",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "May",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "June",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "July",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "August",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "September",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "October",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "November",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },
            {
                "bulan": "December",
                "pib": "10000",
                "pibk": "10000",
                "ppkp": "10000",
                "cd": "10000"
            },

        ];

        $scope.gridOpts3 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [{
                    name: 'Bulan',
                    field: 'bulan',
                    minWidth: 50
                },
                {
                    name: 'Penerimaan',
                    field: 'penerimaan',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'Jumlah Dokumen',
                    field: 'jumlah',
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'Rata2 Per Dokumen',
                    field: 'rata',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
            ],
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: {
                fontSize: 9
            },
            exporterPdfTableStyle: {
                margin: [30, 30, 30, 30]
            },
            exporterPdfTableHeaderStyle: {
                fontSize: 10,
                bold: true,
                italics: true,
                color: 'red'
            },
            exporterPdfHeader: {
                text: "SIMONA",
                style: 'headerStyle'
            },
            exporterPdfFooter: function (currentPage, pageCount) {
                return {
                    text: currentPage.toString() + ' of ' + pageCount.toString(),
                    style: 'footerStyle'
                };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = {
                    fontSize: 22,
                    bold: true
                };
                docDefinition.styles.footerStyle = {
                    fontSize: 10,
                    bold: true
                };
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
        $scope.gridOpts3.data = [{
                "bulan": "January",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "February",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "March",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "April",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "May",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "June",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "July",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "August",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "September",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "October",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "November",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },
            {
                "bulan": "December",
                "penerimaan": "10000",
                "jumlah": "10000",
                "rata": "10000",
                "cd": "10000"
            },

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

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{
            yAxisID: 'y-axis-1'
        }, {
            yAxisID: 'y-axis-2'
        }];
        $scope.options = {
            scales: {
                yAxes: [{
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
        // $scope.dashboard.PBK = 0;
        // $scope.dashboard.CK1 = 0;
        // $scope.dashboard.CK1A = 0;
        // $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 0;
        $scope.dashboard.PIBB2 = 0;
        $scope.dashboard.PIBK2 = 0;
        $scope.dashboard.PPKP2 = 0;
        $scope.dashboard.CD2 = 0;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 0;
        // $scope.dashboard.PBK2 = 0;
        // $scope.dashboard.CK12 = 0;
        // $scope.dashboard.CK1A2 = 0;
        // $scope.dashboard.CK52 = 0;

        $scope.dashboard.PIB2P = 0;
        $scope.dashboard.PIBB2P = 0;
        $scope.dashboard.PIBK2P = 0;
        $scope.dashboard.PPKP2P = 0;
        $scope.dashboard.CD2P = 0;
        $scope.dashboard.PE2P = 0;
        $scope.dashboard.SPKPBM2P = 0;
        // $scope.dashboard.PBK2P = 0;
        // $scope.dashboard.CK12P = 0;
        // $scope.dashboard.CK1A2P = 0;
        // $scope.dashboard.CK52P = 0;

        $scope.update = function () {
            console.log($scope.singleSelect);

            if ($scope.singleSelect === '01/01/2016') {
                
                $scope.target = 2000000;
                $scope.totalCapaian = 200000;
                $scope.targetBulan = 200000;
                $scope.realisasi = 200000;

                $scope.dashboard.PIB = 10;
                $scope.dashboard.PIBB = 10;
                $scope.dashboard.PIBK = 10;
                $scope.dashboard.PPKP = 10;
                $scope.dashboard.CD = 10;
                $scope.dashboard.PE = 10;
                $scope.dashboard.SPKPBM = 10;

                $scope.dashboard.PIB2 = 10;
                $scope.dashboard.PIBB2 = 10;
                $scope.dashboard.PIBK2 = 10;
                $scope.dashboard.PPKP2 = 10;
                $scope.dashboard.CD2 = 10;
                $scope.dashboard.PE2 = 10;
                $scope.dashboard.SPKPBM2 = 10;

                $scope.dashboard.PIB2P = 10;
                $scope.dashboard.PIBB2P = 10;
                $scope.dashboard.PIBK2P = 10;
                $scope.dashboard.PPKP2P = 10;
                $scope.dashboard.CD2P = 10;
                $scope.dashboard.PE2P = 10;
                $scope.dashboard.SPKPBM2P = 10;
            }

            if ($scope.singleSelect === '02/01/2016') {

                $scope.target = 2000000;
                $scope.totalCapaian = 200000;
                $scope.targetBulan = 200000;
                $scope.realisasi = 200000;

                $scope.dashboard.PIB = 20;
                $scope.dashboard.PIBB = 20;
                $scope.dashboard.PIBK = 20;
                $scope.dashboard.PPKP = 20;
                $scope.dashboard.CD = 20;
                $scope.dashboard.PE = 20;
                $scope.dashboard.SPKPBM = 20;

                $scope.dashboard.PIB2 = 20;
                $scope.dashboard.PIBB2 = 20;
                $scope.dashboard.PIBK2 = 20;
                $scope.dashboard.PPKP2 = 20;
                $scope.dashboard.CD2 = 20;
                $scope.dashboard.PE2 = 20;
                $scope.dashboard.SPKPBM2 = 20;

                $scope.dashboard.PIB2P = 20;
                $scope.dashboard.PIBB2P = 20;
                $scope.dashboard.PIBK2P = 20;
                $scope.dashboard.PPKP2P = 20;
                $scope.dashboard.CD2P = 20;
                $scope.dashboard.PE2P = 20;
                $scope.dashboard.SPKPBM2P = 20;
            }

            if ($scope.singleSelect === '03/01/2016') {

                $scope.target = 3000000;
                $scope.totalCapaian = 300000;
                $scope.targetBulan = 300000;
                $scope.realisasi = 3000;

                $scope.dashboard.PIB = 30;
                $scope.dashboard.PIBB = 30;
                $scope.dashboard.PIBK = 30;
                $scope.dashboard.PPKP = 30;
                $scope.dashboard.CD = 30;
                $scope.dashboard.PE = 30;
                $scope.dashboard.SPKPBM = 30;

                $scope.dashboard.PIB2 = 30;
                $scope.dashboard.PIBB2 = 30;
                $scope.dashboard.PIBK2 = 30;
                $scope.dashboard.PPKP2 = 30;
                $scope.dashboard.CD2 = 30;
                $scope.dashboard.PE2 = 30;
                $scope.dashboard.SPKPBM2 = 30;

                $scope.dashboard.PIB2P = 30;
                $scope.dashboard.PIBB2P = 30;
                $scope.dashboard.PIBK2P = 30;
                $scope.dashboard.PPKP2P = 30;
                $scope.dashboard.CD2P = 30;
                $scope.dashboard.PE2P = 30;
                $scope.dashboard.SPKPBM2P = 30;
            }

            if ($scope.singleSelect === '03/01/2016') {

                $scope.target = 400000;
                $scope.totalCapaian = 400000;
                $scope.targetBulan = 4000000;
                $scope.realisasi = 40000;

                $scope.dashboard.PIB = 40;
                $scope.dashboard.PIBB = 40;
                $scope.dashboard.PIBK = 40;
                $scope.dashboard.PPKP = 40;
                $scope.dashboard.CD = 40;
                $scope.dashboard.PE = 40;
                $scope.dashboard.SPKPBM = 40;

                $scope.dashboard.PIB2 = 40;
                $scope.dashboard.PIBB2 = 40;
                $scope.dashboard.PIBK2 = 40;
                $scope.dashboard.PPKP2 = 40;
                $scope.dashboard.CD2 = 40;
                $scope.dashboard.PE2 = 40;
                $scope.dashboard.SPKPBM2 = 40;

                $scope.dashboard.PIB2P = 40;
                $scope.dashboard.PIBB2P = 40;
                $scope.dashboard.PIBK2P = 40;
                $scope.dashboard.PPKP2P = 40;
                $scope.dashboard.CD2P = 40;
                $scope.dashboard.PE2P = 40;
                $scope.dashboard.SPKPBM2P = 40;
            }

            if ($scope.singleSelect === '05/01/2016') {

                $scope.target = 500000;
                $scope.totalCapaian = 500000;
                $scope.targetBulan = 500000;
                $scope.realisasi = 50000;

                $scope.dashboard.PIB = 50;
                $scope.dashboard.PIBB = 50;
                $scope.dashboard.PIBK = 50;
                $scope.dashboard.PPKP = 50;
                $scope.dashboard.CD = 50;
                $scope.dashboard.PE = 50;
                $scope.dashboard.SPKPBM = 50;

                $scope.dashboard.PIB2 = 50;
                $scope.dashboard.PIBB2 = 50;
                $scope.dashboard.PIBK2 = 50;
                $scope.dashboard.PPKP2 = 50;
                $scope.dashboard.CD2 = 50;
                $scope.dashboard.PE2 = 50;
                $scope.dashboard.SPKPBM2 = 50;

                $scope.dashboard.PIB2P = 50;
                $scope.dashboard.PIBB2P = 50;
                $scope.dashboard.PIBK2P = 50;
                $scope.dashboard.PPKP2P = 50;
                $scope.dashboard.CD2P = 50;
                $scope.dashboard.PE2P = 50;
                $scope.dashboard.SPKPBM2P = 50;
            }

            if ($scope.singleSelect === '06/01/2016') {

                $scope.target = 6000000;
                $scope.totalCapaian = 600000;
                $scope.targetBulan = 600000;
                $scope.realisasi = 60000;

                $scope.dashboard.PIB = 60;
                $scope.dashboard.PIBB = 60;
                $scope.dashboard.PIBK = 60;
                $scope.dashboard.PPKP = 60;
                $scope.dashboard.CD = 60;
                $scope.dashboard.PE = 60;
                $scope.dashboard.SPKPBM = 60;

                $scope.dashboard.PIB2 = 60;
                $scope.dashboard.PIBB2 = 60;
                $scope.dashboard.PIBK2 = 60;
                $scope.dashboard.PPKP2 = 60;
                $scope.dashboard.CD2 = 60;
                $scope.dashboard.PE2 = 60;
                $scope.dashboard.SPKPBM2 = 60;

                $scope.dashboard.PIB2P = 60;
                $scope.dashboard.PIBB2P = 60;
                $scope.dashboard.PIBK2P = 60;
                $scope.dashboard.PPKP2P = 60;
                $scope.dashboard.CD2P = 60;
                $scope.dashboard.PE2P = 60;
                $scope.dashboard.SPKPBM2P = 60;
            }

            if ($scope.singleSelect === '07/01/2016') {

                $scope.target = 700000;
                $scope.totalCapaian = 700000;
                $scope.targetBulan = 70000;
                $scope.realisasi = 70000;

                $scope.dashboard.PIB = 70;
                $scope.dashboard.PIBB = 70;
                $scope.dashboard.PIBK = 70;
                $scope.dashboard.PPKP = 70;
                $scope.dashboard.CD = 70;
                $scope.dashboard.PE = 70;
                $scope.dashboard.SPKPBM = 70;

                $scope.dashboard.PIB2 = 70;
                $scope.dashboard.PIBB2 = 70;
                $scope.dashboard.PIBK2 = 70;
                $scope.dashboard.PPKP2 = 70;
                $scope.dashboard.CD2 = 70;
                $scope.dashboard.PE2 = 70;
                $scope.dashboard.SPKPBM2 = 70;

                $scope.dashboard.PIB2P = 0;
                $scope.dashboard.PIBB2P = 0;
                $scope.dashboard.PIBK2P = 0;
                $scope.dashboard.PPKP2P = 0;
                $scope.dashboard.CD2P = 0;
                $scope.dashboard.PE2P = 0;
                $scope.dashboard.SPKPBM2P = 0;
            }

            if ($scope.singleSelect === '08/01/2016') {

                $scope.target = 8000000;
                $scope.totalCapaian = 80000;
                $scope.targetBulan = 800000;
                $scope.realisasi = 8000;

                $scope.dashboard.PIB = 80;
                $scope.dashboard.PIBB = 80;
                $scope.dashboard.PIBK = 80;
                $scope.dashboard.PPKP = 80;
                $scope.dashboard.CD = 80;
                $scope.dashboard.PE = 80;
                $scope.dashboard.SPKPBM = 80;

                $scope.dashboard.PIB2 = 80;
                $scope.dashboard.PIBB2 = 80;
                $scope.dashboard.PIBK2 = 80;
                $scope.dashboard.PPKP2 = 80;
                $scope.dashboard.CD2 = 80;
                $scope.dashboard.PE2 = 80;
                $scope.dashboard.SPKPBM2 = 80;

                $scope.dashboard.PIB2P = 80;
                $scope.dashboard.PIBB2P = 80;
                $scope.dashboard.PIBK2P = 80;
                $scope.dashboard.PPKP2P = 80;
                $scope.dashboard.CD2P = 80;
                $scope.dashboard.PE2P = 80;
                $scope.dashboard.SPKPBM2P = 80;
            }

            if ($scope.singleSelect === '09/01/2016') {

                $scope.target = 9000000;
                $scope.totalCapaian = 900000;
                $scope.targetBulan = 900000;
                $scope.realisasi = 90000;


                $scope.dashboard.PIB = 90;
                $scope.dashboard.PIBB = 90;
                $scope.dashboard.PIBK = 90;
                $scope.dashboard.PPKP = 90;
                $scope.dashboard.CD = 90;
                $scope.dashboard.PE = 90;
                $scope.dashboard.SPKPBM = 90;

                $scope.dashboard.PIB2 = 90;
                $scope.dashboard.PIBB2 = 90;
                $scope.dashboard.PIBK2 = 90;
                $scope.dashboard.PPKP2 = 90;
                $scope.dashboard.CD2 = 90;
                $scope.dashboard.PE2 = 90;
                $scope.dashboard.SPKPBM2 = 90;

                $scope.dashboard.PIB2P = 90;
                $scope.dashboard.PIBB2P = 90;
                $scope.dashboard.PIBK2P = 90;
                $scope.dashboard.PPKP2P = 90;
                $scope.dashboard.CD2P = 90;
                $scope.dashboard.PE2P = 90;
                $scope.dashboard.SPKPBM2P = 90;
            }

            if ($scope.singleSelect === '10/01/2016') {

                $scope.target = 1000000;
                $scope.totalCapaian = 10000;
                $scope.targetBulan = 100000;
                $scope.realisasi = 10000;

                $scope.dashboard.PIB = 100;
                $scope.dashboard.PIBB = 100;
                $scope.dashboard.PIBK = 100;
                $scope.dashboard.PPKP = 100;
                $scope.dashboard.CD = 100;
                $scope.dashboard.PE = 100;
                $scope.dashboard.SPKPBM = 100;

                $scope.dashboard.PIB2 = 100;
                $scope.dashboard.PIBB2 = 100;
                $scope.dashboard.PIBK2 = 100;
                $scope.dashboard.PPKP2 = 100;
                $scope.dashboard.CD2 = 100;
                $scope.dashboard.PE2 = 100;
                $scope.dashboard.SPKPBM2 = 100;

                $scope.dashboard.PIB2P = 100;
                $scope.dashboard.PIBB2P = 100;
                $scope.dashboard.PIBK2P = 100;
                $scope.dashboard.PPKP2P = 100;
                $scope.dashboard.CD2P = 100;
                $scope.dashboard.PE2P = 100;
                $scope.dashboard.SPKPBM2P = 100;
            }

            if ($scope.singleSelect === '11/01/2016') {

                $scope.target = 1000000;
                $scope.totalCapaian = 0;
                $scope.targetBulan = 0;
                $scope.realisasi = 0;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;

                $scope.dashboard.PIB = 0;
                $scope.dashboard.PIBB = 0;
                $scope.dashboard.PIBK = 0;
                $scope.dashboard.PPKP = 0;
                $scope.dashboard.CD = 0;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 0;

                $scope.dashboard.PIB2 = 0;
                $scope.dashboard.PIBB2 = 0;
                $scope.dashboard.PIBK2 = 0;
                $scope.dashboard.PPKP2 = 0;
                $scope.dashboard.CD2 = 0;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 0;

                $scope.dashboard.PIB2P = 0;
                $scope.dashboard.PIBB2P = 0;
                $scope.dashboard.PIBK2P = 0;
                $scope.dashboard.PPKP2P = 0;
                $scope.dashboard.CD2P = 0;
                $scope.dashboard.PE2P = 0;
                $scope.dashboard.SPKPBM2P = 0;
            }

            if ($scope.singleSelect === '12/01/2016') {

                $scope.target = 0;
                $scope.totalCapaian = 0;
                $scope.targetBulan = 0;
                $scope.realisasi = 0;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;

                $scope.dashboard.PIB = 0;
                $scope.dashboard.PIBB = 0;
                $scope.dashboard.PIBK = 0;
                $scope.dashboard.PPKP = 0;
                $scope.dashboard.CD = 0;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 0;

                $scope.dashboard.PIB2 = 0;
                $scope.dashboard.PIBB2 = 0;
                $scope.dashboard.PIBK2 = 0;
                $scope.dashboard.PPKP2 = 0;
                $scope.dashboard.CD2 = 0;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 0;

                $scope.dashboard.PIB2P = 0;
                $scope.dashboard.PIBB2P = 0;
                $scope.dashboard.PIBK2P = 0;
                $scope.dashboard.PPKP2P = 0;
                $scope.dashboard.CD2P = 0;
                $scope.dashboard.PE2P = 0;
                $scope.dashboard.SPKPBM2P = 0;
            }

        }

        $scope.getMonths();
    }
])