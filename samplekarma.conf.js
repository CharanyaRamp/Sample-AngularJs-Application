describe(‘Hello World sample application ’, function() {

beforeEach(module(‘HelloApplication’));

var HWController,
scope;

beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
HWController = $controller('HWController', {
$scope: scope
});
}));
it('says hello world!', function () {
expect(scope.message).toEqual("Hello World!!! This is my Sample AngularJS application”);
});

});