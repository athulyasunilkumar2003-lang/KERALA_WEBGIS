var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KERALA1_1 = new ol.format.GeoJSON();
var features_KERALA1_1 = format_KERALA1_1.readFeatures(json_KERALA1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KERALA1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KERALA1_1.addFeatures(features_KERALA1_1);
var lyr_KERALA1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KERALA1_1, 
                style: style_KERALA1_1,
                popuplayertitle: 'KERALA1',
                interactive: true,
    title: 'KERALA1<br />\
    <img src="styles/legend/KERALA1_1_0.png" /> Alapuzha<br />\
    <img src="styles/legend/KERALA1_1_1.png" /> Ernakulam<br />\
    <img src="styles/legend/KERALA1_1_2.png" /> Idukki<br />\
    <img src="styles/legend/KERALA1_1_3.png" /> Kannur<br />\
    <img src="styles/legend/KERALA1_1_4.png" /> Kasargod<br />\
    <img src="styles/legend/KERALA1_1_5.png" /> Kollam<br />\
    <img src="styles/legend/KERALA1_1_6.png" /> Kottayam<br />\
    <img src="styles/legend/KERALA1_1_7.png" /> Kozhikkode<br />\
    <img src="styles/legend/KERALA1_1_8.png" /> Malappuram<br />\
    <img src="styles/legend/KERALA1_1_9.png" /> Palakkad<br />\
    <img src="styles/legend/KERALA1_1_10.png" /> Pathanamthitta<br />\
    <img src="styles/legend/KERALA1_1_11.png" /> Thiruvananthapuram<br />\
    <img src="styles/legend/KERALA1_1_12.png" /> Thrissur<br />\
    <img src="styles/legend/KERALA1_1_13.png" /> Wayanad<br />\
    <img src="styles/legend/KERALA1_1_14.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KERALA1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KERALA1_1];
lyr_KERALA1_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'LINKID': 'LINKID', 'NAME': 'NAME', 'FAMILIES': 'FAMILIES', 'M': 'M', 'F': 'F', 'AREA': 'AREA', 'ls': 'ls', 'fz': 'fz', });
lyr_KERALA1_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'LINKID': 'Range', 'NAME': 'TextEdit', 'FAMILIES': 'TextEdit', 'M': 'TextEdit', 'F': 'TextEdit', 'AREA': 'TextEdit', 'ls': 'TextEdit', 'fz': 'TextEdit', });
lyr_KERALA1_1.set('fieldLabels', {'DISTRICT': 'inline label - always visible', 'LINKID': 'no label', 'NAME': 'inline label - always visible', 'FAMILIES': 'no label', 'M': 'no label', 'F': 'no label', 'AREA': 'inline label - always visible', 'ls': 'no label', 'fz': 'no label', });
lyr_KERALA1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});