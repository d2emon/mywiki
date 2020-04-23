// components --------------------------

var UT_RATING_IMG				=	new Image();
	UT_RATING_IMG.src			=	'/i/star_bg_yellow_s.gif';
var UT_RATING_IMG_BG			=	new Image();
	UT_RATING_IMG_BG.src		=	'/i/star_bg_wh_s.gif';

function UTRating(ratingElementId, maxStars, objectName, formName, ratingMessageId, componentSuffix, size)
{
	this.ratingElementId	=	ratingElementId;
	this.maxStars			=	maxStars;
	this.objectName			=	objectName;
	this.formName			=	formName;
	this.ratingMessageId	=	ratingMessageId;
	this.componentSuffix	=	componentSuffix;

	this.starTimer = null;
	this.starCount = 0;

	function showStars(starNum, skipMessageUpdate) {
		this.clearStarTimer();
		this.greyStars();
		this.colorStars(starNum);
		//if(!skipMessageUpdate)
			//this.setMessage(starNum);
	}

	function setMessage(starNum) {
		if (type_rating == "song")
			messages = new Array("Rate this video", "Poor", "Nothing special", "Worth watching", "Pretty cool", "Awesome!");
		else if (type_rating == "playlist")
		{
			messages = new Array("Rate this playlist", "Poor", "Nothing special", "Worth watching", "Pretty cool", "Awesome!");
		}
		else
			messages = new Array("Rate this image", "Poor", "Nothing special", "Worth watching", "Pretty cool", "Awesome!");
		document.getElementById(this.ratingMessageId).innerHTML = messages[starNum];
	}

	function colorStars(starNum) {
		for (var i=1; i <= starNum; i++) {
			document.getElementById('star_'  + this.componentSuffix + "_" + i).src = UT_RATING_IMG.src;
		}
	}

	function greyStars() {
		for (var i=1; i <= this.maxStars; i++)
			document.getElementById('star_' + this.componentSuffix + "_"  + i).src = UT_RATING_IMG_BG.src;
	}

	function setStars(starNum) {
		this.starCount = starNum;
		this.drawStars(starNum);
		document.forms[this.formName]['rating'].value = this.starCount;
		var ratingElementId = this.ratingElementId;
		postForm(this.formName, true, function (req) { replaceDivContents(req, ratingElementId); });
	}


	function drawStars(starNum, skipMessageUpdate) {
		this.starCount=starNum;
		this.showStars(starNum, skipMessageUpdate);
	}

	function clearStars() {
		this.starTimer = setTimeout(this.objectName + ".resetStars()", 0);
	}

	function resetStars() {
		this.clearStarTimer();
		if (this.starCount)
			this.drawStars(this.starCount);
		else
			this.greyStars();
		//this.setMessage(0);
	}

	function clearStarTimer() {
		if (this.starTimer) {
			clearTimeout(this.starTimer);
			this.starTimer = null;
		}
	}

	this.clearStars		=	clearStars;
	this.clearStarTimer	=	clearStarTimer;
	this.greyStars		=	greyStars;
	this.colorStars		=	colorStars;
	this.resetStars		=	resetStars;
	this.setStars		=	setStars;
	this.drawStars		=	drawStars;
	this.showStars		=	showStars;
	this.setMessage		=	setMessage;
};