(function () {
 'use strict';
	angular
		.module('app')
		.controller('EditController',EditController);
		
		EditController.$inject=['holdDataFactory','UserService','$rootScope','$location'];
		function EditController(holdDataFactory, UserService, $rootScope,$location){
		//alert(holdDataFactory.getData().firstName);
			var vm1=this;
			vm1.update=update;
			
			if(holdDataFactory.getData())
			 {
				vm1.id=holdDataFactory.id;
				vm1.firstName=holdDataFactory.firstName;
				vm1.lastName=holdDataFactory.lastName;
				vm1.username=holdDataFactory.username;
				vm1.password=holdDataFactory.password;
				alert('sdsd');
			 }
			 else
			 {
				alert('Home');
				$location.path('/');
			 }
			
			function update()
			{
				alert('Calling update');
				vm1.dataLoading = true;
				var user={id:vm1.id,firstName:vm1.firstName,lastName:vm1.lastName,username:vm1.username,password:vm1.password};
				UserService.update(user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Record Updated successfully', true);
                        $location.path('/');
                    } else {
                        FlashService.Error(response.message);
                        vm1.dataLoading = false;
                    }
                });
			
			}
			
		}
})();