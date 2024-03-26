class CandidatePool extends HTMLElement {
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
<rect width="50" height="50" rx="10" fill="#F9F5FE"/>
<path d="M41.2296 24.1464C40.9474 18.0699 35.7833 13.3761 29.7067 13.6677C24.0347 13.9405 19.5008 18.4744 19.228 24.1464C19.2186 24.3063 19.2092 24.4757 19.2092 24.6356C19.1998 26.8273 19.8394 28.9813 21.0716 30.8062L14.0262 37.8516C13.1797 38.6794 13.1702 40.0433 14.0074 40.8805C14.8446 41.7176 16.1991 41.7365 17.0363 40.8993C17.0457 40.8899 17.0457 40.8899 17.0551 40.8805L24.1005 33.8445C29.1612 37.2308 36.0091 35.8668 39.3954 30.8062C40.082 29.7809 40.59 28.6521 40.9004 27.4575C41.145 26.5074 41.2673 25.5386 41.2484 24.5603C41.2484 24.4192 41.239 24.2875 41.2296 24.1464Z" fill="#7D5BCA"/>
<path d="M36.2438 30.7031C36.0651 30.8818 35.8864 31.0511 35.6888 31.2016C32.8105 33.6191 28.681 33.8637 25.5393 31.7942C25.2665 31.6155 25.0031 31.418 24.7492 31.2016C24.561 31.0511 24.3823 30.8818 24.2036 30.7031C23.7991 30.2986 23.4229 29.8471 23.103 29.3674C20.5163 25.4355 21.6074 20.1585 25.5299 17.5717C29.4524 14.985 34.7388 16.0761 37.3256 19.9986C39.5549 23.3755 39.1034 27.8435 36.2438 30.7031Z" fill="#FFC401"/>
<path d="M11.6294 15.5H13.125C15.4014 15.5 17.2545 17.3531 17.2545 19.6294V21.8211H7.5V19.6294C7.5 17.3437 9.35307 15.5 11.6294 15.5Z" fill="#4B36C1"/>
<path d="M15.5781 11.9383C15.5781 12.324 15.5123 12.7096 15.3712 13.0765C14.7504 14.732 12.9067 15.5692 11.2512 14.9483C9.59564 14.3275 8.75847 12.4839 9.37929 10.8283C9.84961 9.57728 11.0442 8.74951 12.3799 8.74951C14.1389 8.74951 15.5781 10.1793 15.5781 11.9383Z" fill="#967BD3"/>
<path d="M35.703 31.2011C32.8247 33.6185 28.6953 33.8631 25.5535 31.7937C25.2807 31.615 25.0173 31.4174 24.7634 31.2011C25.1772 28.1816 27.971 26.0652 30.9904 26.4885C33.4361 26.8271 35.3644 28.746 35.703 31.2011Z" fill="#4B36C1"/>
<path d="M33.6199 21.8067C33.6199 22.2488 33.5446 22.6815 33.3847 23.0954C32.6792 24.9579 30.591 25.8985 28.7285 25.1836C26.8661 24.4781 25.9254 22.3899 26.6403 20.5274C27.3458 18.665 29.434 17.7243 31.2965 18.4392C32.6886 18.966 33.6199 20.3111 33.6199 21.8067Z" fill="#967BD3"/>
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
    this.props.forEach(key => this[key as keyof typeof CandidatePool] = this.getAttribute(key));
  }
}
export default CandidatePool