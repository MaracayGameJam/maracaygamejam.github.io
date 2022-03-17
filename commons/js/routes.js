
const COMMONS_ROUTES = {
	home:"index.html",
	facebook:"https://www.facebook.com/maracaygamejam/",
	twitter:"https://twitter.com/maracaygamejam",
	instagram:"https://www.instagram.com/maracaygamejam/",
	youtube:"https://www.youtube.com/channel/UCDnJMPayHQxwyRPyC0zhnlA",
	email:"maracaygamejam@gmail.com",
	page1:"pages/page1/index.html",
	page2:"pages/page2/index.html"
};


function loadMyRoutes(deepPath){
  return loadRoutesHelper(COMMONS_ROUTES, deepPath);
}

