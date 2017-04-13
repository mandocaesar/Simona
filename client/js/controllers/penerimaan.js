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

        //data pabean
        $scope.gridOpts2 = {
            enableColumnResize: true,
            enableSorting: true,
            columnDefs: [{
                    name: 'Bulan',
                    field: 'bulan',
                    minWidth: 50
                },
                {
                    name: 'PIB ',
                    field: 'pib',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'PIB Berkala',
                    field: 'pibb',
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'PIBK ',
                    field: 'pibk',
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'PPKP ',
                    field: 'ppkp',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'CD ',
                    field: 'cd',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'PE ',
                    field: 'pe',
                    minWidth: 50,
                    cellFilter: 'currency : "Rp"'
                },
                {
                    name: 'SPKPBM ',
                    field: 'spkpbm',
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

        //data pib 
        $scope.gridOpts1 = {
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
                    cellFilter: 'currency : ""'
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
        $scope.gridOpts1.data = [{
                "bulan": "January",
                "penerimaan": "19590605000",
                "jumlah": "1158",
                "rata": "16917620.8",
                "cd": "10000"
            },
            {
                "bulan": "February",
                "penerimaan": "15459502000",
                "jumlah": "1050",
                "rata": "14723335.2",
                "cd": "10000"
            },
            {
                "bulan": "March",
                "penerimaan": "23518094000",
                "jumlah": "1457",
                "rata": "16141450.9",
                "cd": "10000"
            },
            {
                "bulan": "April",
                "penerimaan": "20441015000",
                "jumlah": "1435",
                "rata": "14244609.7",
                "cd": "10000"
            },
            {
                "bulan": "May",
                "penerimaan": "19708331000",
                "jumlah": "1424",
                "rata": "13840120.0",
                "cd": "10000"
            },
            {
                "bulan": "June",
                "penerimaan": "25804483000",
                "jumlah": "1565",
                "rata": "16488487.5",
                "cd": "10000"
            },
            {
                "bulan": "July",
                "penerimaan": "16252585000",
                "jumlah": "948",
                "rata": "17144077",
                "cd": "10000"
            },
            {
                "bulan": "August",
                "penerimaan": "23182457000",
                "jumlah": "1540",
                "rata": "15053543.5",
                "cd": "10000"
            },
            {
                "bulan": "September",
                "penerimaan": "20494912000",
                "jumlah": "1220",
                "rata": "16799108.1",
                "cd": "10000"
            },
            {
                "bulan": "October",
                "penerimaan": "18218541000",
                "jumlah": "1408",
                "rata": "12939304.6",
                "cd": "10000"
            },
            {
                "bulan": "November",
                "penerimaan": "19960605000",
                "jumlah": "1505",
                "rata": "13262860.4",
                "cd": "10000"
            },
            {
                "bulan": "December",
                "penerimaan": "14358859000",
                "jumlah": "1371",
                "rata": "10473274.2",
                "cd": "10000"
            },
              {
                "bulan": "January",
                "penerimaan": "14358859000",
                "jumlah": "1371",
                "rata": "10473274.2",
                "cd": "10000"
            },
              {
                "bulan": "February",
                "penerimaan": "14358859000",
                "jumlah": "1371",
                "rata": "10473274.2",
                "cd": "10000"
            },
              {
                "bulan": "March",
                "penerimaan": "14358859000",
                "jumlah": "1371",
                "rata": "10473274.2",
                "cd": "10000"
            },

        ];


        //datapibberkala
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
                    cellFilter: 'currency : ""'
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

        //data pibk
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
                    cellFilter: 'currency : ""'
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


        //data ppkp
        $scope.gridOpts5 = {
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
                    cellFilter: 'currency : " "'
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

        //data cd
        $scope.gridOpts6 = {
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
                    cellFilter: 'currency : " "'
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

        //data pe
        $scope.gridOpts7 = {
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
                    cellFilter: 'currency : " "'
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

        //data skkbm
        $scope.gridOpts8 = {
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
                    cellFilter: 'currency : " "'
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


        $scope.getMonths = function () {
            // service.getMonths().success(function (result) {
            //     console.log(result);
            //     $scope.months = result;
            // });
            $scope.months = ['03-01-2017','02-01-2017','01-01-2017',
                    '12-01-2016', '11-01-2016','10-01-2016', '09-01-2016','08-01-2016', '07-01-2016', 
                   '06-01-2016','05-01-2016',  '04-01-2016', '03-01-2016',  '02-01-2016', '01-01-2016',
                  
            ]
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
        $scope.series = ['Penerimaan A', 'Jumlah Dokumen B'];
        $scope.set2016 = function () {

          //  $scope.data = [
          //      [65, 59, 80, 81, 56, 55, 40],
         //       [28, 48, 40, 19, 86, 27, 90]
         //   ];

            $scope.datapib = [
                [19590605000, 15459502000, 23518094000, 20441015000, 19708331000, 25804483000, 16252585000,23182457000,20494912000,18218541000,19960605000,14358859000],
                [1158, 1050, 1457, 1435, 1424, 1565, 948,1540,1220,1408,1505,1371]
            ];

            $scope.datapibberkala = [
                [15364000, 1266563000, 1540564000, 2345143000, 2381105000, 1923334000, 1842045000,1775491000,2254282000,1722868000,1915538000,20866197000],
                [3, 167, 242, 297, 355, 359, 337,220,358,293,404,531]
            ];

            $scope.datapibk = [
                [5223443000, 5859651000, 5303044000, 9482776000, 5898720000, 6507628000, 3863411000,6566752000,4550802000,6234659000,7225365200,6479609000],
                [3334, 3288, 3248, 3877, 4037, 4338, 2562,4104,3014,4080,4265,4316]
            ];

            $scope.datappkp = [
                [199316000, 206314000, 233909000, 253731000, 186561000, 338557000, 201828000,187147000,181102000,272682000,280291000,658622000],
                [909, 1038, 1169, 1039, 828, 1851, 908,954,956,1291,1769,1991]
            ];

            $scope.datacd = [
                [20575000, 62082000, 25516000, 11210000, 8176000, 16080000, 9722000,14467000,27090000,45658428,71247000,106307000],
                [33, 45, 55, 46, 35, 36, 39,24,61,88,168,133]
            ];
            //DATA PABEAN
            $scope.gridOpts2.data = [{
                    "bulan": "January",
                    "pib": "19590605000",
                    "pibk": "5223443000",
                    "pibb": "15364000",
                    "ppkp": "199316000",
                    "cd": "20575000",
                    "pe": "5150000",
                    "spkpbm": "2072068000"

                },
                {
                    "bulan": "February",
                    "pib": "15459502000",
                    "pibk": "5859651000",
                    "pibb": "1266563000",
                    "ppkp": "206314000",
                    "cd": "62082000",
                    "pe": "0",
                    "spkpbm": "470096000"
                },
                {
                    "bulan": "March",
                    "pib": "23518094000",
                    "pibk": "5303044000",
                    "pibb": "1540564000",
                    "ppkp": "233909000",
                    "cd": "25516000",
                    "pe": "0",
                    "spkpbm": "329443000"
                },
                {
                    "bulan": "April",
                    "pib": "20441015000",
                    "pibk": "5901329000",
                    "pibb": "2345143000",
                    "ppkp": "253731000",
                    "cd": "11210000",
                    "pe": "0",
                    "spkpbm": "4723568000"
                },
                {
                    "bulan": "May",
                    "pib": "19708331000",
                    "pibk": "5898720000",
                    "pibb": "2381105000",
                    "ppkp": "186561000",
                    "cd": "8176000",
                    "pe": "0",
                    "spkpbm": "629166000"
                },
                {
                    "bulan": "June",
                    "pib": "25804483000",
                    "pibk": "6507628000",
                    "pibb": "1923334000",
                    "ppkp": "338557000",
                    "cd": "16080000",
                    "pe": "1010000",
                    "spkpbm": "3438990000"
                },
                {
                    "bulan": "July",
                    "pib": "16252585000",
                    "pibk": "3863411000",
                    "pibb": "1842045000",
                    "ppkp": "201828000",
                    "cd": "9722000",
                    "pe": "0",
                    "spkpbm": "239139000"
                },
                {
                    "bulan": "August",
                    "pib": "23182457000",
                    "pibk": "6566752000",
                    "pibb": "1775491000",
                    "ppkp": "187147000",
                    "cd": "14467000",
                    "pe": "4217000",
                    "spkpbm": "3104806000"
                },
                {
                    "bulan": "September",
                    "pib": "20494912000",
                    "pibk": "4550802000",
                    "pibb": "2254282000",
                    "ppkp": "181102000",
                    "cd": "27090000",
                    "pe": "0",
                    "spkpbm": "3083159000"
                },
                {
                    "bulan": "October",
                    "pib": "18218541000",
                    "pibk": "6234659000",
                    "pibb": "1722868000",
                    "ppkp": "272682000",
                    "cd": "45658428",
                    "pe": "4345000",
                    "spkpbm": "163887000"
                },
                {
                    "bulan": "November",
                    "pib": "19960605000",
                    "pibk": "7225365200",
                    "pibb": "1915538000",
                    "ppkp": "280291000",
                    "cd": "71247000",
                    "pe": "14360000",
                    "spkpbm": "1581647000"
                },
                {
                    "bulan": "December",
                    "pib": "14358859000",
                    "pibk": "6479609000",
                    "pibb": "3208673000",
                    "ppkp": "401635000",
                    "cd": "80197000",
                    "pe": "1609000",
                    "spkpbm": "660112000"
                },

            ];

            //DATA PIB
            $scope.gridOpts1.data = [{
                    "bulan": "January",
                    "penerimaan": "19590605000",
                    "jumlah": "1158",
                    "rata": "16917620.8",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "15459502000",
                    "jumlah": "1050",
                    "rata": "14723335.2",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "23518094000",
                    "jumlah": "1457",
                    "rata": "16141450.9",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "20441015000",
                    "jumlah": "1435",
                    "rata": "14244609.7",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "19708331000",
                    "jumlah": "1424",
                    "rata": "13840120.0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "25804483000",
                    "jumlah": "1565",
                    "rata": "16488487.5",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "16252585000",
                    "jumlah": "948",
                    "rata": "17144077",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "23182457000",
                    "jumlah": "1540",
                    "rata": "15053543.5",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "20494912000",
                    "jumlah": "1220",
                    "rata": "16799108.1",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "18218541000",
                    "jumlah": "1408",
                    "rata": "12939304.6",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "19960605000",
                    "jumlah": "1505",
                    "rata": "13262860.4",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "14358859000",
                    "jumlah": "1371",
                    "rata": "10473274.2",
                    "cd": "10000"
                },

            ];

            //DATA PIB BERKALA
            $scope.gridOpts3.data = [{
                    "bulan": "January",
                    "penerimaan": "15364000",
                    "jumlah": "3",
                    "rata": "5121333",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "1266563000",
                    "jumlah": "167",
                    "rata": "7584209.5",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "1540564000",
                    "jumlah": "242",
                    "rata": "6365966.9",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "2345143000",
                    "jumlah": "297",
                    "rata": "7896104.3",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "2381105000",
                    "jumlah": "355",
                    "rata": "6707338",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "1923334000",
                    "jumlah": "359",
                    "rata": "5357476.3",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "1842045000",
                    "jumlah": "337",
                    "rata": "5466008.9",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "1775491000",
                    "jumlah": "220",
                    "rata": "8070413.6",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "2254282000",
                    "jumlah": "358",
                    "rata": "6296877",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "1722868000",
                    "jumlah": "293",
                    "rata": "5880095.5",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "1915538000",
                    "jumlah": "404",
                    "rata": "4741430.6",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "20866197000",
                    "jumlah": "531",
                    "rata": "39296039.5",
                    "cd": "10000"
                },


            ];

            //DATA PIBK
            $scope.gridOpts4.data = [{
                    "bulan": "January",
                    "penerimaan": "5223443000",
                    "jumlah": "3334",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "5859651000",
                    "jumlah": "3288",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "5303044000",
                    "jumlah": "3248",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "9482776000",
                    "jumlah": "3877",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "5898720000",
                    "jumlah": "4037",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "6507628000",
                    "jumlah": "4338",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "3863411000",
                    "jumlah": "2562",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "6566752000",
                    "jumlah": "4104",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "4550802000",
                    "jumlah": "3014",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "6234659000",
                    "jumlah": "4080",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "7225365200",
                    "jumlah": "4265",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "6479609000",
                    "jumlah": "4316",
                    "rata": "10000",
                    "cd": "10000"
                },

            ];

            //DATA PPKP
            $scope.gridOpts5.data = [{
                    "bulan": "January",
                    "penerimaan": "199316000",
                    "jumlah": "909",
                    "rata": "219269.5",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "206314000",
                    "jumlah": "1038",
                    "rata": "198761",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "233909000",
                    "jumlah": "1169",
                    "rata": "200093.2",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "253731000",
                    "jumlah": "1039",
                    "rata": "244206.9",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "186561000",
                    "jumlah": "828",
                    "rata": "225315.2",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "338557000",
                    "jumlah": "1851",
                    "rata": "182904.9",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "201828000",
                    "jumlah": "908",
                    "rata": "222277.5",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "187147000",
                    "jumlah": "954",
                    "rata": "196170.8",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "181102000",
                    "jumlah": "956",
                    "rata": "189437.2",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "272682000",
                    "jumlah": "1291",
                    "rata": "211217.6",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "280291000",
                    "jumlah": "1769",
                    "rata": "158446",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "658622000",
                    "jumlah": "1991",
                    "rata": "330799.5",
                    "cd": "10000"
                },

            ];

            //DATA CD
            $scope.gridOpts6.data = [{
                    "bulan": "January",
                    "penerimaan": "20575000",
                    "jumlah": "33",
                    "rata": "623484.8",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "62082000",
                    "jumlah": "45",
                    "rata": "1379600",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "25516000",
                    "jumlah": "55",
                    "rata": "463927.2",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "11210000",
                    "jumlah": "46",
                    "rata": "243695.6",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "8176000",
                    "jumlah": "35",
                    "rata": "233600",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "16080000",
                    "jumlah": "36",
                    "rata": "446666.6",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "9722000",
                    "jumlah": "39",
                    "rata": "7501.5",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "14467000",
                    "jumlah": "24",
                    "rata": "602791.6",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "27090000",
                    "jumlah": "61",
                    "rata": "444098.3",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "45658428",
                    "jumlah": "88",
                    "rata": "518845.7",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "71247000",
                    "jumlah": "168",
                    "rata": "424089.2",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "106307000",
                    "jumlah": "133",
                    "rata": "799300.7",
                    "cd": "10000"
                },

            ];

            //DATA PE
            $scope.gridOpts7.data = [{
                    "bulan": "January",
                    "penerimaan": "5150000",
                    "jumlah": "1",
                    "rata": "5150000",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "1010000",
                    "jumlah": "1",
                    "rata": "1010000",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "4217000",
                    "jumlah": "1",
                    "rata": "4217000",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "4345000",
                    "jumlah": "2",
                    "rata": "2172500",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "14360000",
                    "jumlah": "6",
                    "rata": "2393333.3",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "1609000",
                    "jumlah": "1",
                    "rata": "1609000",
                    "cd": "10000"
                },

            ];

            //DATA SKKBM
            $scope.gridOpts8.data = [{
                    "bulan": "January",
                    "penerimaan": "2072068000",
                    "jumlah": "84",
                    "rata": "24667476.1",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "470096000",
                    "jumlah": "77",
                    "rata": "6105142.8",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "329443000",
                    "jumlah": "63",
                    "rata": "3786701.1",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "4723568000",
                    "jumlah": "87",
                    "rata": "54293885",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "629166000",
                    "jumlah": "77",
                    "rata": "8170987",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "3438990000",
                    "jumlah": "62",
                    "rata": "55467580.6",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "239139000",
                    "jumlah": "39",
                    "rata": "6131769.2",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "3104806000",
                    "jumlah": "46",
                    "rata": "67495782.6",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "3083159000",
                    "jumlah": "41",
                    "rata": "1834121.9",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "163887000",
                    "jumlah": "58",
                    "rata": "2825637.9",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "1581647000",
                    "jumlah": "60",
                    "rata": "26360783.3",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "660112000",
                    "jumlah": "75",
                    "rata": "8801493.3",
                    "cd": "10000"
                },

            ];

            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];

            $scope.datapib = [
                [19590605000,15459502000,23518094000,20441015000,19708331000,25804483000,16252585000,23182457000,20494912000,18218541000,19960605000,14358859000],
                [1158,1050,1457,1435,1424,1565,948,1540,1220,1408,1505,1371]
            ];

            $scope.datapibberkala = [
               [15364000,1266563000,1540564000,2345143000,2381105000,1923334000,1842045000,1775491000,2254282000,1722868000,1915538000,3208673000],
                [3,167,242,297,355,359,337,220,358,293,404,531]
            ];

            $scope.datapibk = [
              [5223443000,5859651000,5303044000,9482776000,5898720000,6507628000,3863411000,6566752000,4550802000,6234659000,7225365200,6479609000],
                [3334,3288,3248,3877,4037,4338,2562,4104,3014,4080,4265,4316]
            ];

            $scope.datappkp = [
              [199316000,206314000,233909000,253731000,186561000,338557000,201828000,187147000,181102000,272682000,280291000,658622000],
                [909,1038,1169,1039,828,1851,908,954,956,1291,1769,1991]
            ];

            $scope.datacd = [
              [20575000,62082000,25516000,11210000,8176000,16080000,9722000,14467000,27090000,45658428,71247000,106307000],
                [33,45,55,46,35,36,39,24,61,88,168,133]
            ];

            $scope.datape = [
              [5150000,0,0,0,0,1010000,0,4217000,0,4345000,14360000,1609000],
                [1,0,0,0,0,1,0,1,0,2,6,1]
            ];

            $scope.dataskkbm = [
              [2072068000,470096000,329443000,4723568000,629166000,3438990000,239139000,3104806000,3083159000,163887000,1581647000,660112000],
                [84,77,63,87,77,62,39,46,41,58,60,75]
            ];

        };

        $scope.set2017 = function () {
            //DATA PABEAN
            $scope.gridOpts2.data = [{
                    "bulan": "January",
                    "pib": "14431605000",
                    "pibk": "6280388000",
                    "pibb": "28838000",
                    "ppkp": "297716000",
                    "cd": "69940000",
                    "pe": "4706000",
                    "spkpbm": "401853000"

                },
                {
                    "bulan": "February",
                    "pib": "14544825000",
                    "pibk": "5094212000",
                    "pibb": "706343000",
                    "ppkp": "303891000",
                    "cd": "52460000",
                    "pe": "1315000",
                    "spkpbm": "2364660000"
                },
                {
                    "bulan": "March",
                    "pib": "21720468000",
                    "pibk": "6347630000",
                    "pibb": "580731000",
                    "ppkp": "203204000",
                    "cd": "58085000",
                    "pe": "0",
                    "spkpbm": "7181408000"
                },
                {
                    "bulan": "April",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "May",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "June",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "July",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "August",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "September",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "October",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "November",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },
                {
                    "bulan": "December",
                    "pib": "0",
                    "pibk": "0",
                    "pibb": "0",
                    "ppkp": "0",
                    "cd": "0",
                    "pe": "0",
                    "spkpbm": "0"
                },

            ];

            //DATA PIB
            $scope.gridOpts1.data = [{
                    "bulan": "January",
                    "penerimaan": "14431605000",
                    "jumlah": "1059",
                    "rata": "13627577.9",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "14544825000",
                    "jumlah": "1001",
                    "rata": "14530294.7",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "21720468000",
                    "jumlah": "1552",
                    "rata": "13995146.9",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            //DATA PIB BERKALA
            $scope.gridOpts3.data = [{
                    "bulan": "January",
                    "penerimaan": "28838000",
                    "jumlah": "3",
                    "rata": "9612666.6",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "706343000",
                    "jumlah": "126",
                    "rata": "5605896.8",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "580731000",
                    "jumlah": "76",
                    "rata": "7641197.3",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            //DATA PIBK
            $scope.gridOpts4.data = [{
                    "bulan": "January",
                    "penerimaan": "6280388000",
                    "jumlah": "4025",
                    "rata": "1560344.8",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "5094212000",
                    "jumlah": "3126",
                    "rata": "1629626.3",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "6347630000",
                    "jumlah": "4153",
                    "rata": "1528444.4",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            //DATA PPKP
            $scope.gridOpts5.data = [{
                    "bulan": "January",
                    "penerimaan": "297716000",
                    "jumlah": "909",
                    "rata": "327520.3",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "303891000",
                    "jumlah": "1038",
                    "rata": "292765.8",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "203204000",
                    "jumlah": "1169",
                    "rata": "173827.2",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            //DATA CD
            $scope.gridOpts6.data = [{
                    "bulan": "January",
                    "penerimaan": "69940000",
                    "jumlah": "33",
                    "rata": "2119393.9",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "52460000",
                    "jumlah": "45",
                    "rata": "1165777.7",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "58085000",
                    "jumlah": "55",
                    "rata": "1056090.9",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "97220000",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            //DATA PE
            $scope.gridOpts7.data = [{
                    "bulan": "January",
                    "penerimaan": "4706000",
                    "jumlah": "3",
                    "rata": "1568666.6",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "1315000",
                    "jumlah": "2",
                    "rata": "657500",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "198000",
                    "jumlah": "2",
                    "rata": "99000",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "10000",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            //DATA SKKBM
            $scope.gridOpts8.data = [{
                    "bulan": "January",
                    "penerimaan": "401853000",
                    "jumlah": "47",
                    "rata": "24667476.1",
                    "cd": "10000"
                },
                {
                    "bulan": "February",
                    "penerimaan": "2364660000",
                    "jumlah": "49",
                    "rata": "6105142.8",
                    "cd": "10000"
                },
                {
                    "bulan": "March",
                    "penerimaan": "7181408000",
                    "jumlah": "116",
                    "rata": "3786701.1",
                    "cd": "10000"
                },
                {
                    "bulan": "April",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "May",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "June",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "July",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "August",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "September",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "October",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "November",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },
                {
                    "bulan": "December",
                    "penerimaan": "0",
                    "jumlah": "0",
                    "rata": "0",
                    "cd": "10000"
                },

            ];

            $scope.data = [
                [14431605000, 14544825000, 21720468000],
                [1059, 1001, 1552]
            ];

            $scope.datapib = [
               [14431605000, 14544825000, 21720468000],
                [1059, 1001, 1552]
            ];

            $scope.datapibberkala = [
                [28838000, 706343000, 580731000],
                [3, 126, 76]
            ];

            $scope.datapibk = [
                [6280388000, 5094212000, 6347630000],
                [4025, 3126, 4153]
            ];

            $scope.datappkp = [
                [297716000, 303891000, 203204000],
                [909, 1038, 1169 ]
            ];

            $scope.datacd = [
                [69940000, 52460000, 58085000],
                [3, 45, 55]
            ];

            $scope.datape = [
                [4706000, 1315000, 198000],
                [3, 2, 2]
            ];

            $scope.dataskkbm = [
                [401853000, 2364660000, 7181408000],
                [47, 49, 116]
            ];

        };


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
                $scope.set2016();
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
                $scope.dashboard.SPKPBM = 83;

                $scope.dashboard.PIB2 = 19590605000;
                $scope.dashboard.PIBB2 = 0;
                $scope.dashboard.PIBK2 = 5223443000;
                $scope.dashboard.PPKP2 = 199316000;
                $scope.dashboard.CD2 = 20575000;
                $scope.dashboard.PE2 = 5150000;
                $scope.dashboard.SPKPBM2 = 2072068000;
                $scope.dashboard.PBK2 = 0;

            }

            if ($scope.singleSelect === '02/01/2016') {
                $scope.set2016();

                $scope.target = 339942425295;
                $scope.totalCapaian = 51289226400;
                $scope.targetBulan = 23780558400;
                $scope.realisasi = 23780558400;

                $scope.dashboard.PIB = 1050;
                $scope.dashboard.PIBB = 167;
                $scope.dashboard.PIBK = 3248;
                $scope.dashboard.PPKP = 1038;
                $scope.dashboard.CD = 45;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 77;

                $scope.dashboard.PIB2 = 15459502000;
                $scope.dashboard.PIBB2 = 0;
                $scope.dashboard.PIBK2 = 5859651000;
                $scope.dashboard.PPKP2 = 206314000;
                $scope.dashboard.CD2 = 69452000;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 470096000;


            }

            if ($scope.singleSelect === '03/01/2016') {
                $scope.set2016();

                $scope.target = 339942425295;
                $scope.totalCapaian = 82440530760;
                $scope.targetBulan = 31151304360;
                $scope.realisasi = 31151304360;

                $scope.dashboard.PIB = 1457;
                $scope.dashboard.PIBB = 167;
                $scope.dashboard.PIBK = 3248;
                $scope.dashboard.PPKP = 1208;
                $scope.dashboard.CD = 55;
                $scope.dashboard.PE = 0;
                $scope.dashboard.SPKPBM = 63;

                $scope.dashboard.PIB2 = 23518094000;
                $scope.dashboard.PIBB2 = 0;
                $scope.dashboard.PIBK2 = 5303044000;
                $scope.dashboard.PPKP2 = 30;
                $scope.dashboard.CD2 = 233909000;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 329443000;


            }

            if ($scope.singleSelect === '04/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 20441015000;
                $scope.dashboard.PIBB2 = 2345143000;
                $scope.dashboard.PIBK2 = 5901329000;
                $scope.dashboard.PPKP2 = 253731000;
                $scope.dashboard.CD2 = 11210000;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 4723568000;

            }

            if ($scope.singleSelect === '05/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 19708331000;
                $scope.dashboard.PIBB2 = 2381105000;
                $scope.dashboard.PIBK2 = 5898720000;
                $scope.dashboard.PPKP2 = 186561000;
                $scope.dashboard.CD2 = 8176000;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 629166000;

            }

            if ($scope.singleSelect === '06/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 25804483000;
                $scope.dashboard.PIBB2 = 1923334000;
                $scope.dashboard.PIBK2 = 6507628000;
                $scope.dashboard.PPKP2 = 338557000;
                $scope.dashboard.CD2 = 16080000;
                $scope.dashboard.PE2 = 1010000;
                $scope.dashboard.SPKPBM2 = 3438990000;

            }

            if ($scope.singleSelect === '07/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 16252585000;
                $scope.dashboard.PIBB2 = 1842045000;
                $scope.dashboard.PIBK2 = 1842045000;
                $scope.dashboard.PPKP2 = 201828000;
                $scope.dashboard.CD2 = 9722000;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 239139000;

            }

            if ($scope.singleSelect === '08/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 23182457000;
                $scope.dashboard.PIBB2 = 1775491000;
                $scope.dashboard.PIBK2 = 6566752000;
                $scope.dashboard.PPKP2 = 187147000;
                $scope.dashboard.CD2 = 14467000;
                $scope.dashboard.PE2 = 4217000;
                $scope.dashboard.SPKPBM2 = 3104806000;

            }

            if ($scope.singleSelect === '09/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 20494912000;
                $scope.dashboard.PIBB2 = 2254282000;
                $scope.dashboard.PIBK2 = 4550802000;
                $scope.dashboard.PPKP2 = 181102000;
                $scope.dashboard.CD2 = 27090000;
                $scope.dashboard.PE2 = 0;
                $scope.dashboard.SPKPBM2 = 3083159000;


            }

            if ($scope.singleSelect === '10/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 18218541000;
                $scope.dashboard.PIBB2 = 1722868000;
                $scope.dashboard.PIBK2 = 6234659000;
                $scope.dashboard.PPKP2 = 272682000;
                $scope.dashboard.CD2 = 45658428;
                $scope.dashboard.PE2 = 45658428;
                $scope.dashboard.SPKPBM2 = 163887000;

            }

            if ($scope.singleSelect === '11/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 19960605000;
                $scope.dashboard.PIBB2 = 1915538000;
                $scope.dashboard.PIBK2 = 7225365200;
                $scope.dashboard.PPKP2 = 280291000;
                $scope.dashboard.CD2 = 71247000;
                $scope.dashboard.PE2 = 14360000;
                $scope.dashboard.SPKPBM2 = 1581647000;

            }

            if ($scope.singleSelect === '12/01/2016') {
                $scope.set2016();

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

                $scope.dashboard.PIB2 = 14358859000;
                $scope.dashboard.PIBB2 = 3208673000;
                $scope.dashboard.PIBK2 = 6479609000;
                $scope.dashboard.PPKP2 = 401635000;
                $scope.dashboard.CD2 = 80197000;
                $scope.dashboard.PE2 = 1609000;
                $scope.dashboard.SPKPBM2 = 660112000;

            }

            if ($scope.singleSelect === '01/01/2017') {
                $scope.set2017();

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

                $scope.dashboard.PIB2 = 14431605000;
                $scope.dashboard.PIBB2 = 28838000;
                $scope.dashboard.PIBK2 = 6280388000;
                $scope.dashboard.PPKP2 = 297716000;
                $scope.dashboard.CD2 = 69940000;
                $scope.dashboard.PE2 = 4706000;
                $scope.dashboard.SPKPBM2 = 401853000;

            }

            if ($scope.singleSelect === '02/01/2017') {
                $scope.set2017();

                $scope.target = 393202279000;
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

                $scope.dashboard.PIB2 = 14544825000;
                $scope.dashboard.PIBB2 = 706343000;
                $scope.dashboard.PIBK2 = 5094212000;
                $scope.dashboard.PPKP2 = 303891000;
                $scope.dashboard.CD2 = 52460000;
                $scope.dashboard.PE2 = 1315000;
                $scope.dashboard.SPKPBM2 = 2364660000;


            }

            if ($scope.singleSelect === '03/01/2017') {
                $scope.set2017();

                $scope.target = 3932022279000;
                $scope.totalCapaian = 80827041000;
                $scope.targetBulan = 32766856583;
                $scope.realisasi = 35903819000;
                $scope.persenTahun = 0;
                $scope.persenBulan = 0;

                $scope.dashboard.PIB = 1552;
                $scope.dashboard.PIBB = 76;
                $scope.dashboard.PIBK = 4153;
                $scope.dashboard.PPKP = 959;
                $scope.dashboard.CD = 198;
                $scope.dashboard.PE = 2;
                $scope.dashboard.SPKPBM = 116;


                $scope.target2 = 393202279000;
                $scope.totalCapaian2 = 44923222000;
                $scope.targetBulan2 = 32766856583;
                $scope.realisasi2 = 23252876000;
                $scope.persenTahun2 = 0;
                $scope.persenBulan2 = 0;

            }
        }

        $scope.getMonths();
        $scope.singleSelect = '03/01/2017';
        $scope.update();
    }
])