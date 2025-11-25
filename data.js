var APP_DATA = {
  "scenes": [
    {
      "id": "0-first-look",
      "name": "first look",
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
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.4478840221950744,
        "pitch": -0.03611639364717867,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 0.3625484412356741,
          "pitch": 0.004280724877030906,
          "rotation": 0,
          "target": "2-halaman-ujung-tangga-masuk"
        },
        {
          "yaw": -0.8377772949827431,
          "pitch": -0.0011893248956056368,
          "rotation": 0,
          "target": "1-parkiran"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parkiran",
      "name": "parkiran",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.67846942404279,
          "pitch": 0.18823342296102652,
          "rotation": 0,
          "target": "0-first-look"
        },
        {
          "yaw": 1.0813383887462216,
          "pitch": 0.18817676536739647,
          "rotation": 0,
          "target": "2-halaman-ujung-tangga-masuk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-halaman-ujung-tangga-masuk",
      "name": "halaman ujung tangga masuk",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.045098132005993,
          "pitch": 0.027749631333101377,
          "rotation": 0,
          "target": "3-sudut-tangga-masuk"
        },
        {
          "yaw": 1.7712549264039925,
          "pitch": 0.1474554579314038,
          "rotation": 0,
          "target": "1-parkiran"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sudut-tangga-masuk",
      "name": "sudut tangga masuk",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.904556294545042,
          "pitch": 0.14257686865036057,
          "rotation": 0,
          "target": "4-adminb"
        },
        {
          "yaw": -1.1012075772706886,
          "pitch": 0.2913202400549171,
          "rotation": 0,
          "target": "2-halaman-ujung-tangga-masuk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-adminb",
      "name": "adminb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.966688005840469,
          "pitch": 0.16682021748659714,
          "rotation": 0,
          "target": "7-sudut-ujung-lorong-admin"
        },
        {
          "yaw": -2.465117288346521,
          "pitch": 0.3413403584292922,
          "rotation": 0,
          "target": "5-samping-admin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3123287094494742,
          "pitch": 0.49119001044224575,
          "title": "Komputer Registrasi",
          "text": "Ketika ingin masuk kedalam Perpustakaan harus registrasi terlebih dahulu dengan memasukkan identitas."
        },
        {
          "yaw": 1.8695386960523903,
          "pitch": 0.3852906155533198,
          "title": "Admin Perpustakaan",
          "text": "Meja Pengawas sekaligus admin perpustakaan"
        }
      ]
    },
    {
      "id": "5-samping-admin",
      "name": "samping admin",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01577966089539906,
          "pitch": 0.28552956400882046,
          "rotation": 0,
          "target": "6-tengah-bawah-tempat-duduk-utama"
        },
        {
          "yaw": -1.7047076899454403,
          "pitch": 0.463785131593923,
          "rotation": 0,
          "target": "4-adminb"
        },
        {
          "yaw": 1.0549281411154112,
          "pitch": 0.4027195324726236,
          "rotation": 0,
          "target": "7-sudut-ujung-lorong-admin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-tengah-bawah-tempat-duduk-utama",
      "name": "tengah bawah tempat duduk utama",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10091142244234419,
          "pitch": 0.26792738961536067,
          "rotation": 0,
          "target": "5-samping-admin"
        },
        {
          "yaw": 0.690477416291694,
          "pitch": 0.06843122786841604,
          "rotation": 0,
          "target": "9-tangga-tengah-"
        },
        {
          "yaw": -2.9658724991511285,
          "pitch": 0.3610707037449572,
          "rotation": 0,
          "target": "8-pano_20251103_162615_9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sudut-ujung-lorong-admin",
      "name": "sudut ujung lorong admin",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1236042752809556,
          "pitch": 0.2591033672559071,
          "rotation": 0,
          "target": "5-samping-admin"
        },
        {
          "yaw": -0.022168508013777455,
          "pitch": 0.1683191603481724,
          "rotation": 0,
          "target": "8-pano_20251103_162615_9"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.087731621130964,
          "pitch": -0.0051359803511132895,
          "title": "Gudang Perpustakaan",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-pano_20251103_162615_9",
      "name": "PANO_20251103_162615_9",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8912990683276902,
          "pitch": 0.34604696734179896,
          "rotation": 0,
          "target": "7-sudut-ujung-lorong-admin"
        },
        {
          "yaw": -2.2306313403367852,
          "pitch": 0.5341438482944092,
          "rotation": 0,
          "target": "6-tengah-bawah-tempat-duduk-utama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-tangga-tengah-",
      "name": "tangga tengah ",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6888051214002298,
          "pitch": 0.30940091151968296,
          "rotation": 0,
          "target": "5-samping-admin"
        },
        {
          "yaw": 1.201607194204815,
          "pitch": 0.27328797666893045,
          "rotation": 0,
          "target": "6-tengah-bawah-tempat-duduk-utama"
        },
        {
          "yaw": -1.426750898435337,
          "pitch": 0.12521773436831296,
          "rotation": 0,
          "target": "10-ujung-tangga-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ujung-tangga-atas",
      "name": "ujung tangga atas",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4975046937291072,
          "pitch": 0.5447751088946671,
          "rotation": 0,
          "target": "9-tangga-tengah-"
        },
        {
          "yaw": -2.8260360147667463,
          "pitch": 0.2683683065244349,
          "rotation": 0,
          "target": "11-ruangan-atas-tutup"
        },
        {
          "yaw": 2.809274888859166,
          "pitch": 0.1352449633625561,
          "rotation": 0,
          "target": "17-wc-cewe"
        },
        {
          "yaw": 2.534534011608036,
          "pitch": 0.15729745977382592,
          "rotation": 0,
          "target": "18-wc-cowo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7583652658495588,
          "pitch": -0.09886958332976903,
          "title": "Wc Wanita",
          "text": "Water Closet Wanita"
        },
        {
          "yaw": 2.575245302872217,
          "pitch": -0.09620799101940847,
          "title": "Wc Pria",
          "text": "Water Closet Pria"
        }
      ]
    },
    {
      "id": "11-ruangan-atas-tutup",
      "name": "ruangan atas tutup",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.208657590214208,
          "pitch": 0.2812332294266575,
          "rotation": 0,
          "target": "10-ujung-tangga-atas"
        },
        {
          "yaw": 2.5806440943470346,
          "pitch": 0.44094463168201337,
          "rotation": 0,
          "target": "12-ujung-lorong-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ujung-lorong-atas",
      "name": "ujung lorong atas",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41561363374859006,
          "pitch": 0.4136161556966016,
          "rotation": 0,
          "target": "11-ruangan-atas-tutup"
        },
        {
          "yaw": -0.13062679943878663,
          "pitch": 0.39207799997656423,
          "rotation": 0,
          "target": "10-ujung-tangga-atas"
        },
        {
          "yaw": 1.1262561466265808,
          "pitch": 0.13347857020960774,
          "rotation": 0,
          "target": "13-meja-atas-perpu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-meja-atas-perpu",
      "name": "meja atas perpu",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8056066603211303,
          "pitch": 0.3040824873894472,
          "rotation": 0,
          "target": "12-ujung-lorong-atas"
        },
        {
          "yaw": 1.3629224677657827,
          "pitch": 0.3512199743269946,
          "rotation": 0,
          "target": "14-lawan-arah-ujung"
        },
        {
          "yaw": -0.2980526415585789,
          "pitch": 0.25277780319050436,
          "rotation": 0,
          "target": "10-ujung-tangga-atas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-lawan-arah-ujung",
      "name": "lawan arah ujung",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7512583656453593,
          "pitch": 0.20719294656766607,
          "rotation": 0,
          "target": "13-meja-atas-perpu"
        },
        {
          "yaw": -0.17522172390134472,
          "pitch": 0.022344598075996203,
          "rotation": 0,
          "target": "12-ujung-lorong-atas"
        },
        {
          "yaw": 1.645397685459372,
          "pitch": 0.42282636098506643,
          "rotation": 0,
          "target": "15-samping-ujung-lawan-arah"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-samping-ujung-lawan-arah",
      "name": "samping ujung lawan arah",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2707197262115191,
          "pitch": 0.18500591705261726,
          "rotation": 0,
          "target": "16-lorong-samping-balkon"
        },
        {
          "yaw": -2.89461299723086,
          "pitch": 0.2504081953061075,
          "rotation": 0,
          "target": "14-lawan-arah-ujung"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-lorong-samping-balkon",
      "name": "lorong samping balkon",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9757432312969287,
          "pitch": 0.2676098543270147,
          "rotation": 0,
          "target": "15-samping-ujung-lawan-arah"
        },
        {
          "yaw": 0.2053880468642717,
          "pitch": 0.5163541575856829,
          "rotation": 0,
          "target": "0-first-look"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-wc-cewe",
      "name": "wc cewe",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-wc-cowo",
      "name": "wc cowo",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "UAS VR KLP 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
