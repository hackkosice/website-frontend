<template>
  <div class="container pb-5">
    <PageHeading :display="4">Frequently Asked Questions</PageHeading>
    <SubPageHeading>
      Answers to most of the questions you might be asking about Hack Kosice
    </SubPageHeading>

    <div class="row mt-5">
      <div v-for="(column, index) in questions" :key="index" class="col-sm-6">
        <span
          v-for="(question, id) in column"
          :key="id"
          class="faq-link-wrapper"
        >
          <a
            v-smooth-scroll="{ offset: offset }"
            :href="'#' + id"
            class="faq-link"
          >
            {{ question }}
          </a>
        </span>
      </div>
    </div>

    <SubPageHeading class="mt-5">
      Didn't find your answer here? Don't hesitate and
      <Link link="contact-us" title="contact us" />!
    </SubPageHeading>

    <div id="whats-in-it" class="mt-5">
      <TextHeading>What's in it for me?</TextHeading>
      <TextParagraph>
        As a participant, you get the following:
        <ul>
          <li>
            A weekend of innovation and fun with <strong>250 smartest peers</strong>
          </li>
          <li>
            Interaction with top tech companies in the region
          </li>
          <li>
            Workshops and talks by experienced professionals (more info on that
            later)
          </li>
          <li>
            Free food, drinks & swag
          </li>
          <li>
            Prizes
          </li>
        </ul>
        If you wish to take another role (e.g. sponsor, mentor, speaker), please
        <Link link="contact-us" title="do contact us" />!
      </TextParagraph>
    </div>

    <div id="how-much" class="mt-5">
      <TextHeading>How much does it cost?</TextHeading>
      <TextParagraph>
        Nothing. Attending Hack Kosice is 100% free, and we’d like to thank our
        awesome sponsors who make it possible!
        <br /><br />
        In addition to that, you will enjoy a lot of free food and swag during
        the event.
      </TextParagraph>
    </div>

    <div id="to-be-student" class="mt-5">
      <TextHeading>Do I need to be a student?</TextHeading>
      <TextParagraph>
        Only students who are currently enrolled at a high school, college,
        university or graduated in past 12 months are eligible to attend.
        <br /><br />
        However, are you interested in this event or totally excited about it?
        You can also be a volunteer,
        <Link
          link="https://mlh.io/mentors"
          title="mentor"
          :external="true"
          target="_blank"
        />, sponsor or judge. <Link link="contact-us" title="Contact us!" />
      </TextParagraph>
    </div>

    <div id="travel-reimbursements" class="mt-5">
      <TextHeading>Do you provide travel reimbursements?</TextHeading>
      <TextParagraph>
        Yes! We provide travel reimbursements if you are coming from abroad. Up
        to 20€ if you are coming from Czechia/Poland/Hungary/Austria/Ukraine and
        up to 50€ otherwise (excluding Slovakia).
        <br /><br />
        To get reimbursed, you need to submit travel receipts, attend the
        hackathon and demo a project.
      </TextParagraph>
    </div>

    <div id="visa-invitation-letters" class="mt-5">
      <TextHeading>Do you issue visa invitation letters?</TextHeading>
      <TextParagraph>
        Yes! If you need an Invitation letter for your visa application, please
        indicate so in your application.
      </TextParagraph>
    </div>

    <div id="applications" class="mt-5">
      <TextHeading>Do I need to apply?</TextHeading>
      <TextParagraph>
        Yes. Applications will be considered on an individual basis
        (or within your team if you register as a team).
      </TextParagraph>
    </div>

    <div id="why-cv" class="mt-5">
      <TextHeading>Why do I need to provide a CV?</TextHeading>
      <TextParagraph>
        Sponsors will have access to your CV. This is so that you can get on
        their radar and they can get your contact details for recruitment
        purposes. It’s a win-win!
      </TextParagraph>
    </div>

    <div id="teams" class="mt-5">
      <TextHeading>Will we work in teams?</TextHeading>
      <TextParagraph>
        Yes, you will work in teams of 2-4 people. However, if you come alone,
        you can participate in our team formation event at the beginning of the
        hackathon, where you can meet others with similar interests and
        complementary skillsets.
      </TextParagraph>
    </div>

    <div id="code-of-conduct" class="mt-5">
      <TextHeading>Is there a Code of Conduct?</TextHeading>
      <TextParagraph>
        Yes, there is. We enforce these rules very strongly. You can
        <Link
          link="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          title="find it here"
          :external="true"
          target="_blank"
        />.
      </TextParagraph>
    </div>

    <div id="mlh" class="mt-5">
      <TextHeading>What is Major League Hacking?</TextHeading>
      <TextParagraph>
        <Link
          link="https://mlh.io/"
          title="Major League Hacking (MLH)"
          :external="true"
          target="_blank"
        />
        is the official student hackathon league. Each year, they power over
        <Link
          link="http://mlh.io/events"
          title="200 weekend-long invention competitions"
          :external="true"
          target="_blank"
        />
        that inspire innovation, cultivate communities and teach computer
        science skills to more than <strong>100,000</strong> students around the
        world. MLH is an engaged and passionate maker community, consisting of
        the next generation of technology leaders and entrepreneurs.
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import { Constants } from "@/constants";

import PageHeading from "@/atoms/PageHeading.vue";
import SubPageHeading from "@/atoms/SubPageHeading.vue";
import TextHeading from "@/atoms/TextHeading.vue";
import TextParagraph from "@/atoms/TextParagraph.vue";
import Link from "@/atoms/Link.vue";

export default {
  name: "Faq",

  components: {
    PageHeading,
    SubPageHeading,
    TextHeading,
    TextParagraph,
    Link
  },

  data: function() {
    return {
      questions: {
        firstCol: {
          "whats-in-it": "What's in it for me?",
          "how-much": "How much does it cost?",
          "to-be-student": "Do I need to be a student?",
          "travel-reimbursements": "Do you provide travel reimbursements?",
          "visa-invitation-letters": "Do you issue visa invitation letters?"
        },
        secondCol: {
          applications: "Do I need to apply?",
          "why-cv": "Why do I need to provide a CV?",
          teams: "Will we work in teams?",
          "code-of-conduct": "Is there a Code of Conduct?",
          mlh: "What is Major League Hacking?"
        }
      }
    };
  },

  computed: {
    offset: function() {
      return -Constants.NAVBAR_HEIGHT;
    }
  }
};
</script>

<style lang="scss">
.faq-link-wrapper {
  display: block;
}

.faq-link {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
