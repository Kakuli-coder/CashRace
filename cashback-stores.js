// Site developed by
// Kakuli - https://www.linkedin.com/in/mekakuli

import { autocompleteListWithLinks } from "./js/autocomplete.js";



const inputBox = document.querySelector(".input-box");
const openHeaderSidebar = document.querySelector("#open-header-sidebar");
const logoContainer = document.querySelector(".logo-container");

if (window.matchMedia("(max-width: 445px)").matches) {
    inputBox.placeholder = "Search";
};

if (window.matchMedia("(max-width: 645px)").matches) {
    inputBox.addEventListener("click", () => {
        openHeaderSidebar.style.display = "none";
        logoContainer.style.display = "none";
    });

    document.body.addEventListener('click', () => {
        openHeaderSidebar.style.display = "inline-block";
        logoContainer.style.display = "flex";
    }, true);
};





/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarOpenNavigationHeader = document.getElementById("open-header-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarOpenNavigationHeader.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
});








// Autocomplete Search Bar
const resultsBox = document.querySelector(".result-box");
const searchBtn = document.querySelector(".search-btn");

inputBox.onkeyup = function () {
    let resultObjectsArray = [];
    let input = inputBox.value;
    if (input.length) {
        resultObjectsArray = autocompleteListWithLinks.filter(({ keyword }) => {
            // console.log(keyword);
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(resultObjectsArray);

        // Search by clicking on btn
        searchBtn.addEventListener("click", () => {
            // console.log("Clicked on searchBtn");
            let resultObj = resultObjectsArray.find(({ keyword }) => keyword.toLowerCase() === input.toLowerCase());
            // console.log(resultObj.link);
            location.href = resultObj.link;
        });

    };

    display(resultObjectsArray);

    if (!resultObjectsArray.length) {
        resultsBox.innerHTML = "";
    };

};


function display(resultObjectsArray) {
    // console.log(resultObjectsArray);
    let content = resultObjectsArray.map(({ keyword, link }) => {
        return `<li class="list-ele">
        <a href=${link}>${keyword}</a>
        </li>`;
    });
    // console.log(content);
    resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;


    const listElements = document.querySelectorAll(".list-ele");
    // console.log(listElements);
    for (const listEle of listElements) {
        if (listEle) {
            listEle.addEventListener("click", () => {
                // console.log("Clicked on listEle");
                // console.log(listEle);
                // console.log(listEle.innerHTML);
                // console.log(listEle.innerText);
                // console.log(listEle.textContent);
                inputBox.value = listEle.innerText;
                resultsBox.innerHTML = "";
            });
        };
    };
};





// Text indent correctly input text in header (on result box click)
resultsBox.addEventListener("click", () => {
    inputBox.style.textIndent = "-30px";
});






// nav cover functionality
const navCoverDiv = document.querySelector(".nav-cover-div");

inputBox.addEventListener("click", () => {
    navCoverDiv.classList.add("nav-cover");
    resultsBox.style.display = "block";
});

document.body.addEventListener('click', () => {
    navCoverDiv.classList.remove("nav-cover");
    resultsBox.style.display = "none";
    inputBox.value = "";
}, true);







// Footer Div Show (Max Screen Size <= 600px)
const collapseFooterLink2 = document.querySelector("#collapseFooterLink2");
const collapseFooterDiv2 = document.querySelector("#collapseFooterDiv2");

const collapseFooterLink3 = document.querySelector("#collapseFooterLink3");
const collapseFooterDiv3 = document.querySelector("#collapseFooterDiv3");

const collapseFooterLink4 = document.querySelector("#collapseFooterLink4");
const collapseFooterDiv4 = document.querySelector("#collapseFooterDiv4");

if (window.matchMedia("(max-width: 645px)").matches) {
    collapseFooterDiv2.style.display = "none";
    collapseFooterLink2.addEventListener("click", () => {
        // console.log("Clicked on collapseFooterLink2");
        if (collapseFooterDiv2.style.display === "none") {
            collapseFooterDiv2.style.display = "block";
        } else {
            collapseFooterDiv2.style.display = "none";
        };
    });

    collapseFooterDiv3.style.display = "none";
    collapseFooterLink3.addEventListener("click", () => {
        // console.log("Clicked on collapseFooterLink3");
        if (collapseFooterDiv3.style.display === "none") {
            collapseFooterDiv3.style.display = "block";
        } else {
            collapseFooterDiv3.style.display = "none";
        };
    });

    collapseFooterDiv4.style.display = "none";
    collapseFooterLink4.addEventListener("click", () => {
        // console.log("Clicked on collapseFooterLink4");
        if (collapseFooterDiv4.style.display === "none") {
            collapseFooterDiv4.style.display = "block";
        } else {
            collapseFooterDiv4.style.display = "none";
        };
    });
};
