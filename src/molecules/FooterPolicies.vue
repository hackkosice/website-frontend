<template>
  <div>
    <h4>Policies</h4>
    <p>
      <span v-for="(group, index) in policies">

        <span v-for="policy in group" class="d-block">
          <Link :link="policy.route"
                :title="policy.title"
                :external="!policy.internal"
                :target="policy.internal ? '_self' : '_blank'"
          />
        </span>

        <br v-if="policies.length !== (index + 1)">

      </span>
    </p>
  </div>
</template>

<script>

  import Link from '@/atoms/Link.vue'

  export default {
    name: 'FooterPolicies',
    components: {
      Link,
    },
    data: function () {
      return {
        policies: [
          [
            {
              route: '/policy/cookie',
              title: 'Cookie policy',
              internal: true,
            },
            {
              route: '/policy/privacy',
              title: 'Privacy policy',
              internal: true,
            },
          ],
          [
            {
              route: 'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
              title: 'MLH Code of conduct',
            },
            {
              route: 'https://mlh.io/privacy',
              title: 'MLH Privacy policy',
            },
            {
              route: 'https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md',
              title: 'MLH Contest Terms and Conditions',
            },
          ],
        ]
      };
    },
  };

</script>
