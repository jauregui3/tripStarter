angular.module('trip-starter', [])

.component('app', {
  controller: function($http, userService, placesService, restCountriesService) {
    this.userService = userService;
    this.placesService = placesService;
    this.restCountriesService = restCountriesService;

    var that = this;
    this.userService.search(function(user) {
      that.user = user.username;
    });

    this.resetList = function(places) {
      that.places = places.data;
    }

    this.placesService.search(this.resetList.bind(this));

    // this.placesService.search(function(places) {
    //   console.log(places.data[0].country);
    //   that.places = places.data;
    // });

    // $http({
    //   method: "GET",
    //   url: '/places'
    // }).then(function success(result) {
    //   console.log(result.data);
    // },
    // function failure(result) {
    //   console.log(result.error);
    // });

    // this.places.search(function(places) {
    //   console.log(places);
    //   that.places = places;
    // })
  },
  templateUrl: 'src/templates/app.html'

});
