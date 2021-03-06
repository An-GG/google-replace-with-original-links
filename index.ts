// ==UserScript==
// @name         google-replace-with-original-links
// @namespace    https://github.com/An-GG/google-replace-with-original-links/
// @homepage     https://github.com/An-GG/google-replace-with-original-links/
// @version      0.0.1
// @encoding     utf-8
// @description  This script will observe for changes in the DOM tree and will swap out any tracking links if it sees them.
// @icon         https://raw.githubusercontent.com/An-GG/google-replace-with-original-links/master/dist/google-replace-tracking-links.png
// @author       An-GG
// @match        *://*.google.com/*
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://raw.githubusercontent.com/An-GG/google-replace-with-original-links/master/dist/index.js
// @updateURL    https://raw.githubusercontent.com/An-GG/google-replace-with-original-links/master/dist/index.js
// @run-at       document-end
// ==/UserScript==

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









