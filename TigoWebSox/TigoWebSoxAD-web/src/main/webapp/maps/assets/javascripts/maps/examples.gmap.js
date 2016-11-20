/*
 Name:           Maps / Basic - Examples
 Written by:     Okler Themes - (http://www.okler.net)
 Theme Version:  1.1.0
 */

(function ($) {

    'use strict';

    var customMarkers = [];
    var initBasic = function () {
        var map = new GMaps({
            div: '#gmap-basic',
            lat: 18.46558,
            lng: -69.93027
        });

        var tramoArray = new Array();
        var tramoArrayCount = [0, 0, 0, 0, 0, 0, 0, 0];

        var tramoUnoArray = [{
                'lat': 18.46570,
                'lng': -69.93041
            }, {
                'lat': 18.46572,
                'lng': -69.93042
            }, {
                'lat': 18.46575,
                'lng': -69.93044,
            }, {
                'lat': 18.46578,
                'lng': -69.93045,
            }, {
                'lat': 18.46580,
                'lng': -69.93046,
            }, {
                'lat': 18.46583,
                'lng': -69.93047,
            }, {
                'lat': 18.46586,
                'lng': -69.93048,
            }, {
                'lat': 18.46589,
                'lng': -69.93049,
            }, {
                'lat': 18.46591,
                'lng': -69.93050,
            }, {
                'lat': 18.46594,
                'lng': -69.93052,
            }];

        var tramoDosArray = [{
                'lat': 18.46547,
                'lng': -69.93013
            }, {
                'lat': 18.46544,
                'lng': -69.93011
            }, {
                'lat': 18.46541,
                'lng': -69.93009
            }, {
                'lat': 18.46538,
                'lng': -69.93007
            }, {
                'lat': 18.46535,
                'lng': -69.93005
            }, {
                'lat': 18.46532,
                'lng': -69.93003
            }, {
                'lat': 18.46529,
                'lng': -69.93001
            }, {
                'lat': 18.46526,
                'lng': -69.92999
            }, {
                'lat': 18.46523,
                'lng': -69.92997
            }, {
                'lat': 18.46520,
                'lng': -69.92995
            }];

        var tramoTresArray = [{
                'lat': 18.46393,
                'lng': -69.92943
            }, {
                'lat': 18.46396,
                'lng': -69.92945
            }, {
                'lat': 18.46399,
                'lng': -69.92945
            }, {
                'lat': 18.46401,
                'lng': -69.92947
            }, {
                'lat': 18.46404,
                'lng': -69.92949
            }, {
                'lat': 18.46407,
                'lng': -69.92951
            }, {
                'lat': 18.46410,
                'lng': -69.92953
            }, {
                'lat': 18.46413,
                'lng': -69.92955
            }, {
                'lat': 18.46415,
                'lng': -69.92957
            }, {
                'lat': 18.46418,
                'lng': -69.92959
            }];

        var tramoCuatroArray = [{
                'lat': 18.46826,
                'lng': -69.93166
            }, {
                'lat': 18.46823,
                'lng': -69.93164
            }, {
                'lat': 18.46820,
                'lng': -69.93162
            }, {
                'lat': 18.46817,
                'lng': -69.93160
            }, {
                'lat': 18.46814,
                'lng': -69.93158
            }, {
                'lat': 18.46811,
                'lng': -69.93156
            }, {
                'lat': 18.46808,
                'lng': -69.93154
            }, {
                'lat': 18.46805,
                'lng': -69.93152
            }, {
                'lat': 18.46802,
                'lng': -69.93150
            }, {
                'lat': 18.46799,
                'lng': -69.93148
            }];

        var tramoCincoArray = [{
                'lat': 18.46542,
                'lng': -69.93029
            }, {
                'lat': 18.46541,
                'lng': -69.93033
            }, {
                'lat': 18.46540,
                'lng': -69.93035
            }, {
                'lat': 18.46539,
                'lng': -69.93038
            }, {
                'lat': 18.46538,
                'lng': -69.93041
            }, {
                'lat': 18.46537,
                'lng': -69.93044
            }, {
                'lat': 18.46536,
                'lng': -69.93047
            }, {
                'lat': 18.46535,
                'lng': -69.93050
            }, {
                'lat': 18.46534,
                'lng': -69.93053
            }, {
                'lat': 18.46533,
                'lng': -69.93056
            }];

        var tramoSeisArray = [{
                'lat': 18.46574,
                'lng': -69.93024
            }, {
                'lat': 18.46575,
                'lng': -69.93021
            }, {
                'lat': 18.46576,
                'lng': -69.93018
            }, {
                'lat': 18.46577,
                'lng': -69.93015
            }, {
                'lat': 18.46578,
                'lng': -69.93012
            }, {
                'lat': 18.46579,
                'lng': -69.93009
            }, {
                'lat': 18.46580,
                'lng': -69.93006
            }, {
                'lat': 18.46581,
                'lng': -69.93003
            }, {
                'lat': 18.46582,
                'lng': -69.93000
            }, {
                'lat': 18.46583,
                'lng': -69.92997
            }];

        var tramoSieteArray = [{
                'lat': 18.46283,
                'lng': -69.93592
            }, {
                'lat': 18.46285,
                'lng': -69.93587
            }, {
                'lat': 18.46287,
                'lng': -69.93582
            }, {
                'lat': 18.46289,
                'lng': -69.93582
            }, {
                'lat': 18.46291,
                'lng': -69.93577
            }, {
                'lat': 18.46293,
                'lng': -69.93572
            }, {
                'lat': 18.46295,
                'lng': -69.93567
            }, {
                'lat': 18.46297,
                'lng': -69.93562
            }, {
                'lat': 18.46299,
                'lng': -69.93557
            }, {
                'lat': 18.46301,
                'lng': -69.93552
            }];

        var tramoOchoArray = [{
                'lat': 18.46884,
                'lng': -69.92360
            }, {
                'lat': 18.46882,
                'lng': -69.92364
            }, {
                'lat': 18.46880,
                'lng': -69.92368
            }, {
                'lat': 18.46878,
                'lng': -69.92372
            }, {
                'lat': 18.46876,
                'lng': -69.92374
            }, {
                'lat': 18.46874,
                'lng': -69.92376
            }, {
                'lat': 18.46872,
                'lng': -69.92378
            }, {
                'lat': 18.46870,
                'lng': -69.92380
            }, {
                'lat': 18.46868,
                'lng': -69.92378
            }, {
                'lat': 18.46866,
                'lng': -69.92378
            }];

        tramoArray.push(tramoUnoArray);
        tramoArray.push(tramoDosArray);
        tramoArray.push(tramoTresArray);
        tramoArray.push(tramoCuatroArray);
        tramoArray.push(tramoCincoArray);
        tramoArray.push(tramoSeisArray);
        tramoArray.push(tramoSieteArray);
        tramoArray.push(tramoOchoArray);

        var tramo1PolygonCoord = [
            new google.maps.LatLng(18.465413, -69.930205),
            new google.maps.LatLng(18.462991, -69.928837),
            new google.maps.LatLng(18.462951, -69.928933),
            new google.maps.LatLng(18.465368, -69.930285)
        ];

        var tramo2PolygonCoord = [
            new google.maps.LatLng(18.465434, -69.930167),
            new google.maps.LatLng(18.465480, -69.930081),
            new google.maps.LatLng(18.463063, -69.928708),
            new google.maps.LatLng(18.463012, -69.928810)
        ];

        var tramo3PolygonCoord = [
            new google.maps.LatLng(18.465388, -69.930285),
            new google.maps.LatLng(18.465464, -69.930344),
            new google.maps.LatLng(18.462676, -69.935848),
            new google.maps.LatLng(18.462600, -69.935811)
        ];

        var tramo4PolygonCoord = [
            new google.maps.LatLng(18.465576, -69.930135),
            new google.maps.LatLng(18.468619, -69.924052),
            new google.maps.LatLng(18.468873, -69.923676),
            new google.maps.LatLng(18.468802, -69.923585),
            new google.maps.LatLng(18.468538, -69.923993),
            new google.maps.LatLng(18.466507, -69.928097),
            new google.maps.LatLng(18.465485, -69.930081)
        ];

        var tramo5PolygonCoord = [
            new google.maps.LatLng(18.465612, -69.930419),
            new google.maps.LatLng(18.465693, -69.930462),
            new google.maps.LatLng(18.462864, -69.935961),
            new google.maps.LatLng(18.462788, -69.935923)
        ];

        var tramo6PolygonCoord = [
            new google.maps.LatLng(18.465698, -69.930221),
            new google.maps.LatLng(18.465785, -69.930274),
            new google.maps.LatLng(18.469057, -69.923816),
            new google.maps.LatLng(18.468985, -69.923767)
        ];

        var tramo7PolygonCoord = [
            new google.maps.LatLng(18.465693, -69.930468),
            new google.maps.LatLng(18.465744, -69.930382),
            new google.maps.LatLng(18.468166, -69.931696),
            new google.maps.LatLng(18.468095, -69.931766)
        ];

        var tramo8PolygonCoord = [
            new google.maps.LatLng(18.465752, -69.930352),
            new google.maps.LatLng(18.465795, -69.930258),
            new google.maps.LatLng(18.468245, -69.931599),
            new google.maps.LatLng(18.468194, -69.931677)
        ];

        var tramo1Polygon = new google.maps.Polygon({
            paths: tramo7PolygonCoord
        });

        var tramo2Polygon = new google.maps.Polygon({
            paths: tramo2PolygonCoord
        });

        var tramo3Polygon = new google.maps.Polygon({
            paths: tramo1PolygonCoord
        });

        var tramo4Polygon = new google.maps.Polygon({
            paths: tramo8PolygonCoord
        });

        var tramo5Polygon = new google.maps.Polygon({
            paths: tramo3PolygonCoord
        });

        var tramo6Polygon = new google.maps.Polygon({
            paths: tramo6PolygonCoord
        });

        var tramo7Polygon = new google.maps.Polygon({
            paths: tramo4PolygonCoord
        });

        var tramo8Polygon = new google.maps.Polygon({
            paths: tramo5PolygonCoord
        });

        map.addMarker({
            lat: 18.46557,
            lng: -69.93026,
            icon: "./assets/images/light.png",
            infoWindow: {
                content: '<p>Semaforo 1</p>'
            }
        });

        var maxLenght = 60;

        for (var index = 0; index < maxLenght; index++) {
            var indexParent = Math.floor(Math.random() * (7 - 0 + 1) + 0);
            var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);

            tramoArrayCount[indexParent] = tramoArrayCount[indexParent] + 1;
            map.addMarker({
                lat: tramoArray[indexParent][indexChild].lat,
                lng: tramoArray[indexParent][indexChild].lng,
                infoWindow: {
                    content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoArray[indexParent][indexChild].lat + '. lng: ' + tramoArray[indexParent][indexChild].lng + '</p>'
                }
            });
        }

        var tiempo1 = (tramoArrayCount[0] + tramoArrayCount[2]) <= 60 ? ((tramoArrayCount[0]) * 1.5) : (tramoArrayCount[0] > tramoArrayCount[2]) ? ((60 - tramoArrayCount[0]) * 1.5) : ((60 - tramoArrayCount[2]) * 1.5);
        var tiempo2 = (tramoArrayCount[1] + tramoArrayCount[3]) <= 60 ? ((tramoArrayCount[2]) * 1.5) : (tramoArrayCount[1] > tramoArrayCount[3]) ? ((60 - tramoArrayCount[1]) * 1.5) : ((60 - tramoArrayCount[3]) * 1.5);
        var tiempo3 = (tramoArrayCount[4] + tramoArrayCount[6]) <= 60 ? ((tramoArrayCount[4]) * 1.5) : (tramoArrayCount[4] > tramoArrayCount[6]) ? ((60 - tramoArrayCount[4]) * 1.5) : ((60 - tramoArrayCount[6]) * 1.5);
        var tiempo4 = (tramoArrayCount[7] + tramoArrayCount[5]) <= 60 ? ((tramoArrayCount[5]) * 1.5) : (tramoArrayCount[7] > tramoArrayCount[5]) ? ((60 - tramoArrayCount[5]) * 1.5) : ((60 - tramoArrayCount[5]) * 1.5);

        var url = "./data.html?tramo1=" + tramoArrayCount[0] + "," + tramoArrayCount[1] + "," + tiempo1 + "&tramo2=" + tramoArrayCount[2] + "," + tramoArrayCount[3] + "," + tiempo2 + "&tramo3=" + tramoArrayCount[4] + "," + tramoArrayCount[5] + "," + tiempo3 + "&tramo4=" + tramoArrayCount[6] + "," + tramoArrayCount[7] + "," + tiempo4;

        console.log(url);

        var table = jQuery("#datatable-details");
        table.append("<tr> <td>Ave. Abraham Lincoln</td> <td><input type='text' class='pinCount' id='tramo1ainput' style='width: 50px;' value='" + tramoArrayCount[0] + "'/></td> <td><input type='text' class='pinCount' id='tramo1binput' style='width: 50px;' value='" + tramoArrayCount[1] + "'/></td><td><input type='text' class='pinCount' id='tramo2ainput' style='width: 50px;' value='" + tramoArrayCount[2] + "'/></td><td><input type='text' class='pinCount' id='tramo2binput' style='width: 50px;' value='" + tramoArrayCount[3] + "'/></td><td><input type='text' class='pinCount' id='tramo3ainput' style='width: 50px;' value='" + tramoArrayCount[4] + "'/></td><td><input type='text' class='pinCount' id='tramo3binput' style='width: 50px;' value='" + tramoArrayCount[7] + "'/></td><td><input type='text' id='tramo4ainput' class='pinCount' style='width: 50px;' value='" + tramoArrayCount[6] + "'/></td><td><input type='text' class='pinCount' id='tramo4binput' style='width: 50px;' value='" + tramoArrayCount[5] + "'/></td></tr>");

        setInterval(function () {
            jQuery.ajax({
                url: "http://198.199.77.198:7001/TigoWebSoxAD-web/rest/websoxService/getLocation", 
            }).done(function (response) {
                console.log(response.length);
                if (response.length > 0) {

                    for (var index in response) {
                        try {
                            var data = response[index].accion.split(",");
                            var code = response[index].proceso;

                            if (data.length < 2) {
                                if (customMarkers[index] !== undefined) {
                                    if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo1Polygon)) {
                                        var object = jQuery("#tramo1ainput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }

                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo2Polygon)) {
                                        var object = jQuery("#tramo1binput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo3Polygon)) {
                                        var object = jQuery("#tramo2ainput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo4Polygon)) {
                                        var object = jQuery("#tramo2binput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo5Polygon)) {
                                        var object = jQuery("#tramo3ainput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo6Polygon)) {
                                        var object = jQuery("#tramo3binput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo7Polygon)) {
                                        var object = jQuery("#tramo4ainput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo8Polygon)) {
                                        var object = jQuery("#tramo4binput");
                                        actualValue = object.val();

                                        if (object.attr("data-loaded") !== undefined) {
                                            if (object.attr("data-loaded").indexOf(code) > -1) {
                                                object.val(Number(actualValue) - 1);
                                            }
                                        }
                                    }
                                    customMarkers[index].setMap(null);
                                }
                                return;
                            }



                            if (customMarkers[index] !== undefined) {
                                var latlng = new google.maps.LatLng(parseFloat(data[0]), parseFloat(data[1]));
                                customMarkers[index].setPosition(latlng);
                            } else {
                                customMarkers[index] = map.addMarker({
                                    lat: parseFloat(data[0]),
                                    lng: parseFloat(data[1])
                                });
                            }

                            var elements = jQuery(".pinCount");
                            for(var count = 0; count < elements.length; count++){
                                var object = elements[count];
                                if(object.attr("data-loaded").indexOf(code) > -1){
                                    object.val(Number(object.val()) - 1);
                                    
                                    object.attr("data-loaded", object.attr("data-loaded").replace(code, ""));
                                }
                            }
                            
                            var actualValue = 0;
                            if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo1Polygon)) {
                                var object = jQuery("#tramo1ainput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }

                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo2Polygon)) {
                                var object = jQuery("#tramo1binput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo3Polygon)) {
                                var object = jQuery("#tramo2ainput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo4Polygon)) {
                                var object = jQuery("#tramo2binput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo5Polygon)) {
                                var object = jQuery("#tramo3ainput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo8Polygon)) {
                                var object = jQuery("#tramo3binput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo6Polygon)) {
                                var object = jQuery("#tramo4ainput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo7Polygon)) {
                                var object = jQuery("#tramo4binput");
                                actualValue = object.val();

                                if (object.attr("data-loaded") !== undefined) {
                                    if (object.attr("data-loaded").indexOf(code) === -1) {
                                        object.val(Number(actualValue) + 1);
                                    }
                                } else {
                                    object.val(Number(actualValue) + 1);
                                    object.attr("data-loaded", code);
                                }
                            }
                        } catch (err) {
                            if (customMarkers[index] !== undefined) {
                                if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo1Polygon)) {
                                    var object = jQuery("#tramo1ainput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }

                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo2Polygon)) {
                                    var object = jQuery("#tramo1binput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo3Polygon)) {
                                    var object = jQuery("#tramo2ainput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo4Polygon)) {
                                    var object = jQuery("#tramo2binput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo5Polygon)) {
                                    var object = jQuery("#tramo3ainput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo6Polygon)) {
                                    var object = jQuery("#tramo3binput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo7Polygon)) {
                                    var object = jQuery("#tramo4ainput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                } else if (google.maps.geometry.poly.containsLocation(customMarkers[index].position, tramo8Polygon)) {
                                    var object = jQuery("#tramo4binput");
                                    actualValue = object.val();

                                    if (object.attr("data-loaded") !== undefined) {
                                        if (object.attr("data-loaded").indexOf(code) > -1) {
                                            object.val(Number(actualValue) - 1);
                                        }
                                    }
                                }
                                customMarkers[index].setMap(null);
                            }
                        }

                    }
                }

            });
        }, 5000);

        jQuery("#startSimulationButton").on("click", function () {
            window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        });

        jQuery("#startSimulationButton2").on("click", function () {
            map.removeMarkers();

            map.addMarker({
                lat: 18.46557,
                lng: -69.93026,
                icon: "./assets/images/light.png",
                infoWindow: {
                    content: '<p>Semaforo 1</p>'
                }
            });

            var tramo1aTotal = jQuery("#tramo1ainput").val();
            var tramo1bTotal = jQuery("#tramo2ainput").val();
            var tramo2aTotal = jQuery("#tramo1binput").val();
            var tramo2bTotal = jQuery("#tramo2binput").val();
            var tramo3aTotal = jQuery("#tramo3ainput").val();
            var tramo3bTotal = jQuery("#tramo4ainput").val();
            var tramo4aTotal = jQuery("#tramo3binput").val();
            var tramo4bTotal = jQuery("#tramo4binput").val();

            tramoArrayCount[0] = 0;
            tramoArrayCount[1] = 0;
            tramoArrayCount[2] = 0;
            tramoArrayCount[3] = 0;
            tramoArrayCount[4] = 0;
            tramoArrayCount[5] = 0;
            tramoArrayCount[6] = 0;
            tramoArrayCount[7] = 0;

            if (tramo1aTotal > 60 || tramo1bTotal > 60 || tramo2aTotal > 60 || tramo2bTotal > 60 || tramo3aTotal > 60 || tramo3bTotal > 60 || tramo4aTotal > 60 || tramo4bTotal > 60) {
                alert("No pueden haber mas de 60 vehiculos en un carril");

                return;
            }

            var maxLenght = 60;

            for (var index = 0; index < tramo1aTotal; index++) {
                tramoArrayCount[0] = tramoArrayCount[0] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoUnoArray[indexChild].lat,
                    lng: tramoUnoArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoUnoArray[indexChild].lat + '. lng: ' + tramoUnoArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo1bTotal; index++) {
                tramoArrayCount[1] = tramoArrayCount[1] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoDosArray[indexChild].lat,
                    lng: tramoDosArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoDosArray[indexChild].lat + '. lng: ' + tramoDosArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo2aTotal; index++) {
                tramoArrayCount[2] = tramoArrayCount[2] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoTresArray[indexChild].lat,
                    lng: tramoTresArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoTresArray[indexChild].lat + '. lng: ' + tramoTresArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo2bTotal; index++) {
                tramoArrayCount[3] = tramoArrayCount[3] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoCuatroArray[indexChild].lat,
                    lng: tramoCuatroArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoCuatroArray[indexChild].lat + '. lng: ' + tramoCuatroArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo3aTotal; index++) {
                tramoArrayCount[4] = tramoArrayCount[4] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoCincoArray[indexChild].lat,
                    lng: tramoCincoArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoCincoArray[indexChild].lat + '. lng: ' + tramoCincoArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo3bTotal; index++) {
                tramoArrayCount[5] = tramoArrayCount[5] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoOchoArray[indexChild].lat,
                    lng: tramoOchoArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoOchoArray[indexChild].lat + '. lng: ' + tramoOchoArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo4aTotal; index++) {
                tramoArrayCount[6] = tramoArrayCount[6] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoSeisArray[indexChild].lat,
                    lng: tramoSeisArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoSeisArray[indexChild].lat + '. lng: ' + tramoSeisArray[indexChild].lng + '</p>'
                    }
                });

            }

            for (var index = 0; index < tramo4bTotal; index++) {
                tramoArrayCount[7] = tramoArrayCount[7] + 1;

                var indexChild = Math.floor(Math.random() * (9 - 0 + 1) + 0);
                map.addMarker({
                    lat: tramoSieteArray[indexChild].lat,
                    lng: tramoSieteArray[indexChild].lng,
                    infoWindow: {
                        content: '<p>Usuario ' + (index + 1) + ', lat: ' + tramoSieteArray[indexChild].lat + '. lng: ' + tramoSieteArray[indexChild].lng + '</p>'
                    }
                });

            }

            var tiempo1 = (tramoArrayCount[0] + tramoArrayCount[1]) <= 60 ? ((tramoArrayCount[0]) * 1.5) : (tramoArrayCount[0] > tramoArrayCount[1]) ? ((60 - tramoArrayCount[0]) * 1.5) : ((60 - tramoArrayCount[1]) * 1.5);
            var tiempo2 = (tramoArrayCount[2] + tramoArrayCount[3]) <= 60 ? ((tramoArrayCount[2]) * 1.5) : (tramoArrayCount[2] > tramoArrayCount[3]) ? ((60 - tramoArrayCount[2]) * 1.5) : ((60 - tramoArrayCount[3]) * 1.5);
            var tiempo3 = (tramoArrayCount[4] + tramoArrayCount[5]) <= 60 ? ((tramoArrayCount[4]) * 1.5) : (tramoArrayCount[4] > tramoArrayCount[5]) ? ((60 - tramoArrayCount[4]) * 1.5) : ((60 - tramoArrayCount[5]) * 1.5);
            var tiempo4 = (tramoArrayCount[6] + tramoArrayCount[7]) <= 60 ? ((tramoArrayCount[6]) * 1.5) : (tramoArrayCount[6] > tramoArrayCount[7]) ? ((60 - tramoArrayCount[6]) * 1.5) : ((60 - tramoArrayCount[7]) * 1.5);

            var url = "./data.html?tramo1=" + tramoArrayCount[0] + "," + tramoArrayCount[1] + "," + tiempo1 + "&tramo2=" + tramoArrayCount[2] + "," + tramoArrayCount[3] + "," + tiempo2 + "&tramo3=" + tramoArrayCount[4] + "," + tramoArrayCount[5] + "," + tiempo3 + "&tramo4=" + tramoArrayCount[6] + "," + tramoArrayCount[7] + "," + tiempo4;

            window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

        });
    };

    $(function () {

        initBasic();

    });

}).apply(this, [jQuery]);
