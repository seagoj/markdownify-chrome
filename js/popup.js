chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.update(
    { url: 'http://fuckyeahmarkdown.com/go/?showframe=0&u=' + tab.url },
    function() { window.close(); }
  );
});
