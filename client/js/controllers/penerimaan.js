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

        $scope.gridOpts4 = {
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
        $scope.gridOpts4.data = [{
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
                '09-01-2016', '10-01-2016', '11-01-2016', '12-01-2016', '01-01-2017', '02-01-2017', '03-01-2017'
            ]
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July","August","September","November","December"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

         $scope.datapib = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

         $scope.datapibk = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

         $scope.datappkb = [
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

                $scope.target = 339942425295;
                $scope.totalCapaian = 27508668000;
                $scope.targetBulan = 27503518000;
                $scope.realisasi = 27508668000;

                 $scope.dashboard.PIB = 1158;
                 $scope.dashboard.PIBB = 3;
                 $scope.dashboard.PIBK = 3334;
                 $scope.dashboard.PPKP = 909;
                 $scope.dashboard.CD = 33;
                 $scope.dashboard.PE = 1;
                 $scope.dashboard.SPKPBM = 84;
                

                $scope.dashboard.PIB2 = 0;
                $scope.dashboard.PIBB2 = 0;
                $scope.dashboard.PIBK2 = 0;
                $scope.dashboard.PPKP2 = 0;
                $scope.dashboard.CD2 = 0;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 0;
                $scope.dashboard.PBK2 = 0;
       
                $scope.dashboard.PIB2P = 10;
                $scope.dashboard.PIBB2P = 10;
                $scope.dashboard.PIBK2P = 10;
                $scope.dashboard.PPKP2P = 10;
                $scope.dashboard.CD2P = 10;
                $scope.dashboard.PE2P = 10;
                $scope.dashboard.SPKPBM2P = 10;
            }

            if ($scope.singleSelect === '02/01/2016') {

                $scope.target = 339942425295;
                $scope.totalCapaian = 51289226400;
                $scope.targetBulan = 23780558400;
                $scope.realisasi = 23780558400;

                $scope.dashboard.PIB = 1050;
                $scope.dashboard.PIBB = 167;
                $scope.dashboard.PIBK = 3288;
                $scope.dashboard.PPKP = 1038;
                $scope.dashboard.CD = 45;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 77;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 82440530760;
                $scope.targetBulan = 31151304360;
                $scope.realisasi = 31151304360;

                $scope.dashboard.PIB = 1457;
                $scope.dashboard.PIBB = 242;
                $scope.dashboard.PIBK = 3248;
                $scope.dashboard.PPKP = 1169;
                $scope.dashboard.CD = 55;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 63;

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

            if ($scope.singleSelect === '04/01/2016') {

                $scope.target = 339942425295;
                $scope.totalCapaian = 116321105351;
                $scope.targetBulan = 32677935985;
                $scope.realisasi = 33880574591;

                $scope.dashboard.PIB = 1435;
                $scope.dashboard.PIBB = 297;
                $scope.dashboard.PIBK = 3877;
                $scope.dashboard.PPKP = 1039;
                $scope.dashboard.CD = 46;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 87;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 146406487351;
                $scope.targetBulan = 29679469376;
                $scope.realisasi = 30085382000;

                 $scope.dashboard.PIB = 1424;
                 $scope.dashboard.PIBB = 355;
                 $scope.dashboard.PIBK = 4037;
                 $scope.dashboard.PPKP = 828;
                 $scope.dashboard.CD = 35;
                 $scope.dashboard.PE = 0;
                 $scope.dashboard.SPKPBM = 77;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 185123274351;
                $scope.targetBulan = 37220469000;
                $scope.realisasi = 30085382000;

                $scope.dashboard.PIB = 1565;
                $scope.dashboard.PIBB = 359;
                $scope.dashboard.PIBK = 4338;
                $scope.dashboard.PPKP = 1851;
                $scope.dashboard.CD = 36;
                $scope.dashboard.PE = 1;
                $scope.dashboard.SPKPBM = 62;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 207590853351;
                $scope.targetBulan = 23014857000;
                $scope.realisasi = 22467579000;

                $scope.dashboard.PIB = 948;
                $scope.dashboard.PIBB = 337;
                $scope.dashboard.PIBK = 2562;
                $scope.dashboard.PPKP = 908;
                $scope.dashboard.CD = 39;
                $scope.dashboard.PE = 1;
                $scope.dashboard.SPKPBM = 39;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 207590853351;
                $scope.targetBulan = 351166936111;
                $scope.realisasi = 35123205480;

                $scope.dashboard.PIB = 1540;
                $scope.dashboard.PIBB = 220;
                $scope.dashboard.PIBK = 4104;
                $scope.dashboard.PPKP = 954;
                $scope.dashboard.CD = 24;
                $scope.dashboard.PE = 1;
                $scope.dashboard.SPKPBM = 46;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 273561430831;
                $scope.targetBulan = 16000000;
                $scope.realisasi = 30847372000;


                $scope.dashboard.PIB = 1220;
                $scope.dashboard.PIBB = 358;
                $scope.dashboard.PIBK = 3014;
                $scope.dashboard.PPKP = 956;
                $scope.dashboard.CD = 61;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 41;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 300931240659;
                $scope.targetBulan = 19098167765;
                $scope.realisasi = 27369809828;

                $scope.dashboard.PIB = 1408;
                $scope.dashboard.PIBB = 293;
                $scope.dashboard.PIBK = 4080;
                $scope.dashboard.PPKP = 1291;
                $scope.dashboard.CD = 88;
                $scope.dashboard.PE = 2;
                $scope.dashboard.SPKPBM = 58;
                
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

                $scope.target = 339942425295;
                $scope.totalCapaian = 332066460459;
                $scope.targetBulan = 33652294000;
                $scope.realisasi = 31135219800;
                
                $scope.persenBulan = 0;
                $scope.persenTahun = 0;
              

                 $scope.dashboard.PIB = 1505;
                $scope.dashboard.PIBB = 404;
                $scope.dashboard.PIBK = 4265;
                $scope.dashboard.PPKP = 1769;
                $scope.dashboard.CD = 168;
                $scope.dashboard.PE = 6;
                $scope.dashboard.SPKPBM = 60;

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

                $scope.target = 339942425295;
                $scope.totalCapaian = 357487308959;
                $scope.targetBulan = 30116760000;
                $scope.realisasi = 25420848500;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;

                $scope.dashboard.PIB = 1371;
                $scope.dashboard.PIBB = 531;
                $scope.dashboard.PIBK = 4316;
                $scope.dashboard.PPKP = 1991;
                $scope.dashboard.CD = 133;
                $scope.dashboard.PE = 1;
                $scope.dashboard.SPKPBM = 75;

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
             if ($scope.singleSelect === '01/01/2017') {

                $scope.target = 393202279000;
                $scope.totalCapaian = 21670346000;
                $scope.targetBulan = 32766856583;
                $scope.realisasi = 21670346000;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;

                $scope.dashboard.PIB = 1059;
                $scope.dashboard.PIBB = 3;
                $scope.dashboard.PIBK = 4025;
                $scope.dashboard.PPKP = 1387;
                $scope.dashboard.CD = 156;
                $scope.dashboard.PE = 3;
                $scope.dashboard.SPKPBM = 47;

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
             if ($scope.singleSelect === '02/01/2017') {

                $scope.target = 339942425295;
                $scope.totalCapaian = 44923222000;
                $scope.targetBulan = 32766856583;
                $scope.realisasi = 23252876000;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;

                $scope.dashboard.PIB = 1001;
                $scope.dashboard.PIBB = 126;
                $scope.dashboard.PIBK = 3126;
                $scope.dashboard.PPKP = 1470;
                $scope.dashboard.CD = 132;
                $scope.dashboard.PE = 2;
                $scope.dashboard.SPKPBM = 50;

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
             if ($scope.singleSelect === '03/01/2017') {

                $scope.target = 339942425295;
                $scope.totalCapaian = 80827041000;
                $scope.targetBulan = 32766856583;
                $scope.realisasi = 35903819000;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;
  
                $scope.dashboard.PIB = 1455;
                $scope.dashboard.PIBB = 67;
                $scope.dashboard.PIBK = 3814;
                $scope.dashboard.PPKP = 902;
                $scope.dashboard.CD = 177;
                $scope.dashboard.PE = 1;
                $scope.dashboard.SPKPBM = 112;
      

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