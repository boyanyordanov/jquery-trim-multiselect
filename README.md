# jQuery TrimMultiselect


## The idea 

A micro jQuery plugin, trimming long strings in multiselect elements. The problem it solves is very specific, but I recently had to deal with it and this is a working way to deal with it withought going for a full select / multiselect replacement plugin like [Chosen](http://harvesthq.github.io/chosen/) for example.

## The reason

Although this plugin has very limited use case it is also a learning experience for me. So any help, criticism and feedback in general is most welcome.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/netoholic/jquery-trim-multiselect/master/dist/jquery-trim-multiselect.min.js
[max]: https://raw.github.com/netoholic/jquery-trim-multiselect/master/dist/jquery-trim-multiselect.js

## Documentation

Check the annotated source [here](http://netoholic.github.io/jquery-trim-multiselect/docs/jquery-trim-multiselect.html).

## Installation

``` bower install jquery-trim-multiselect ```

## Basic Usage

```html
<script src="jquery.js"></script>
<script src="dist/jquery-trim-multiselect.min.jz"></script>
<script>
	jQuery(function($) {
		// Find options longer than the width of the element and shorten them
    	$('#myMultiSelect').trimMultiselect();
	});
</script>
```

## Examples

See demo of the basic usage [here](http://netoholic.github.io/jquery-trim-multiselect/).

## Release History

***v0.1.1***
- Implemented new algorithm which is a lot faster
- Option to install via bower

***v0.0.3 & v0.0.4***
- Cleaned up the project folder
- Fixed grunt configuration
- And mainly used to test grunt-bump configuration

***v0.0.2***
- Better project structure
- Grunt automation 
- Initial functionality - slowest but most accurate method
- Demo and github page
- Docs generated with [docco](http://jashkenas.github.io/docco/)

***v0.0.1***
- Initial release

## License

Copyright (c) 2013 Boyan Yordanov Licensed under the MIT license.
