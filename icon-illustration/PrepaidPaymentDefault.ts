class PrepaidPaymentDefault extends HTMLElement {
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
<path d="M28.8598 19.8869C29.2902 17.3162 31.7286 15.6024 34.2149 16.0784L113.489 30.2651C116.023 30.6935 117.696 33.169 117.266 35.7398L115.736 44.5469L27.3298 28.7417L28.8598 19.8869Z" fill="#D1D1D2"/>
<path d="M115.736 44.5472L109.807 78.5856C109.377 81.1563 106.938 82.8701 104.452 82.3941L25.178 68.2074C22.6439 67.779 20.9705 65.3035 21.4008 62.7327L27.3296 28.6943L115.736 44.5472Z" fill="#E8E8E8"/>
<path d="M15.0967 57.5029H98.6262C101.087 57.5029 103.056 59.4633 103.056 61.9137V107.59C103.056 110.041 101.087 112.001 98.6262 112.001H15.0967C12.6356 112.001 10.6667 110.041 10.6667 107.59V61.9137C10.6667 59.4633 12.6356 57.5029 15.0967 57.5029Z" fill="#989899"/>
<path d="M52.1112 102.741H41.5285C40.5441 102.741 39.7565 101.956 39.7565 100.976C39.7565 99.9961 40.5441 99.2119 41.5285 99.2119H52.1112C53.0957 99.2119 53.8832 99.9961 53.8832 100.976C53.8832 101.956 53.0957 102.741 52.1112 102.741Z" fill="#E8E8E8"/>
<path d="M32.0288 102.741H21.4953C20.5109 102.741 19.7233 101.956 19.7233 100.976C19.7233 99.9961 20.5109 99.2119 21.4953 99.2119H32.078C33.0625 99.2119 33.85 99.9961 33.85 100.976C33.8008 101.956 33.0132 102.741 32.0288 102.741Z" fill="#E8E8E8"/>
<path d="M72.1939 102.741H61.6112C60.6268 102.741 59.8392 101.956 59.8392 100.976C59.8392 99.9961 60.6268 99.2119 61.6112 99.2119H72.1939C73.1784 99.2119 73.9659 99.9961 73.9659 100.976C73.9659 101.956 73.1784 102.741 72.1939 102.741Z" fill="#E8E8E8"/>
<path d="M92.2766 102.741H81.6939C80.7094 102.741 79.9219 101.956 79.9219 100.976C79.9219 99.9961 80.7094 99.2119 81.6939 99.2119H92.2766C93.261 99.2119 94.0486 99.9961 94.0486 100.976C94.0486 101.956 93.261 102.741 92.2766 102.741Z" fill="#E8E8E8"/>
<path d="M22.0859 91.4181H38.1815C38.9198 91.4181 39.5597 90.83 39.5597 90.0458V81.9103C39.5597 81.1752 38.969 80.5381 38.1815 80.5381H22.0859C21.3476 80.5381 20.7077 81.1262 20.7077 81.9103V90.0458C20.7077 90.781 21.3476 91.4181 22.0859 91.4181Z" fill="#E8E8E8"/>
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
    this.props.forEach(key => this[key as keyof typeof PrepaidPaymentDefault] = this.getAttribute(key));
  }
}
export default PrepaidPaymentDefault