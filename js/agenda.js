$('body').prepend('<p id="controlCont"><label><input type="checkbox" name="controls" id="controls"> Hide controls</label><p>');


$("h3,h2").click(function () {
      $(this).parent("li").slideUp();
      $('<li onClick="bringitback($(this))" class="bringBack">Bring back "'+ $(this).text() +'"	</li>').insertAfter($(this).parent("li"));
      controltoggle();
});

$("h1").click(function(){
	$(this).hide();
	$('<span id="editme"><input type="text" name="ttitle" id="ttitle" value="'+ $(this).text() +'" /><span onClick="saveText()" id="done">Done</span><span>').insertAfter($(this))
});

$('#controls').change(function(){
	controltoggle()
});
 
function bringitback(x) {
	$(x).prev("li").slideDown();
	$(x).remove();
};

function saveText() {
	$("h1").text($("#ttitle").val());
	$("h1").show();
	$("#editme").remove();
};

function controltoggle() {
  	
  	if ($('#controls:checked').val() !== undefined) {
 	$(".bringBack").hide("slow");
	} else {
	$(".bringBack").show("slow");
}
};


