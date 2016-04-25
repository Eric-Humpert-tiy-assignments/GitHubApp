'use strict';
if (this.GitHubRepBrowser === undefined) this.GitHubRepBrowser = {};

(function(context) {

  var list;
  var input;
  var data;
  var messaging;

  function listBuilder(arr) {
    for (var val of arr){
      var li = document.createElement('li');
      list.appendChild(li);

      var anchor = document.createElement('a');
      anchor.href = val.html_url;
      anchor.textContent = val.full_name;
      li.appendChild(anchor);

      var forks = document.createElement('p');
      forks.textContent = val.forks;
      li.appendChild(forks);

      var language = document.createElement('p');
      language.textContent = val.language;
      li.appendChild(language);
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
    if (result.length === 0) { 
      messaging.textContent = "Don't use those letters!";
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
    messaging = document.querySelector('#messaging');

    button.addEventListener('click', listFilter);
  }

  window.GitHubRepBrowser.start = start;

})(window.GitHubRepBrowser);
