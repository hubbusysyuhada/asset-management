<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="#DC3545"/>
<circle cx="12" cy="12" r="9.5" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0043 5C12.8307 5.00031 13.5004 5.50424 13.5 6.12556L13.493 12.8756C13.4926 13.4969 12.8222 14.0003 11.9957 14C11.1693 13.9997 10.4996 13.4958 10.5 12.8744L10.507 6.12444C10.5074 5.50312 11.1778 4.99969 12.0043 5Z" fill="white"/>
<rect x="10.5" y="16" width="3" height="3" rx="1.5" fill="white"/>
</svg>

</template>

<script>
export default {
  name: 'IconWarningRed',
  props: {
    size: {
      Type: Number,
    },
    color: {
      Type: String,
    }
  },
  computed: {
    contentStyle() {
      const size = this.size || 24
      return `width: ${size}px; height: ${size}px`
    },
    colorStyle() {
      if (this.color) return `fill: ${this.color}`
      return ""
    }
  },
}
</script>