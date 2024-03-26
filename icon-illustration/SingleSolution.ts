class SingleSolution extends HTMLElement {
  id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
  props = ['size', 'color']
  contentStyle = '';
  colorStyle = '';
  size = ''
  color = ''
  constructor() {
    super()
    this._initElement()
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M103.497 55.9004C103.262 70.4554 95.1049 83.0849 83.1494 89.6651V91.8297C83.1492 91.8299 83.1489 91.83 83.1486 91.8301V94.5062H54.0735V88.1584C45.3211 81.155 39.5356 69.034 39.5356 55.2547C39.5356 34.9287 52.1244 18.2112 68.2552 16.2051C87.8421 18.1899 103.174 34.5756 103.497 54.6089C103.5 54.8237 103.501 55.039 103.501 55.2547C103.501 55.4703 103.5 55.6856 103.497 55.9004Z" fill="#DBC8F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.2329 89.662C79.2329 88.2337 80.0102 86.9187 81.2615 86.23C92.1927 80.2135 99.5855 68.5931 99.5855 55.2515C99.5855 35.7371 83.7659 19.9175 64.2515 19.9175C44.7371 19.9175 28.9175 35.7371 28.9175 55.2515C28.9175 68.5931 36.3103 80.2136 47.2416 86.23C48.4929 86.9187 49.2702 88.2338 49.2702 89.6621V93.493H79.2329V89.662ZM83.1504 89.662V96.4311C83.1504 96.972 82.7119 97.4105 82.1711 97.4105H46.3321C45.7912 97.4105 45.3527 96.972 45.3527 96.4311V89.6621C33.2207 82.9848 25 70.0782 25 55.2515C25 33.5735 42.5735 16 64.2515 16C85.9295 16 103.503 33.5735 103.503 55.2515C103.503 70.0781 95.2824 82.9847 83.1504 89.662Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.2027 40.4549C66.1484 40.9802 66.4891 42.1727 65.9637 43.1184L60.3116 53.2922H71.5203C72.2143 53.2922 72.8565 53.6594 73.2085 54.2576C73.5604 54.8558 73.5696 55.5955 73.2325 56.2022L65.9637 69.286C65.4384 70.2317 64.2459 70.5724 63.3002 70.047C62.3546 69.5217 62.0139 68.3292 62.5392 67.3835L68.1913 57.2097H56.9827C56.2887 57.2097 55.6464 56.8424 55.2945 56.2443C54.9425 55.6461 54.9334 54.9064 55.2704 54.2997L62.5392 41.2159C63.0646 40.2702 64.2571 39.9295 65.2027 40.4549Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M69.94 107.379C66.2645 106.042 62.2359 106.042 58.5604 107.379L48.9282 110.881C47.9116 111.251 46.7877 110.727 46.418 109.71C46.0483 108.693 46.5728 107.57 47.5895 107.2L57.2216 103.697C61.7619 102.046 66.7385 102.046 71.2788 103.697L80.9109 107.2C81.9276 107.57 82.452 108.693 82.0824 109.71C81.7127 110.727 80.5888 111.251 79.5721 110.881L69.94 107.379Z" fill="#3D00C3"/>
</svg>
`
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    this._setState();
  }

  connectedCallback() {
    this._setState();
  }
  
  disconnectedCallback() {
    this._setState();
  }

  _initElement() {
    this._setState()
    const size = this.size || 24
    let contentStyle = `object-fit: content; width: ${size}; height: ${size}`
    this.contentStyle = contentStyle
    if (this.color) this.colorStyle = `fill: ${this.color}`
  }

  _setState() {
    // @ts-ignore
    this.props.forEach(key => this[key as keyof typeof SingleSolution] = this.getAttribute(key));
  }
}
export default SingleSolution