(function () {
    var controllerId = 'app.views.layout';
    angular.module('app').controller(controllerId, [
        '$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {
            var vm = this;
            $rootScope.load = function () {
                $window.onload = function () {
                    alert("click start fetch Data");
                    if (Gauge.Collection.length > 0) {
                        var config = Gauge.Collection[0].config;
                        config.colors.plate = '#666';
                        config.colors.majorTicks = 'rgba(192,192,192,0.3)';
                        config.colors.minorTicks = 'rgba(192,192,192,0.3)';
                        config.colors.numbers = '#fff';
                        config.colors.units = '#fff';

                        config.highlights = [
                                {
                                    from: 0,
                                    to: 10,
                                    color: '#E0330A'
                                },
                                {
                                    from: 10,
                                    to: 20,
                                    color: '#D9400D'
                                },
                                {
                                    from: 20,
                                    to: 30,
                                    color: '#D14C0F'
                                },
                                {
                                    from: 30,
                                    to: 40,
                                    color: '#C95912'
                                },
                                {
                                    from: 40,
                                    to: 50,
                                    color: '#C26614'
                                }, {
                                    from: 50,
                                    to: 60,
                                    color: '#BA7317 '
                                },
                                {
                                    from: 60,
                                    to: 70,
                                    color: '#B2801A'
                                }, {
                                    from: 70,
                                    to: 80,
                                    color: '#AB8C1C'
                                }, {
                                    from: 80,
                                    to: 90,
                                    color: '#A3991F'
                                }, {
                                    from: 90,
                                    to: 100,
                                    color: '#9CA621'
                                }]

                        for (var i = 0; i < Gauge.Collection.length; i++) {
                            Gauge.Collection[i].updateConfig(config);
                            console.log(Gauge.Collection[i].config)
                        }
                    }
                };
            }
        }]);
})();