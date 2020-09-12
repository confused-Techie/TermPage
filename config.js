var scList = ["stream", "dev", "web"];
var scListD = ["Streaming Sites", "Developer Sites", "Web Managment"];

var userNameV = "User";
var hostNameV = "Chrome";

//The definition within shortcut should look like the following:
// "NAME_sc" : [ ["Link Name 1", "Link Address 1"], ["Link Name 2", "Link Address 2"]]
// Keep in mind there can only be a total of 6 entries per ShortCut List.
//Also NAME in NAME_sc has to match exactly with the value in scList.
const shortcut = {
  "stream_sc" : [ ["Hulu", "https://www.hulu.com/hub/home"], ["Crunchyroll", "https://www.crunchyroll.com/"], ["Disney+", "https://www.disneyplus.com/"], ["Netflix", "https://www.netflix.com/"]],
  "dev_sc" : [ ["Github", "https://github.com/"], ["Microsoft Partner Center", "https://partner.microsoft.com/en-us/dashboard"], ["Philips Hue Developer", "https://developers.meethue.com/"]],
  "web_sc" : [ ["Cloudflare", "https://dash.cloudflare.com/"], ["Google Domains", "https://domains.google.com/"], [ "Google Search Console", "https://search.google.com/search-console?"]]
};

var favourites = [ ["Reddit", "https://reddit.com"], ["YouTube", "https://youtube.com"], ["YouTube Music", "https://music.youtube.com"], ["Heimdall", "http://192.168.0.30:8080"], ["Netflix", "https://netflix.com"], ["Gmail", "https://mail.google.com"]];
