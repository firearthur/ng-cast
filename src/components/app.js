angular.module('video-player')

.component('app', {
  bindings : {

  },
  templateUrl: `./src/templates/app.html`,
  controller: function(youTube){
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.update = function(video) {
      this.video = video;
    }
    this.search = function(query) {
      let context = this;

       youTube.get(query, function(response){
       context.videos = response;
       context.video = response[0];
      });
      
    }
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);

  }

  
});