<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'AnnouncementActive',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5505 3.16516C16.8311 3.35021 17 3.66386 17 4V17C17 17.3361 16.8311 17.6498 16.5505 17.8348C16.2699 18.0199 15.915 18.0516 15.6061 17.9191L8.79474 15H3C2.44772 15 2 14.5523 2 14V7C2 6.44772 2.44772 6 3 6H8.79474L15.6061 3.08086C15.915 2.94845 16.2699 2.98012 16.5505 3.16516ZM15 5.51654L9.39392 7.91915C9.26944 7.9725 9.13543 8 9 8H4V13H9C9.13543 13 9.26944 13.0275 9.39392 13.0809L15 15.4835V5.51654Z" fill="#3D00C3"/>
<path d="M9 20H7L5 14H9V20Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.18877 13.4153C4.37672 13.1545 4.67856 13 5.00001 13H9.00001C9.55229 13 10 13.4477 10 14V20C10 20.5523 9.55229 21 9.00001 21H7.00001C6.56958 21 6.18744 20.7246 6.05132 20.3162L4.05132 14.3162C3.94967 14.0113 4.00081 13.6761 4.18877 13.4153ZM6.38743 15L7.72077 19H8.00001V15H6.38743Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 10.4477 18.4477 10 19 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C18.4477 12 18 11.5523 18 11Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4171 3.58293C21.8077 3.97346 21.8077 4.60662 21.4171 4.99715L19.9971 6.41715C19.6066 6.80767 18.9735 6.80767 18.5829 6.41715C18.1924 6.02662 18.1924 5.39346 18.5829 5.00293L20.0029 3.58293C20.3935 3.19241 21.0266 3.19241 21.4171 3.58293Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5804 14.8852C18.9696 14.4933 19.6027 14.4911 19.9946 14.8802L21.4146 16.2902C21.8065 16.6794 21.8088 17.3125 21.4196 17.7044C21.0305 18.0963 20.3973 18.0986 20.0054 17.7094L18.5854 16.2994C18.1935 15.9103 18.1913 15.2771 18.5804 14.8852Z" fill="#3D00C3"/>
<path d="M6 7H3V14H6V7Z" fill="#3D00C3"/>
<path d="M9 7H8V14H9L16 17V4L9 7Z" fill="#3D00C3"/>
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