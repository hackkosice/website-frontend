<template>
  <div id="venue-background">
    <div class="container">
      <PageHeading :display="5">Location</PageHeading>
      <div class="location">
        <SubPageHeading
          ><img
            alt="🇸🇰"
            src="https://s.w.org/images/core/emoji/11/svg/1f1f8-1f1f0.svg"
          /><b>Kosice, Slovakia</b></SubPageHeading
        >
      </div>
      <SubPageHeading>
        <b>Venue:</b> Kunsthalle/Hala umenia Košice
      </SubPageHeading>
      <MapViewer
        :position="{ lat: 48.72483, lon: 21.261012 }"
        :zoom="17"
        :enablePicker="true"
        :fixed="false"
        :tooltip="{
          title: 'Kunsthalle Košice',
          description: 'Rumanova 1, 040 01 Košice, Slovakia'
        }"
        style="height: 500px"
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
  }
};
</script>

<style lang="scss" scoped>
#venue-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://media.kosiceregion.com/assets/50196/large_hala_umenia_4.jpg");
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
}
</style>
