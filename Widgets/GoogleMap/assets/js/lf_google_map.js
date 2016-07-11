var LolitaFramework;
(function (LolitaFramework) {
    var WidgetGoogleMap = (function () {
        function WidgetGoogleMap() {
            jQuery('.lf_google_map').each(function () {
                if (null === LolitaFramework.WidgetGoogleMap.script) {
                    LolitaFramework.WidgetGoogleMap.script = document.createElement("script");
                    LolitaFramework.WidgetGoogleMap.script.type = 'text/javascript';
                    LolitaFramework.WidgetGoogleMap.script.src = 'http://maps.googleapis.com/maps/api/js?callback=LolitaFramework.WidgetGoogleMap.init&key=';
                    LolitaFramework.WidgetGoogleMap.script.src = LolitaFramework.WidgetGoogleMap.script.src + jQuery(this).data('apiKey');
                    document.body.appendChild(LolitaFramework.WidgetGoogleMap.script);
                }
            });
        }
        WidgetGoogleMap.init = function () {
            jQuery('.lf_google_map').each(function () {
                LolitaFramework.WidgetGoogleMap.loadLatLng(jQuery(this));
            });
        };
        WidgetGoogleMap.loadLatLng = function ($map) {
            var me = this;
            jQuery.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + $map.data('address'),
                success: function (response) {
                    if ('OK' === response.status) {
                        LolitaFramework.WidgetGoogleMap.initMap(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng, $map[0], $map.data('pinImg'));
                    }
                    else {
                        LolitaFramework.WidgetGoogleMap.initMap(40.4778838, -74.290702, $map[0], $map.data('pinImg'));
                    }
                }
            });
        };
        WidgetGoogleMap.initMap = function (lat, lng, el, pin) {
            var mapOptions = {
                zoom: 15,
                center: new window.google.maps.LatLng(lat, lng),
                scrollwheel: false,
                disableDefaultUI: false,
                draggable: true,
                styles: window.lf_google_map_l10n.styles
            };
            if (window.lf_google_map_l10n.is_mobile) {
                mapOptions.disableDefaultUI = true;
                mapOptions.draggable = false;
            }
            var map = new window.google.maps.Map(el, mapOptions);
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(lat, lng),
                map: map,
                icon: pin,
                title: 'Click to zoom'
            });
            window.google.maps.event.addListener(marker, 'click', function () {
                map.setZoom(8);
                map.setCenter(marker.getPosition());
            });
        };
        WidgetGoogleMap.script = null;
        return WidgetGoogleMap;
    }());
    LolitaFramework.WidgetGoogleMap = WidgetGoogleMap;
    window.LolitaFramework.widget_google_map = new WidgetGoogleMap();
})(LolitaFramework || (LolitaFramework = {}));
//# sourceMappingURL=lf_google_map.js.map