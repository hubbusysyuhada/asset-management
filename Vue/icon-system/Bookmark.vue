<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M4 5.98797C4 3.78547 5.79086 2 8 2H16C18.2091 2 20 3.78547 20 5.98797V20.0025C20 21.6244 18.1613 22.5678 16.8375 21.6251L12 18.1801L7.16248 21.6251C5.83874 22.5678 4 21.6244 4 20.0025V5.98797ZM8 3.99398C6.89543 3.99398 6 4.88672 6 5.98797V20.0025L10.8375 16.5575C11.5329 16.0623 12.4671 16.0623 13.1625 16.5575L18 20.0025V5.98797C18 4.88672 17.1046 3.99398 16 3.99398H8Z" />
</svg>

</template>

<script>
export default {
  name: 'Bookmark',
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