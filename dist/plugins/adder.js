var tags = 0;
var slides = 0;
var notes = 0;
    
$(document).ready(function() {

	$("#addTag").click(function(){
	    tags++;

	    $("#numTags").text(tags);
	    $('#soundwave-area').append('<div class="marker"><div class="icon-tag"></div></div>');
	});

	$("#addSlide").click(function(){
	    slides++;

	    $("#numSlides").text(slides);
	    $('#soundwave-area').append('<div class="marker"><div class="icon-slide"></div></div>');
	});

	$("#addNote").click(function(){
	    notes++;

	    $("#numNotes").text(notes);
	    $('#soundwave-area').append('<div class="marker"><div class="icon-note"></div></div>');
	});

});