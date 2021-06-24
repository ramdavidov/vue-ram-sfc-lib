<template>
  <div class="ram-text-field">
    <input
      :type="type"
      :value="value"
      @input="onChange"
      :placeholder="placeholder"
      :required="isRequired"
      :pattern="pattern"
    />
  </div>
</template>

<script>
export default {
  name: "RamTextField",
  props: {
    value: { type: String, required: true },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    isRequired: { type: Boolean, default: false },
    pattern: {type: String, default: "{}"}
  },
  methods: {
    onChange(ev) {
      const value = ev.target.value;
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input {
  direction: rtl;
  box-sizing: border-box;
  height: 28.5px;
  width: 100%;
  font-size: 18px;
  color: #23445a;
  border: none;
  border-bottom: solid 1px #23445a;
  padding: 0 0 10px 4px;
  outline: none;
}

input:focus {
  border-bottom: solid 1px #0078c8;
}

input::placeholder {
  color: #23445a;
}

input:not(:placeholder-shown) {
  border-color: #e01f1f;
}

input:required:valid {
  border-color: #18c746;
}
</style>