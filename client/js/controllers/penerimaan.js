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

        //data pib
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
        $scope.gridOpts5.data = [{
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
        $scope.gridOpts6.data = [{
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
        $scope.gridOpts7.data = [{
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
        $scope.gridOpts8.data = [{
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
    
        $scope.datapibberkala = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datapibk = [
            [65, 59, 80, 81, 56, 55, 40],
            [1158, 1050, 1457, 1435, 1424, 1565,948,1540,1220,1408,1505,1371,1059,1001]
        ];

        $scope.datappkp = [
            [65, 59, 80, 81, 56, 55, 40],
            [3334, 3288, 3248, 3877, 4037, 4338, 2562,4104,3014,4080,4265,4316,4025,3126,3814]
        ];

        $scope.datacd = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.datape = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        
         $scope.dataskkbm = [
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

                $scope.dashboard.PIB2 = 14544825000;
                $scope.dashboard.PIBB2 = 706343000;
                $scope.dashboard.PIBK2 = 5094212000;
                $scope.dashboard.PPKP2 = 303891000;
                $scope.dashboard.CD2 = 52460000;
                $scope.dashboard.PE2 = 1315000;
                $scope.dashboard.SPKPBM2 = 2364660000;

              
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
      

                $scope.dashboard.PIB2 =21720468000;
                $scope.dashboard.PIBB2 = 580731000;
                $scope.dashboard.PIBK2 = 6347630000;
                $scope.dashboard.PPKP2 = 203204000;
                $scope.dashboard.CD2 = 58085000;
                $scope.dashboard.PE2 = 198000;
                $scope.dashboard.SPKPBM2 =7181408000;

            }
        }

        $scope.getMonths();
    }
])