var controllerId = 'app.views.home';
angular.module('app').controller(controllerId, [
  '$scope', 'upload', '$http', '$window',
  function ($scope, upload, $http, $window) {
    var vm = this;
    $scope.devisa ={};
    $scope.devisa.impor = 0;
    $scope.devisa.expor = 0;
    $scope.devisa.bayar = 0;
    $scope.devisa.bebas = 0;
    $scope.devisa.ditangguhkan = 0;
    $scope.devisa.ditanggung = 0;

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
      $scope.months = ['03-01-2017', '02-01-2017', '01-01-2017', '12-01-2016',
        '11-01-2016', '10-01-2016', '09-01-2016', '08-01-2016',
        '07-01-2016', '06-01-2016', '05-01-2016', '04-01-2016','03-01-2016'
        ,'02-01-2016','01-01-2016'
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
        $scope.Data.pPabean.beamasuk = 27121371000;
        $scope.Data.pPabean.beakeluar = 5150000;
        $scope.Data.pPabean.lainnya = 382147000;
        $scope.Data.pPabean.beamasukDitanggung = 10000;
        $scope.Data.pPabean.total = 27508688;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 0;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 0;
        $scope.Data.pCukai.total = 0;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 44976136000;
        $scope.Data.pPajak.bmimpor = 40000;
        $scope.Data.pPajak.pph22 = 12440842000;
        $scope.Data.pPajak.ppntembakau = 10000;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 57417018;

        $scope.dashboard.PIB = 1.306;
        $scope.dashboard.PIBB = 100;
        $scope.dashboard.PIBK = 3;
        $scope.dashboard.PPKP = 90;
        $scope.dashboard.CD = 33;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 84;
        $scope.dashboard.PBK = 100;
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

        //target 01
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
       }


      if ($scope.singleSelect === '02-01-2016') {
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
        $scope.Data.pPabean.beamasuk = 23324208000;
        $scope.Data.pPabean.beakeluar = 0;
        $scope.Data.pPabean.lainnya = 456350400;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 23780558400;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 63600909;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 222898182;
        $scope.Data.pCukai.total = 86499091;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 52602234;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 14436234;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 67038468000;

        $scope.dashboard.PIB = 1293;
        $scope.dashboard.PIBB = 200;
        $scope.dashboard.PIBK = 3288;
        $scope.dashboard.PPKP = 21038;
        $scope.dashboard.CD = 45;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 77;
        $scope.dashboard.PBK = 5;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1.306;
        $scope.dashboard.PIBB2 = 167;
        $scope.dashboard.PIBK2 = 3;
        $scope.dashboard.PPKP2 = 90;
        $scope.dashboard.CD2 = 33;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 84;
        $scope.dashboard.PBK2 = 0;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 02
        
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 

      }

      if ($scope.singleSelect === '03-01-2016') {

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
        $scope.Data.pPabean.beamasuk = 30950570000;
        $scope.Data.pPabean.beakeluar = 0;
        $scope.Data.pPabean.lainnya = 200734360;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 31151304360;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 31990909;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 16363636;
        $scope.Data.pCukai.total = 48354545;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 64403619;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 17220639000;
        $scope.Data.pPajak.ppntembakau = 40000;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 81624258000;

        $scope.dashboard.PIB = 1756;
        $scope.dashboard.PIBB = 300;
        $scope.dashboard.PIBK = 3248;
        $scope.dashboard.PPKP = 1169;
        $scope.dashboard.CD = 55;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 63;
        $scope.dashboard.PBK = 1;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1293;
        $scope.dashboard.PIBB2 = 200;
        $scope.dashboard.PIBK2 = 3288;
        $scope.dashboard.PPKP2 = 21038;
        $scope.dashboard.CD2 = 45;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 77;
        $scope.dashboard.PBK2 = 5;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        
     //target 03
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 


      }

      if ($scope.singleSelect === '04-01-2016') {

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
        $scope.Data.pPabean.beamasuk = 33675996;
        $scope.Data.pPabean.beakeluar = 0;
        $scope.Data.pPabean.lainnya = 204578591;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 33880574591;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 190909092;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 27572728;
        $scope.Data.pCukai.total = 218481820;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 57674447000;
        $scope.Data.pPajak.bmimpor = 752000;
        $scope.Data.pPajak.pph22 = 15743081000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 73418280000;

        $scope.dashboard.PIB = 1762;
        $scope.dashboard.PIBB = 3877;
        $scope.dashboard.PIBK = 297;
        $scope.dashboard.PPKP = 1039;
        $scope.dashboard.CD = 46;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 87;
        $scope.dashboard.PBK = 1;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1756;
        $scope.dashboard.PIBB2 = 300;
        $scope.dashboard.PIBK2 = 3248;
        $scope.dashboard.PPKP2 = 1169;
        $scope.dashboard.CD2 = 55;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 63;
        $scope.dashboard.PBK2 = 1;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        
        //target 04
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 28812059000;
        $scope.Data.pPabean.beakeluar = 0;
        $scope.Data.pPabean.lainnya = 1273323000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 30085382000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 0;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 0;
        $scope.Data.pCukai.total = 0;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 63443115000;
        $scope.Data.pPajak.bmimpor = 2795000;
        $scope.Data.pPajak.pph22 = 16899406000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 0;

        $scope.dashboard.PIB = 1749;
        $scope.dashboard.PIBB = 4037;
        $scope.dashboard.PIBK = 355;
        $scope.dashboard.PPKP = 828;
        $scope.dashboard.CD = 35;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 77;
        $scope.dashboard.PBK = 2;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1762;
        $scope.dashboard.PIBB2 = 3877;
        $scope.dashboard.PIBK2 = 297;
        $scope.dashboard.PPKP2 = 1039;
        $scope.dashboard.CD2 = 46;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 87;
        $scope.dashboard.PBK2 = 1;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
      //target 05
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
        
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 38029072000;
        $scope.Data.pPabean.beakeluar = 1010000;
        $scope.Data.pPabean.lainnya = 686705000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 38716787000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 22909091;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 13636364;
        $scope.Data.pCukai.total = 36545455;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 84474023000;
        $scope.Data.pPajak.bmimpor = 2701000;
        $scope.Data.pPajak.pph22 = 22151561000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 106692285000;

        $scope.dashboard.PIB = 1793;
        $scope.dashboard.PIBB = 359;
        $scope.dashboard.PIBK = 4338;
        $scope.dashboard.PPKP = 1851;
        $scope.dashboard.CD = 36;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 62;
        $scope.dashboard.PBK = 4;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1749;
        $scope.dashboard.PIBB2 = 4037;
        $scope.dashboard.PIBK2 = 355;
        $scope.dashboard.PPKP2 = 828;
        $scope.dashboard.CD2 = 35;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 77;
        $scope.dashboard.PBK2 = 2;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 06
       $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 38029072000;
        $scope.Data.pPabean.beakeluar = 1010000;
        $scope.Data.pPabean.lainnya = 686705000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 38716787000;
       
        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 10000000;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 27272728;
        $scope.Data.pCukai.total = 127272728;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 50630668;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 13384756000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 64015424000;

        $scope.dashboard.PIB = 1151;
        $scope.dashboard.PIBB = 337;
        $scope.dashboard.PIBK = 2562;
        $scope.dashboard.PPKP = 908;
        $scope.dashboard.CD = 39;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 39;
        $scope.dashboard.PBK = 4;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1793;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 4338;
        $scope.dashboard.PPKP2 = 1851;
        $scope.dashboard.CD2 = 36;
        $scope.dashboard.PE2 = 1;
        $scope.dashboard.SPKPBM2 = 62;
        $scope.dashboard.PBK2 = 4;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 07
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 34831120000;
        $scope.Data.pPabean.beakeluar = 4217000;
        $scope.Data.pPabean.lainnya = 287868480;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 35123205480;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 50000000;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 13636364;
        $scope.Data.pCukai.total = 636366364;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 74476856000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 18251574000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.total = 92728430000;

        $scope.dashboard.PIB = 1897;
        $scope.dashboard.PIBB = 220;
        $scope.dashboard.PIBK = 4104;
        $scope.dashboard.PPKP = 954;
        $scope.dashboard.CD = 240;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 46;
        $scope.dashboard.PBK = 5;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1151;
        $scope.dashboard.PIBB2 = 337;
        $scope.dashboard.PIBK2 = 2562;
        $scope.dashboard.PPKP2 = 908;
        $scope.dashboard.CD2 = 39;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 39;
        $scope.dashboard.PBK2 = 4;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 08
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
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
 
        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 30591347000;
        $scope.Data.pPabean.beakeluar = 0;
        $scope.Data.pPabean.lainnya = 265025000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 30847372000;
        
        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 90909091;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 13636364;
        $scope.Data.pCukai.total = 104545455;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 57960474000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 15267894000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 73228368000;

        $scope.dashboard.PIB = 1520;
        $scope.dashboard.PIBB = 0;
        $scope.dashboard.PIBK = 3014;
        $scope.dashboard.PPKP = 956;
        $scope.dashboard.CD = 61;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 41;
        $scope.dashboard.PBK = 6;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1897;
        $scope.dashboard.PIBB2 = 220;
        $scope.dashboard.PIBK2 = 4104;
        $scope.dashboard.PPKP2 = 954;
        $scope.dashboard.CD2 = 240;
        $scope.dashboard.PE2 = 1;
        $scope.dashboard.SPKPBM2 = 46;
        $scope.dashboard.PBK2 = 5;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2= 0;
        $scope.dashboard.CK52 = 0;
        //target 09
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 26658295428;
        $scope.Data.pPabean.beakeluar = 4345000;
        $scope.Data.pPabean.lainnya = 707169400;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 27369809828;
      
        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 72727274;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 27272728;
        $scope.Data.pCukai.total = 100000002;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 56539163000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 15054330000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 71593493000;

        $scope.dashboard.PIB = 1836;
        $scope.dashboard.PIBB = 1;
        $scope.dashboard.PIBK = 4080;
        $scope.dashboard.PPKP = 1291;
        $scope.dashboard.CD = 88;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 58;
        $scope.dashboard.PBK = 9;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1520;
        $scope.dashboard.PIBB2 = 0;
        $scope.dashboard.PIBK2 = 3014;
        $scope.dashboard.PPKP2 = 956;
        $scope.dashboard.CD2 = 61;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 41;
        $scope.dashboard.PBK2 = 6;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 10
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
      }

      if ($scope.singleSelect === '11/01/2016') {
        $scope.bardata1 = [110000, 110000, 110000];
        $scope.bardata2 = [110000, 110000, 110000, 110000];
        $scope.bardata3 = [110000, 110000, 110000, 110000];

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 31034693200;
        $scope.Data.pPabean.beakeluar = 14360000;
        $scope.Data.pPabean.lainnya = 86166600;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 31135219800;
      
        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 40909091;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 0;
        $scope.Data.pCukai.total = 40909091;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 61976801520;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 =17055442780;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 79032244300;

        $scope.dashboard.PIB = 2250;
        $scope.dashboard.PIBB = 1;
        $scope.dashboard.PIBK = 4265;
        $scope.dashboard.PPKP = 1888;
        $scope.dashboard.CD = 168;
        $scope.dashboard.PE = 4;
        $scope.dashboard.SPKPBM = 60;
        $scope.dashboard.PBK = 2;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1836;
        $scope.dashboard.PIBB2 = 1;
        $scope.dashboard.PIBK2 = 4080;
        $scope.dashboard.PPKP2 = 1291;
        $scope.dashboard.CD2 = 88;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 58;
        $scope.dashboard.PBK2 = 9;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 11
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 25189085000;
        $scope.Data.pPabean.beakeluar = 1609000;
        $scope.Data.pPabean.lainnya = 230154500;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 25420848500;
      
        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 59090910;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 14371364;
        $scope.Data.pCukai.total = 73462274;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 70384038000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 19530793000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 89914831000;

        $scope.dashboard.PIB = 1490;
        $scope.dashboard.PIBB = 2;
        $scope.dashboard.PIBK = 4316;
        $scope.dashboard.PPKP = 2019;
        $scope.dashboard.CD = 133;
        $scope.dashboard.PE = 4;
        $scope.dashboard.SPKPBM = 75;
        $scope.dashboard.PBK = 0;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 2250;
        $scope.dashboard.PIBB2 = 1;
        $scope.dashboard.PIBK2 = 4265;
        $scope.dashboard.PPKP2 = 1888;
        $scope.dashboard.CD2 = 168;
        $scope.dashboard.PE2 = 4;
        $scope.dashboard.SPKPBM2 = 60;
        $scope.dashboard.PBK2 = 2;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
      
      //target 12
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
      }

      if ($scope.singleSelect === '01/01/2017') {
        
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 21510340000;
        $scope.Data.pPabean.beakeluar = 4706000;
        $scope.Data.pPabean.lainnya = 155300000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 21670346000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 54545455;
        $scope.Data.pCukai.alkohol = 18181818;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 0;
        $scope.Data.pCukai.total = 72727273;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 49800465000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 13890748000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 63691213000;

        $scope.dashboard.PIB = 1201;
        $scope.dashboard.PIBB = 404;
        $scope.dashboard.PIBK = 4025;
        $scope.dashboard.PPKP = 1387;
        $scope.dashboard.CD = 156;
        $scope.dashboard.PE = 5;
        $scope.dashboard.SPKPBM = 47;
        $scope.dashboard.PBK = 7;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1490;
        $scope.dashboard.PIBB2 = 4316;
        $scope.dashboard.PIBK2 = 2;
        $scope.dashboard.PPKP2 = 2019;
        $scope.dashboard.CD2 = 133;
        $scope.dashboard.PE2 = 4;
        $scope.dashboard.SPKPBM2 = 75;
        $scope.dashboard.PBK2 = 0;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 0117
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
 
      }


      if ($scope.singleSelect === '02/01/2017') {
        
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 23066391000;
        $scope.Data.pPabean.beakeluar = 1315000;
        $scope.Data.pPabean.lainnya = 185170000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 23252876000;

        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 63636364;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 36363636;
        $scope.Data.pCukai.total = 100000000;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 49099621000;
        $scope.Data.pPajak.bmimpor = 3970000;
        $scope.Data.pPajak.pph22 = 13302743812;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 62406334812;

        $scope.dashboard.PIB = 1076;
        $scope.dashboard.PIBB = 400;
        $scope.dashboard.PIBK = 3126;
        $scope.dashboard.PPKP = 1470;
        $scope.dashboard.CD = 132;
        $scope.dashboard.PE = 7;
        $scope.dashboard.SPKPBM = 50;
        $scope.dashboard.PBK = 7;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1201;
        $scope.dashboard.PIBB2 = 404;
        $scope.dashboard.PIBK2 = 4025;
        $scope.dashboard.PPKP2 = 1387;
        $scope.dashboard.CD2 = 156;
        $scope.dashboard.PE2 = 5;
        $scope.dashboard.SPKPBM2 = 47;
        $scope.dashboard.PBK2 = 7;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
//target 0217
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
    }


      if ($scope.singleSelect === '03/01/2017') {
        
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

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 24644066000;
        $scope.Data.pPabean.beakeluar = 19000;
        $scope.Data.pPabean.lainnya = 824947000;
        $scope.Data.pPabean.beamasukDitanggung = 0;
        $scope.Data.pPabean.total = 25469032000;
       
        $scope.Data.pCukai = {};
        $scope.Data.pCukai.tembakau = 0;
        $scope.Data.pCukai.alkohol = 0;
        $scope.Data.pCukai.mmea = 0;
        $scope.Data.pCukai.lainnya = 0;
        $scope.Data.pCukai.total = 0;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 45804545000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 12970173000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 58594718000;

        $scope.dashboard.PIB = 1136;
        $scope.dashboard.PIBB = 53;
        $scope.dashboard.PIBK = 2956;
        $scope.dashboard.PPKP = 789;
        $scope.dashboard.CD = 146;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 400;
        $scope.dashboard.PBK = 0;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1076;
        $scope.dashboard.PIBB2 = 400;
        $scope.dashboard.PIBK2 = 3126;
        $scope.dashboard.PPKP2 = 1470;
        $scope.dashboard.CD2 = 132;
        $scope.dashboard.PE2 = 7;
        $scope.dashboard.SPKPBM2 = 50;
        $scope.dashboard.PBK2 = 7;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        $scope.devisa.impor = 1000;
        $scope.devisa.expor = 1000;
        $scope.devisa.bayar = 1000;
        $scope.devisa.bebas = 1000;
        $scope.devisa.ditangguhkan = 10000;
        $scope.devisa.ditanggung = 10000;
//target 0317
        $scope.setTarget(10000, 60000, 40000);
        $scope.target = 9999999;
        $scope.targetPabean = 300000;
        $scope.targetPabeanPerBulan = 300000;
        $scope.targetCukai = 30000;
        $scope.targetCukaiPerBulan = 300000;
        $scope.totalCapaian = 0;
        $scope.persenTotalCapaian = 0;
     
      }
    }

    $scope.setTarget = function(targetPerBulan, targetCukaiPerBulan, targetPabeanPerBulan){
        $scope.targetPerBulan = targetPerBulan;
        $scope.targetCukaiPerBulan = targetCukaiPerBulan;
        $scope.targetPabeanPerBulan = targetPabeanPerBulan;
    };

    $scope.getData = function () {
      // storeService.getConfig().success(function (result) {
      //     console.log(result);
      var result = 1000000;
      // $scope.target = result;
      // $scope.targetPabean = result / 2;
      // $scope.targetCukai = result / 2;
      // $scope.totalCapaian = result / 2;
      // $scope.targetPabeanPerBulan = (result / 2) / 12;
      // $scope.targetCukaiPerBulan = (result / 2) / 12;
      // $scope.persenTotalCapaian = ($scope.totalCapaian / $scope.target) * 100;
      // $scope.targetPajakPerBulan = 1000000;
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
     $scope.singleSelect = '03/01/2017';
     $scope.update();
  }
])
