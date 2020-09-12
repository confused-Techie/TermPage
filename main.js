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
              for (var i = 0; i < scList.length; i++) {
                if (dataAr[1] == scList[i]) {
                  var shortList = dataAr[1]+"_sc";

                  //create link entries
                  try {
                    var entry1 = linkMaker(shortcut[shortList][0][0], shortcut[shortList][0][1]);
                  } catch(err) { var entry1 = ""; }
                  try {
                    var entry2 = linkMaker(shortcut[shortList][1][0], shortcut[shortList][1][1]);
                  } catch(err) { var entry2 = "";}
                  try {
                    var entry3 = linkMaker(shortcut[shortList][2][0], shortcut[shortList][2][1]);
                  } catch(err) { var entry3 = "";}
                  try {
                    var entry4 = linkMaker(shortcut[shortList][3][0], shortcut[shortList][3][1]);
                  } catch(err) { var entry4 = "";}
                  try {
                    var entry5 = linkMaker(shortcut[shortList][4][0], shortcut[shortList][4][1]);
                  } catch(err) { var entry5 = "";}
                  try {
                    var entry6 = linkMaker(shortcut[shortList][5][0], shortcut[shortList][5][1]);
                  } catch(err) { var entry6 = "";}

                  processBash(entry1, entry2, entry3, entry4, entry5, entry6);
                }
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
//<a href='example.com'>'example'</a>
        function linkMaker(nameC, linkC) {
          if (nameC != null && linkC != null) {
            return "<a href="+linkC+">"+nameC+"</a>";
          } else {
            return "";
          }
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
