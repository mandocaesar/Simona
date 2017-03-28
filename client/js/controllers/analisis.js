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
            [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            [2000, 2000, 4000, 5000, 2000, 5000, 7000, 6000, 5000, 4000, 23000, 21000]
        ];

        $scope.datadokdevisa = [
            [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            [4000, 1000, 2000, 4000, 2000, 1000, 6000, 7000, 8000, 8000, 21000, 12000]
        ];

        $scope.datadokbm = [
            [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            [4000, 1000, 2000, 4000, 2000, 1000, 6000, 7000, 8000, 8000, 21000, 12000]
        ];

        $scope.databmtonase = [
            [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
            [4000, 1000, 2000, 4000, 2000, 1000, 6000, 7000, 8000, 8000, 21000, 12000]
        ];


    }
])