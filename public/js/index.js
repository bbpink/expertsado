$(document).ready(function(){
    var basename = document.URL.substr(document.URL.lastIndexOf("/"));
    if ($.support.opacity) {
	if ((basename != "/") && (basename != "index.html")) {
	    $("a[href='." + basename + "']")
		.css("background-color", "rgba(0,0,0,0.2)");
	}
    }

    // We only want these styles applied when javascript is enabled
    $('div.navigation').css({'width' : '34%', 'float' : 'left'});
    $('div.content').css('display', 'block');

    // Initially set opacity on thumbs and add
    // additional styling for hover effect on thumbs
    var onMouseOutOpacity = 0.67;
    $('#thumbs ul.thumbs li').opacityrollover({
	mouseOutOpacity:   onMouseOutOpacity,
	mouseOverOpacity:  1.0,
	fadeSpeed:         'fast',
	exemptionSelector: '.selected'
    });
    
    // Initialize Advanced Galleriffic Gallery
    var gallery = $('#thumbs').galleriffic({
	delay:                     2500,
	numThumbs:                 8,
	preloadAhead:              10,
	enableTopPager:            false,
	enableBottomPager:         true,
	maxPagesToShow:            7,
	imageContainerSel:         '#slideshow',
	controlsContainerSel:      '#controls',
	captionContainerSel:       '#caption',
	loadingContainerSel:       '#loading',
	renderSSControls:          true,
	renderNavControls:         true,
	playLinkText:              'Play Slideshow',
	pauseLinkText:             'Pause Slideshow',
	prevLinkText:              '&lsaquo; Previous Photo',
	nextLinkText:              'Next Photo &rsaquo;',
	nextPageLinkText:          'Next',
	prevPageLinkText:          'Prev',
	enableHistory:             false,
	autoStart:                 false,
	syncTransitions:           true,
	defaultTransitionDuration: 900,
	onSlideChange:             function(prevIndex, nextIndex) {
	    // 'this' refers to the gallery, which is an extension of $('#thumbs')
	    this.find('ul.thumbs').children()
		.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
		.eq(nextIndex).fadeTo('fast', 1.0);
	},
	onPageTransitionOut:       function(callback) {
	    this.fadeTo('fast', 0.0, callback);
	},
	onPageTransitionIn:        function() {
	    this.fadeTo('fast', 1.0);
	}
    });

});