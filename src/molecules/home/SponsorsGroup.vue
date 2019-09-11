<template>
  <div class="row mb-4">
    <div class="col-12 sponsors-group">
      <h3 class="text-center mb-4">{{ config.title }}</h3>
      <div v-for="(row, index) in sponsors" :key="index" class="row">
        <div v-for="(sponsor, index) in row" :key="index" :class="columnClass">
          <SponsorPlaceholder v-if="sponsor.placeholder" :config="config" />
          <SponsorTile v-else :sponsor="sponsor.entity" :config="config" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SponsorTile from "@/atoms/home/SponsorTile.vue";
import SponsorPlaceholder from "@/atoms/home/SponsorPlaceholder.vue";

export default {
  name: "SponsorsGroup",

  components: {
    SponsorTile,
    SponsorPlaceholder
  },

  props: {
    config: {
      type: Object,
      required: true
    },

    group: {
      type: Object,
      required: true
    }
  },

  computed: {
    sponsors: function() {
      const sponsors = this.group.entities.map(e => this.wrapSponsorEntity(e));
      const placeholders = this.group.placeholders
        ? Array(this.group.placeholders).fill(this.wrapSponsorEntity())
        : [];

      return this.toRows(sponsors.concat(placeholders));
    },

    columnClass: function() {
      if (this.config.perRowResponsive) {
        const widthDesktop = 12 / this.config.perRow;
        const widthMobile = 12 / this.config.perRowResponsive;
        return `col-${widthMobile} col-md-${widthDesktop}`;
      } else {
        const width = 12 / this.config.perRow;
        return `col-${width}`;
      }
    }
  },

  methods: {
    wrapSponsorEntity(entity = null) {
      return {
        entity: entity,
        placeholder: !entity
      };
    },

    toRows(sponsors) {
      const data = sponsors.slice();
      const chuckSize = this.config.perRow;

      return new Array(Math.ceil(data.length / chuckSize))
        .fill()
        .map(_ => data.splice(0, chuckSize)); // eslint-disable-line no-unused-vars
    }
  }
};
</script>
