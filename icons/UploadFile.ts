class UploadFile extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M19.91 6.31L16.43 2.83C15.89 2.29 15.19 2 14.43 2H8.64C6.08 2 4 4.08 4 6.64V17.56C4 20.12 6.08 22.2 8.64 22.2H16.1C18.66 22.2 20.74 20.12 20.74 17.56V8.3C20.73 7.56 20.43 6.83 19.91 6.31ZM16.1 20.19H8.64C7.18 20.19 6 19.01 6 17.55V6.64C6 5.18 7.18 4 8.64 4H14.43C14.45 4 14.48 4.01 14.5 4.01V6.86C14.5 7.86 15.31 8.68 16.32 8.68H18.73V17.55C18.73 19.01 17.55 20.19 16.1 20.19Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M11.3604 17.0901C11.3604 17.6501 11.8104 18.1001 12.3704 18.1001C12.9304 18.1001 13.3804 17.6501 13.3804 17.0901V12.7501C13.4904 12.8401 13.6004 12.9301 13.7004 13.0101C14.0104 13.2601 14.2904 13.4701 14.4804 13.6101C14.5804 13.6801 14.6604 13.7401 14.7104 13.7801L14.7704 13.8301L14.7904 13.8401H14.8004C15.2504 14.1701 15.8804 14.0701 16.2104 13.6201C16.5404 13.1701 16.4404 12.5401 15.9904 12.2101L15.9804 12.2001L15.9204 12.1601C15.8704 12.1201 15.8004 12.0701 15.7004 12.0001C15.5104 11.8601 15.2504 11.6601 14.9604 11.4301C14.3604 10.9601 13.6404 10.3601 13.1004 9.8101L12.3704 9.1001L11.6604 9.8101C11.1104 10.3601 10.3904 10.9601 9.79043 11.4301C9.50043 11.6601 9.24043 11.8601 9.05043 12.0001C8.96043 12.0701 8.88043 12.1201 8.83043 12.1601L8.77043 12.2001L8.76043 12.2101C8.31043 12.5401 8.21043 13.1701 8.54043 13.6201C8.87043 14.0701 9.50043 14.1701 9.95043 13.8401L9.97043 13.8301L10.0304 13.7801C10.0804 13.7401 10.1604 13.6801 10.2604 13.6101C10.4604 13.4601 10.7304 13.2501 11.0404 13.0101C11.1404 12.9301 11.2504 12.8401 11.3604 12.7501V17.0901Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof UploadFile] = this.getAttribute(key));
  }
}
export default UploadFile