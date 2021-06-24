<template>
  <form class="ram-form" @submit.prevent="validateForm()">
    <div
      v-for="field in fields"
      :key="field.name"
      :class="`ram-tf ram-tf-${field.name}`"
    >
      <Ram-text-field
        v-model="form[field.name]"
        :type="field.type"
        :placeholder="field.placeholder"
        :isRequired="field.isRequired"
        :pattern="field.pattern"
      />
      <div class="error-info-container">
        <span v-if="errorMap" class="field-error">{{
          errorMap[field.name]
        }}</span>
        <template v-if="field.info">
          <a v-if="field.isInfoLink" class="field-info info-link">{{ field.info }}</a>
          <span v-else class="field-info info-span">{{ field.info }}</span>
        </template>
      </div>
    </div>

    <div class="test-red">
      <slot />
    </div>
  </form>
</template>

<script>
import RamTextField from "./RamTextField.vue";

export default {
  name: "RamForm",
  data() {
    return {
      form: null,
      isValid: false,
      errorMap: null,
    };
  },
  created() {
    const form = {};
    this.fields.forEach((field) => (form[field.name] = ""));
    this.form = form;
  },
  props: {
    onSubmit: {
      type: Function,
      default: () => {},
      required: true,
    },
    fields: { type: Array },
  },
  methods: {
    validateForm() {
      const errorMap = {};
      const fields = Object.keys(this.form);
      fields.forEach((field) => {
        if (field === "email" && !this.validateEmail(this.form[field])) {
          errorMap[field] = "כתובת מייל אינה תקינה";
        } else if (field === "password" && this.form[field].length < 6) {
          errorMap[field] = "סיסמה חייבת להכיל לפחות 6 תווים";
        }

        if (!this.form[field]) errorMap[field] = `${field} is empty`;
      });

      this.isValid = Object.keys(errorMap).length ? false : true;

      if (this.isValid) {
        this.errorMap = null;
        this.onSubmit({ ...this.form });
      } else {
        this.errorMap = errorMap;
      }
    },
    validateEmail(email) {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    },
  },
  components: {
    RamTextField,
  },
};
</script>

<style scoped>
.error-info-container {
  display: flex;
  flex-direction: column;
}
</style>