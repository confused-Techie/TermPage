# TermPage

Simple terminal themed startpage

![Screenshot](screenshot.png?raw=true "Screenshot")

There are two versions, the one in the screenshot has a few links, time, date and no other functions. The cursor does blink but it's purely about aesthetics. (This one can be loaded from a local file with the `autoconfig.js` and `firefox.cfg`)

The second one ("index-ddg.html") features aduckduckgo search "bar"/field and is ment to be hosted because of `autofocus` which doesn't work on local files (at least in firefox). Also keep in mind that the search filed is just `8vw` in lenght to keep everything centerd so it can be quite small on smaller displays.

### How to set up a local file startpage

**Homepage**

Go to `about:preferences#home` and set "Homepage and new windows" to "Custom URLs..."

Then add your file like this: `file:///path/to/index.html`

NOTE: There has to be 3 `/` after `file:` so the full path on Linux would look something like this:

`file:////home/user/.config/startpage/index.html`

**New tab page**

We need the `autoconfig.js` and `firefox.cfg` for this. First open `firefox.cfg` and edit line 7 to have a correct path to `index.html`

After this copy the `autoconfig.js` to `defaults/preferences/` in Firefoxes installation folder (full path in Linux `/usr/lib/firefox/browser/defaults/preferences/autoconfig.js`).

And copy the `firefox.cfg` to the base installation folder (full path in Linux `/usr/lib/firefox/firefox.cfg/`).

Restart Firefox.


NOTE: The `userChrome.css` in the screenshot isn't finished yet, I will update this with a link once it is.
