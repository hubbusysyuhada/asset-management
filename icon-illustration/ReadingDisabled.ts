class ReadingDisabled extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#F2F2F2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0007 10.1997C11.0107 10.1997 10.2007 11.0097 10.2007 11.9997C10.2007 12.9897 11.0107 13.7997 12.0007 13.7997C12.9907 13.7997 13.8007 12.9897 13.8007 11.9997C13.8007 11.0097 12.9907 10.1997 12.0007 10.1997ZM11.1307 11.9997C11.1307 11.5197 11.5207 11.1297 12.0007 11.1297C12.4807 11.1297 12.8707 11.5197 12.8707 11.9997C12.8707 12.4797 12.4807 12.8697 12.0007 12.8697C11.5207 12.8697 11.1307 12.4797 11.1307 11.9997Z" fill="#B7B6B7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9007 11.5698C16.5207 9.0898 14.2907 7.7998 12.0007 7.7998C9.71069 7.7998 7.48069 9.0898 6.10069 11.5698C5.97069 11.8098 5.96069 12.1098 6.09069 12.3498C7.44069 14.8798 9.69069 16.1998 11.9907 16.1998C14.2907 16.1998 16.5407 14.8798 17.8907 12.3498C18.0307 12.1098 18.0307 11.8098 17.9007 11.5698ZM12.0007 15.0798C10.1907 15.0798 8.32069 14.0798 7.12069 11.9598C8.34069 9.8998 10.1907 8.9198 12.0007 8.9198C13.8107 8.9198 15.6607 9.8998 16.8807 11.9698C15.6807 14.0798 13.8107 15.0798 12.0007 15.0798Z" fill="#B7B6B7"/>
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
    this.props.forEach(key => this[key as keyof typeof ReadingDisabled] = this.getAttribute(key));
  }
}
export default ReadingDisabled