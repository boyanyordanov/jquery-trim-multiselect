(function() {
  $.fn.trimSelect = function () {    
    // Get the width of the select element
    var selectWidth = this.width() - 30;
  
    // If not presnet include the testing element
    if ( ! $('#trimSelectTestEl').length ) {
      $(document.body).append('<div style="display: inline; position: absolute; top: -9999em;" class="trimSelectTestEl"></div>');
    }
    
    // Get a reference to the testing element
    var testEl = $('.trimSelectTestEl');
  
    // Loop trough the option elements in the select
    this.find('option').each(function() {
      var testOpt = $(this);
      
      // Get the length of the current string
      testEl.text( testOpt.text() );
      var len = testEl.text().length;
      
      // If the width of the testing element is bigger than that of the select - trim it
      if ( testEl.width() > selectWidth ) {
        // Find the necessary length to fit in the select
        while( testEl.width() > selectWidth ) {
          testEl.text( testEl.text().substr(0, len) );
          //console.log( testEl.text() );  
          len--;
        }
        
        // Add the full text as title to show on hover
        testOpt.attr( 'title', testOpt.text() );
        // Replace the element's text with the trimmed text + elipsis
        testOpt.text( testEl.text() + '...');
      }
    });
    
    return this;
  };
})():
