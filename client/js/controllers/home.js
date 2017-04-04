var controllerId = 'app.views.home';
angular.module('app').controller(controllerId, [
  '$scope', 'upload', '$http', '$window', '$rootScope',
  function ($scope, upload, $http, $window, $rootScope) {
    var vm = this;

    $scope.devisa = {};
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


    //    $scope.target = 10000000;
    //    $scope.targetPabean = 300000;
    //    $scope.targetPabeanPerBulan = 300000;
    //    $scope.targetCukai = 30000;
    //    $scope.targetCukaiPerBulan = 300000;
    $scope.totalCapaian = 0;
    $scope.persenTotalCapaian = 0;

    $scope.months = {};
    $scope.singleSelect = {};


    $scope.getMonths = function () {
      $scope.months = ['03-01-2017', '02-01-2017', '01-01-2017', '12-01-2016',
        '11-01-2016', '10-01-2016', '09-01-2016', '08-01-2016',
        '07-01-2016', '06-01-2016', '05-01-2016', '04-01-2016', '03-01-2016', '02-01-2016', '01-01-2016'
      ]
    }


    $scope.barlabels1 = ['Bea Masuk', 'Bea Keluar', 'Pabean Lainnya'];
    $scope.barlabels2 = ['Cukai Hasil Tembakau', 'Cukai Hasil Alkohol', 'Cukai MMEA', 'Cukai Lainnya'];
    $scope.barlabels3 = ['PPN Impor', 'PPn BM Impor', 'Pph Pasal 22 Impor', 'PPN Cukai Hasil Tembakau'];

    $scope.bardata1 = [];
    $scope.bardata2 = [];
    $scope.bardata3 = [];

    $scope.gaugePajak = 0;
    $scope.gaugeCukai = 0;
    $scope.gaugePabean = 0;

    $scope.gauge1 = "Penerimaan Pabean";
    $scope.gauge2 = "Penerimaan Cukai";
    $scope.gauge3 = "Penerimaan Pajak";

    $scope.setGauge = function () {

      $scope.gaugePajak = $scope.Data.pPajak.total === 0 ? 0 : Math.ceil(($scope.Data.pPajak.total / $scope.targetPajakPerBulan) * 100);
      $scope.gaugeCukai = $scope.Data.pCukai.total === 0 ? 0 : Math.ceil(($scope.Data.pCukai.total / $scope.targetCukaiPerBulan) * 100);
      $scope.gaugePabean = $scope.Data.pPabean.total === 0 ? 0 :  Math.ceil(($scope.Data.pPabean.total / $scope.targetPabeanPerBulan) * 100);
      debugger;
    };

    $scope.update = function () {
      console.log($scope.singleSelect);
      if ($scope.singleSelect === '01/01/2016') {
        $scope.datapabean = [
          [27121371000],
          [5150000]
        ];

        $scope.datacukai = [
          [0],
          [0]
        ];

        $scope.datapajak = [
          [44976136000],
          [12440842000]
        ];
        $scope.bardata1 = [10000, 10000, 10000];
        $scope.bardata2 = [10000, 10000, 10000, 10000];
        $scope.bardata3 = [10000, 10000, 10000, 10000];

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 27121371000;
        $scope.Data.pPabean.beakeluar = 5150000;
        $scope.Data.pPabean.lainnya = 382147000;
        $scope.Data.pPabean.beamasukDitanggung = 10000;
        $scope.Data.pPabean.total = 27508688000;

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

        $scope.dashboard.PIB = 1158;
        $scope.dashboard.PIBB = 3;
        $scope.dashboard.PIBK = 3334;
        $scope.dashboard.PPKP = 909;
        $scope.dashboard.CD = 33;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 84;
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

        //target 01
        $scope.setTarget(27503518000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 29679469376;
        $scope.targetPabeanPerBulan = 27503518000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 0;
        $scope.totalCapaian = 27508668000;


        $scope.devisa.impor = 33092296;
        $scope.devisa.bayar = 33092296;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 391891096;
        $scope.setGauge();
      }


      if ($scope.singleSelect === '02/01/2016') {
        $scope.datapabean = [
          [27121371000,23324208000],
          [5150000,456350400]
        ];

        $scope.datacukai = [
          [0,63600909],
          [0,222898182]
        ];

        $scope.datapajak = [
          [44976136000,52602234],
          [12440842000,14436234]
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

        $scope.dashboard.PIB = 1050;
        $scope.dashboard.PIBB = 167;
        $scope.dashboard.PIBK = 3288;
        $scope.dashboard.PPKP = 1038;
        $scope.dashboard.CD = 45;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 77;
        $scope.dashboard.PBK = 5;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1158;
        $scope.dashboard.PIBB2 = 3;
        $scope.dashboard.PIBK2 = 3334;
        $scope.dashboard.PPKP2 = 909;
        $scope.dashboard.CD2 = 33;
        $scope.dashboard.PE2 = 1;
        $scope.dashboard.SPKPBM2 = 84;
        $scope.dashboard.PBK2 = 100;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 02
        $scope.setTarget(23789558400, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 29679469376;
        $scope.targetPabeanPerBulan = 23789558400;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 86499091;
        $scope.totalCapaian = 27508668000;

        $scope.devisa.impor = 140411701;
        $scope.devisa.bayar = 140411701;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 789293152;
        $scope.setGauge();

      }

      if ($scope.singleSelect === '03/01/2016') {
        //        $scope.setGauge(30,30,30);
       $scope.datapabean = [
          [27121371000,23324208000,30950570000],
          [5150000,456350400,200734360] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909],
          [0,222898182,16363636]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619],
          [12440842000,14436234,17220639000]
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

        $scope.dashboard.PIB = 1457;
        $scope.dashboard.PIBB = 242;
        $scope.dashboard.PIBK = 3248;
        $scope.dashboard.PPKP = 1169;
        $scope.dashboard.CD = 55;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 63;
        $scope.dashboard.PBK = 4;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1050;
        $scope.dashboard.PIBB2 = 167;
        $scope.dashboard.PIBK2 = 3288;
        $scope.dashboard.PPKP2 = 1038;
        $scope.dashboard.CD2 = 45;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 77;
        $scope.dashboard.PBK2 = 5;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 03
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 29679469376;
        $scope.targetPabeanPerBulan = 31151304360;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 48354545;
        $scope.totalCapaian = 51375725491;

        $scope.devisa.impor = 53389040;
        $scope.devisa.bayar = 53389040;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 643663490;
        $scope.setGauge();

      }

      if ($scope.singleSelect === '04/01/2016') {
        //        $scope.setGauge(40,40,40);
       $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996],
          [5150000,456350400,200734360,204578591] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092],
          [0,222898182,16363636,27572728]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000],
          [12440842000,14436234,17220639000,15743081000]
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

        $scope.dashboard.PIB = 1435;
        $scope.dashboard.PIBB = 297;
        $scope.dashboard.PIBK = 3877;
        $scope.dashboard.PPKP = 1039;
        $scope.dashboard.CD = 46;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 87;
        $scope.dashboard.PBK = 16;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1457;
        $scope.dashboard.PIBB2 = 242;
        $scope.dashboard.PIBK2 = 3248;
        $scope.dashboard.PPKP2 = 1169;
        $scope.dashboard.CD2 = 55;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 63;
        $scope.dashboard.PBK2 = 4;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 04
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 29679469376;
        $scope.targetPabeanPerBulan = 32677935958;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 218481820;
        $scope.totalCapaian = 82575384396;

        $scope.devisa.impor = 42630103;
        $scope.devisa.bayar = 42630103;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 486686659;
      }

      if ($scope.singleSelect === '05/01/2016') {
        $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000],
          [5150000,456350400,200734360,204578591,1273323000] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0],
          [0,222898182,16363636,27572728,0]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000],
          [12440842000,14436234,17220639000,15743081000,16899406000]
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

        $scope.dashboard.PIB = 1424;
        $scope.dashboard.PIBB = 355;
        $scope.dashboard.PIBK = 4037;
        $scope.dashboard.PPKP = 828;
        $scope.dashboard.CD = 35;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 77;
        $scope.dashboard.PBK = 2;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1435;
        $scope.dashboard.PIBB2 = 297;
        $scope.dashboard.PIBK2 = 3877;
        $scope.dashboard.PPKP2 = 1039;
        $scope.dashboard.CD2 = 46;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 87;
        $scope.dashboard.PBK2 = 16;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 05
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 29679469376;
        $scope.targetPabeanPerBulan = 37220469000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 0;
        $scope.totalCapaian = 116674440807;

        $scope.devisa.impor = 54009503;
        $scope.devisa.bayar = 54009503;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 499992735;
        $scope.setGauge();

      }

      if ($scope.singleSelect === '06/01/2016') {
        //        $scope.setGauge(60,60,60);
         $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000],
          [5150000,456350400,200734360,204578591,1273323000,686705000] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091],
          [0,222898182,16363636,27572728,0,686705000]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000]
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

        $scope.dashboard.PIB = 1565;
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

        $scope.dashboard.PIB2 = 1424;
        $scope.dashboard.PIBB2 = 355;
        $scope.dashboard.PIBK2 = 4037;
        $scope.dashboard.PPKP2 = 828;
        $scope.dashboard.CD2 = 35;
        $scope.dashboard.PE2 = 0;
        $scope.dashboard.SPKPBM2 = 77;
        $scope.dashboard.PBK2 = 2;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 06
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 37220469000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 36545455;
        $scope.totalCapaian = 146759822807;

        $scope.devisa.impor = 56164346;
        $scope.devisa.bayar = 56164346;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 415104793;
        $scope.setGauge();

      }

      if ($scope.singleSelect === '07/01/2016') {
        //        $scope.setGauge(70,70,70);
         $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000,22408730000],
          [5150000,456350400,200734360,204578591,1273323000,686705000,58849000] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091,10000000],
          [0,222898182,16363636,27572728,0,686705000,27272728]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000,50630668],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000,13384756000]
        ];

        $scope.bardata1 = [70000, 70000, 70000];
        $scope.bardata2 = [70000, 70000, 70000, 70000];
        $scope.bardata3 = [70000, 10000, 70000, 70000];

        $scope.Data.pPabean = {};
        $scope.Data.pPabean.beamasuk = 22408730000;
        $scope.Data.pPabean.beakeluar = 0;
        $scope.Data.pPabean.lainnya = 58849000;
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

        $scope.dashboard.PIB = 948;
        $scope.dashboard.PIBB = 337;
        $scope.dashboard.PIBK = 2562;
        $scope.dashboard.PPKP = 908;
        $scope.dashboard.CD = 39;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 39;
        $scope.dashboard.PBK = 4;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1565;
        $scope.dashboard.PIBB2 = 359;
        $scope.dashboard.PIBK2 = 4338;
        $scope.dashboard.PPKP2 = 1851;
        $scope.dashboard.CD2 = 36;
        $scope.dashboard.PE2 = 1;
        $scope.dashboard.SPKPBM2 = 62;
        $scope.dashboard.PBK2 = 4;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK522 = 0;
        //target 07
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 23014857000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 122272728;
        $scope.totalCapaian = 185513155262;

        $scope.devisa.impor = 446012401;
        $scope.devisa.bayar = 446012401;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 176770341;
        $scope.setGauge();
  
    }

      if ($scope.singleSelect === '08/01/2016') {
//        $scope.setGauge(80, 80, 80);
        $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000,22408730000,34831120000],
          [5150000,456350400,200734360,204578591,1273323000,686705000,58849000,287868480] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091,10000000,50000000],
          [0,222898182,16363636,27572728,0,686705000,27272728,13636364]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000,50630668,74476856000],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000,13384756000,18251574000]
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
        $scope.Data.pCukai.total = 63636364;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 74476856000;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 18251574000;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.total = 92728430000;

        $scope.dashboard.PIB = 1540;
        $scope.dashboard.PIBB = 220;
        $scope.dashboard.PIBK = 4104;
        $scope.dashboard.PPKP = 954;
        $scope.dashboard.CD = 24;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 46;
        $scope.dashboard.PBK = 4;
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
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 35116693;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 63636364;
        $scope.totalCapaian = 208108006990;

        $scope.devisa.impor = 62686703;
        $scope.devisa.bayar = 62686703;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 501798706;
        $scope.setGauge();
  
    }

      if ($scope.singleSelect === '09/01/2016') {
//        $scope.setGauge(90, 90, 90);
       $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000,22408730000,34831120000,30591347000],
          [5150000,456350400,200734360,204578591,1273323000,686705000,58849000,287868480,265025000] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091,10000000,50000000,90909091],
          [0,222898182,16363636,27572728,0,686705000,27272728,13636364,13636364]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000,50630668,74476856000,57960474000],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000,13384756000,18251574000,15267894000]
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

        $scope.dashboard.PIB = 1220;
        $scope.dashboard.PIBB = 358;
        $scope.dashboard.PIBK = 3014;
        $scope.dashboard.PPKP = 956;
        $scope.dashboard.CD = 61;
        $scope.dashboard.PE = 0;
        $scope.dashboard.SPKPBM = 41;
        $scope.dashboard.PBK = 6;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 948;
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
        //target 09
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 16000000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 104545455;
        $scope.totalCapaian = 243294848834;

        $scope.devisa.impor = 109238875;
        $scope.devisa.bayar = 109238875;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 140364232;
        $scope.setGauge();

      }

      if ($scope.singleSelect === '10/01/2016') {
//        $scope.setGauge(100, 100, 100);
  $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000,22408730000,34831120000,30591347000,26658295428],
          [5150000,456350400,200734360,204578591,1273323000,686705000,58849000,287868480,265025000,707169400] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091,10000000,50000000,90909091,72727274],
          [0,222898182,16363636,27572728,0,686705000,27272728,13636364,13636364,27272728]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000,50630668,74476856000,57960474000,56539163000],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000,13384756000,18251574000,15267894000,15054330000]
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

        $scope.dashboard.PIB = 1408;
        $scope.dashboard.PIBB = 293;
        $scope.dashboard.PIBK = 4080;
        $scope.dashboard.PPKP = 1291;
        $scope.dashboard.CD = 88;
        $scope.dashboard.PE = 2;
        $scope.dashboard.SPKPBM = 58;
        $scope.dashboard.PBK = 9;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1220;
        $scope.dashboard.PIBB2 = 358;
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
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 19098167765;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 100000002;
        $scope.totalCapaian = 274246766289;

        $scope.devisa.impor = 109238875;
        $scope.devisa.bayar = 109238875;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 226440113;
        $scope.setGauge();
  
    }

      if ($scope.singleSelect === '11/01/2016') {
//        $scope.setGauge(85, 81, 91);
  $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000,22408730000,34831120000,30591347000,26658295428,31034693200],
          [5150000,456350400,200734360,204578591,1273323000,686705000,58849000,287868480,265025000,707169400,86166600] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091,10000000,50000000,90909091,72727274,40909091],
          [0,222898182,16363636,27572728,0,686705000,27272728,13636364,13636364,27272728,0]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000,50630668,74476856000,57960474000,56539163000,61976801520],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000,13384756000,18251574000,15267894000,15054330000,17055442780]
        ];

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
        $scope.Data.pPajak.pph22 = 17055442780;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.ppnbm = 0;
        $scope.Data.pPajak.total = 79032244300;

        $scope.dashboard.PIB = 1505;
        $scope.dashboard.PIBB = 404;
        $scope.dashboard.PIBK = 4265;
        $scope.dashboard.PPKP = 1769;
        $scope.dashboard.CD = 168;
        $scope.dashboard.PE = 6;
        $scope.dashboard.SPKPBM = 60;
        $scope.dashboard.PBK = 2;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1408;
        $scope.dashboard.PIBB2 = 293;
        $scope.dashboard.PIBK2 = 4080;
        $scope.dashboard.PPKP2 = 1291;
        $scope.dashboard.CD2 = 88;
        $scope.dashboard.PE2 = 2;
        $scope.dashboard.SPKPBM2 = 58;
        $scope.dashboard.PBK2 = 9;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 11
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 33652294000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 40909091;
        $scope.totalCapaian = 301716576119;

        $scope.devisa.impor = 240387305;
        $scope.devisa.bayar = 240387305;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 177267182;
        $scope.setGauge();
  
    }

      if ($scope.singleSelect === '12/01/2016') {
//        $scope.setGauge(84, 45, 45);
 $scope.datapabean = [
          [27121371000,23324208000,30950570000,33675996,28812059000,38029072000,22408730000,34831120000,30591347000,26658295428,31034693200,25189085000],
          [5150000,456350400,200734360,204578591,1273323000,686705000,58849000,287868480,265025000,707169400,86166600,230154500] 
        
        ];

        $scope.datacukai = [
          [0,63600909,31990909,190909092,0,22909091,10000000,50000000,90909091,72727274,40909091,59090910],
          [0,222898182,16363636,27572728,0,686705000,27272728,13636364,13636364,27272728,0,14371364]
        ];

        $scope.datapajak = [
          [44976136000,52602234,64403619,57674447000,63443115000,84474023000,50630668,74476856000,57960474000,56539163000,61976801520,70384038000],
          [12440842000,14436234,17220639000,15743081000,16899406000,22151561000,13384756000,18251574000,15267894000,15054330000,17055442780,19530793000]
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

        $scope.dashboard.PIB = 1371;
        $scope.dashboard.PIBB = 531;
        $scope.dashboard.PIBK = 4316;
        $scope.dashboard.PPKP = 1991;
        $scope.dashboard.CD = 133;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 75;
        $scope.dashboard.PBK = 7;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1505;
        $scope.dashboard.PIBB2 = 404;
        $scope.dashboard.PIBK2 = 4265;
        $scope.dashboard.PPKP2 = 4769;
        $scope.dashboard.CD2 = 168;
        $scope.dashboard.PE2 = 6;
        $scope.dashboard.SPKPBM2 = 60;
        $scope.dashboard.PBK2 = 2;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;

        //target 12
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 339942425295;
        $scope.targetPabean = 339012027470;
        $scope.targetPabeanPerBulan = 30116760000;
        $scope.targetCukai = 899706825;
        $scope.targetCukaiPerBulan = 73462274;
        $scope.totalCapaian = 358387015784;
        //  $scope.persenTotalCapaian = ($scope.totalCapaian/$scope.target) * 100 ;

        $scope.devisa.impor = 326501083;
        $scope.devisa.bayar = 326501083;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 82225123;
        $scope.setGauge();


      }

      if ($scope.singleSelect === '01/01/2017') {
//        $scope.setGauge(67, 99, 77);

        $scope.datapabean = [
          [21510340000],
          [155300000]
        ];

        $scope.datacukai = [
          [54545455],
          [0]
        ];

        $scope.datapajak = [
          [49800465000],
          [13890748000]
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

        $scope.dashboard.PIB = 1059;
        $scope.dashboard.PIBB = 3;
        $scope.dashboard.PIBK = 4025;
        $scope.dashboard.PPKP = 1387;
        $scope.dashboard.CD = 156;
        $scope.dashboard.PE = 3;
        $scope.dashboard.SPKPBM = 47;
        $scope.dashboard.PBK = 5;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1371;
        $scope.dashboard.PIBB2 = 531;
        $scope.dashboard.PIBK2 = 4316;
        $scope.dashboard.PPKP2 = 1991;
        $scope.dashboard.CD2 = 133;
        $scope.dashboard.PE2 = 1;
        $scope.dashboard.SPKPBM2 = 75;
        $scope.dashboard.PBK2 = 7;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 0117
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 393202279000;
        $scope.targetPabean = 393202279000;
        $scope.targetPabeanPerBulan = 22748922000;
        $scope.targetCukai = 0;
        $scope.targetCukaiPerBulan = 0;
        $scope.totalCapaian = 21742945273;


        $scope.devisa.impor = 121667722;
        $scope.devisa.bayar = 121667722;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 88091899;
        $scope.setGauge();


      }

      if ($scope.singleSelect === '02/01/2017') {
//        $scope.setGauge(44, 55, 66);
    $scope.datapabean = [
          [21510340000,23066391000],
          [155300000,185170000]
        ];

        $scope.datacukai = [
          [54545455,63636364],
          [0,36363636]
        ];

        $scope.datapajak = [
          [49800465000,49099621000],
          [13890748000,13302743812]
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

        $scope.dashboard.PIB = 1001;
        $scope.dashboard.PIBB = 126;
        $scope.dashboard.PIBK = 3126;
        $scope.dashboard.PPKP = 1470;
        $scope.dashboard.CD = 132;
        $scope.dashboard.PE = 2;
        $scope.dashboard.SPKPBM = 50;
        $scope.dashboard.PBK = 7;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1059;
        $scope.dashboard.PIBB2 = 3;
        $scope.dashboard.PIBK2 = 4025;
        $scope.dashboard.PPKP2 = 1387;
        $scope.dashboard.CD2 = 156;
        $scope.dashboard.PE2 = 5;
        $scope.dashboard.SPKPBM2 = 47;
        $scope.dashboard.PBK2 = 5;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;
        //target 0217
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 393202279000;
        $scope.targetPabean = 393202279000;
        $scope.targetPabeanPerBulan = 22748922000;
        $scope.targetCukai = 0;
        $scope.targetCukaiPerBulan = 0;
        $scope.totalCapaian = 45095821273;

        $scope.devisa.impor = 38294285;
        $scope.devisa.bayar = 38294285;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 348059065;
        $scope.setGauge();


      }

      if ($scope.singleSelect === '03/01/2017') {
//        $scope.setGauge(78, 44, 23);

        $scope.datapabean = [
          [65, 70, 100, 200, 100, 77, 56, 80, 100, 89, 89],
          [28, 80, 100, 100, 80, 89, 89, 88, 200, 77, 1000000]
        ];

        $scope.datacukai = [
          [65, 70, 100, 200, 100, 67, 78, 89, 100, 67, 100],
          [28, 80, 100, 85, 77, 66, 90, 100, 100, 55, 1000000]
        ];

        $scope.datapajak = [
          [65, 70, 100, 56, 90, 50, 90, 89, 78, 89, 100],
          [28, 80, 100, 90, 66, 77, 880000, 10000000, 88, 100, 100000]
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

        $scope.dashboard.PIB = 1455;
        $scope.dashboard.PIBB = 67;
        $scope.dashboard.PIBK = 3814;
        $scope.dashboard.PPKP = 902;
        $scope.dashboard.CD = 177;
        $scope.dashboard.PE = 1;
        $scope.dashboard.SPKPBM = 112;
        $scope.dashboard.PBK = 0;
        $scope.dashboard.CK1 = 0;
        $scope.dashboard.CK1A = 0;
        $scope.dashboard.CK5 = 0;

        $scope.dashboard.PIB2 = 1001;
        $scope.dashboard.PIBB2 = 126;
        $scope.dashboard.PIBK2 = 3126;
        $scope.dashboard.PPKP2 = 1470;
        $scope.dashboard.CD2 = 132;
        $scope.dashboard.PE2 = 2;
        $scope.dashboard.SPKPBM2 = 50;
        $scope.dashboard.PBK2 = 7;
        $scope.dashboard.CK12 = 0;
        $scope.dashboard.CK1A2 = 0;
        $scope.dashboard.CK52 = 0;


        //target 0317
        $scope.setTarget(10000, 60000, 40000, 100000);
        $scope.target = 393202279000;
        $scope.targetPabean = 393202279000;
        $scope.targetPabeanPerBulan = 34770443000;
        $scope.targetCukai = 0;
        $scope.targetCukaiPerBulan = 0;
        $scope.totalCapaian = 52256334000;

        $scope.devisa.impor = 46993480;
        $scope.devisa.bayar = 46993480;
        $scope.devisa.bebas = 0;
        $scope.devisa.ditangguhkan = 0;
        $scope.devisa.ditanggung = 0;
        $scope.devisa.expor = 0;
        $scope.setGauge();


      }
    }

    $scope.setTarget = function (targetPerBulan, targetCukaiPerBulan, targetPabeanPerBulan, targetPajakPerBulan) {
      $scope.targetPerBulan = targetPerBulan;
      $scope.targetCukaiPerBulan = targetCukaiPerBulan;
      $scope.targetPabeanPerBulan = targetPabeanPerBulan;
      $scope.targetPajakPerBulan = targetPajakPerBulan;
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


    $scope.colors = ['#ff6384', '#ffa31a'];

    $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [ {
        yAxisID: 'y-axis-1'
      }, {
        yAxisID: 'y-axis-2'
      }
    ];

    $scope.options = {
      // legend: {
      //   display: true
      // },
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