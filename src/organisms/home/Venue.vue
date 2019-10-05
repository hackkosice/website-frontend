<template>
  <div id="venue-background">
    <div class="container">
      <PageHeading :display="5">Location</PageHeading>
      <div class="location">
        <SubPageHeading><img
            alt="🇸🇰"
            src="@/assets/imgs/flag.svg"
          /><b>Kosice, Slovakia</b>
        </SubPageHeading>
      </div>
      <SubPageHeading>
        <b>Venue:</b> Kunsthalle/Hala umenia Košice
      </SubPageHeading>
      <MapViewer
        :position="position"
        :zoom="17"
        :enablePicker="true"
        :fixed="false"
        :tooltip="tooltip"
        class="map-viewer"
      />
    </div>
  </div>
</template>

<script>
import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import MapViewer from "@/atoms/MapViewer.vue";

export default {
  name: "VenueSection",

  components: {
    PageHeading,
    SubPageHeading,
    MapViewer
  },

  computed: {
    position: function() {
      return { lat: 48.72483, lon: 21.261012 };
    },
    tooltip: function() {
      return {
        title: 'Kunsthalle Košice',
        description: 'Rumanova 1, 040 01 Košice, Slovakia'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#venue-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~@/assets/imgs/venue_background.jpg);
  background-size: cover;
  background-attachment: fixed;
  color: white;

  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .location {
    b {
      font-size: 2rem;
    }

    img {
      height: 2rem;
      margin: 0 0.5rem 0.5rem 0;
    }
  }

  .map-viewer {
    height: 500px;
  }
}
</style>
