class TrainingCertification extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M22.0004 13.0998C22.0004 10.6998 20.1004 8.7998 17.7004 8.7998C15.3004 8.7998 13.4004 10.6998 13.4004 13.0998C13.4004 14.2998 13.9004 15.3998 14.7004 16.1998L14.1004 20.7998C14.1004 21.1998 14.2004 21.4998 14.5004 21.6998C14.8004 21.8998 15.2004 21.8998 15.5004 21.7998L17.6004 20.7998L19.7004 21.7998C19.8004 21.8998 20.0004 21.8998 20.1004 21.8998C20.3004 21.8998 20.5004 21.7998 20.7004 21.6998C21.0004 21.4998 21.2004 21.0998 21.1004 20.7998L20.5004 16.1998C21.5004 15.4998 22.0004 14.3998 22.0004 13.0998ZM17.7004 10.8998C19.0004 10.8998 20.0004 11.8998 20.0004 13.1998C20.0004 14.4998 19.0004 15.4998 17.7004 15.4998C16.4004 15.4998 15.4004 14.4998 15.4004 13.1998C15.4004 11.8998 16.5004 10.8998 17.7004 10.8998ZM19.0004 19.2998L18.1004 18.8998C17.8004 18.7998 17.5004 18.7998 17.2004 18.8998L16.3004 19.2998L16.6004 17.2998C16.9004 17.3998 17.3004 17.3998 17.7004 17.3998C18.1004 17.3998 18.4004 17.2998 18.8004 17.2998L19.0004 19.2998Z" />
<path style="${this.colorStyle}"  d="M17.9 2H6.1C3.8 2 2 3.8 2 6.1V14C2 16.2 3.8 18 6.1 18H12C12.6 18 13 17.6 13 17C13 16.4 12.6 16 12 16H6.1C4.9 16 4 15.1 4 13.9V6.1C4 4.9 4.9 4 6.1 4H18C19.1 4 20 4.9 20 6.1V7.6C20 8.2 20.4 8.6 21 8.6C21.6 8.6 22 8.2 22 7.6V6.1C22 3.8 20.2 2 17.9 2Z" />
<path style="${this.colorStyle}"  d="M13 7C13 6.4 12.6 6 12 6H7C6.4 6 6 6.4 6 7C6 7.6 6.4 8 7 8H12C12.6 8 13 7.6 13 7Z" />
<path style="${this.colorStyle}"  d="M7 10C6.4 10 6 10.4 6 11C6 11.6 6.4 12 7 12H10C10.6 12 11 11.6 11 11C11 10.4 10.6 10 10 10H7Z" />
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
    this.props.forEach(key => this[key as keyof typeof TrainingCertification] = this.getAttribute(key));
  }
}
export default TrainingCertification