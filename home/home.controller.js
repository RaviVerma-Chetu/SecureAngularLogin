(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['holdDataFactory','UserService', '$location','$rootScope'];
    function HomeController(holdDataFactory,UserService,$location, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
		vm.editUser=editUser;
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
		function editUser(id) {
		//alert(id);
			 UserService.GetById(id)
				 .then(function(user) {
				 //alert(user.firstName);
				 holdDataFactory.setData(user);
				 });
            $location.path('/edit');
        }
    }

})();