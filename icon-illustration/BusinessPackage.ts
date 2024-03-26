class BusinessPackage extends HTMLElement {
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
<circle cx="24.5" cy="24.5" r="22.5" fill="#F4EBFF"/>
<g clip-path="url(#clip0_353_2633)">
<path d="M31.1105 9.76212C31.0423 9.71344 30.4485 9.26561 29.3873 8.83725C28.0243 8.29206 26.4472 8 24.8506 8C23.2442 8 21.6768 8.29206 20.3041 8.83725C19.2429 9.26561 18.6491 9.70371 18.5809 9.76212C18.2597 10.0055 18.0649 10.3949 18.0649 10.8038V12.8483L19.3695 13.5492L20.674 12.8483V11.534C21.3945 11.164 22.8256 10.6091 24.8408 10.6091C26.8658 10.6091 28.2969 11.1738 29.0076 11.534V12.8385L30.3122 13.5395L31.6167 12.8385V10.7941C31.6264 10.3949 31.4415 10.0055 31.1105 9.76212Z" fill="#3D00C3"/>
<path d="M18.0649 12.8481V14.289L19.3695 14.9899L20.674 14.289V12.8481H18.0649Z" fill="#3D00C3"/>
<path d="M31.6264 12.8481H29.0173V14.289L30.3219 14.9899L31.6264 14.289V12.8481Z" fill="#3D00C3"/>
<path d="M6.02222 28.6392V40.2244C6.02222 41.5971 7.1418 42.7166 8.5145 42.7166H41.1672C42.5399 42.7166 43.6595 41.5971 43.6595 40.2244V28.6392H6.02222Z" fill="#3D00C3"/>
<path d="M6.02222 27.1982V28.6391C8.09587 30.2844 13.5575 33.4679 24.8409 33.4679C36.1243 33.4679 41.5956 30.2747 43.6595 28.6391V27.1982H6.02222Z" fill="#2F00A7"/>
<path d="M5.91513 26.3708C7.90117 27.9869 13.3628 31.2872 24.8409 31.2872C36.319 31.2872 41.7806 27.9771 43.7666 26.3708C44.3507 25.8937 44.6818 24.4918 44.6818 23.7422V16.7813C44.6818 15.4086 43.5622 14.2891 42.1895 14.2891H7.49228C6.11958 14.2891 5 15.3989 5 16.7813V23.7422C5 24.4821 5.34074 25.8937 5.91513 26.3708Z" fill="#7D5BCA"/>
<path d="M43.7764 25.6698C41.7903 27.2859 36.3287 30.5862 24.8506 30.5862C13.3725 30.5862 7.9109 27.2761 5.92487 25.6698C5.34074 25.1927 5 24.4821 5 23.7324V25.1733C5 25.9229 5.34074 26.6336 5.91513 27.1009C7.90117 28.717 13.3628 32.0173 24.8409 32.0173C36.319 32.0173 41.7806 28.7072 43.7666 27.1009C44.3507 26.6239 44.6817 25.9229 44.6817 25.1733V23.7324C44.6915 24.4821 44.3605 25.1927 43.7764 25.6698Z" fill="#7D5BCA"/>
<path d="M24.8506 34.4319C26.1357 34.4319 27.1872 33.4779 27.1872 31.4042V29.9926C27.1872 29.535 26.8172 29.165 26.3596 29.165H23.3514C22.8938 29.165 22.5239 29.535 22.5239 29.9926V31.4042C22.5141 33.4681 23.5558 34.4319 24.8506 34.4319Z" fill="#FFC401"/>
<path d="M24.8507 33.731C23.5656 33.731 22.5142 32.6893 22.5142 31.3945V32.8354C22.5142 34.1205 23.5559 35.1719 24.8507 35.1719C26.1455 35.1719 27.1872 34.1302 27.1872 32.8354V31.3945C27.1774 32.6893 26.1358 33.731 24.8507 33.731Z" fill="#DBA300"/>
</g>
<defs>
<clipPath id="clip0_353_2633">
<rect width="39.6915" height="34.7167" fill="white" transform="translate(5 8)"/>
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
    this.props.forEach(key => this[key as keyof typeof BusinessPackage] = this.getAttribute(key));
  }
}
export default BusinessPackage