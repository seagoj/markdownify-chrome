chrome.tabs.getSelected(null, (tab) => {
  chrome.tabs.update(
    { url: 'http://fuckyeahmarkdown.com/go/?showframe=0&read=1&md=1&u=' + tab.url },
    () => { window.close(); }
  );
});
