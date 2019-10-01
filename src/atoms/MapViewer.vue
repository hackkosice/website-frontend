<template>
  <div :id="mapId"></div>
</template>

<script>
export default {
  name: "MapViewer",

  props: {
    position: {
      type: Object,
      required: true
    },

    zoom: {
      type: Number,
      default: 13
    },

    enablePicker: {
      type: Boolean,
      default: false
    },

    tooltip: {
      type: Object,
      default: null
    }
  },

  data: function() {
    return {
      map: null,
      marker: null,
      popup: null,
      theme: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      icon: new L.Icon({
        iconUrl: require("@/assets/libs/leaflet/images/marker-icon-2x.png"),
        shadowUrl: require("@/assets/libs/leaflet/images/marker-shadow.png"),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    };
  },

  computed: {
    mapId: function() {
      return `map-${this._uid}`;
    }
  },

  mounted() {
    const map = L.map(this.mapId).setView(
      [this.position.lat, this.position.lon],
      this.zoom
    );
    this.map = map;

    L.tileLayer(this.theme, {
      minZoom: 1,
      maxZoom: 20
    }).addTo(map);

    if (this.enablePicker) {
      this.setMarker({ lat: this.position.lat, lon: this.position.lon });

      if (this.tooltip) {
        const popup = L.popup({
          autoClose: false,
          closeOnClick: false
        }).setContent(
          `<div>
            <h3 style="text-align: center;">${this.tooltip.title}</h3>
            <p>${this.tooltip.description}</p>
          </div>`
        );
        this.marker.bindPopup(popup).openPopup();
      }
    }
  },

  methods: {
    setMarker(latlng) {
      if (this.marker) {
        this.marker.remove();
        this.popup = null;
      }
      this.marker = L.marker(latlng, { icon: this.icon }).addTo(this.map);
    }
  }
};
</script>
