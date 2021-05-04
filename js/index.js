const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let myNavLinks = document.querySelectorAll("nav a");
// console.log("myNavLinks:", myNavLinks);

myNavLinks[0].textContent = "Services";
myNavLinks[1].textContent = "Product";
myNavLinks[2].textContent = "Vision";
myNavLinks[3].textContent = "Features";
myNavLinks[4].textContent = "About";
myNavLinks[5].textContent = "Contact";



let myCTAText = document.querySelector("h1");
myCTAText.setAttribute('style', 'white-space: pre;');
myCTAText.textContent = "DOM \r\n"; 
myCTAText.textContent += "IS \r\n"; 
myCTAText.textContent += "AWESOME";
// console.log("ctatext:", myCTAText);

let myCTAButton = document.querySelector("button");
myCTAButton.textContent = "Get Started";

let myCTAImage = document.getElementById("cta-img");
myCTAImage.src = "img/header-img.png";

let myMiddleImage = document.getElementById("middle-img");
myMiddleImage.src = "img/mid-page-accent.jpg";

let myBodyContentHeaders = document.querySelectorAll("h4");
// console.log ("myHeaders:", myBodyContentHeaders);

myBodyContentHeaders[0].textContent = "Features";
myBodyContentHeaders[1].textContent = "About";
myBodyContentHeaders[2].textContent = "Services";
myBodyContentHeaders[3].textContent = "Product";
myBodyContentHeaders[4].textContent = "Vision";

let myTopContentText = document.querySelectorAll(".top-content p");
// console.log ("myTopText:", myTopContentText);

myTopContentText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myTopContentText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let myBottomContentText = document.querySelectorAll(".bottom-content p");
// console.log ("myBottomText:", myBottomContentText);

myBottomContentText[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myBottomContentText[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myBottomContentText[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contactInfoTitle = document.querySelector(".contact h4");
// console.log ("myContactTitle:", contactInfoTitle);
contactInfoTitle.textContent = "Contact";

let contactInfoContent = document.querySelectorAll(".contact p");
// console.log ("myContactInfo:", contactInfoContent);
contactInfoContent[0].setAttribute('style', 'white-space: pre;');
contactInfoContent[0].textContent = "123 Way 456 Street \r\n";
contactInfoContent[0].textContent += "Somewhere, USA";
contactInfoContent[1].textContent = "1 (888) 888-8888";
contactInfoContent[2].textContent = "sales@greatidea.io";

let myFooterContent = document.querySelector("footer p");
myFooterContent.textContent = "Copyright Great Ideas! 2018";

let newLink1 = document.createElement("a");
newLink1.textContent = "EndLink";
newLink1.href="#";
newLink1.style.color = "red";
newLink1.style.fontWeight = "bold";
document.querySelector("nav").appendChild(newLink1);

let newLink2 = document.createElement("a");
newLink2.textContent = "PreLink";
newLink2.href = "#";
newLink2.style.color = "red";
newLink2.style.fontWeight = "bold";
document.querySelector("nav").prepend(newLink2);

//change nav to green
myNavLinks.forEach( item => item.style.color = "green");

//STRETCH
myBodyContentHeaders.forEach(item =>item.style.fontSize = "2rem");
myBodyContentHeaders.forEach(item =>item.style.color = "maroon");

myNavLinks.forEach( item => item.style.fontWeight = "bold");

myCTAButton.style.backgroundColor = "dodgerblue";
myCTAButton.style.color = "white";
myCTAButton.style.fontSize = ".7rem";

//STRETCH 2
myCTAButton.addEventListener("click", (event) => {
  myCTAImage.style.transform = "rotate(360deg)";
  myCTAImage.style.transition = "transform 1s";
})