/*
 * jquery-trim-multiselect
 *
 * The plugin finds options text, which does not fit inside a fixed width multiselect and trims them down.
 * 
 * https://github.com/netoholic/jquery-trim-multiselect
 *
 * Copyright (c) 2013 Boyan `netoholic` Yordanov
 * Licensed under the MIT license.
 */

;(function( $, window, document, undefined ) {
  /**
   * The heart of the plugin.
   * Module object used to better organize the code
   * and reveal only api needed for the plugin.
   * @return {object} The public interface of the module
   */
  var trimUtils = (function() {
    // Initialize variables used troughtout the object
     
    /** @type {String}  HTML string for the element used for testing*/
    var testElHTML = '<div style="display: inline; position: absolute; top: -9999em; padding: 0; margin: 0;" id="trimSelectTestEl"></div>';
    
    /** @type {jQuery object}  reference to the testing element */
    var testEl = null;

    /** @type {jQuery object}  reference to the select element */
    var selectEl = null;

    /** @type {number} The width of the select element */
    var selectWidth = null;

    /**
     * Initialization of the plugin.
     * Creates the test element if it's not present,
     * then sets values to the variables shared by all functions.
     * @param  {jQuery object} el Referene to the select element
     */
    function initialize(el) {
      createTestEl();

      selectEl = el;
      selectWidth = el.width() - 15;

      testEl = $('#trimSelectTestEl');
    }

    /**
     * Removes the testing element.
     * To be used when the plugin execution is complete.
     */
    function clean() {
      testEl.remove();
    }

    /**
     * Checks if the testing element is present
     * and creates it if it's not.
     */
    function createTestEl() {
      // If not presnet include the testing element
      if ( ! $('#trimSelectTestEl').length ) {
        $(document.body).append(testElHTML);
      }
    }

    /**
     * Trims a given string down to a length
     * that fits inside the width of the select element.
     *
     * The function uses recursion to make the calculation faster:
     * 1. Checks if the text fits
     * 1.1 If not
     *   1. Splits it in half
     *   2. Sets value to the removed parameter
     *   3. Sets the text in the testing element to the new value
     *   4. Calls itself recursively
     * 1.2 If it fits
     *   1. Tries to find optimal width for the testing element 
     *      and length for the string
     *   2. Performs a check whether the width is optimal
     *   2.1 If it's not
     *     1. Extends the string 
     *        by adding back half of the removed part in the previos call  
     *     2. Sets value for the removed parameter
     *     3. Sets the text in the testing element to the new value
     *     4. Calls itself recursively
     *   2.2 If it is returns the trimmed string
     *   
     * @param  {String} textValue The text to be trimmed
     * @param  {String} removed   Text being removed from the string
     *                            ( for use in the recursion )
     * @return {String}           The trimmed string
     */
    function trimString(textValue, removed) {  
      /** @type {String} Holds the new value for each call */
      var newTextValue = '';

      // Trims spaces around the strings
      textValue = $.trim(textValue);
      removed = $.trim(removed);

      // Check if the text will fit
      if ( testEl.width() > selectWidth ) {
        // Set the new value
        newTextValue = textValue.substr(0, textValue.length/2);
        
        testEl.text( newTextValue );

        // Prepare 'removed' param for the next call
        removed = textValue.substr(textValue.length/2);
        
        // Call recursively and return the result
        return trimString(newTextValue, removed);
      } else {  
        var optimalWidth = 0.2 * selectWidth;

        if ( ( selectWidth - testEl.width() ) > optimalWidth ) {
          newTextValue = textValue + removed.substr( 0, removed.length/2 );
          testEl.text( textValue );

          // Prepare 'removed' param for the next call
          removed = removed.substr( removed.length/2 );

          // Call recursively and return the result
          return trimString(newTextValue, removed);
        } else {
          // Return the trimmed value
          return textValue;
        }
      }
    }

    /**
     * Performs additional tasks before and after trimming the string value.
     *
     * Sets the testEl text initialy.
     * Checks if the text needs trimming and does nothing if it doesn't. 
     * Sets the full text of the ption as title attribute. 
     * Calls 'trimString' to get the trim value. 
     * Appends ellipsis to its end. 
     * Replaces the text of the option element with the trimmed value
     * 
     * @param  {jQuery object} optEl Reference to the option element
     */
    function trim(optEl) {
      testEl.text(optEl.text());

      if (testEl.width() > selectWidth) {
        optEl.attr('title', optEl.text());

        var trimmedText = trimString(optEl.text(), '');

        optEl.text(trimmedText + '...');
      }
    }

    // Return the publicly available functions
    return {
      trim: trim,
      initialize: initialize,
      clean: clean
    };
  })();

  /**
   * The actual plugin. 
   * Uses the trimUtils module to perform the trimming on all
   * elements it's applied to.
   * 
   * @return {jQuery object}  Returns the object to preserve chaining
   */
  $.fn.trimMultiSelect = function () {    
    return this.each(function() {
      /** @type {jQuery object} Reference to the element we are working with. */
      var $el = $(this);
      
      // Initialize the 'trimUtils' module
      trimUtils.initialize($el);

      // Loop trough the option elements in the select
      $el.find('option').each(function() {
        /** @type {jQuery object} Reference to the current option element */
        var testOpt = $(this);
        
        // Trim the option text if it's too long
        trimUtils.trim(testOpt);
      });
      
      // Clean after all options are trimmed.
      trimUtils.clean();
    });
  };
})( jQuery, window, document );
