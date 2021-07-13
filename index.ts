function link_search() {
    for (let g of document.body.getElementsByClassName('g')) {
        for (let a of g.getElementsByTagName('a')) {
            try {
                var l = a.getAttribute('href');
                if (l == null) { continue; }

                if (l.startsWith('/')) {
                    l = 'https://www.google.com' + l;
                } else if (l.startsWith('http') && !l.startsWith('https://www.google.com')) { 
                    continue;
                }

                var u = new URL(l);
                if (u.searchParams.has('url')) {
                    let srclink = (u.searchParams.get('url'));
                    if (srclink != null) {
                        (a as HTMLElement).setAttribute('href', srclink);
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
        attributes: true,
    });
}

link_reg();









