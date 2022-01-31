function link_search() {
    for (var _i = 0, _a = document.body.getElementsByClassName('g'); _i < _a.length; _i++) {
        var g = _a[_i];
        for (var _b = 0, _c = g.getElementsByTagName('a'); _b < _c.length; _b++) {
            var a = _c[_b];
            try {
                var l = a.getAttribute('href');
                if (l == null) {
                    continue;
                }
                if (l.startsWith('/')) {
                    l = 'https://www.google.com' + l;
                }
                else if (l.startsWith('http') && !l.startsWith('https://www.google.com')) {
                    continue;
                }
                var u = new URL(l);
                if (u.searchParams.has('url')) {
                    var srclink = (u.searchParams.get('url'));
                    if (srclink != null) {
                        a.setAttribute('href', srclink);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        }
    }
}
function link_reg() {
    (new MutationObserver(link_search)).observe(document, {
        childList: true,
        subtree: true,
        attributes: true
    });
}
link_reg();
