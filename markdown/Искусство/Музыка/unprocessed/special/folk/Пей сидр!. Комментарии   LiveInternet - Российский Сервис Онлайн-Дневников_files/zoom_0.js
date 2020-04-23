var img = new Array();
var i;
var first = -1;
var last = -1;

function nameByWidth(name, width)
{
	if (!(slash = name.lastIndexOf("/") + 1)) return name;
	dir = name.substr(0, slash);
	file = name.substr(slash);
	s = file.split(".");
	return dir + s[0] + '.' + width + 'x' + width + '.' + s[s.length - 1];
}

var image_change = function (image_i) {
	var image = img[image_i];
	var width = parseInt(image.style.width) + image.speed;
	var top = parseInt(image.style.top) + image.top;
	var left = parseInt(image.style.left) + image.left;
	if (width < width_min) {
		image.setAttribute('src', nameByWidth(image.src, width_min));
		image.parentNode.parentNode.style.position = 'static';
		image.style.position = 'static';
		clearInterval(image.interval);
	} else if (width > width_max) {
		clearInterval(image.interval);
	} else {
		image.parentNode.parentNode.style.zIndex = width >= width_max / 2 ? 10 : 1;
		image.style.width = width + 'px';
		image.style.height = width + 'px';
		image.style.top = top + 'px';
		image.style.left = left + 'px';
	}
}
window.onload = function() {
	img = document.getElementsByTagName('img');
	for (i = 0; i < img.length; i++) {
		if (img[i].parentNode.className == 'img') {
			if (vertical) {
				if (first == -1 && img[i].offsetTop < width_max/2 + 10) first = i;
				else if (img[i].offsetTop + (width_min + width_max)/2 > document.height) last = i;
			}
			img[i].style.width = width_min + 'px';
			img[i].style.height = width_min + 'px';
			img[i].parentNode.parentNode.style.top = 0 + 'px';
			img[i].parentNode.parentNode.style.left = 0 + 'px';
			img[i].style.top = padding_top + 'px';
			img[i].style.left = padding_left + 'px';
			img[i].xi = i;
			//big = new Image();
			//big.src = nameByWidth(img[i].src, width_max);
			img[i].onmouseover = function () {
				this.speed = speed_px;
				this.parentNode.parentNode.style.position = 'relative';
				this.style.position = 'absolute';
				if (this.xi == first) this.top = 0;
				else if (this.xi == last) this.top = -speed_px;
				else this.top = -Math.round(speed_px/2);

				if (vertical) this.left = 0;
				else this.left = -Math.round(speed_px/2);

				if (this.interval) clearInterval(this.interval);
				this.src = nameByWidth(this.src, width_max);
				this.interval = setInterval("image_change("+this.xi+")", speed_ms);
			};
			img[i].onmouseout = function () {
				this.speed = -speed_px;
				if (this.xi == first) this.top = 0;
				else if (this.xi == last) this.top = speed_px;
				else this.top = Math.round(speed_px/2);

				if (vertical) this.left = 0;
				else this.left = Math.round(speed_px/2);
				
				if (this.interval) clearInterval(this.interval);
				this.interval = setInterval("image_change("+this.xi+")", speed_ms);
			};
		}
	}
}
