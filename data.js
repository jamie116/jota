var APP_DATA = {
  "scenes": [
    {
      "id": "0-4-",
      "name": "4층 복도",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.547844784148566,
          "pitch": 0.2245382673644798,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": -0.5891980934543142,
          "pitch": 0.08838464937023716,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "강당",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1707842716057364,
          "pitch": 0.08502846234635442,
          "rotation": 0,
          "target": "0-4-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5930978984968878,
          "pitch": -0.16982482601987492,
          "title": "유령민석",
          "text": "조타 부위원장의 현실"
        }
      ]
    },
    {
      "id": "2-",
      "name": "자치활동실",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3192617132210067,
          "pitch": 0.2300143623003308,
          "rotation": 0.7853981633974483,
          "target": "0-4-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
