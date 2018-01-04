document.getElementsByTagName("img")[0].src = safari.extension.baseURI + "hn-logo-cute.png";
document.getElementsByClassName("pagetop")[0].innerHTML = document.getElementsByClassName("pagetop")[0].innerHTML.split("|").join(" ")
document.getElementsByClassName("pagetop")[1].innerHTML = document.getElementsByClassName("pagetop")[1].innerHTML.split("|").join(" ")

let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = safari.extension.baseURI + "icon16.png";
document.getElementsByTagName('head')[0].appendChild(link);
