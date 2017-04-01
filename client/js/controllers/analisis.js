var controllerId = 'app.views.analisis';
angular.module('app').controller(controllerId, ['$scope', 'upload', '$http',
    function ($scope, upload, $http) {
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        $scope.series = ['T.A 2016', 'T.A 2017'];

        $scope.datasetOverride = [{
            yAxisID: 'y-axis-1'
        }, {
            yAxisID: 'y-axis-2'
        }];
        $scope.colors = ['#45b7cd', '#ff8e72'];

        $scope.options = {
            legend: {
                display: true
            },
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

        $scope.datadoktonase = [
            [524.51, 412.72, 849.96, 524.19, 157.91, 501.13, 0, 515.28, 441.37, 567.10,386.94,243.46],
            [2000, 2000, 4000, 5000, 2000, 5000, 7000, 6000, 5000, 4000, 23000, 21000]
        ];

        $scope.datadokbm = [
            [15000463.24, 11956304.71, 13392992.02, 11594449.80, 13840120.08, 14116237.97, 17234978.80, 15179048.46, 16812889.25, 12695847.38, 11380048.46, 10083468.40],
            [4000, 1000, 2000, 4000, 2000, 1000, 6000, 7000, 8000, 8000, 21000, 12000]
        ];

        $scope.datadokdevisa = [
            [21253.45, 31768.92, 27186.06, 21602.11, 33019.34, 28692.89, 43114.02, 37031.89, 41557.56, 72282.47, 137050.91, 224393.97],
            [4000, 1000, 2000, 4000, 2000, 1000, 6000, 7000, 8000, 8000, 21000, 12000]
        ];

        $scope.databmtonase = [
            [15000463, 11956304, 13392992.02, 11594449.80, 13840120.08, 14116237.97, 17234978.80, 16812889.25, 12695847.38, 11380048.46, 10083468.40],
            [4000, 1000, 2000, 4000, 2000, 1000, 6000, 7000, 8000, 8000, 21000, 12000]
        ];


    }
])