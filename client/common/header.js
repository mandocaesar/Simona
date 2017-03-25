(function () {
    var controllerId = 'app.views.layout.header';
    angular.module('app').controller(controllerId, [
        '$rootScope', '$state',
        function ($rootScope, $state) {
            var vm = this;


            vm.languages = 'id-ID';
            vm.currentLanguage = 'id-ID';
            var item1 = {};
            var item2 = {};
            var item3 = {};
            var item4={};
            var item5={};
            var item6={};
            var item7={};
            item7.items=[];

            item1.url = '/app/#!/home'; item1.icon='fa fa-file'; item1.displayName='Home';
            // item2.url = '/app/#!/upload'; item2.icon='fa fa-file'; item2.displayName='Upload';
            // item3.url = '/app/#!/mpo'; item3.icon='fa fa-file'; item3.displayName='MPO';

            
            item4.url = '/app/#!/cukai'; item4.icon='fa fa-file'; item4.displayName='Cukai';
            item5.url = '/app/#!/pdri'; item5.icon='fa fa-file'; item5.displayName='Pajak (PDRI)';
            item6.url = '/app/#!/penerimaan'; item6.icon='fa fa-file'; item6.displayName='Pabean';

            item7.url = ''; item7.icon='fa fa-file'; item7.displayName='Detail Penerimaan'; item7.items=[item4,item5,item6];        
            var items = [item1, item7];
            console.log(items);
            vm.menu =  {};
            vm.menu.items = items;
            vm.currentMenuName = $state.current.menu;

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                vm.currentMenuName = toState.menu;
            });

            $rootScope.user = 'admin';
            $rootScope.loginTime = Date();
            vm.getShownUserName = function () {
                if (true) {
                    return $rootScope.user;
                } else {
                    if (true) {
                        return  $rootScope.user;
                    } else {
                        return  $rootScope.user;
                    }
                }
            };

            
        }
    ]);
})();