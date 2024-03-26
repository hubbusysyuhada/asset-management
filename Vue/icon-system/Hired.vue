<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M12.02 19.78C11.98 19.52 12 19.25 12.06 19H5V18.5C5 15.46 7.46 13 10.5 13H11.5C14.13 13 16.32 14.84 16.87 17.31L18.46 15.72C17.35 12.95 14.66 11 11.5 11H10.5C6.36 11 3 14.36 3 18.5V19C3 20.1 3.9 21 5 21H12.69C12.33 20.69 12.09 20.26 12.02 19.78Z" />
<path :style="colorStyle"  d="M11 10C13.21 10 15 8.21 15 6C15 3.79 13.21 2 11 2C8.79 2 7 3.79 7 6C7 8.21 8.79 10 11 10ZM11 4C12.1 4 13 4.9 13 6C13 7.1 12.1 8 11 8C9.9 8 9 7.1 9 6C9 4.9 9.9 4 11 4Z" />
<path :style="colorStyle"  d="M16.0009 22.0001C15.7909 22.0001 15.5809 21.9301 15.4009 21.8001L13.4009 20.3001C12.9609 19.9701 12.8709 19.3401 13.2009 18.9001C13.5309 18.4601 14.1609 18.3701 14.6009 18.7001L15.9109 19.6801L19.3009 16.2901C19.6909 15.9001 20.3209 15.9001 20.7109 16.2901C21.1009 16.6801 21.1009 17.3101 20.7109 17.7001L16.7109 21.7001C16.5109 21.9001 16.2609 22.0001 16.0009 22.0001Z" />
</svg>

</template>

<script>
export default {
  name: 'Hired',
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