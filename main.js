const SITE_PREFIX = "my-site";
const STORE_USER_LANG = SITE_PREFIX + "_user-lang";
const MAIN_SCRIPT_URI = document.currentScript.src;
const MAIN_SCRIPT_PATH = MAIN_SCRIPT_URI.substring(0,MAIN_SCRIPT_URI.lastIndexOf("/")+1);
const USER_LANG = localStorage.getItem(STORE_USER_LANG) || 
    navigator.userLanguage || 
	navigator.language || 
	navigator.browserLanguage || 
	navigator.systemLanguage; 

let commonsStrings;
let commonsRoutes;
let commonImagesRoutes;

let actionOnLangLoadComplete;
let actionOnRoutesLoadComplete;
let actionOnImagesLoadComplete;

const R = [
    { route:"commons/js/strings.js", load:false },
    { route:"commons/js/routes-util-builder.js", load:false },
    { route:"commons/js/routes.js", load:false },
    { route:"commons/js/images.js", load:false },
];

function loadCommonResources() {
    
    for(let i = 0; i<R.length; i++) {
           console.log(MAIN_SCRIPT_PATH + R[i].route);
    }
   
}

function main() 
{
    loadCommonResources();
}

main();