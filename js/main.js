;(function() {
	"use strict";

	var burak = document.querySelector('.ba-logo-icon'),
			logoBeetroot = document.querySelector('.ba-logo-beetroot'),
			logoAcademy = document.querySelector('.ba-logo-academy'),

			burakLen = burak.getTotalLength();

	var logoTl = new TimelineMax({delay: 1, onUpdate: updateRange});

	logoTl
		.set(burak, {
			strokeDasharray: burakLen,
			strokeDashoffset: burakLen
		})
		.to(burak, 2, {
			strokeDashoffset: 0,
			ease: Power0.easeNone,
		})
		.to(burak, 1, {
			fill: '#94ceb9',
			stroke: 'transparent',
		})
		.from(logoBeetroot, 1, {
			opacity: 0
		}, "-=0.4")
		.from(logoAcademy, 1, {
			opacity: 0
		}, "-=.5")
	;

	var range = document.querySelector('.ba-range');
	
	function changeTl(){
		logoTl.pause();
		logoTl.progress(this.value);
	}

	function updateRange(){
		range.value = logoTl.progress();
	}

	range.addEventListener('change', changeTl);
	range.addEventListener('input', changeTl);

})();