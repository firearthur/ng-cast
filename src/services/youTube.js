angular.module('video-player')
.service('youTube', ['$http' ,function($http){
  this.get = function(query, callback){
    $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
            'maxResults': '5',
            'part': 'snippet',
            'q': 'innoutburgers',
            'type': 'video'
          }
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      // callback(response);
      console.log(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });  
  }
}]);


// 'https://www.googleapis.com/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''}



