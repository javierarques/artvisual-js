/**
 * Script para cargar publicidad tipo skin (full background) clicable
 *
 * @param object { img: string, url: string }
 * @return null
 */
function publiSkin ( args ) {
	var adLink = document.createElement('a');
	adLink.style.position = 'fixed';
	adLink.style.width = '100%';
	adLink.style.height = '100%';
	adLink.style.marginLeft = 'auto';
	adLink.style.marginRight = 'auto';
	adLink.style.left = adLink.style.top = 0;
	adLink.style.zIndex = 0;
	
	var adBackground = document.createElement('div');
	adBackground.style.background = "#FFFFFF url(" + args.img + ") no-repeat 50% 0";
	adBackground.style.height = '100%';
	adBackground.style.position = 'fixed';
	adBackground.style.width = '100%';
	adBackground.style.top = 0;
	adBackground.style.zIndex = 0;
	adBackground.appendChild( adLink );
	adLink.href = args.url
	document.body.insertBefore( adBackground, document.body.firstChild);
}