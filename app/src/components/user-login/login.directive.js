/**
 * Created by brandonj on 6/7/16.
 */

angular
    .module('dnd.ui')
    .directive('dndLoginForm', [
        function () {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'components/user-login/loginView.html',
                controller: 'loginController',
                controllerAs: 'vm'
            };
        }
    ]);