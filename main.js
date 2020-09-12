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
              //create ShortCut List Entries w/ optional description
              try {
                if (scListD[0] != null && scList[0] != null) {
                  var lsEntry1 = scList[0]+" :: "+scListD[0];
                } else if (scList[0] != null) {
                  var lsEntry1 = scList[0];
                } else {
                  var lsEntry1 = "";
                }
              } catch(err) {
                var lsEntry1 = "";
              }

              try {
                if (scListD[1] != null && scList[1] != null) {
                  var lsEntry2 = scList[1]+" :: "+scListD[1];
                } else if (scList[1] != null) {
                  var lsEntry2 = scList[1];
                } else {
                  var lsEntry2 = "";
                }
              } catch(err) {
                var lsEntry2 = "";
              }

              try {
                if (scListD[2] != null && scList[2] != null) {
                  var lsEntry3 = scList[2]+" :: "+scListD[2];
                } else if (scList[2] != null) {
                  var lsEntry3 = scList[2];
                } else {
                  var lsEntry3 = "";
                }
              } catch(err) {
                var lsEntry3 = "";
              }

              try {
                if (scListD[3] != null && scList[3] != null) {
                  var lsEntry4 = scList[3]+" :: "+scListD[3];
                } else if (scList[3] != null) {
                  var lsEntry4 = scList[3];
                } else {
                  var lsEntry4 = "";
                }
              } catch(err) {
                var lsEntry4 = "";
              }

              try {
                if (scListD[4] != null && scList[4] != null) {
                  var lsEntry5 = scList[4]+" :: "+scListD[4];
                } else if (scList[4] != null) {
                  var lsEntry5 = scList[4];
                } else {
                  var lsEntry5 = "";
                }
              } catch(err) {
                var lsEntry5 = "";
              }

              try {
                if (scListD[5] != null && scList[5] != null) {
                  var lsEntry6 = scList[5]+" :: "+scListD[5];
                } else if (scList[5] != null) {
                  var lsEntry6 = scList[5];
                } else {
                  var lsEntry6 = "";
                }
              } catch(err) {
                var lsEntry6 = "";
              }

              processBash(lsEntry1, lsEntry2, lsEntry3, lsEntry4, lsEntry5, lsEntry6);

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

            //assign proper username and hostname to each part of the page
            document.getElementById('userName').innerHTML = userNameV;
            document.getElementById('userName2').innerHTML = userNameV;
            document.getElementById('userName3').innerHTML = userNameV;
            document.getElementById('hostName').innerHTML = hostNameV;
            document.getElementById('hostName2').innerHTML = hostNameV;
            document.getElementById('hostName3').innerHTML = hostNameV;

            //assiign favourites
            document.getElementById('fav1').innerHTML = linkMaker(favourites[0][0], favourites[0][1]);
            document.getElementById('fav2').innerHTML = linkMaker(favourites[1][0], favourites[1][1]);
            document.getElementById('fav3').innerHTML = linkMaker(favourites[2][0], favourites[2][1]);
            document.getElementById('fav4').innerHTML = linkMaker(favourites[3][0], favourites[3][1]);
            document.getElementById('fav5').innerHTML = linkMaker(favourites[4][0], favourites[4][1]);
            document.getElementById('fav6').innerHTML = linkMaker(favourites[5][0], favourites[5][1]);

            // Set clock interval to tick clock
            setInterval( () => {
                document.getElementById('clock').innerHTML = getTime();
            },100);
        }
