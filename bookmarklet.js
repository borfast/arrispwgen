/**
 * This is the uncondensed version of the Javascript code used for the
 * bookmarklet link, so it can have some comments.
 */

(function() {
	// The fragment where we'll append the script tag, and which in turn will be appended to the <head> of our page.
	var fragment = document.createDocumentFragment();

	// The script element that loads the password generator script.
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://borfast.github.com/arrispwgen/arrispwgen.js';

	// Just a reference to the <head> element.
	var head = document.getElementsByTagName('head')[0];

	// Wait for the script file to load before trying to call the function.
	var done = false;
	script.onload = script.onreadystatechange = function() {
		if( !done && ( !this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') ) {
			done = true;
			var today = (new Date()).getTime();
			javascript:(function(){var fragment=document.createDocumentFragment();var script=document.createElement('script');script.type='text/javascript';script.src='http://jevansturner.github.com/arrispwgen/arrispwgen.js';var head=document.getElementsByTagName('head')[0];var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==='loaded'||this.readyState==='complete')){done=true;var today=(new Date()).getTime();window.prompt('Ctrl+C to copy, Enter or Esc to dismiss',GenArrisPasswords(today)[today]);}};fragment.appendChild(script);head.appendChild(fragment);})();
		}
	};
	
	// Add the prepared <script> element to the fragment, and add the fragment to the <head>.
	fragment.appendChild(script);
	head.appendChild(fragment);
	
})(); // Immediately execute the anonymous function.
