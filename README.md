# jQuery TrimMultiselect


## The idea 

A micro jQuery plugin, trimming long strings in multiselect elements. The problem it solves is very specific, but I recently had to deal with it and this is a working way to deal with it withought going for a full select / multiselect replacement plugin like [Chosen](http://harvesthq.github.io/chosen/) for example.

## The reason

Although this plugin has very limited use case it is also a learning experience for me. So any help, criticism and feedback in general is most welcome.

## The progress

I added several issues and a milestone to track what I want to cover for an initial release. Hope to clear those in a couple of weeks from now. The main issue with all tasks referenced: [#1](https://github.com/netoholic/jquery-trim-multiselect/issues/1).

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/netoholic/jquery-trim-multiselect/master/dist/jquery-trim-multiselect.min.js
[max]: https://raw.github.com/netoholic/jquery-trim-multiselect/master/dist/jquery-trim-multiselect.js

## Documentation
	
### Basic Usage

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
_(Coming soon)_

## Release History
_(Nothing yet)_

## License

Copyright (c) 2013 Boyan Yordanov Licensed under the MIT license.
