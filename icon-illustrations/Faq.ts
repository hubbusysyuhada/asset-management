class Faq extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" rx="10" fill="#F9F5FE"/>
<path d="M92.4643 28.7998H49.5747C43.9815 28.7998 39.3915 33.3647 39.3915 38.983V42.4442H78.1928C83.786 42.4442 88.376 47.0091 88.376 52.6274V77.9598H92.4643C98.0575 77.9598 102.647 73.395 102.647 67.7767V38.983C102.622 33.3647 98.0575 28.7998 92.4643 28.7998Z" fill="#3D00C3"/>
<path d="M78.6728 41.9653H35.7831C30.1649 41.9653 25.6 46.5302 25.6 52.1485V80.9673C25.6 86.5605 30.1649 91.1504 35.7831 91.1504H61.5169C62.6205 91.1504 63.4482 92.1788 63.1974 93.2573C62.5202 96.1668 61.4667 99.2267 59.9368 102.387C59.2345 103.792 60.8146 105.246 62.169 104.419C66.0316 102.011 71.5496 97.9977 76.1897 92.3293C76.7916 91.5768 77.7197 91.1504 78.6728 91.1504C84.266 91.1504 88.8559 86.5856 88.8559 80.9673V52.1485C88.8308 46.5302 84.266 41.9653 78.6728 41.9653Z" fill="#7D5BCA"/>
<path d="M75.3924 74.8315H39.8076C39.0174 74.8315 38.4 73.7389 38.4 72.436C38.4 71.1332 39.0421 70.0405 39.8076 70.0405H75.3924C76.1826 70.0405 76.8 71.1332 76.8 72.436C76.8 73.7389 76.1579 74.8315 75.3924 74.8315Z" fill="#FFC401"/>
<path d="M75.3924 62.3906H39.8076C39.0174 62.3906 38.4 61.2979 38.4 59.9951C38.4 58.6923 39.0421 57.5996 39.8076 57.5996H75.3924C76.1826 57.5996 76.8 58.6923 76.8 59.9951C76.8 61.2979 76.1579 62.3906 75.3924 62.3906Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof Faq] = this.getAttribute(key));
  }
}
export default Faq