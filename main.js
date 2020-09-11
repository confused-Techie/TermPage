function getTime() {
            let date = new Date(),
                min = date.getMinutes(),
                hour = date.getHours();

                return '' +
                    (hour < 10 ? ('0' + hour) : hour) + ':' +
                    (min < 10 ? ('0' + min) : min);
        }

        //Get current date
        function getDate() {
            var dt = new Date();

            //Ensure date comes as 01, 02, etc
            var DD = ('0' + dt.getDate()).slice(-2);
            //getMonth returns month from 0
            var MM = ('0' + (dt.getMonth() + 1)).slice(-2);

            //Final output
            return '' +
                (DD + '/' + MM);
        }

        function enterTrigger() {
          if (event.keyCode === 13) {
            //window.alert(document.getElementById("cliInput").value);
            //13 is enter, and the above is sanity check
            var data = document.getElementById("cliInput").value;
            var dataL = data.toLocaleLowerCase();
            var dataAr = dataL.split(" ");

            if (dataAr[0] == "sudo") {
              processBash("You are not in the sudoers file. This incident will be reported!", "","","","","");

            }
            else if (dataAr[0] == "ls") {
              processBash("stream :: Streaming Sites", "dev :: Developer Sites","web :: Web Managment","","","");

            }
            else if (dataAr[0] == "cat") {
              if (dataAr[1] == "stream") {
                //<a href='example.com'>'example'</a>   Use this to format the links
                processBash("<a href='https://www.hulu.com/hub/home'>'Hulu'</a>",
                  "<a href='https://www.crunchyroll.com/'>'Crunchyroll'</a>",
                  "<a href='https://www.disneyplus.com/'>'Disney+'</a>",
                  "<a href='https://www.netflix.com/'>'Netflix'</a>", "", "");
              }
              if (dataAr[1] == "dev") {
                processBash("<a href='https://github.com/'>'GitHub'</a> ",
                  "<a href='https://partner.microsoft.com/en-us/dashboard'>'Microsoft Partner Center'</a>",
                  "<a href='https://developers.meethue.com/'>'Philips Hue Developer'</a> ", "", "", "");
              }
              if (dataAr[1] == "web") {
                processBash("<a href='https://dash.cloudflare.com/'>'Cloudflare'</a> ",
                  "<a href='https://domains.google.com/'>'Google Domains'</a>",
                  "<a href='https://search.google.com/search-console?'>'Google Search Console'</a>", "", "", "");
              }
            }
            else if (dataAr[0] == "test") {

              processBash(test, "", "", "", "", "");
            }
            else if (dataAr[0] == "whoami") {

              processBash(navigator.userAgent, "", "", "", "", "");
            }
            else if (dataAr[0] == "cd") {
              window.open('http://google.com/search?q='+data.replace("cd ", ""));
            }
            else if (dataAr[0] == "clear") {
              processBash("", "","","","","");
            }
            else if (dataAr[0] == "help") {
              processBash("cd [search term] :: Search Google", "ls :: list Shortcut lists", "cat [filename] :: Open Shortcut lists", "nano [Term] :: Open local URI ('help' for all items)", "whoami :: Display UserAgent", "help- :: Page 2 of Help");
            }
            else if (dataAr[0] == "help-") {
              processBash("", "", "", "", "", "");
            }
            else if (dataAr[0] == "nano") {
              if (dataAr[1] == "help") {
                processBash("settings :: Microsoft Settings", "steam :: Open Steam Game Library", "", "", "", "");
              }
              else if (dataAr[1] == "settings" || dataAr[1] == "setting") {
                window.open('ms-settings:');
              }
              else if (dataAr[1] == "steam") {
                window.open('steam://browsemedia');
              }
              else {
                processBash(dataAr[1]+": No such file or directory")
              }
            }
            else {
              processBash(dataAr[0]+": command not found", "", "", "", "", "");
            }
          }

        }

        function processBash(displayOutput, dOut2, dOut3, dOut4, dOut5, dOut6) {
          //window.alert(displayOutput);
          document.getElementById("output").innerHTML = displayOutput;
          document.getElementById("cliInput").value = "";

            document.getElementById("output2").innerHTML = dOut2;


            document.getElementById("output3").innerHTML = dOut3;


            document.getElementById("output4").innerHTML = dOut4;

            document.getElementById("output5").innerHTML = dOut5;

            document.getElementById("output6").innerHTML = dOut6;

        }



        window.onload = () => {
            // Set up the clock and date
            document.getElementById('clock').innerHTML = getTime();
            document.getElementById('date').innerHTML = getDate();

            // Set clock interval to tick clock
            setInterval( () => {
                document.getElementById('clock').innerHTML = getTime();
            },100);
        }
