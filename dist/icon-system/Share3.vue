<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M12.4039 20C12.3039 20 12.2039 20 12.1039 20C11.1039 19.9 10.4039 19.1 10.2039 18.2L9.00387 12.1L4.70387 7.9C4.00387 7.3 3.80387 6.3 4.20387 5.4C4.50387 4.6 5.40387 4 6.30387 4H18.5039C19.3039 4 20.0039 4.4 20.4039 5.1C20.8039 5.8 20.9039 6.7 20.5039 7.4L14.5039 18.8C14.0039 19.5 13.3039 20 12.4039 20ZM11.0039 12.1L12.1039 17.7C12.1039 17.9 12.3039 17.9 12.3039 17.9C12.4039 17.9 12.5039 17.9 12.6039 17.7L18.0039 7.7L11.0039 12.1ZM6.30387 6C6.10387 6 6.10387 6.1 6.00387 6.2C5.90387 6.3 6.00387 6.4 6.10387 6.5L10.1039 10.3L17.0039 6H6.30387Z" />
</svg>

</template>

<script>
export default {
  name: 'Share3',
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