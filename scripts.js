'use strict';
if (this.GitHubRepBrowser === undefined) this.GitHubRepBrowser = {};

(function(context) {

  var list;
  var input;
  var data;

  function listBuilder(arr) {
    for (var val of arr){
      var li = document.createElement('li');
      list.appendChild(li);
      var anchor = document.createElement('a');
      anchor.href = val.html_url;
      anchor.textContent = val.full_name;
      li.appendChild(anchor);
    }
  }

  function listFilter() {
    var query = input.value;
    var result = [];
    for (var val of data.items) {
      if (val.full_name.indexOf(query) > -1) {
        result.push(val);
        console.log(result.length);
      }
    }
    list.textContent = '';
    listBuilder(result);
  }

  function start() {
    data = window.githubData;
    input = document.querySelector('#search-box');
    var button = document.querySelector('#launch-search');
    //Call your code here
    console.log('starting!', context);
    console.log(data);
    list = document.querySelector("#search-results");
    listBuilder(data.items);


    button.addEventListener('click', listFilter);
  }

  window.GitHubRepBrowser.start = start;

})(window.GitHubRepBrowser);
