chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        bounds: {
			left:60,
			top:60,
            width: 800,
            height: 600,
        },
		// when this is set, window auto floats but isn't resizable by code anymore
		// --> set 'doFloat' by window title takes the bounds above and floats the window with this bounds :)
		/*
		 *minWidth: 600,
		 *maxWidth: 600,
		 *minHeight: 600,
		 *maxHeight: 600
		 */
    });
});
