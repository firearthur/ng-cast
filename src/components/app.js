angular.module('video-player')

.component('app', {
  bindings : {

  },
  templateUrl: `./src/templates/app.html`,
  controller: function(){
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.update = function(video) {
      this.video = video;
    }
    this.search = function(query) {
      //send to the server
      console.log('this is the query', query)
    }
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);

  }

  
});