class AddPerson extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M13.5 4C12.2854 4 11.3007 4.97444 11.3007 6.17647C11.3007 7.3785 12.2854 8.35294 13.5 8.35294C14.7146 8.35294 15.6993 7.3785 15.6993 6.17647C15.6993 4.97444 14.7146 4 13.5 4ZM9.27972 6.17647C9.27972 3.86987 11.1692 2 13.5 2C15.8308 2 17.7203 3.86987 17.7203 6.17647C17.7203 8.48307 15.8308 10.3529 13.5 10.3529C11.1692 10.3529 9.27972 8.48307 9.27972 6.17647ZM5 19.4118C5 15.0585 8.56607 11.5294 12.965 11.5294H14.035C18.4339 11.5294 22 15.0585 22 19.4118V19.9412C22 21.0782 21.0686 22 19.9196 22H7.08042C5.93144 22 5 21.0782 5 19.9412V19.4118ZM12.965 13.5294C9.68222 13.5294 7.02098 16.163 7.02098 19.4118V19.9412C7.02098 19.9737 7.04759 20 7.08042 20H19.9196C19.9524 20 19.979 19.9737 19.979 19.9412V19.4118C19.979 16.163 17.3178 13.5294 14.035 13.5294H12.965Z" />
<g clip-path="url(#clip0_2738_2982)">
<path style="${this.colorStyle}"  d="M7.17808 8.21918H5.86301V6.82192C5.86301 6.32877 5.53425 6 5.0411 6C4.54795 6 4.21918 6.32877 4.21918 6.82192V8.21918H2.82192C2.32877 8.21918 2 8.54795 2 9.0411C2 9.53425 2.32877 9.86301 2.82192 9.86301H4.21918V11.2603C4.21918 11.7534 4.54795 12.0822 5.0411 12.0822C5.53425 12.0822 5.86301 11.7534 5.86301 11.2603V9.86301H7.26027C7.75342 9.86301 8.08219 9.53425 8.08219 9.0411C8.08219 8.54795 7.67123 8.21918 7.17808 8.21918Z" />
</g>
<defs>
<clipPath id="clip0_2738_2982">
<rect width="6" height="6"  transform="translate(2 6)"/>
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
    this.props.forEach(key => this[key as keyof typeof AddPerson] = this.getAttribute(key));
  }
}
export default AddPerson