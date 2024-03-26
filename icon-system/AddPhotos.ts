class AddPhotos extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.39008 4C5.51904 4 4 5.51904 4 7.39008V16.1702C4 18.0413 5.51904 19.5603 7.39008 19.5603H16.1702C18.0413 19.5603 19.5603 18.0413 19.5603 16.1702V9.22514C19.5603 8.67285 20.008 8.22514 20.5603 8.22514C21.1126 8.22514 21.5603 8.67285 21.5603 9.22514V16.1702C21.5603 19.1459 19.1459 21.5603 16.1702 21.5603H7.39008C4.41447 21.5603 2 19.1459 2 16.1702V7.39008C2 4.41447 4.41447 2 7.39008 2H15.2044C15.7567 2 16.2044 2.44772 16.2044 3C16.2044 3.55228 15.7567 4 15.2044 4H7.39008Z" />
<path style="${this.colorStyle}"  d="M20.7619 16.8906L15.5201 11.2537L15.5114 11.2361L15.5026 11.2274C15.1075 10.8323 14.4577 10.8586 14.089 11.28L11.1915 14.6341L10.2872 13.7824C9.9184 13.4312 9.3389 13.4312 8.97014 13.7824L8.96136 13.7912L8.9438 13.8L4.57127 18.1725C4.22885 18.5149 4.22885 19.0681 4.57127 19.4105C4.9137 19.7529 5.46685 19.7529 5.80928 19.4105L9.63743 15.5823L15.125 20.7538C15.4762 21.0875 16.0294 21.0699 16.363 20.7187C16.6967 20.3675 16.6791 19.8144 16.3279 19.4807L12.4646 15.8369L14.8353 13.0888L19.4712 18.0847C19.8049 18.4359 20.358 18.4622 20.7092 18.1286C21.078 17.8037 21.0955 17.2418 20.7619 16.8906Z" />
<path style="${this.colorStyle}"  d="M9.14577 11.7803C10.6033 11.7803 11.7798 10.6038 11.7798 9.14626C11.7798 7.68875 10.6033 6.51221 9.14577 6.51221C7.68826 6.51221 6.51172 7.68875 6.51172 9.14626C6.51172 10.6038 7.68826 11.7803 9.14577 11.7803ZM9.14577 8.26824C9.62868 8.26824 10.0238 8.66335 10.0238 9.14626C10.0238 9.62917 9.62868 10.0243 9.14577 10.0243C8.66286 10.0243 8.26775 9.62917 8.26775 9.14626C8.26775 8.66335 8.66286 8.26824 9.14577 8.26824Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M18.1455 2.51611C18.6978 2.51611 19.1455 2.96383 19.1455 3.51611V8.18716C19.1455 8.73945 18.6978 9.18716 18.1455 9.18716C17.5932 9.18716 17.1455 8.73945 17.1455 8.18716V3.51611C17.1455 2.96383 17.5932 2.51611 18.1455 2.51611Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.8096 5.85156C14.8096 5.29928 15.2573 4.85156 15.8096 4.85156H20.4806C21.0329 4.85156 21.4806 5.29928 21.4806 5.85156C21.4806 6.40385 21.0329 6.85156 20.4806 6.85156H15.8096C15.2573 6.85156 14.8096 6.40385 14.8096 5.85156Z" />
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
    this.props.forEach(key => this[key as keyof typeof AddPhotos] = this.getAttribute(key));
  }
}
export default AddPhotos