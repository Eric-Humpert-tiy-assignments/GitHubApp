'use strict';
if (this.GitHubRepBrowser === undefined) this.GitHubRepBrowser = {};

(function(context) {

  var list;

  function listBuilder(obj) {
    for (var val of obj.items){
      var li = document.createElement('li');
      list.appendChild(li);
      var anchor = document.createElement('a');
      anchor.href = val.html_url;
      anchor.textContent = val.full_name;
      li.appendChild(anchor);
    }
  }

  function start() {
    var data = window.githubData;
    //Call your code here
    console.log('starting!', context);
    console.log(data);
    list = document.querySelector("#search-results");
    listBuilder(data);


  }

  window.GitHubRepBrowser.start = start;

})(window.GitHubRepBrowser);
