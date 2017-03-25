﻿(function () {
  'use strict';
  angular.module('ui.bootstrap.datepicker')
    .config(function ($provide) {
      $provide.decorator('datepickerDirective', function ($delegate) {
        var directive = $delegate[0];
        var link = directive.link;

        directive.compile = function () {
          return function (scope, element, attrs, ctrls) {
            link.apply(this, arguments);

            var datepickerCtrl = ctrls[0];
            var ngModelCtrl = ctrls[1];

            if (ngModelCtrl) {
              // Listen for 'refreshDatepickers' event...
              scope.$on('refreshDatepickers', function refreshView() {
                datepickerCtrl.refreshView();
              });
            }
          }
        };
        return $delegate;
      });
    });

  var app = angular.module('app', [
    'ngSanitize',
    'chart.js',
    'angularjs-gauge',
    'angular-canvas-gauge',
    'ui.router',
    'ui.bootstrap',
    'ui.jq',
    'lr.upload',
    'ui.grid', 'ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.selection',
    // 'abp'
  ]);

  app.filter('moment', function () {
    return function (input, momentFn /*, param1, param2, ...param n */ ) {
      var args = Array.prototype.slice.call(arguments, 2),
        momentObj = moment(input);
      return momentObj[momentFn].apply(momentObj, args);
    };
  });

  //Configuration for Angular UI routing.
  app.config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          menu: 'Home'
        })
        // .state('upload', {
        //     url: '/upload',
        //     templateUrl: 'views/upload.html',
        //     menu: 'Upload'
        // })
        // .state('report', {
        //      url: '/mpo',
        //      templateUrl: 'views/mpo.html',
        //      menu: 'Report'
        //  })
        .state('pdri', {
          url: '/pdri',
          templateUrl: 'views/pdri.html',
          menu: 'Home'
        })
        .state('penerimaan', {
          url: '/penerimaan',
          templateUrl: 'views/penerimaan.html',
          menu: 'Upload'
        })
        .state('cukai', {
          url: '/cukai',
          templateUrl: 'views/cukai.html',
          menu: 'Report'
        })
        .state('maintenance', {
          url: '/maintenance',
          templateUrl: 'views/maintenance.html',
          menu: 'Report'
        })
    }
  ]);
})();
