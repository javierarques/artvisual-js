/**
 * Script para cargar publicidad tipo en un popup
 *
 * @param object { img: string, url: string, target: string, width: int, height: int, time: int, deley: int}
 * @return null
 */
function ads(args) {

	args.target = args.target || '_blank';
	args.width = args.width || 800;
	args.height = args.height || 600;
	args.timer = (args.timer  * 1000)|| 5000;
	args.delay = (args.delay * 1000) || 0;

	if (!args.img) {
		console.log('El parámetro no es correcto');
		return;
	}
	
	var prefix = 'css' + Math.round(Math.random() * 10000) + 1;

	var img = document.createElement('img');
	img.src = args.img;

	if (args.url) {
		var a = document.createElement('a');
		a.href = args.url;
		a.appendChild(img);

		if (args.target) {
			a.setAttribute('target', args.target);
		}
	}

	var head = document.getElementsByTagName('head')[0];

	var css = '';
	var style = null;
	img.onload = function() {
		css += '.' + prefix + '_overlay {z-index:997; width:100%; height:100%; position:fixed; top: 0px; left: 0px;background-color:#000;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";filter:alpha(opacity=60);-moz-opacity: 0.0;opacity: 0.6;}';
		css += '.' + prefix + '_div {z-index:999; position:fixed; top: 50%; margin-top:-' + ((args.height / 2) - 7) + 'px;left:50%; margin-left:-' + ((args.width / 2) - 7 ) + 'px; width:' + args.width + 'px; height:' + args.height + 'px;}';
		css += '.' + prefix + '_bg {z-index:998; position:fixed; top: 50%; margin-top:-' + ((args.height / 2)) + 'px;left:50%; margin-left:-' + ((args.width / 2)) + 'px; width:' + (args.width+14) + 'px; height:' + (args.height+14) + 'px; background:#666; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; filter:alpha(opacity=60);-moz-opacity: 0.6;	opacity: 0.6;overflow: hidden;	-moz-box-shadow: rgba(0,0,0,1) 0 4px 30px;-webkit-box-shadow: rgba(0,0,0,1) 0 4px 30px;	-khtml-box-shadow: rgba(0,0,0,1) 0 4px 30px;box-shadow: rgba(0,0,0,1) 0 4px 30px;}';
		css += '.' + prefix + '_close {background:#AAAAAA;border: 1px solid #999999;color: #FFFFFF;cursor: pointer;display: block;font-size: 13px;font-weight: normal;height: 15px; *height: 14px;line-height: 90%;margin: 0;padding: 0;position: absolute;right: -17px;text-align: center;text-decoration: none;top: -16px;width: 15px;z-index: 999;}';

		style = document.createElement('style');
		style.type = 'text/css';
		if(style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	}

	var overlay = document.createElement('div');
	//overlay.setAttribute('class', prefix + '_overlay');
	overlay.className = prefix + '_overlay';

	var bg = document.createElement('div');
	//bg.setAttribute('class', prefix + '_bg');
	bg.className = prefix + '_bg';

	var div = document.createElement('div');
	//div.setAttribute('class', prefix + '_div');
	div.className = prefix + '_div';

	if (args.url) {
		div.appendChild(a);
	} else {
		div.appendChild(img);
	}

	setTimeout(function() {
		document.body.appendChild(overlay);
		document.body.appendChild(bg);
		document.body.appendChild(div);
	}, args.delay);

	var closeButton = document.createElement('a');
	//closeButton.setAttribute('class', prefix + '_close');
	closeButton.className = prefix + '_close';
	closeButton.innerHTML = '&#120;';
	div.appendChild(closeButton);

	setTimeout(function() {
		close();
	}, args.timer + args.delay);

	closeButton.onclick = function() {
		close();
	}

	function close() {
		document.body.removeChild(overlay);
		document.body.removeChild(div);
		document.body.removeChild(bg);
		head.removeChild(style);
	}

}
