
var controllerId = 'app.views.upload';
angular.module('app').controller(controllerId, [
    '$scope', 'upload', '$http', function ($scope, upload, $http) {
        var vm = this;

        $scope.ceisabutton = true;
        $scope.sappbutton = false;
        $scope.ceisaUploaded = false;
        $scope.sappUploaded = false;
        $scope.processEnabled = true;
        $scope.gridShow = false;

        $scope.gridOpts = {
            enableColumnResize: true,
            data: []
        };

        $scope.uploadError = function ()
        {
            abp.message.error();
        }

        $scope.uploadSuccess = function (response, type) {
            console.log(response);
            if (response.data === 'Ok') {
                abp.message.info(type + ' Uploaded', 'Update Succesfull');
                if (type === "Ceisa") {
                    $scope.ceisaUploaded = false;
                    $scope.ceisabutton = false;
                    $scope.sappbutton = true;
                    abp.notify.warn('please upload SSP', 'Info');

                } else {
                    $scope.ceisabutton = true;
                    $scope.sappbutton = false;
                    $scope.sappUploaded = false;
                }
                if ($scope.sappUploaded && $scope.ceisaUploaded) {
                    $scope.processEnabled = true;
                }
                $scope.loadSSP();
                abp.ui.unblock();
            } else {
                abp.message.error(response.data);
                abp.ui.unblock();
            }
        };

        $scope.uploadStart = function() {
            abp.notify.info('uploading start', 'Info');
            abp.ui.block();
        }


        $scope.process = function () {
            $scope.loadCeisa();
        }

        $scope.successError = function (type) {
            abp.message.info(type + ' Not Uploaded', 'Update Failed');
            abp.ui.unblock();
        };

        //$scope.loadCeisa = function () {
        //    docservice.getData().success(function (result) {
        //        console.log(result);
        //        $scope.gridOpts.data = result;
        //    });
        //};


        $scope.loadSSP = function () {
            // docservice.getData().success(function (result) {
            //     console.log(result);
            //     $scope.gridOpts.data = result;
            // });
        };
        $scope.loadSSP();
       // $scope.loadCeisa();
    }
])