"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bubble = void 0;

var bubble = function bubble() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#ffffff";
  var polygonSides = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 4;
  var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  return {
    "particles": {
      "number": {
        "value": number,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": color
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": color
        },
        "polygon": {
          "nb_sides": polygonSides
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": speed,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": size,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": speed,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": size,
          "duration": 2,
          "opacity": 8,
          "speed": speed
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
};

exports.bubble = bubble;
var _default = {
  bubble: bubble
};
exports.default = _default;