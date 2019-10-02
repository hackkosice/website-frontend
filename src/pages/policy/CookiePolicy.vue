<template>
  <div class="container">
    <PageHeading :display="4">Cookie policy</PageHeading>

    <TextHeading class="mt-5">What are cookies?</TextHeading>
    <TextParagraph>
      Cookies are small text files stored on your computer or mobile phone.
      Cookies help us provide you with the best possible experience while
      browsing our site.
    </TextParagraph>

    <TextHeading class="mt-5">What type of cookies we use?</TextHeading>
    <TextParagraph>
      We use two types: persistent cookies and session cookies. A persistent
      cookie helps us recognize you as an existing user. After you sign in, a
      persistent cookie stays in your browser and will be read by our site when
      you return. Session cookies only last for as long as the session.
    </TextParagraph>

    <TextHeading class="mt-5">What do we use cookies for?</TextHeading>
    <TextParagraph>
      Cookies help us store information about your browsing on your computer.
      Enables you to log in and stayed logged in. By using our website, you
      agree to the use of cookies and as set out in this policy.
    </TextParagraph>

    <TextHeading class="mt-5">How can I control or delete cookies?</TextHeading>
    <TextParagraph>
      Within your browser you can choose whether you wish to accept cookies or
      not. To find out more on how to manage and delete cookies, visit
      aboutcookies.org. Please remember, if you do delete some or all your
      cookies, some features on our website, such as remembering your username,
      may not work and your experience on our website may be affected.
    </TextParagraph>

    <TextHeading class="mt-5">More information about cookies</TextHeading>
    <TextParagraph class="mb-5">
      <ul>
        <li>
          <strong><Link link="allaboutcookies.org"/></strong>
        </li>
        <li>
          <strong><Link link="cookiepedia.co.uk"/></strong>
        </li>
      </ul>
    </TextParagraph>
  </div>
</template>

<script>
import PageHeading from "@/atoms/PageHeading.vue";
import TextHeading from "@/atoms/TextHeading.vue";
import TextParagraph from "@/atoms/TextParagraph.vue";
import Link from "@/atoms/Link.vue";

export default {
  name: "CookiePolicy",

  components: {
    PageHeading,
    TextHeading,
    TextParagraph,
    Link
  }
};
</script>
