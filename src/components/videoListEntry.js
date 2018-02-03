angular.module('video-player')
.component('videoListEntry', {
  controller : function () {
    this.handleTitleClick = function(video) {
      this.update(video); 
    }
  },
  bindings : {
  video: '<',
  update: '<'
  },
  templateUrl: `./src/templates/videoListEntry.html`
});