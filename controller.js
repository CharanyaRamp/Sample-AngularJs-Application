'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
			
			 $scope.showMenu = true;
            $scope.message = "Loading ...";

            $scope.dishes = menuFactory.getDishes().query();
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

      .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            
                        
						 $scope.dish = {};
			$scope.showDish = true;
            $scope.message="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)});

                    }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form
			$scope.comments = {author:'', comment:'', rating:5};
            
            $scope.submitComment = function () {
                
                //Step 2: This is how you record the date
              $scope.comments.date = new Date().toISOString();
                
                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.comments);
				console.log($scope.comments);
                
                //Step 4: reset your form to pristine
                 $scope.commentForm.$setPristine();
                //Step 5: reset your JavaScript object that holds your comment
				$scope.comments = {author:'', comment:'', rating:5};
            }
        }])
		
			
		.controller('AboutController', ['$scope','corporateFactory', function($scope, corporateFactory){
			
			$scope.persons = corporateFactory.getLeaders();
			
		}])
		
		.controller('IndexController', ['$scope', 'corporateFactory', 'menuFactory', function($scope, corporateFactory, menuFactory){
			
			$scope.promo = menuFactory.getPromotions(0);
			 $scope.dish = {};
                        $scope.showDish = true;
                        $scope.message="Loading ...";

                        $scope.dish = menuFactory.getDishes().get({id:0});
			$scope.chef = corporateFactory.getLeader(3);
			
		}])

;
