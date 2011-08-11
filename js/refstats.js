//$Id$

(function($) {

/////////////////////////////////////
// Make the menu link a popup window
/////////////////////////////////////
  $(document).ready(function() {
    $('.menu-1435 a').addClass('popupwindow');
    $('.menu-1435 a').attr('rel','refstatsPopup');
    $('.menu-1435 a').removeClass('active');
  });

////////////////////////////////////////////////////////////
// Increment the number in the input box by +1 on each click
////////////////////////////////////////////////////////////
  $(document).ready(function() {
		$(".group-ref-txn-dir input.form-text, .group-ref-txn-ref input.form-text, .group-ref-txn-tech input.form-text, .group-ref-txn-docs input.form-text, .group-ref-txn-month-dir input.form-text, .group-ref-txn-month-ref input.form-text, .group-ref-txn-month-tech input.form-text, .group-ref-txn-month-docs input.form-text").click(function(){
			var oldValue = $(this).val();
			if (!oldValue) {
				var oldValue = 0;
			}
			var newVal = parseFloat(oldValue) + 1;
			$(this).val(newVal);
		});
	});

////////////////////////////////////////////
// Show the Reset button if JS is enabled //
////////////////////////////////////////////
  $(document).ready(function() {
    $("#reset-button-wrapper").toggleClass("element-hidden");
  });

////////////////////////////////////////////////////
// Get the cookies and set the select list values //
////////////////////////////////////////////////////
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

/////////////////////
// Set the cookies //
/////////////////////
  $(document).ready(function() {
    $('#edit-submit').click(function(){
			$.cookie('refstats-branch', $("#edit-field-ref-txn-tax-branch-und").val(), {
				expires: 365,
				secure: true
			});
			$.cookie('refstats-sp', $("#edit-field-ref-txn-tax-sp-und").val(), {
				expires: 365,
				secure: true
			});
		});
  });

////////////////
// Pop it up //
///////////////
	$(document).ready(function() {
	  var profiles = {
     refstatsPopup:
       {
         height:400,
         width:300,
         toolbar:0,
         scrollbars:0,
         status:0,
         resizable:1,
         left:2400,
         top:0,
//         not working
//         onUnload:refstatsNopopup
       },
     };

		function refstatsNopopup() {
			$.cookie('refstats-popup', null);
		};

     $(".popupwindow").popupwindow(profiles);

/*		 $(".popupwindow").click(function() {
       $('body').toggleClass('refstats-popup');
		 });*/
		 
/*		 $(".popupwindow").click(function() {
			 $.cookie('refstats-popup', 1, {
				 expires: 1,
				 secure: true
			 });
		 });*/
   });


///////////////////////////////////////
// Get the cookie for the popup window
///////////////////////////////////////
  $(document).ready(function() {
    if($.cookie('refstats-popup')) {
      $('body').addClass('refstats-popup');
    }
  });

//////////////////////////////////////////////////////////
// Style the popup window (based on the value of its name)
// working as of 09 Jun 2011
//////////////////////////////////////////////////////////
  $(document).ready(function() {
    var refstatsPopup = window.name;
//    alert(refstatsPopup);
    if(refstatsPopup == "RefStatsPopup"){
//      alert('hey ma, it works!');
      $('head').append('<link rel="stylesheet" href="/sites/all/modules/custom/refstats/css/popup.css" type="text/css" />');
      $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">');
      $('#node_ref_txn_form_group_ref_txn_dir').prepend('<div class="popup-row-label">Directional</div>');
      $('#node_ref_txn_form_group_ref_txn_ref').prepend('<div class="popup-row-label">Reference</div>');
      $('#node_ref_txn_form_group_ref_txn_tech').prepend('<div class="popup-row-label">Technical</div>');
      $('#node_ref_txn_form_group_ref_txn_docs').prepend('<div class="popup-row-label">Gov Docs</div>');
      $('#field-ref-txn-dir-person-add-more-wrapper').attr('title', 'In-Person');
      $('#field-ref-txn-dir-phone-add-more-wrapper').attr('title', 'Phone');
      $('#field-ref-txn-dir-email-add-more-wrapper').attr('title', 'Email');
      $('#field-ref-txn-dir-chat-add-more-wrapper').attr('title', 'Chat');
      $('#field-ref-txn-dir-mail-add-more-wrapper').attr('title', 'Mail');
    }
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
