var controllerId = 'app.views.home';
angular.module('app').controller(controllerId, [
  '$scope', 'upload', '$http', '$window',
  function ($scope, upload, $http, $window) {
    var vm = this;
    $scope.Data = {};
    $scope.Data.pPabean = {};
    $scope.Data.pPabean.beamasuk = 0;
    $scope.Data.pPabean.beakeluar = 0;
    $scope.Data.pPabean.lainnya = 0;
    $scope.Data.pPabean.beamasukDitanggung = 0;
    $scope.Data.pPabean.total = 0;

    $scope.Data.pCukai = {};
    $scope.Data.pCukai.tembakau = 0;
    $scope.Data.pCukai.alkohol = 0;
    $scope.Data.pCukai.mmea = 0;
    $scope.Data.pCukai.lainnya = 0;
    $scope.Data.pCukai.total = 0;
    $scope.Data.pPajak = {};

    $scope.Data.pPajak.ppnimpor = 0;
    $scope.Data.pPajak.bmimpor = 0;
    $scope.Data.pPajak.pph22 = 0;
    $scope.Data.pPajak.ppntembakau = 0;
    $scope.Data.pPajak.ppnbm = 0;
    $scope.Data.pPajak.total = 0;


    $scope.target = 10000000;
    $scope.targetPabean = 300000;
    $scope.targetPabeanPerBulan = 300000;
    $scope.targetCukai = 30000;
    $scope.targetCukaiPerBulan = 300000;
    $scope.totalCapaian = 0;
    $scope.persenTotalCapaian = 0;

    $scope.months = {};
    $scope.singleSelect = {};

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

    $scope.barlabels1 = ['Bea Masuk', 'Bea Keluar', 'Pabean Lainnya'];
    $scope.barlabels2 = ['Cukai Hasil Tembakau', 'Cukai Hasil Alkohol', 'Cukai MMEA', 'Cukai Lainnya'];
    $scope.barlabels3 = ['PPN Impor', 'PPn BM Impor', 'Pph Pasal 22 Impor', 'PPN Cukai Hasil Tembakau'];

    $scope.bardata1 = [];
    $scope.bardata2 = [];
    $scope.bardata3 = [];

    $scope.update = function () {
      console.log($scope.singleSelect);
      // service.reportDashboard($scope.singleSelect).success(function (result) {
      //     $scope.Data = result[0];
      //     console.log($scope.Data);
      //     $scope.bardata1 = [$scope.Data.pPabean.beamasuk, $scope.Data.pPabean.beakeluar, $scope.Data.pPabean.lainnya];
      //     $scope.bardata2 = [$scope.Data.pCukai.tembakau, $scope.Data.pCukai.alkohol, $scope.Data.pCukai.mmea, $scope.Data.pCukai.lainnya];
      //     $scope.bardata3 = [$scope.Data.pPajak.ppnimpor, $scope.Data.pPajak.pph22, $scope.Data.pPajak.pph2, $scope.Data.pPajak.ppntembakau];

      // });
      if ($scope.singleSelect === '01/01/2016') {
        $scope.datapabean = [
          [65],
          [28]
        ];

        $scope.datacukai = [
          [65],
          [28]
        ];

        $scope.datapajak = [
          [65],
          [28]
        ];
        $scope.bardata1 = [10000, 10000, 10000];
        $scope.bardata2 = [10000, 10000, 10000, 10000];
        $scope.bardata3 = [10000, 10000, 10000, 10000];

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 10000;
        $scope.Data.pPabean.beakeluar = 10000;
        $scope.Data.pPabean.lainnya = 10000;
        $scope.Data.pPabean.beamasukDitanggung = 10000;
        $scope.Data.pPabean.total = 10000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 10000;
        $scope.Data.pCukai.alkohol = 10000;
        $scope.Data.pCukai.mmea = 10000;
        $scope.Data.pCukai.lainnya = 10000;
        $scope.Data.pCukai.total = 10000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 10000;
        $scope.Data.pPajak.bmimpor = 10000;
        $scope.Data.pPajak.pph22 = 10000;
        $scope.Data.pPajak.ppntembakau = 10000;
        $scope.Data.pPajak.ppnbm = 10000;
        $scope.Data.pPajak.total = 10000;

        $scope.dashboard.PIB = 100;
        $scope.dashboard.PIBB = 100;
        $scope.dashboard.PIBK = 100;
        $scope.dashboard.PPKP = 100;
        $scope.dashboard.CD = 100;
        $scope.dashboard.PE = 100;
        $scope.dashboard.SPKPBM = 100;
        $scope.dashboard.PBK = 100;
        $scope.dashboard.CK1 = 100;
        $scope.dashboard.CK1A = 100;
        $scope.dashboard.CK5 = 100;

        $scope.dashboard.PIB2 = 100;
        $scope.dashboard.PIBB2 = 100;
        $scope.dashboard.PIBK2 = 100;
        $scope.dashboard.PPKP2 = 100;
        $scope.dashboard.CD2 = 100;
        $scope.dashboard.PE2 = 100;
        $scope.dashboard.SPKPBM2 = 100;
        $scope.dashboard.PBK2 = 100;
        $scope.dashboard.CK12 = 100;
        $scope.dashboard.CK1A2 = 100;
        $scope.dashboard.CK52 = 100;


      }
      if ($scope.singleSelect === '02/01/2016') {
        $scope.datapabean = [
          [65, 70],
          [28, 80]
        ];

        $scope.datacukai = [
          [65, 70],
          [28, 80]
        ];

        $scope.datapajak = [
          [65, 70],
          [28, 80]
        ];

        $scope.bardata1 = [20000, 20000, 20000];
        $scope.bardata2 = [20000, 20000, 20000, 20000];
        $scope.bardata3 = [20000, 20000, 20000, 20000];

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 20000;
        $scope.Data.pPabean.beakeluar = 20000;
        $scope.Data.pPabean.lainnya = 20000;
        $scope.Data.pPabean.beamasukDitanggung = 20000;
        $scope.Data.pPabean.total = 20000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 20000;
        $scope.Data.pCukai.alkohol = 20000;
        $scope.Data.pCukai.mmea = 20000;
        $scope.Data.pCukai.lainnya = 20000;
        $scope.Data.pCukai.total = 20000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 20000;
        $scope.Data.pPajak.bmimpor = 20000;
        $scope.Data.pPajak.pph22 = 20000;
        $scope.Data.pPajak.ppntembakau = 20000;
        $scope.Data.pPajak.ppnbm = 20000;
        $scope.Data.pPajak.total = 20000;

        $scope.dashboard.PIB = 200;
        $scope.dashboard.PIBB = 200;
        $scope.dashboard.PIBK = 200;
        $scope.dashboard.PPKP = 200;
        $scope.dashboard.CD = 200;
        $scope.dashboard.PE = 200;
        $scope.dashboard.SPKPBM = 200;
        $scope.dashboard.PBK = 200;
        $scope.dashboard.CK1 = 200;
        $scope.dashboard.CK1A = 200;
        $scope.dashboard.CK5 = 200;

        $scope.dashboard.PIB2 = 200;
        $scope.dashboard.PIBB2 = 200;
        $scope.dashboard.PIBK2 = 200;
        $scope.dashboard.PPKP2 = 200;
        $scope.dashboard.CD2 = 200;
        $scope.dashboard.PE2 = 200;
        $scope.dashboard.SPKPBM2 = 200;
        $scope.dashboard.PBK2 = 200;
        $scope.dashboard.CK12 = 200;
        $scope.dashboard.CK1A2 = 200;
        $scope.dashboard.CK52 = 200;

      }

      if ($scope.singleSelect === '03/01/2016') {

        $scope.datapabean = [
          [65, 70, 100],
          [28, 80, 100]
        ];

        $scope.datacukai = [
          [65, 70, 100],
          [28, 80, 100]
        ];

        $scope.datapajak = [
          [65, 70, 100],
          [28, 80, 100]
        ];


        $scope.bardata1 = [30000, 30000, 30000];
        $scope.bardata2 = [30000, 30000, 30000, 30000];
        $scope.bardata3 = [30000, 30000, 30000, 30000];

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 40000;
        $scope.Data.pPabean.beakeluar = 40000;
        $scope.Data.pPabean.lainnya = 40000;
        $scope.Data.pPabean.beamasukDitanggung = 40000;
        $scope.Data.pPabean.total = 40000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 300;
        $scope.dashboard.PIBB = 300;
        $scope.dashboard.PIBK = 300;
        $scope.dashboard.PPKP = 300;
        $scope.dashboard.CD = 300;
        $scope.dashboard.PE = 300;
        $scope.dashboard.SPKPBM = 300;
        $scope.dashboard.PBK = 300;
        $scope.dashboard.CK1 = 300;
        $scope.dashboard.CK1A = 300;
        $scope.dashboard.CK5 = 300;

        $scope.dashboard.PIB2 = 300;
        $scope.dashboard.PIBB2 = 300;
        $scope.dashboard.PIBK2 = 300;
        $scope.dashboard.PPKP2 = 300;
        $scope.dashboard.CD2 = 300;
        $scope.dashboard.PE2 = 300;
        $scope.dashboard.SPKPBM2 = 300;
        $scope.dashboard.PBK2 = 300;
        $scope.dashboard.CK12 = 300;
        $scope.dashboard.CK1A2 = 300;
        $scope.dashboard.CK52 = 300;

      }

      if ($scope.singleSelect === '04/01/2016') {

        $scope.datapabean = [
          [65, 70, 100, 200],
          [28, 80, 100, 100]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200],
          [28, 80, 100, 85]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56],
          [28, 80, 100, 90]
        ];

        $scope.bardata1 = [40000, 40000, 40000];
        $scope.bardata2 = [40000, 40000, 40000, 40000];
        $scope.bardata3 = [40000, 40000, 40000, 40000];
        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 30000;
        $scope.Data.pPabean.beakeluar = 30000;
        $scope.Data.pPabean.lainnya = 30000;
        $scope.Data.pPabean.beamasukDitanggung = 30000;
        $scope.Data.pPabean.total = 30000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;

      }
      if ($scope.singleSelect === '05/01/2016') {


        $scope.datapabean = [
          [65, 70, 100, 200, 100],
          [28, 80, 100, 100, 80]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100],
          [28, 80, 100, 85, 77]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90],
          [28, 80, 100, 90, 66]
        ];

        $scope.bardata1 = [50000, 50000, 50000];
        $scope.bardata2 = [50000, 50000, 50000, 50000];
        $scope.bardata3 = [50000, 50000, 50000, 50000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '06/01/2016') {

        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77],
          [28, 80, 100, 100, 80, 89]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67],
          [28, 80, 100, 85, 77, 66]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50],
          [28, 80, 100, 90, 66, 77]
        ];

        $scope.bardata1 = [60000, 60000, 60000];
        $scope.bardata2 = [60000, 60000, 60000, 60000];
        $scope.bardata3 = [60000, 60000, 60000, 60000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '07/01/2016') {

        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77, 56],
          [28, 80, 100, 100, 80, 89, 89]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67, 78],
          [28, 80, 100, 85, 77, 66, 90]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50, 90],
          [28, 80, 100, 90, 66, 77, 88]
        ];

        $scope.bardata1 = [70000, 70000, 70000];
        $scope.bardata2 = [70000, 70000, 70000, 70000];
        $scope.bardata3 = [70000, 10000, 70000, 70000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '08/01/2016') {

        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77, 56, 80],
          [28, 80, 100, 100, 80, 89, 89, 88]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67, 78, 89],
          [28, 80, 100, 85, 77, 66, 90, 100]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50, 90, 89],
          [28, 80, 100, 90, 66, 77, 88, 100]
        ];

        $scope.bardata1 = [80000, 80000, 80000];
        $scope.bardata2 = [80000, 80000, 80000, 80000];
        $scope.bardata3 = [80000, 80000, 80000, 80000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '09/01/2016') {

        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77, 56, 80, 100],
          [28, 80, 100, 100, 80, 89, 89, 88, 200]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67, 78, 89, 100],
          [28, 80, 100, 85, 77, 66, 90, 100, 100]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50, 90, 89, 78],
          [28, 80, 100, 90, 66, 77, 88, 100, 88]
        ];

        $scope.bardata1 = [90000, 90000, 90000];
        $scope.bardata2 = [90000, 90000, 90000, 90000];
        $scope.bardata3 = [90000, 90000, 90000, 90000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '10/01/2016') {
          
        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77, 56, 80, 100, 89],
          [28, 80, 100, 100, 80, 89, 89, 88, 200, 77]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67, 78, 89, 100, 67],
          [28, 80, 100, 85, 77, 66, 90, 100, 100, 55]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50, 90, 89, 78, 89],
          [28, 80, 100, 90, 66, 77, 88, 100, 88, 100]
        ];
        $scope.bardata1 = [100000, 100000, 100000];
        $scope.bardata2 = [100000, 100000, 100000, 100000];
        $scope.bardata3 = [100000, 100000, 100000, 100000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '11/01/2016') {
        $scope.bardata1 = [110000, 110000, 110000];
        $scope.bardata2 = [110000, 110000, 110000, 110000];
        $scope.bardata3 = [110000, 110000, 110000, 110000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
      if ($scope.singleSelect === '12/01/2016') {
        
        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77, 56, 80, 100, 89, 89],
          [28, 80, 100, 100, 80, 89, 89, 88, 200, 77, 100]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67, 78, 89, 100, 67, 100],
          [28, 80, 100, 85, 77, 66, 90, 100, 100, 55, 100]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50, 90, 89, 78, 89, 100],
          [28, 80, 100, 90, 66, 77, 88, 100, 88, 100, 100]
        ];

        $scope.bardata1 = [120000, 120000, 120000];
        $scope.bardata2 = [120000, 120000, 120000, 120000];
        $scope.bardata3 = [120000, 120000, 120000, 120000];

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40000;
        $scope.Data.pCukai.alkohol = 40000;
        $scope.Data.pCukai.mmea = 40000;
        $scope.Data.pCukai.lainnya = 40000;
        $scope.Data.pCukai.total = 40000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 40000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 40000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 40000;
        $scope.Data.pPajak.total = 40000;

        $scope.dashboard.PIB = 400;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 400;
        $scope.dashboard.PPKP = 400;
        $scope.dashboard.CD = 400;
        $scope.dashboard.PE = 400;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 400;
        $scope.dashboard.CK1 = 400;
        $scope.dashboard.CK1A = 400;
        $scope.dashboard.CK5 = 400;

        $scope.dashboard.PIB2 = 400;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 400;
        $scope.dashboard.PPKP2 = 400;
        $scope.dashboard.CD2 = 400;
        $scope.dashboard.PE2 = 400;
        $scope.dashboard.SPKPBM2 = 400;
        $scope.dashboard.PBK2 = 400;
        $scope.dashboard.CK12 = 400;
        $scope.dashboard.CK1A2 = 400;
        $scope.dashboard.CK52 = 400;
      }
    }


    $scope.getData = function () {
      // storeService.getConfig().success(function (result) {
      //     console.log(result);
      var result = 1000000;
      $scope.target = result;
      $scope.targetPabean = result / 2;
      $scope.targetCukai = result / 2;
      $scope.totalCapaian = result / 2;
      $scope.targetPabeanPerBulan = (result / 2) / 12;
      $scope.targetCukaiPerBulan = (result / 2) / 12;
      $scope.persenTotalCapaian = ($scope.totalCapaian / $scope.target) * 100;
      $scope.targetPajakPerBulan = 1000000;
      //    // $scope.
      // });
    }

    $scope.getMonths();
    $scope.getData();

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

    console.log($scope.dashboard);


    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [{
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];

    $scope.options = {
      // title: { display: true, text: 'JUMLAH DOKUMEN' },
      //legend: { display: true }
    };

    $scope.getDoc = function () {
      // service.docCompare().success(function (docs) {
      //     console.log(docs);
      //     $scope.dashboard.PIB = docs[4].documentCount;
      //     $scope.dashboard.PIBK = docs[0].documentCount;
      //     //for (var i = 0; i < docs.length; i++) {
      //     //   $scope.labels.push(docs[i].documentName);
      //     //     $scope.data.push(docs[i].documentCount);
      //     //}
      // }).error(function (result) {
      //     abp.message(result);
      // });
    }


    $scope.baroptions = {
      //title: { display: true, text: 'TOTAL BM' }
    };

    $scope.totalBM = function (date) {
      // service.totalBM(date).success(function (docs) {
      //     console.log(docs);
      //     //for (var i = 0; i < docs.length; i++) {
      //     //    $scope.barlabels.push(docs[i].documentName);
      //     //    $scope.bardata.push(docs[i].documentCount);
      //     //}
      // }).error(function (result) {
      //     abp.message(result);
      // });
    }

    //   $scope.dashboard = {};
    $scope.getDashboard = function (date) {
      // service.dashboard(moment(date, "MM/DD/YYYY")).success(function (docs) {
      //     console.log(docs);

      // }).error(function (result) {
      //     abp.message(result);
      // });
    }

    $scope.getDashboard(Date());
    $scope.totalBM();
    $scope.getDoc();

  }
])
