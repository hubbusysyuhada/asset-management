<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M7.21246 10.3838C7.55279 9.94886 8.18128 9.87214 8.61625 10.2125L12 12.86L15.3838 10.2125C15.8188 9.87214 16.4473 9.94886 16.7876 10.3838C17.1279 10.8188 17.0512 11.4473 16.6163 11.7876L12.8991 14.696C12.3809 15.1014 11.6192 15.1014 11.101 14.696L7.38383 11.7876C6.94886 11.4473 6.87214 10.8188 7.21246 10.3838Z" />
<path :style="colorStyle"  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
</svg>

</template>

<script>
export default {
  name: 'Dropdown',
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