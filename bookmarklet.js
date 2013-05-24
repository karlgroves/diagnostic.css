javascript:( function(d, i, l) {
		l = d.getElementById(i);
		if (l) {
			l.parentNode.removeChild(l);
			return;
		}
		l = d.createElement('link');
		l.id = i;
		l.rel = 'stylesheet';
		l.type = 'text/css';
		l.href = '//karlgroves.github.io/diagnostic.css/diagnostic.css';
		d.getElementsByTagName('head')[0].appendChild(l);
	}(document, 'diagnosticCSS'))