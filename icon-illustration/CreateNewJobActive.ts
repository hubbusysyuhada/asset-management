class CreateNewJobActive extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2757_3260)">
<path d="M31.5765 9.14131C31.505 9.09021 30.8816 8.6201 29.7676 8.17042C28.3368 7.5981 26.6812 7.2915 25.0051 7.2915C23.3188 7.2915 21.6734 7.5981 20.2324 8.17042C19.1184 8.6201 18.495 9.07999 18.4235 9.14131C18.0862 9.39681 17.8818 9.80561 17.8818 10.2348V12.381L19.2513 13.1169L20.6208 12.381V11.0013C21.3771 10.613 22.8794 10.0304 24.9949 10.0304C27.1207 10.0304 28.623 10.6232 29.369 11.0013V12.3708L30.7385 13.1066L32.108 12.3708V10.2246C32.1182 9.80561 31.924 9.39681 31.5765 9.14131Z" fill="#3D00C3"/>
<path d="M17.8818 12.3809V13.8934L19.2513 14.6292L20.6208 13.8934V12.3809H17.8818Z" fill="#2F00A7"/>
<path d="M32.1182 12.3809H29.3793V13.8934L30.7487 14.6292L32.1182 13.8934V12.3809Z" fill="#2F00A7"/>
<path d="M5.23975 28.9575V41.1192C5.23975 42.5602 6.41504 43.7355 7.85605 43.7355H42.1337C43.5747 43.7355 44.75 42.5602 44.75 41.1192V28.9575H5.23975Z" fill="#3D00C3"/>
<path d="M5.23975 27.4453V28.9579C7.41659 30.685 13.15 34.0269 24.9949 34.0269C36.8398 34.0269 42.5834 30.6748 44.75 28.9579V27.4453H5.23975Z" fill="#2F00A7"/>
<path d="M5.1273 26.5765C7.21217 28.273 12.9455 31.7376 24.9949 31.7376C37.0442 31.7376 42.7775 28.2628 44.8624 26.5765C45.4756 26.0757 45.8231 24.604 45.8231 23.8171V16.5099C45.8231 15.0688 44.6478 13.8936 43.2068 13.8936H6.78293C5.34192 13.8936 4.16663 15.0586 4.16663 16.5099V23.8171C4.16663 24.5938 4.52432 26.0757 5.1273 26.5765Z" fill="#7D5BCA"/>
<path d="M44.8726 25.8409C42.7878 27.5374 37.0544 31.002 25.0051 31.002C12.9558 31.002 7.22239 27.5272 5.13752 25.8409C4.52432 25.3401 4.16663 24.5941 4.16663 23.8071V25.3197C4.16663 26.1066 4.52432 26.8527 5.1273 27.3432C7.21217 29.0397 12.9455 32.5043 24.9948 32.5043C37.0441 32.5043 42.7775 29.0295 44.8624 27.3432C45.4756 26.8424 45.8231 26.1066 45.8231 25.3197V23.8071C45.8333 24.5941 45.4858 25.3401 44.8726 25.8409Z" fill="#7D5BCA"/>
<path d="M25.005 35.0387C26.354 35.0387 27.4578 34.0372 27.4578 31.8604V30.3785C27.4578 29.8981 27.0694 29.5098 26.5891 29.5098H23.4311C22.9508 29.5098 22.5624 29.8981 22.5624 30.3785V31.8604C22.5522 34.027 23.6458 35.0387 25.005 35.0387Z" fill="#FFD740"/>
<path d="M25.005 34.3029C23.656 34.3029 22.5522 33.2093 22.5522 31.8501V33.3626C22.5522 34.7117 23.6458 35.8154 25.005 35.8154C26.3643 35.8154 27.4578 34.7219 27.4578 33.3626V31.8501C27.4476 33.2093 26.3541 34.3029 25.005 34.3029Z" fill="#DBA300"/>
</g>
<defs>
<clipPath id="clip0_2757_3260">
<rect width="41.6667" height="36.4443" fill="white" transform="translate(4.16663 7.2915)"/>
</clipPath>
</defs>
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
    this.props.forEach(key => this[key as keyof typeof CreateNewJobActive] = this.getAttribute(key));
  }
}
export default CreateNewJobActive