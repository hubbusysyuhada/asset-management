class Extend extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4C19.7614 4 22 6.23858 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.23858 4.23858 4 7 4V3C7 2.44772 7.44772 2 8 2ZM7 6C5.34315 6 4 7.34315 4 9V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V9C20 7.34315 18.6569 6 17 6C17 6.55229 16.5523 7 16 7C15.4477 7 15 6.55229 15 6H9C9 6.55229 8.55228 7 8 7C7.44772 7 7 6.55229 7 6Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16 13C16 12.6686 15.7272 12.4 15.3908 12.4H8.33238L9.72928 11.0243C9.9672 10.7899 9.9672 10.4101 9.72928 10.1757C9.49136 9.94142 9.10562 9.94142 8.8677 10.1757L6.72344 12.2875C6.32569 12.6792 6.32569 13.3208 6.72344 13.7125L8.8677 15.8243C9.10562 16.0586 9.49136 16.0586 9.72928 15.8243C9.9672 15.5899 9.9672 15.2101 9.72928 14.9757L8.33238 13.6H15.3908C15.7272 13.6 16 13.3314 16 13Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 13.3314 8.27276 13.6 8.60923 13.6L15.6676 13.6L14.2707 14.9757C14.0328 15.2101 14.0328 15.59 14.2707 15.8243C14.5086 16.0586 14.8944 16.0586 15.1323 15.8243L17.2766 13.7125C17.6743 13.3208 17.6743 12.6792 17.2766 12.2875L15.1323 10.1757C14.8944 9.94142 14.5086 9.94142 14.2707 10.1757C14.0328 10.4101 14.0328 10.7899 14.2707 11.0243L15.6676 12.4L8.60923 12.4C8.27276 12.4 8 12.6686 8 13Z" />
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
    this.props.forEach(key => this[key as keyof typeof Extend] = this.getAttribute(key));
  }
}
export default Extend