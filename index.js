function getSourceURL(str) {
    var isSearchResultUrl = false;
    if (new RegExp('^http[^?]*\/search\\?').test(str)) {
        var parts = str.split("?");
        if (parts.length != 2) {
            throw new Error('CNE 1 ' + str);
        }
        var part0 = parts[0];
        var part1 = "?" + parts[1];
        var tbm = ""; // e.g. for image search
        if (new RegExp('&tbm=').test(str)) {
            tbm = part1.replace(/.*?[&?]tbm=/i, "");
            tbm = "&tbm=" + tbm.replace(/&.*/, "");
        }
        part1 = part1.replace(/.*?[&?]q=/i, "");
        part1 = part1.replace(/&.*/, "");
        str = part0 + "?q=" + part1 + tbm;
    }
    else if (new RegExp('^https?://.*[&?]url=').test(str)) {
        str = str.replace(/.*?[&?]url=/i, "");
        str = str.replace(/&.*/, "");
        str = decodeURIComponent(str);
        isSearchResultUrl = true;
    }
    else if (new RegExp('^https?://.*\?.*=https?%3A%2F%2F').test(str)) {
        str = str.match(/=https?%3A%2F%2F[A-Za-z0-9-_.!~*'()%]*/)[0].slice(1);
        str = decodeURIComponent(str);
        isSearchResultUrl = true;
    }
    else {
        var parts = str.split(/[?#]/);
        if (parts.length < 2) {
            throw new Error('CNE 2 ' + str);
        }
        str = parts[0];
    }
    var httpFtpPattern = new RegExp("^(http:\/\/|https:\/\/|ftp:\/\/).*$");
    var disallowedCharPattern = new RegExp('[<>"]');
    var parts = str.split(/[?#]/);
    return parts[0];
}
function link_search() {
    for (var _i = 0, _a = document.getElementsByClassName('g'); _i < _a.length; _i++) {
        var g = _a[_i];
        console.log('==============');
        for (var _b = 0, _c = g.getElementsByTagName('a'); _b < _c.length; _b++) {
            var a = _c[_b];
            try {
                var l = a.getAttribute('href');
                if (l.startsWith('/')) {
                    l = 'https://www.google.com' + l;
                }
                else if (l.startsWith('http') && !l.startsWith('https://www.google.com')) {
                    continue;
                }
                var u = new URL(l);
                if (u.searchParams.has('url')) {
                    console.log(a);
                    var srclink = (u.searchParams.get('url'));
                    console.log(srclink);
                    var s = getSourceURL(l);
                    a.setAttribute('href', srclink);
                }
            }
            catch (e) {
            }
        }
    }
}
function link_reg() {
    document.body.oncontextmenu = function (e) { link_search(); };
}
link_reg();
