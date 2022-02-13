
# Force True Source Links in Google Search

Minimal script that replaces the obnoxious tracking links in search results with their 
destination's true address when injected into the Google results page.

The results page waits until the last moment to add the actual `<a>` link element for each result to the page,
right after the user clicks down (probably to discourage exactly this), so we can't just replace all hrefs once
at load time. Instead, we have to watch for mutation events.

This script will observe for changes in the DOM tree and will swap out any tracking links if it sees them.
  
## before  
![before](https://www.cs.utexas.edu/~angg/google-true-source-links-examples/a.gif)  
*absolutely disgusting*   

## after
![after](https://www.cs.utexas.edu/~angg/google-true-source-links-examples/b.gif)
  

