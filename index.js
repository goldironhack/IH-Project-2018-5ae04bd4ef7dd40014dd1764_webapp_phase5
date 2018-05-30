      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: new google.maps.LatLng(40.7291,-73.9965),
mapTypeId: 'terrain'
        });

        var script = document.createElement('script');
script.src = 'https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD&jsonp=myfun';
document.getElementsByTagName('head')[0].appendChild(script);
      }
window.myfun = function(results) {
        for (var i = 0; i<results.data.length; i++) {

          var arr=  results.data[i];
           var str = arr[9]
           console.log(arr)
           var c1 = str.substr(7,18)
           var c2 = str.substr(25,18)
           c2 = c2.replace(")","")
            var latLng = new google.maps.LatLng(c2,c1);
            var marker = new google.maps.Marker({
              position: latLng,
              map: map
            });

            var contentString = "<h3 class='title'>"+arr[10]+"</h3>";
            var infowindow = new google.maps.InfoWindow({
              content: contentString,
            });
marker.addListener('click', function() {
map.center = new google.maps.LatLng(c2,c1);
infowindow.open(map,marker);
            });

        }
      }
 var xmlhttp = new XMLHttpRequest();
var url = "https://catalog.data.gov/dataset/neighborhood-names-gis?q=myname";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
var myArr = xmlhttp.responseText;
var text = myArr;
}
};
var json = JSON.parse(text);
document.getElementById("weather").innerHTML = "Today the weather is <em><b>" + json.weather[0].main + "</b></em>";
for (i = 0; i<3; i++) {
   array[i] = Math.random();
}
d = [
   [
       {axis:"Price",value:array[0]},
       {axis:"Safety",value:array[1]},
       {axis:"Distance",value:array[2]},
   ]
];