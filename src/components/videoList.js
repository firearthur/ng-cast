angular.module('video-player')
.component('videoList', {
  controller: function() {
  },

  bindings : {
    videos: '<',
    update: '<'
  },
  templateUrl: `./src/templates/videoList.html`
});