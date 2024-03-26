class ViewCandidate extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.3304 7.80907C13.5451 7.80907 12.9084 8.44893 12.9084 9.23824C12.9084 10.0275 13.5451 10.6674 14.3304 10.6674C15.1158 10.6674 15.7525 10.0275 15.7525 9.23824C15.7525 8.44893 15.1158 7.80907 14.3304 7.80907ZM11.1084 9.23824C11.1084 7.44981 12.551 6 14.3304 6C16.1099 6 17.5525 7.44981 17.5525 9.23824C17.5525 11.0267 16.1099 12.4765 14.3304 12.4765C12.551 12.4765 11.1084 11.0267 11.1084 9.23824Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.66113 20.2822C7.66113 16.5806 10.6471 13.5796 14.3302 13.5796C18.0134 13.5796 20.9993 16.5806 20.9993 20.2822C20.9993 21.3465 20.1425 22.227 19.0643 22.227H9.59616C8.53719 22.227 7.66113 21.3658 7.66113 20.2822ZM14.3302 15.3887C11.6413 15.3887 9.46116 17.5797 9.46116 20.2822C9.46116 20.3564 9.52111 20.4179 9.59616 20.4179H19.0643C19.1382 20.4179 19.1993 20.3576 19.1993 20.2822C19.1993 17.5797 17.0192 15.3887 14.3302 15.3887Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M5.95831 2.63211C6.36264 2.21366 6.91365 2 7.46407 2H11.3521C13.1992 2 14.7002 3.50851 14.7002 5.36488V6.5H12.9002V5.36488C12.9002 4.50763 12.2051 3.80907 11.3521 3.80907H7.46407C7.36967 3.80907 7.29387 3.8462 7.24882 3.89329L7.2427 3.89969L4.89019 6.26402L4.88383 6.27017C4.83697 6.31545 4.80003 6.39163 4.80003 6.4865V12.7369C4.80003 13.5941 5.4951 14.2927 6.34805 14.2927H11.5V16.1017H6.34805C4.50097 16.1017 3 14.5932 3 12.7369V6.4865C3 5.93332 3.21259 5.37954 3.62895 4.97318L5.95831 2.63211Z" />
<path style="${this.colorStyle}"  d="M7.66113 3.06738V5.54781C7.66113 6.18894 7.13825 6.71445 6.50033 6.71445H4.17871L7.66113 3.06738Z" />
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
    this.props.forEach(key => this[key as keyof typeof ViewCandidate] = this.getAttribute(key));
  }
}
export default ViewCandidate