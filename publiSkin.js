/**
 * Script para cargar publicidad tipo skin (full background) clicable
 *
 * @param object { 
 	img: string, // URL de la imagen
 	url: string, // URL del anunciante
 	width: int, // Ancho de la zona
 	height: int, // Alto de la zona
 	id: int // ID del script. Importante, se le ha de poner un ID al script en el DFP
 }
 * @return null
 *
 */
function artvisualAds ( args ) {

	args.width = args.width || 980;
	args.height = args.height || 90;
	
	var adLink = document.createElement('a');
	adLink.style.position = 'fixed';
	adLink.style.width = '100%';
	adLink.style.height = '100%';
	adLink.style.marginLeft = 'auto';
	adLink.style.marginRight = 'auto';
	adLink.style.left = adLink.style.top = 0;
	adLink.style.zIndex = 0;
	adLink.href = args.url
	adLink.target= '_blank';
	
	var adBackground = document.createElement('div');
	adBackground.style.background = "#FFFFFF url(" + args.img + ") no-repeat 50% 0";
	adBackground.style.height = '100%';
	adBackground.style.position = 'fixed';
	adBackground.style.width = '100%';
	adBackground.style.top = 0;
	adBackground.style.zIndex = 0;
	adBackground.appendChild( adLink );
	
	document.body.insertBefore( adBackground, document.body.firstChild);
	
	var script = document.getElementById(args.id);
	
	var aux = document.createElement('a');
	aux.href = args.url;
	aux.target = '_blank';
	aux.style.width = args.width + 'px';
	aux.style.height = args.height + 'px';
	aux.style.display = 'block';
	
	script.parentNode.appendChild(aux);
}