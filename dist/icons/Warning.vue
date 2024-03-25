<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Warning',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M2.88648 18.493C2.49435 19.1596 2.975 20 3.74842 20H20.2516C21.025 20 21.5057 19.1596 21.1135 18.493L12.8619 4.46529C12.4753 3.80798 11.5247 3.80798 11.1381 4.46529L2.88648 18.493ZM5.15455 18.2105L12 6.57L18.8455 18.2105H5.15455ZM11.0909 16.4211C11.0909 15.9269 11.4915 15.5263 11.9856 15.5263H12.0144C12.5085 15.5263 12.9091 15.9269 12.9091 16.4211V16.4211C12.9091 16.9152 12.5085 17.3158 12.0144 17.3158H11.9856C11.4915 17.3158 11.0909 16.9152 11.0909 16.4211V16.4211ZM11.0909 11.067C11.0909 10.5649 11.4979 10.1579 12 10.1579V10.1579C12.5021 10.1579 12.9091 10.5649 12.9091 11.067V12.8278C12.9091 13.3298 12.5021 13.7368 12 13.7368V13.7368C11.4979 13.7368 11.0909 13.3298 11.0909 12.8278V11.067Z" fill="#414042"/>
</svg>
`
    },
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