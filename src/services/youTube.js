angular.module('video-player')
.service('youTube', ['$http' ,function($http){
  this.get = function(query, callback){
    console.log('this is the query ', query);
    return $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
            'maxResults': '5',
            'part': 'snippet',
            'key': window.YOUTUBE_API_KEY,
            'q': query,
          }
    }).then(function successCallback(response) {
   
      console.log('I succeeded and the response is ',response.data.items);
      callback(response.data.items);
    }, function errorCallback(response) {
   
      console.log('I got an error and the response is ', response);
    }); 
  }
}]);

