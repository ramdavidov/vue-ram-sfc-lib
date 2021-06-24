<template>
  <button class="ram-button" @click="action" :style="styles">
    <div>{{ text }}</div>
    <template>
      <img
        v-if="isLoading"
        class="bt-icon-loading"
        :src="require(`@/${iconLoading}`)"
      />
      <img
        v-else-if="icon && !isLoading"
        class="bt-icon"
        :src="require(`@/${icon}`)"
      />
    </template>
  </button>
</template>

<script>
export default {
  name: "RamButton",
  props: {
    text: {
      type: String,
      default: "Click me",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    iconLoading: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      default: () => {},
    },
    height: {
      type: String,
      default: "56px",
    },
    width: {
      type: String,
      default: "228px",
    },
    bgColor: {
      type: String,
      default: "#18C746",
    },
    color: {
      type: String,
      default: "#FFFFFF",
    },
    border: {
      type: String,
      default: "none",
    },
    colorHover: {
      type: String,
      default: "#30df5e",
    },
  },
  computed: {
    styles() {
      return {
        height: this.height,
        width: this.width,
        backgroundColor: this.bgColor,
        color: this.color,
        border: this.border,
      };
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: "16px";
  cursor: pointer;
  padding: "0 25px";
}

img {
  width: 24px;
  height: 24px;
  margin-inline-start: 30px;
}
</style>

