<template>
  <div class="home">
    <WelcomeSection />
    <WhatIsHK />
    <NewsSubscription />
    <SponsorsPartners />
    <Venue />
  </div>
</template>

<script>
import WelcomeSection from "@/organisms/home/WelcomeSection.vue";
import WhatIsHK from "@/organisms/home/WhatIsHK.vue";
import NewsSubscription from "@/organisms/home/NewsSubscription.vue";
import SponsorsPartners from "@/organisms/home/SponsorsPartners.vue";
import Venue from "@/organisms/home/Venue.vue";

export default {
  name: "home",
  components: {
    WelcomeSection,
    WhatIsHK,
    NewsSubscription,
    SponsorsPartners,
    Venue
  }
};
</script>
