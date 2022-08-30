// fixed mobile icons new version //


let imgData = [
    {
        "src":"../20220628%20-%20Backup/images/home.svg",
        "alt":"home",
        "text":"Home",
        "url":"index.php"
    },
    {
        "src":"../20220628%20-%20Backup/images/service.svg",
        "alt":"all services",
        "text":"All services",
        "url": "services.php"
    },
    {
        "src":"../20220628%20-%20Backup/images/bundles.svg",
        "alt":"bundles",
        "text":"Bundles",
        "url": "about.php"
    }
  ];
  
  let navContainer = document.querySelector("#footerTabs");
  let parentClass = "icon-div";
  
  imgData.forEach((thisData) => {
  let newIconContainer, newIcon;
  let actualSrc = thisData.src; 
  let actualAlt = thisData.alt;
  let actualUrl = thisData.url;
  
  
  createDivContainer(parentClass); 
  createNewImage(actualSrc, actualAlt); 
  addLinksToIcons();
  appendChildToNavbar(navContainer); //rajouter le container dans le <nav></nav>
  
  function createDivContainer(className) {
    newIconContainer = document.createElement("div");
    newIconContainer.classList.add(className);
  }
  
  function createNewImage(imgSrc, imgAlt) {
    newIcon = document.createElement("img"); //<img>
    newIcon.src = imgSrc; //<img src="../home.svg">
    newIcon.alt = imgAlt; //<img src="../home.svg" alt="home">
    newIcon.classList.add("icon");
    newIconContainer.appendChild(newIcon); //rajoute <img> dans le container
    
  
  }
  
  function addLinksToIcons() {
    let newLink = document.createElement("a");
    newLink.href = actualUrl;
    newLink.appendChild(newIcon);
    newIconContainer.appendChild(newLink);
  }
  
  
  function appendChildToNavbar(navName) {
    navName.appendChild(newIconContainer);
  }
  });
  
  let allIconsDiv = document.querySelectorAll(`.${parentClass}`);
  
  allIconsDiv.forEach((thisIconDiv, index) => {
  let thisIcon = thisIconDiv.querySelector(".icon");
  
  addDataAttribute(thisIconDiv);
  thisIconDiv.addEventListener("click", styleIcon);
  
  function styleIcon() {
    makeImageActive(thisIcon);
   // changeBgColor();
  
   /*
    function changeBgColor() {
        let thisIconColor = imgData[index].color;
        let bodyElement = document.querySelector("body");
        
        bodyElement.style.setProperty("--bg", `${thisIconColor}`);
    }
  */
    function makeImageActive(iconName) { 
        allIconsDiv.forEach((thisDiv) => {
            thisDiv.classList.remove("active");
        });
  
        thisIconDiv.classList.add("active");
         navContainer.style.setProperty("--iconActiveIndex", `${index + 0.5}`);
  
          switch (index) {
              case 0:
                  navContainer.style.setProperty("--Xcorrection", `4px`);
                  break;
              case 1:
                  navContainer.style.setProperty("--Xcorrection", `-4px`);
                  break;
              case 2:
                  navContainer.style.setProperty("--Xcorrection", `-13px`);
                  break;
              default:
                  break;
          }
    }
  }
  
  function addDataAttribute(iconName) {
    let thisTitle = imgData[index].text;
    iconName.setAttribute("data-text", `${thisTitle}`);
  }
  });