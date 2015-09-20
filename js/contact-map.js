jQuery(document).ready(function($) {
    google.maps.event.addDomListener(window, 'load', initialize);
    function initialize() {
        var myLatlng = new google.maps.LatLng(39.22843, - 76.818502);
        var mapOptions = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 14,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('map-surface'), mapOptions);
        var mapURL = '9030+Red+Branch+Road%2C+Suite+110%2C+Columbia%2C+MD+21045';
        var contentString = '<h3>Homewatch CareGivers</h3>' + '<span itemprop="address">' + '<span itemprop="street-address">9030 Red Branch Road</span><br />' + '<span itemprop="street-address">Suite 110</span><br />' + '<span itemprop="locality">Columbia</span> ' + '<span itemprop="region">MD</span> ' + '<span itemprop="postal-code">21045</span><br />' + '<a target="_self" href="http://maps.google.com/maps?source=embed&amp;q=' + mapURL + '&amp;ie=UTF8&amp;z=14&amp;iwloc=A" style="color:#0000FF; text-align:left">Get Directions</a>' + '</span>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Homewatch CareGivers'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        google.maps.event.trigger(marker, 'click');
        map.panBy(0, - 100);
        google.maps.event.addListener(map, 'zoom_changed', function() {
            if (this.getZoom() > 18)
                this.setZoom(18);
        });
    }
});

