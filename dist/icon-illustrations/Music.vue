<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64 99C83.33 99 99 83.33 99 64C99 44.67 83.33 29 64 29C44.67 29 29 44.67 29 64C29 83.33 44.67 99 64 99Z" fill="#3D00C3"/>
<path d="M81.7863 75.1604C81.7863 78.4479 79.1394 81.0948 75.8518 81.0948H69.9173V65.2808H77.8244V61.3357C77.8244 53.6816 71.637 47.4942 63.9829 47.4942C56.3287 47.4942 50.1413 53.6816 50.1413 61.3357V65.2808H58.0484V81.0948H52.1139C48.8263 81.0948 46.1794 78.4479 46.1794 75.1604V61.3188C46.1794 51.4898 54.137 43.5322 63.966 43.5322C73.795 43.5322 81.7526 51.4898 81.7526 61.3188V75.1604H81.7863Z" fill="white"/>
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