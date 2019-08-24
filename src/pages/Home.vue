<template>
  <div class="home">
    <WelcomeSection />
    <WhatIsHK />
    <PreRegistration />
    <SponsorsPartners />
    <Venue />
  </div>
</template>

<script>

import WelcomeSection from "@/organisms/home/WelcomeSection.vue";
import WhatIsHK from "@/organisms/home/WhatIsHK.vue";
import PreRegistration from "@/organisms/home/PreRegistration.vue";
import SponsorsPartners from "@/organisms/home/SponsorsPartners.vue";
import Venue from "@/organisms/home/Venue.vue";

export default {
  name: "home",
  components: {
    WelcomeSection,
    WhatIsHK,
    PreRegistration,
    SponsorsPartners,
    Venue,
  },
};
</script>
