<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8845 12.9002L6.22212 12.9002C5.13285 12.9002 4.59272 14.2146 5.35791 14.9798L11.0203 20.6422C11.4974 21.1193 12.2716 21.1193 12.7487 20.6422L18.4111 14.9798C19.1763 14.2146 18.6362 12.9002 17.5469 12.9002L11.8845 12.9002Z" fill="#B7B6B7"/>
<path d="M11.8845 11.0996L17.5469 11.0996C18.6362 11.0996 19.1763 9.78528 18.4111 9.0201L12.7487 3.3577C12.2716 2.88058 11.4974 2.88058 11.0203 3.3577L5.35791 9.02009C4.59272 9.78528 5.13285 11.0996 6.22212 11.0996L11.8845 11.0996Z" fill="#414042"/>
</svg>

</template>

<script>
export default {
  name: 'SortUp',
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