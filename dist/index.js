"use strict";
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
                    let srclink = (u.searchParams.get('url'));
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
        attributes: true,
    });
}
link_reg();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLG1EQUFtRDtBQUNuRCw2RUFBNkU7QUFDN0UsNkVBQTZFO0FBQzdFLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsMkhBQTJIO0FBQzNILHlJQUF5STtBQUN6SSxzQkFBc0I7QUFDdEIsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsZ0hBQWdIO0FBQ2hILGdIQUFnSDtBQUNoSCw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBRWxCLFNBQVMsV0FBVztJQUNoQixLQUFLLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckQsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkMsSUFBSTtnQkFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQUUsU0FBUztpQkFBRTtnQkFFNUIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQixDQUFDLEdBQUcsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQztxQkFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7b0JBQ3hFLFNBQVM7aUJBQ1o7Z0JBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO3dCQUNoQixDQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ3BEO2lCQUNKO2FBQ0o7WUFDRCxPQUFPLENBQUMsRUFBRTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDYixDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBQ2xELFNBQVMsRUFBRSxJQUFJO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixVQUFVLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICBnb29nbGUtcmVwbGFjZS13aXRoLW9yaWdpbmFsLWxpbmtzXG4vLyBAbmFtZXNwYWNlICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Bbi1HRy9nb29nbGUtcmVwbGFjZS13aXRoLW9yaWdpbmFsLWxpbmtzL1xuLy8gQGhvbWVwYWdlICAgICBodHRwczovL2dpdGh1Yi5jb20vQW4tR0cvZ29vZ2xlLXJlcGxhY2Utd2l0aC1vcmlnaW5hbC1saW5rcy9cbi8vIEB2ZXJzaW9uICAgICAgMC4wLjFcbi8vIEBlbmNvZGluZyAgICAgdXRmLThcbi8vIEBkZXNjcmlwdGlvbiAgVGhpcyBzY3JpcHQgd2lsbCBvYnNlcnZlIGZvciBjaGFuZ2VzIGluIHRoZSBET00gdHJlZSBhbmQgd2lsbCBzd2FwIG91dCBhbnkgdHJhY2tpbmcgbGlua3MgaWYgaXQgc2VlcyB0aGVtLlxuLy8gQGljb24gICAgICAgICBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQW4tR0cvZ29vZ2xlLXJlcGxhY2Utd2l0aC1vcmlnaW5hbC1saW5rcy9tYXN0ZXIvZGlzdC9nb29nbGUtcmVwbGFjZS10cmFja2luZy1saW5rcy5wbmdcbi8vIEBhdXRob3IgICAgICAgQW4tR0dcbi8vIEBtYXRjaCAgICAgICAgKjovLyouZ29vZ2xlLmNvbS8qXG4vLyBAY29tcGF0aWJsZSAgIGNocm9tZVxuLy8gQGNvbXBhdGlibGUgICBmaXJlZm94XG4vLyBAY29tcGF0aWJsZSAgIG9wZXJhXG4vLyBAY29tcGF0aWJsZSAgIHNhZmFyaVxuLy8gQGNvbXBhdGlibGUgICBlZGdlXG4vLyBAZG93bmxvYWRVUkwgIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Bbi1HRy9nb29nbGUtcmVwbGFjZS13aXRoLW9yaWdpbmFsLWxpbmtzL21hc3Rlci9kaXN0L2luZGV4LmpzXG4vLyBAdXBkYXRlVVJMICAgIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Bbi1HRy9nb29nbGUtcmVwbGFjZS13aXRoLW9yaWdpbmFsLWxpbmtzL21hc3Rlci9kaXN0L2luZGV4LmpzXG4vLyBAcnVuLWF0ICAgICAgIGRvY3VtZW50LWVuZFxuLy8gPT0vVXNlclNjcmlwdD09XG5cbmZ1bmN0aW9uIGxpbmtfc2VhcmNoKCkge1xuICAgIGZvciAobGV0IGcgb2YgZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnJykpIHtcbiAgICAgICAgZm9yIChsZXQgYSBvZiBnLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBhLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgICAgIGlmIChsID09IG51bGwpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgICAgIGlmIChsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICBsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nICsgbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGwuc3RhcnRzV2l0aCgnaHR0cCcpICYmICFsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20nKSkgeyBcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHUgPSBuZXcgVVJMKGwpO1xuICAgICAgICAgICAgICAgIGlmICh1LnNlYXJjaFBhcmFtcy5oYXMoJ3VybCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcmNsaW5rID0gKHUuc2VhcmNoUGFyYW1zLmdldCgndXJsJykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjbGluayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYSBhcyBIVE1MRWxlbWVudCkuc2V0QXR0cmlidXRlKCdocmVmJywgc3JjbGluayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkgeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGlua19yZWcoKSB7XG4gICAgKG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpbmtfc2VhcmNoKSkub2JzZXJ2ZShkb2N1bWVudCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgfSk7XG59XG5cbmxpbmtfcmVnKCk7XG5cblxuXG5cblxuXG5cblxuXG4iXX0=