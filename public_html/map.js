/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


varplanes=[["7C6B07",-40.99497,174.50808],
            ["Museum",-41.30269,173.63696],
            ["Castle Entrance",-41.49413,173.5421],
            ["Centre",-40.98585,174.50659],
            ["Pamvotis Lake",-40.93163,173.81726],
            ["Tzami",-41.5183,174.78081]];
         
        
        var map=L.map('map').setView([39.665029, 20.853747],15);
        mapLink='<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {attribution:'Map data &copy; '+mapLink,maxZoom:18,}).addTo(map);
        
   //     var marker = L.marker([39.665029, 20.853747])
     //           .addTo(map)
       //         .bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
         //       .openPopup();
        