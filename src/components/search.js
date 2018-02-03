angular.module('video-player')

.component('search', {
  controller : function(youTube){
    this.lookup = function(query) {
      this.search(query)
    }
  },
  bindings : {
    search: '<'
  },
  templateUrl: `./src/templates/search.html`
});


// youtube.get(query, callback)
