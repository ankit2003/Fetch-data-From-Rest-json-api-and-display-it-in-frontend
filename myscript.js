var url = "http://13.127.117.81:8095/tensorSensorInfo/";
           
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var data = this.responseText;
                    var mydata = JSON.parse(data);
                    
                    for(var i=0;i<80;i++)
                    {
                        var x=mydata[i].room;
                        var y=mydata[i].slot;
                        var z="pallet"+x;
                        //document.write(x+"  "+y+ " <br>");
                        //document.getElementById("").innerHTML =y;
                        document.getElementById(z).innerHTML =y;
                        //document.write(z);
                    
                    }
                }
                };
            xhttp.open("GET", "http://13.127.117.81:8095/tensorSensorInfo/", true);
            xhttp.send();