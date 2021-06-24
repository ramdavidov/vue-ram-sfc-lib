<template>
  <section class="ram-loader">
    <img :src="require(`@/${icon}`)" :width="width" />
  </section>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "100px",
    },
  },
};
</script>