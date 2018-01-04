document.getElementsByTagName("img")[0].src = chrome.extension.getURL("hn-logo-cute.png")

const pagetops = document.getElementsByClassName("pagetop");
pagetops[0].innerHTML = pagetops[0].innerHTML.split("|").join(" ")
pagetops[1].innerHTML = pagetops[1].innerHTML.split("|").join(" ")

let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = chrome.extension.getURL("icon16.png")
document.getElementsByTagName('head')[0].appendChild(link);
