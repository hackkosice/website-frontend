<template>
  <div>
    <div class="container">
      <PageHeading :display="5">Sponsors & Partners</PageHeading>
      <SubPageHeading
        >Hack Kosice wouldn’t be possible without our amazing sponsors and
        partners</SubPageHeading
      >

      <SponsorsGroup
        v-for="group in sponsors"
        :key="group.type"
        :group="group"
        :config="sections[group.type]"
      />
    </div>
  </div>
</template>

<script>
import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import SponsorsGroup from "@/molecules/home/SponsorsGroup.vue";

export default {
  name: "SponsorsPartners",

  components: {
    PageHeading,
    SubPageHeading,
    SponsorsGroup
  },

  data: function() {
    return {
      sponsors: [
        {
          type: "platinum",
          entities: [],
          placeholders: 1
        },
        {
          type: "gold",
          entities: [],
          placeholders: 2
        },
        {
          type: "silver",
          entities: [],
          placeholders: 2
        },
        {
          type: "bronze",
          entities: [],
          placeholders: 4
        },
        {
          type: "general",
          entities: [
            {
              name: "Pavol Jozef Šafárik University in Košice",
              logo: require("@/assets/imgs/sponsors/upjs.png"),
              url: "https://www.upjs.sk",
              style: "square"
            }
          ],
          placeholders: false
        },
        {
          type: "partners",
          entities: [
            {
              name: "Major League Hacking",
              logo: require("@/assets/imgs/sponsors/mlh.svg"),
              url: "https://mlh.io/",
              style: "wide"
            },
            {
              name: "Notion",
              logo: require("@/assets/imgs/sponsors/notion.svg"),
              url: "https://www.notion.so/",
              style: "square"
            },
            {
              name: "Monday.com",
              logo: require("@/assets/imgs/sponsors/mondaydotcom.png"),
              url: "https://www.monday.com/",
              style: "high"
            }
          ],
          placeholders: false
        }
      ],

      sections: {
        platinum: {
          title: "Platinum sponsors",
          style: "big",
          perRow: 1
        },
        gold: {
          title: "Gold sponsors",
          style: "big",
          perRow: 2
        },
        silver: {
          title: "Silver sponsors",
          style: "big",
          perRow: 2
        },
        bronze: {
          title: "Bronze sponsors",
          style: "small",
          perRow: 4
        },
        general: {
          title: "General partner",
          style: "big",
          perRow: 1
        },
        partners: {
          title: "Partners",
          style: "small",
          perRow: 3
        }
      }
    };
  }
};
</script>
