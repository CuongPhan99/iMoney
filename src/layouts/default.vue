<template>
  <navigation-header v-if="meta.isShowHeader" />
  <slot />
  <navigation-bottom v-if="meta.isShowFooter" />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  components: { NavigationBottom, NavigationHeader },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
