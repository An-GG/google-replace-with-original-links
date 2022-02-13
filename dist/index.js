// ==UserScript==
// @name         google-replace-with-original-links
// @namespace    https://github.com/An-GG/google-replace-with-original-links/
// @homepage     https://github.com/An-GG/google-replace-with-original-links/
// @version      1.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakIsbURBQW1EO0FBQ25ELDZFQUE2RTtBQUM3RSw2RUFBNkU7QUFDN0Usc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QiwySEFBMkg7QUFDM0gseUlBQXlJO0FBQ3pJLHNCQUFzQjtBQUN0QixtQ0FBbUM7QUFDbkMsdUJBQXVCO0FBQ3ZCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixnSEFBZ0g7QUFDaEgsZ0hBQWdIO0FBQ2hILDZCQUE2QjtBQUM3QixrQkFBa0I7QUFFbEIsU0FBUyxXQUFXO0lBQ2hCLEtBQUssSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyRCxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJO2dCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFBRSxTQUFTO2lCQUFFO2dCQUU1QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLENBQUMsR0FBRyx3QkFBd0IsR0FBRyxDQUFDLENBQUM7aUJBQ3BDO3FCQUFNLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRTtvQkFDeEUsU0FBUztpQkFDWjtnQkFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7d0JBQ2hCLENBQWlCLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDcEQ7aUJBQ0o7YUFDSjtZQUNELE9BQU8sQ0FBQyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELFNBQVMsUUFBUTtJQUNiLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFDbEQsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSxJQUFJO0tBQ25CLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09VXNlclNjcmlwdD09XG4vLyBAbmFtZSAgICAgICAgIGdvb2dsZS1yZXBsYWNlLXdpdGgtb3JpZ2luYWwtbGlua3Ncbi8vIEBuYW1lc3BhY2UgICAgaHR0cHM6Ly9naXRodWIuY29tL0FuLUdHL2dvb2dsZS1yZXBsYWNlLXdpdGgtb3JpZ2luYWwtbGlua3MvXG4vLyBAaG9tZXBhZ2UgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Bbi1HRy9nb29nbGUtcmVwbGFjZS13aXRoLW9yaWdpbmFsLWxpbmtzL1xuLy8gQHZlcnNpb24gICAgICAwLjAuMVxuLy8gQGVuY29kaW5nICAgICB1dGYtOFxuLy8gQGRlc2NyaXB0aW9uICBUaGlzIHNjcmlwdCB3aWxsIG9ic2VydmUgZm9yIGNoYW5nZXMgaW4gdGhlIERPTSB0cmVlIGFuZCB3aWxsIHN3YXAgb3V0IGFueSB0cmFja2luZyBsaW5rcyBpZiBpdCBzZWVzIHRoZW0uXG4vLyBAaWNvbiAgICAgICAgIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Bbi1HRy9nb29nbGUtcmVwbGFjZS13aXRoLW9yaWdpbmFsLWxpbmtzL21hc3Rlci9kaXN0L2dvb2dsZS1yZXBsYWNlLXRyYWNraW5nLWxpbmtzLnBuZ1xuLy8gQGF1dGhvciAgICAgICBBbi1HR1xuLy8gQG1hdGNoICAgICAgICAqOi8vKi5nb29nbGUuY29tLypcbi8vIEBjb21wYXRpYmxlICAgY2hyb21lXG4vLyBAY29tcGF0aWJsZSAgIGZpcmVmb3hcbi8vIEBjb21wYXRpYmxlICAgb3BlcmFcbi8vIEBjb21wYXRpYmxlICAgc2FmYXJpXG4vLyBAY29tcGF0aWJsZSAgIGVkZ2Vcbi8vIEBkb3dubG9hZFVSTCAgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FuLUdHL2dvb2dsZS1yZXBsYWNlLXdpdGgtb3JpZ2luYWwtbGlua3MvbWFzdGVyL2Rpc3QvaW5kZXguanNcbi8vIEB1cGRhdGVVUkwgICAgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FuLUdHL2dvb2dsZS1yZXBsYWNlLXdpdGgtb3JpZ2luYWwtbGlua3MvbWFzdGVyL2Rpc3QvaW5kZXguanNcbi8vIEBydW4tYXQgICAgICAgZG9jdW1lbnQtZW5kXG4vLyA9PS9Vc2VyU2NyaXB0PT1cblxuZnVuY3Rpb24gbGlua19zZWFyY2goKSB7XG4gICAgZm9yIChsZXQgZyBvZiBkb2N1bWVudC5ib2R5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2cnKSkge1xuICAgICAgICBmb3IgKGxldCBhIG9mIGcuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGEuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgaWYgKGwgPT0gbnVsbCkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbScgKyBsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobC5zdGFydHNXaXRoKCdodHRwJykgJiYgIWwuc3RhcnRzV2l0aCgnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbScpKSB7IFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgdSA9IG5ldyBVUkwobCk7XG4gICAgICAgICAgICAgICAgaWYgKHUuc2VhcmNoUGFyYW1zLmhhcygndXJsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNyY2xpbmsgPSAodS5zZWFyY2hQYXJhbXMuZ2V0KCd1cmwnKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmNsaW5rICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhIGFzIEhUTUxFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBzcmNsaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsaW5rX3JlZygpIHtcbiAgICAobmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlua19zZWFyY2gpKS5vYnNlcnZlKGRvY3VtZW50LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcbn1cblxubGlua19yZWcoKTtcblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
