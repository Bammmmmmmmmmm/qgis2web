var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SAVI1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI (1)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11326770.000000, 1762117.917902, 11486460.000000, 1931115.673233]
                            })
                        });
var lyr_ndvi_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11326770.000000, 1762117.917902, 11486460.000000, 1931115.673233]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_SAVI1_1.setVisible(true);lyr_ndvi_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SAVI1_1,lyr_ndvi_2];
