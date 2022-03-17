


const COMMONS_IMAGES = {
	facebook:"commons/img/ic_facebook.svg",
	twitter:"commons/img/ic_twitter.svg",
  instagram:"commons/img/ic_instagram.svg",
  youtube:"commons/img/ic_youtube.svg",
  logoTransparent:"commons/img/logo_maracay_game_jam_transparent.png",
};

function loadMyImagesRoutes(deepPath){
  return loadRoutesHelper(COMMONS_IMAGES, deepPath);
}
