
# Force True Source Links in Google Search

This is an extremely minimal script (37 lines) that replaces the obnoxious tracking 
links in search results with their destination's true address when injected into the results page.

The results page makes this task slightly non-trivial by waiting until the last moment to add the 
actual `<a>` link element for each result to the page, right after the user clicks down. (probably to 
discourage exactly this) 

Reverse engineering the event lifecycle to find an appropriate hook and prevent unwanted code execution is
the ideal approach if your goals are privacy oriented, and a number of excellent scripts out there do this 
really well.  *See:* [Rob--W/dont-track-me-google](https://github.com/Rob--W/dont-track-me-google)  

#

This project **does not focus on tracking prevention or privacy**, and only consists of the minimum possible 
complexity required to replace tracking links with their true destinations. This project's motivation was 
simply to reduce the amount of active JavaScript running for a client, and relatedly, to decrease the chance 
that changes to the page's source will require significant long-term maintenance of this project. (Honestly, 
I just thought it was neat how effective such a tiny piece of code could be.)

#
  
## before  
![before](https://www.cs.utexas.edu/~angg/google-true-source-links-examples/a.gif)  
*absolutely disgusting*   

## after
![after](https://www.cs.utexas.edu/~angg/google-true-source-links-examples/b.gif)
  
## script injection  
- can be loaded at any time (for now)

## extentions 
(somewhat jank) extensions here:
[google-replace-with-original-links-extensions](https://github.com/An-GG/google-replace-with-original-links-extensions)
