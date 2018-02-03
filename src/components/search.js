angular.module('video-player')

.component('search', {
  controller : function(){
    this.lookup = function(query) {
      this.search(query)
    }
  },
  bindings : {
    search: '<'
  },
  templateUrl: `./src/templates/search.html`
});