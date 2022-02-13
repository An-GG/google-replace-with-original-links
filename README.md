
# Force True Source Links in Google Search

Minimal script that replaces the obnoxious tracking links in search results with their 
destination's true address when injected into the Google results page.

The results page waits until the last moment to add the actual `<a>` link element for each result to the page,
right after the user clicks down (probably to discourage exactly this), so we can't just replace all hrefs once
at load time. Instead, we have to watch for mutation events.

This script will observe for changes in the DOM tree and will swap out any tracking links if it sees them.

# Install as UserScript

You'll need a UserScripts manager installed, I am using [UserScripts Safari](https://apps.apple.com/us/app/userscripts/id1463298887). You can also use [TamperMonkey](https://www.tampermonkey.net/).

Then make a new UserScript and paste the contents of [this file](https://raw.githubusercontent.com/An-GG/google-replace-with-original-links/master/dist/index.js).
<br> 
<br> 
<br> 
 
## before  
![before](https://raw.githubusercontent.com/An-GG/google-replace-with-original-links/master/example_gif/a.gif)  
*absolutely disgusting*   

## after
![after](https://raw.githubusercontent.com/An-GG/google-replace-with-original-links/master/example_gif/b.gif)
  

