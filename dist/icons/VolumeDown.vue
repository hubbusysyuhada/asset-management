<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'VolumeDown',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M17.4454 8.16806C17.9049 7.8617 18.5258 7.98588 18.8322 8.44541C20.2672 10.598 20.2672 13.4023 18.8322 15.5548C18.5258 16.0143 17.9049 16.1385 17.4454 15.8322C16.9859 15.5258 16.8617 14.9049 17.1681 14.4454C18.1552 12.9647 18.1552 11.0356 17.1681 9.55481C16.8617 9.09528 16.9859 8.47441 17.4454 8.16806Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M13 7.20253C13 6.77861 12.5056 6.54703 12.1799 6.81842L9.05739 9.42052C8.6081 9.79493 8.04177 9.99997 7.45693 9.99997H5.5C5.22386 9.99997 5 10.2238 5 10.5V13.5C5 13.7761 5.22386 14 5.5 14H7.45693C8.04177 14 8.6081 14.205 9.05739 14.5794L12.1799 17.1815C12.5056 17.4529 13 17.2213 13 16.7974V7.20253ZM10.8995 5.28198C12.5279 3.92505 15 5.08294 15 7.20253V16.7974C15 18.917 12.5279 20.0749 10.8995 18.718L7.77702 16.1159C7.68716 16.041 7.57389 16 7.45693 16H5.5C4.11929 16 3 14.8807 3 13.5V10.5C3 9.11926 4.11929 7.99997 5.5 7.99997H7.45693C7.57389 7.99997 7.68716 7.95896 7.77702 7.88408L10.8995 5.28198Z" fill="#414042"/>
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