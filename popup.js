document.addEventListener('DOMContentLoaded', function() {
    var lightenButton = document.getElementById('lighten-button');
    var confirm = document.getElementById('confirm');


    confirm.addEventListener('click', function() {
        chrome.tabs.query({}, function(tabs) {
            for (var i = 0; i< tabs.length; i++){ var tab = tabs[i];
            x = 1 - document.getElementById('brightness-value').value/100;
            chrome.tabs.executeScript(tab.id, {code: 'document.body.style.filter = "brightness(' + x + ')";'});
            }
        });
    });

    lightenButton.addEventListener('click', function() {
        chrome.tabs.query({}, function(tabs) {
            for (var i = 0; i< tabs.length; i++){ var tab = tabs[i];
            chrome.tabs.executeScript(tab.id, {code: 'document.body.style.filter = "brightness(1.0)";'});
            }
        });
    });
});