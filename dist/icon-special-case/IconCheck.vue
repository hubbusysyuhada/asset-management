<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10" fill="#49C190"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7809 7.27396C18.32 7.70522 18.4074 8.49184 17.9761 9.03091L11.9761 16.5309C11.7687 16.7902 11.4667 16.9562 11.1367 16.9925C10.8067 17.0289 10.4758 16.9324 10.2171 16.7244L6.21706 13.5101C5.67892 13.0777 5.59323 12.2909 6.02566 11.7528C6.45809 11.2146 7.24489 11.1289 7.78303 11.5614L10.8065 13.991L16.024 7.46918C16.4552 6.9301 17.2418 6.8427 17.7809 7.27396Z" fill="white"/>
</svg>

</template>

<script>
export default {
  name: 'IconCheck',
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