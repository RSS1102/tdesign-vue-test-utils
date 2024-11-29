<script setup lang="ts">
import { DatePicker } from 'tdesign-vue-next';
const datePickerProps = defineProps({
  placeholder: String,
  customClass: String
})
</script>

<!-- https://tdesign.tencent.com/vue-next/components/date-picker?tab=demo -->
<template>
  <DatePicker :class="customClass" :placeholder="datePickerProps.placeholder"
    :popup-props="{ attach: `.${customClass}` }" />
</template>
