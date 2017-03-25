
var controllerId = 'app.views.mpo';
angular.module('app').controller(controllerId, [
    '$q','$scope', 'upload', '$http', function ($q,$scope, upload, $http) {
        $scope.Data = {};
        $scope.Data.periode = "";
        $scope.Data.tanggalCetak = "";
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
        $scope.Data.pCukai.lainnya =0;
        $scope.Data.pCukai.total = 0;
        $scope.Data.pPajak = {};

        $scope.Data.pPajak.ppnimpor = 0;
        $scope.Data.pPajak.bmimpor = 0;
        $scope.Data.pPajak.pph22 = 0;
        $scope.Data.pPajak.ppntembakau = 0;
        $scope.Data.pPajak.total = 0;

        $scope.Data.import = {};
        $scope.Data.import.devisaBayar = 0;
        $scope.Data.import.devisaDitanggung = 0;
        $scope.Data.import.devisaDitangguhkan = 0;
        $scope.Data.import.devisaImportTotal = 0;
        $scope.Data.import.brutto = 0;
        $scope.Data.import.netto = 0;
        $scope.Data.import.jalurMerah = 0;
        $scope.Data.import.jalurHijau = 0;
        $scope.Data.import.jalurPrioritas = 0;
        $scope.Data.import.jumlahPIB = 0;

        $scope.Data.export = {};
        $scope.Data.export.total = 0;
        $scope.Data.export.exportBrutto = 0;
        $scope.Data.export.exportNetto = 0;
        $scope.Data.export.pebUmum = 0;
        $scope.Data.export.pebPajakExport = 0;
        $scope.Data.export.pebFasilitas = 0;
        $scope.Data.export.pebLainnya = 0;
        $scope.Data.export.pebTpb = 0
        $scope.Data.export.jumlahPEB = 0

        $scope.Data.dokImpor = {};
        $scope.Data.dokImpor.pibt = 0;
        $scope.Data.dokImpor.ppkp = 0;
        $scope.Data.dokImpor.custom = 0;
        $scope.dt = Date();
        $scope.appointments = [];

        var dateUpdate = $q.defer();
        $scope.dateUpdate = dateUpdate.promise;
        var specialElementHandlers = {
            'bypassme': function (element, renderer) {
                return true;
            }
        };
        $scope.pdf = new jsPDF('p', 'px', 'a4');
        $scope.pdf.setFont("arial");
        $scope.pdf.setFontSize(10);
        $scope.canvas = $scope.pdf.canvas;
        $scope.canvas.height = 1900;
        $scope.canvas.width = 1000;
       
        $scope.generate = function () {
            $scope.html = $("#report").html();
            $scope.pdf.internal.pageSize.height = 2000;
          

         //   console.log(html);
            //html2pdf($scope.html, $scope.pdf, function (pdf) {
            //    $scope.pdf.output('dataurlnewwindow');
            //});

            $scope.pdf.addHTML($('#report'), function () {
                $scope.pdf.output('dataurlnewwindow');
            });

        };

        $scope.getAppointments = function () {
            // mpoService.getMPODates().success(function (result) {
            //     for (var i = 0; i < result.length; i++) {
            //         $scope.appointments.push(new Date(result[i]));
            //     }
            // });
        };

        $scope.getAppointments();
        $scope.loadReport = function () {
            var period = {
                StartDate: moment($scope.dt).format("DD/MM/YYYY"),
                EndDate: moment($scope.dt).format("DD/MM/YYYY")
            };
            var date = moment($scope.dt).format("DD/MM/YYYY");

            // mpoService.getData(date).success(function (result) {
            //     console.log(result);
            //     if (result === undefined || result === null) {
            //         service.getReport(period)
            //         .success(function (result) {
            //             console.log(result);
            //             $scope.Data = result;
            //         })
            //         .error(function (result) {
            //             abp.message.error(result);
            //         });
            //     } else {
            //         $scope.createReportModel(result);
            //     }
            // })
        };

        $scope.createReportModel = function (result) {
            var model = result;
            $scope.Data.periode = moment(model.periode).format("DD/MM/YYYY");
            $scope.Data.tanggalCetak = moment(model.tanggalCetak).format("DD/MM/YYYY");
            //model.npwp = $scope.Data.npwp;
            $scope.Data.pPabean = {};
            $scope.Data.pPabean.beamasuk = model.beamasuk;
            $scope.Data.pPabean.beakeluar = model.beakeluar;
            $scope.Data.pPabean.lainnya = model.ppabeanLainnya;
            $scope.Data.pPabean.beamasukDitanggung = model.beamasukDitanggung;

            $scope.Data.pPabean.total = model.beamasuk + model.beakeluar + model.ppabeanLainnya + model.beamasukDitanggung;

            $scope.Data.pCukai = {};
            $scope.Data.pCukai.tembakau = model.tembakau;
            $scope.Data.pCukai.alkohol = model.alkohol;
            $scope.Data.pCukai.mmea = model.mmea;
            $scope.Data.pCukai.lainnya = model.pCukaiLainnya;

            $scope.Data.pCukai.total = model.tembakau + model.alkohol + model.mmea + model.pCukaiLainnya;

            $scope.Data.pPajak = {};
            $scope.Data.pPajak.ppnimpor = model.ppnimpor;
            $scope.Data.pPajak.bmimpor = model.bmimpor;
            $scope.Data.pPajak.pph22 = model.pph22;
            $scope.Data.pPajak.ppntembakau = model.ppntembakau;

            $scope.Data.pPajak.total = model.ppnimpor + model.bmimpor + model.pph22 + model.ppntembakau;

            $scope.Data.import = {};
            $scope.Data.import.devisaBayar = model.devisaBayar;
            $scope.Data.import.devisaDitanggung = model.devisaDitanggung;
            $scope.Data.import.devisaDitangguhkan = model.devisaDitangguhkan;

            $scope.Data.import.devisaImportTotal = model.devisaBayar + model.devisaDitanggung + model.devisaDitangguhkan;

            $scope.Data.import.brutto = model.importBrutto;
            $scope.Data.import.netto = model.importNetto;

            $scope.Data.import.jalurMerah =model.jalurMerah;
            $scope.Data.import.jalurHijau  = model.jalurHijau;
            $scope.Data.import.jalurPrioritas = model.jalurPrioritas;

            $scope.Data.import.jumlahPIB = model.jalurMerah + model.jalurHijau + model.jalurPrioritas;
            
            $scope.Data.export = {};
            $scope.Data.export.total = model.devisaExportTotal;
            $scope.Data.export.exportBrutto = model.exportBrutto;
            $scope.Data.export.exportNetto = model.exportNetto;


            $scope.Data.export.pebUmum = model.pebUmum;
            $scope.Data.export.pebPajakExport = model.pebPajakExport;
            $scope.Data.export.pebFasilitas = model.pebFasilitas;
            $scope.Data.export.pebLainnya = model.pebLainnya;
            $scope.Data.export.pebTpb = model.pebTpb

            $scope.Data.export.jumlahPEB = model.pebUmum + model.pebPajakExport + model.pebFasilitas + model.pebLainnya + model.pebTpb;

            $scope.Data.dokImpor = {};
            $scope.Data.dokImpor.pibt = model.pibt;
            $scope.Data.dokImpor.ppkp = model.ppkp;
            $scope.Data.dokImpor.custom = model.custom;

        }

        $scope.createMpoModel = function () {
            var model = {};
            model.periode = moment($scope.dt).format("DD/MM/YYYY");
            model.tanggalCetak = moment(Date()).format("DD/MM/YYYY");
            //model.npwp = $scope.Data.npwp;
            model.beamasuk = $scope.Data.pPabean.beamasuk;
            model.beakeluar = $scope.Data.pPabean.beakeluar;
            model.ppabeanLainnya = $scope.Data.pPabean.lainnya;
            model.beamasukDitanggung = $scope.Data.pPabean.beamasukDitanggung;

            $scope.Data.pPabean.total = model.beamasuk + model.beakeluar + model.ppabeanLainnya + model.beamasukDitanggung;
            model.totalPpabean = $scope.Data.pPabean.total;

            model.tembakau = $scope.Data.pCukai.tembakau;
            model.alkohol = $scope.Data.pCukai.alkohol;
            model.mmea = $scope.Data.pCukai.mmea;
            model.pCukaiLainnya = $scope.Data.pCukai.lainnya;

            $scope.Data.pCukai.total = model.tembakau + model.alkohol + model.mmea + model.pCukaiLainnya;
            model.totalPcukai = $scope.Data.pCukai.total;

            model.ppnimpor = $scope.Data.pPajak.ppnimpor;
            model.bmimpor = $scope.Data.pPajak.bmimpor;
            model.pph22 = $scope.Data.pPajak.pph22;
            model.ppntembakau = $scope.Data.pPajak.ppntembakau;

            $scope.Data.pPajak.total = model.ppnimpor + model.bmimpor + model.pph22 + model.ppntembakau;
            model.totalPcukai = $scope.Data.pPajak.total;

            model.devisaBayar = $scope.Data.import.devisaBayar;
            model.devisaDitanggung = $scope.Data.import.devisaDitanggung;
            model.devisaDitangguhkan = $scope.Data.import.devisaDitangguhkan;

            $scope.Data.import.devisaImportTotal = model.devisaBayar + model.devisaDitanggung + model.devisaDitangguhkan;
            model.devisaImportTotal = $scope.Data.import.devisaImportTotal;

            model.importBrutto = $scope.Data.import.brutto;
            model.importNetto = $scope.Data.import.netto;

            model.jalurMerah = $scope.Data.import.jalurMerah;
            model.jalurHijau = $scope.Data.import.jalurHijau;
            model.jalurPrioritas = $scope.Data.import.jalurPrioritas;

            $scope.Data.import.jumlahPIB = model.jalurMerah + model.jalurHijau + model.jalurPrioritas;
            model.jumlahPIB = $scope.Data.import.jumlahPIB;

            model.devisaExportTotal = $scope.Data.export.total;
            model.exportBrutto = $scope.Data.export.exportBrutto;
            model.exportNetto = $scope.Data.export.exportNetto;


            model.pebUmum = $scope.Data.export.pebUmum;
            model.pebPajakExport = $scope.Data.export.pebPajakExport;
            model.pebFasilitas = $scope.Data.export.pebFasilitas;
            model.pebLainnya = $scope.Data.export.pebLainnya;
            model.pebTpb = $scope.Data.export.pebTpb;

            $scope.Data.export.jumlahPEB = model.pebUmum + model.pebPajakExport + model.pebFasilitas + model.pebLainnya + model.pebTpb;
            model.jumlahPEB = $scope.Data.export.jumlahPEB;

            model.pibt = $scope.Data.dokImpor.pibt;
            model.ppkp = $scope.Data.dokImpor.ppkp;
            model.custom = $scope.Data.dokImpor.custom;

            return model;

        }

        $scope.saveMpo = function () {
            
            var model = $scope.createMpoModel();
            // mpoService.saveData(model)
            // .success(function () {
            //     abp.message.info("MPO Saved");
            //     $scope.getAppointments();
            //     $scope.$broadcast('refreshDatepickers');
            // })
            // .error(function (result) {
            //     console.log(result);
            //     abp.message.error(result);
            // });
            dateUpdate.notify(new Date().getTime());
        }

        $scope.dayClass = function (date, mode) {

            if (mode === 'day') {
                var appointments = $scope.appointments;
                var dateToCheck = new Date(date).setHours(0, 0, 0, 0);
                for (var i = 0; i < appointments.length ; i++) {
                    var appoint = appointments[i].setHours(0, 0, 0, 0);
                    if (appoint === dateToCheck) {
                        return 'appointment';
                    }
                }
            }
            return '';
        }
        $scope.$broadcast('refreshDatepickers');
    }

])