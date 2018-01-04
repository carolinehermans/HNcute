document.getElementsByTagName("img")[0].src = chrome.extension.getURL("hn-logo-cute.png")
document.getElementsByClassName("pagetop")[0].innerHTML = document.getElementsByClassName("pagetop")[0].innerHTML.split("|").join(" ")
document.getElementsByClassName("pagetop")[1].innerHTML = document.getElementsByClassName("pagetop")[1].innerHTML.split("|").join(" ")
for (let i = 0; i < document.getElementsByTagName("TD").length; i++) {
  if (document.getElementsByTagName("TD")[i].getAttribute("bgcolor") === "#ff6600")
    document.getElementsByTagName("TD")[i].setAttribute("bgcolor", "#fbbfdf")
}

for (let i = 0; i < document.getElementsByTagName("font").length; i++) {
  if (document.getElementsByTagName("font")[i].getAttribute("color") === "#ff6600")
    document.getElementsByTagName("font")[i].setAttribute("color", "#FF83C6")
}

let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = chrome.extension.getURL("icon16.png")
document.getElementsByTagName('head')[0].appendChild(link);
