//$Id$

(function($) {

////////////////////////////////////////////////////////////
// Increment the number in the input box by +1 on each click
////////////////////////////////////////////////////////////
  $(document).ready(function() {
		$(".group-ref-txn-dir input.form-text,.group-ref-txn-ref input.form-text,.group-ref-txn-tech input.form-text").click(function(){
			var oldValue = $(this).val();
			if (!oldValue) {
				var oldValue = 0;
			}
			var newVal = parseFloat(oldValue) + 1;
			$(this).val(newVal);
		});
	});

/////////////////////////////////////////
// Show the Reset button if JS is enabled
/////////////////////////////////////////
  $(document).ready(function() {
    $("#reset-button-wrapper").toggleClass("element-hidden");
  });

/////////////////////////////////////////////////
// Get the cookies and set the select list values
/////////////////////////////////////////////////
  $(document).ready(function() {
    if($.cookie('refstats-branch')) {
      var refstatsBranch = $.cookie('refstats-branch');
      $("#edit-field-ref-txn-tax-branch-und").val(refstatsBranch);
    }
    if($.cookie('refstats-sp')) {
      var refstatsBranch = $.cookie('refstats-sp');
      $("#edit-field-ref-txn-tax-sp-und").val(refstatsBranch);
    }
  });

//////////////////
// Set the cookies
//////////////////
  $(document).ready(function() {
    $('#edit-submit').click(function(){
			$.cookie('refstats-branch', $("#edit-field-ref-txn-tax-branch-und").val(), {
				expires: 1,
				secure: true
			});
			$.cookie('refstats-sp', $("#edit-field-ref-txn-tax-sp-und").val(), {
				expires: 1,
				secure: true
			});
		});
  });


/*
 * Pastebin
 */
/*  $(document).ready(function() {
    $("#edit-field-ref-txn-tax-branch-und").val("13");
    $("#edit-field-ref-txn-tax-sp-und").val("49");
  }); */
    //alert($("#edit-field-ref-txn-tax-branch-und").val());
/*    $.cookie('refstats-branch', 17, {
      expires: 1,
      secure: true
    });*/



})(jQuery);