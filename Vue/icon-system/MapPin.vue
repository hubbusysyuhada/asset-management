<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13ZM11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M13.4507 21.4216L18.3266 16.7933C21.8911 13.4099 21.8911 7.87894 18.3266 4.49553C14.8212 1.16816 9.1788 1.16816 5.67336 4.49553C2.10888 7.87894 2.10888 13.4099 5.67336 16.7933L10.5493 21.4216C11.3618 22.1928 12.6382 22.1928 13.4507 21.4216ZM7.05025 15.3427C4.31658 12.7479 4.31658 8.54091 7.05025 5.9461C9.78392 3.3513 14.2161 3.3513 16.9497 5.9461C19.6834 8.54091 19.6834 12.7479 16.9497 15.3427L12.0738 19.971C12.033 20.0097 11.967 20.0097 11.9262 19.971L7.05025 15.3427Z" />
</svg>

</template>

<script>
export default {
  name: 'MapPin',
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