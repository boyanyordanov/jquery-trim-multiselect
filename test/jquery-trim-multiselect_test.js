(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  /*
  * TODO: Need to include unit tests
  */
 
  module('jQuery#trimMultiSelect', {
    // This will run before each test in this module.
    setup: function () {
      this.elem = $('#qunit-fixture #testSelect');
      this.shortStr = this.elem.find('#shortStr');
      this.longStr = this.elem.find('#longStr');
    }
  });

  /**
   * Test if the plugin is working correctly
   * by checking if an example of long option is trimmed 
   * and and example of short option is not trimmed.
   * 
   * Should pass if the plugin is working correctly.
   */
  test('is triming long strings', function () {
    var shortText = this.shortStr.text();
    var longText = this.longStr.text();

    this.elem.trimMultiSelect();

    expect(2);

    equal(this.shortStr.text(), shortText, 'Expected not to trim short strings;');
    notEqual(this.longStr.text(), longText, 'Expected to trim long strings;');
  });

  /**
   * Test if the plugin is setting correctly the title attribute
   * after trimming.
   * Additionally tests if the option is actually trimmed. 
   *
   * Should pass if the option is trimmed and the title attribute is set correctly.
   */
  test('is setting title attribute', function (){
    var longText = this.longStr.text();

    this.elem.trimMultiSelect();

    expect(2);
    notEqual(this.longStr.text(), longText, 'Expected to trim the long string.');
    equal(this.longStr.attr('title'), longText, 'Expected to set title attribute to the full length string.');
  });

  /**
   * Test if the hidden element used for testing is removed 
   * after the plugin finished execution. 
   *
   * Should pass if the element is removed which is done by default.
   */
  test('is removing testing element', function(){
    this.elem.trimMultiSelect();

    expect(1);
    ok(!$('.trimSelectTestEl').length, 'Expected to remove testing element.');
  });

  /**
   * Test if the plugin preserves the ability to chain 
   * methods. 
   * 
   * Should pass if method chaining is performed successfully.
   */
  test('is chainable', function () {
    this.elem.trimMultiSelect().css('color', 'red');

    expect(1);

    equal(this.elem.css('color'), 'rgb(255, 0, 0)', 'Expected to change color after running the plugin.');
  });
  
}(jQuery));
