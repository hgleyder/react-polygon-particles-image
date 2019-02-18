export const bubble = (number = 10, size = 60, color = "#ffffff", polygonSides = 4, speed = 10) => ({
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
        },
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
          "speed": speed,
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
  })

  export default { bubble };