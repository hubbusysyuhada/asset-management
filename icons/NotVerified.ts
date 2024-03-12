class NotVerified extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M21 10.547C21 11.5296 19.1015 12.1998 18.8149 13.0855C18.5175 14.0035 19.6467 15.6607 19.0907 16.4257C18.5283 17.1971 16.6018 16.6304 15.8281 17.1928C15.0631 17.7488 15.0093 19.7615 14.0913 20.0589C13.2056 20.3477 11.9837 18.7595 11.0011 18.7595C10.0184 18.7595 8.79657 20.3455 7.91089 20.0589C6.99289 19.7615 6.93902 17.7488 6.17401 17.1928C5.40254 16.6304 3.47387 17.1971 2.91143 16.4257C2.35546 15.6607 3.4868 14.0057 3.18726 13.0855C2.8985 12.1998 1 11.5296 1 10.547C1 9.56434 2.8985 8.89416 3.18511 8.00848C3.48249 7.09047 2.3533 5.43333 2.90928 4.66832C3.47172 3.89685 5.39823 4.4636 6.17186 3.90116C6.93686 3.34519 6.99073 1.33247 7.90874 1.03509C8.79442 0.746331 10.0163 2.33452 10.9989 2.33452C11.9816 2.33452 13.2034 0.748486 14.0891 1.03509C15.0071 1.33247 15.061 3.34519 15.826 3.90116C16.5975 4.4636 18.5261 3.89685 19.0886 4.66832C19.6445 5.43333 18.5132 7.08832 18.8127 8.00848C19.1015 8.89416 21 9.5665 21 10.547Z" fill="#EA6465"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.7804 8.4923C15.1209 8.14966 15.1209 7.59584 14.7804 7.25536C14.4399 6.91488 13.8861 6.91488 13.5435 7.25536L11.0179 9.78095L8.4923 7.25536C8.14966 6.91488 7.59584 6.91488 7.25536 7.25536C6.91488 7.598 6.91488 8.15182 7.25536 8.4923L9.78095 11.0179L7.25536 13.5435C6.91488 13.8861 6.91488 14.4399 7.25536 14.7804C7.598 15.1209 8.15181 15.1209 8.4923 14.7804L11.0179 12.2548L13.5435 14.7804C13.8861 15.1209 14.4399 15.1209 14.7804 14.7804C15.123 14.4399 15.123 13.8861 14.7804 13.5435L12.2548 11.0179L14.7804 8.4923Z" fill="white"/>
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
    this.props.forEach(key => this[key as keyof typeof NotVerified] = this.getAttribute(key));
  }
}
export default NotVerified