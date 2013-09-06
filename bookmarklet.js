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
		l.href = '//rawgithub.com/karlgroves/diagnostic.css/master/diagnostic.css';
		d.getElementsByTagName('head')[0].appendChild(l);
	}(document, 'diagnosticCSS'));