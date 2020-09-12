# TermPage

A Terminal themed Startpage.

![Screenshot](home.PNG?raw=true "Screenshot")

The Startpage will always show the date and time at the top, as well as a list of favourite links.

But from there, you have a sudo-terminal that allows some basic commands, bringing the ability to search the web, show other lists of ShortCuts, and a few other actions.
All available commands are listed <a href="https://github.com/confused-Techie/TermPage/wiki/Commands">here</a>.
If you would like to see a short video showing the use click <a href="https://www.youtube.com/embed/DjoGSAESUW0">here</a>.

### How to set up a local file startpage

**Homepage**

Go into your preffered web browser and access the settings to change the homepage to a custom URL.

Then add your file like this: `file:///path/to/index.html`
Or if you'd like, you can click on index.html after downloading and copy the link that shows at the top of your browser. And use that, rather than type it in manually.

### Change the Favourites List
To change your list of favourites that show up, go ahead and open the `config.js` in your preffered text editor (like Atom or Notepad).
Then find the variable named `favourites` and modify it as needed. 
Keep in mind you need to keep the format the same as it is currently, like so: <br>
`var favourites = [ ["Name of Favourite", "https://Link-to-Favourite"], ["Name of Second Favourite", "https://Link-to-2nd-Favourite"], ....(And so on)` <br>
Currently the list of favourites is locked at 6 items,but that should change soon.

### Custom ShortCut Lists
To create a custom ShortCut List you need a minimum of three things.
1. Name of the ShortCut List
2. Name for the Links
3. Web Address Link

To create a brand new ShortCut List again open `config.js` and find the variable `scList`, within `scList` add the name of your new ShortCut List.<br>
`var scList = ["new-shortcut-list"];`<br>
If you would like you can also add a description for the list in `scListD`, but that is optional.

Then to add the ShortCut list itself find the variable `shortcut` in `config.js` and modify it like so:<br>
`const shortcut = {
  "new-shortcut-list" : [ ["Name of Link", "https://address-of-link"], ["Name of Link2", "https://address-of-link2"], .....(And so on)`<br>
  
Some things to keep in mind, the name of the list in `scList` and in `shortcut` have to match exactly, and will be what you have to type with `cat` to view the list.
As well as currently these list only support six entries, but again hopefully that will change soon.

### Change User name and Host name
The UserName and HostName shown in the pictures as `[User@Chrome ~]$` can also be modified. <br>
In `config.js` find the variables `userNameV` and `hostNameV` and change them to whatever you want!

### But what does it look like?
[![Watch the video](results.PNG?raw=true)](
https://youtu.be/DjoGSAESUW0)
Click the image to watch a video.
