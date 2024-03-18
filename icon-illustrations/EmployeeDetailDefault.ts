class EmployeeDetailDefault extends HTMLElement {
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
<path d="M53.6459 71.7362H27.1577C25.9035 71.7362 24.8789 70.7205 24.8789 69.4574V68.9363C24.8789 60.2541 31.989 52.9586 40.6712 53.1087C49.1061 53.2589 55.9158 60.1569 55.9158 68.6272V69.4574C55.9247 70.7116 54.9001 71.7362 53.6459 71.7362Z" fill="#989899"/>
<path d="M48.0498 45.6902C47.3167 41.6273 44.1636 38.5625 40.401 38.5625C36.6384 38.5625 33.4852 41.6273 32.7521 45.6902C31.6039 45.8845 30.7207 47.0239 30.7207 48.3841C30.7207 49.8944 31.7894 51.1133 33.1054 51.1133C33.1584 51.1133 33.2026 51.1045 33.2468 51.1045C34.4568 54.2488 37.2037 56.4569 40.401 56.4569C43.5983 56.4569 46.3363 54.2576 47.5552 51.1045C47.5993 51.1045 47.6523 51.1133 47.6965 51.1133C49.0125 51.1133 50.0812 49.8856 50.0812 48.3841C50.0812 47.0239 49.198 45.8845 48.0498 45.6902Z" fill="#E8E8E8"/>
<path d="M42.9094 66.8527L40.401 68.3189L37.8926 66.8527L39.6502 60.4492H41.1429L42.9094 66.8527Z" fill="#E8E8E8"/>
<path d="M41.4438 59.0889H39.3594L39.6508 60.4491H41.1435L41.4438 59.0889Z" fill="#E8E8E8"/>
<path d="M27.2848 24.0245C22.7273 24.0245 19 27.7517 19 32.3004V98.5431C19 103.101 22.7273 106.828 27.2848 106.828H76.9668C81.5243 106.828 85.2515 103.101 85.2515 98.5431V32.3004C85.2515 27.7252 81.542 24.0156 76.9668 24.0156H27.2848V24.0245ZM54.2676 66.1725C54.2676 68.2658 52.5718 69.9616 50.4785 69.9616H30.3231C28.2298 69.9616 26.534 68.2658 26.534 66.1725V35.0207C26.534 32.9275 28.2298 31.2317 30.3231 31.2317H50.4785C52.5718 31.2317 54.2676 32.9275 54.2676 35.0207V66.1725Z" fill="#D1D1D2"/>
<path d="M77.603 80.0657H26.6403C25.6864 80.0657 24.918 79.2973 24.918 78.3434C24.918 77.3895 25.6864 76.6211 26.6403 76.6211H77.603C78.5569 76.6211 79.3253 77.3895 79.3253 78.3434C79.3253 79.2973 78.5569 80.0657 77.603 80.0657Z" fill="#989899"/>
<path d="M77.603 89.9407H26.6403C25.6864 89.9407 24.918 89.1723 24.918 88.2184C24.918 87.2645 25.6864 86.4961 26.6403 86.4961H77.603C78.5569 86.4961 79.3253 87.2645 79.3253 88.2184C79.3253 89.1723 78.5569 89.9407 77.603 89.9407Z" fill="#989899"/>
<path d="M77.603 99.8147H26.6403C25.6864 99.8147 24.918 99.0463 24.918 98.0924C24.918 97.1385 25.6864 96.3701 26.6403 96.3701H77.603C78.5569 96.3701 79.3253 97.1385 79.3253 98.0924C79.3253 99.0463 78.5569 99.8147 77.603 99.8147Z" fill="#989899"/>
<path d="M51.1426 27.9728C47.2917 27.9728 44.1562 24.8373 44.1562 20.9864C44.1562 17.1355 47.2829 14 51.1426 14C55.0024 14 58.129 17.1355 58.129 20.9864C58.129 24.8373 54.9936 27.9728 51.1426 27.9728ZM51.1426 18.4162C49.7206 18.4162 48.5724 19.5732 48.5724 20.9864C48.5724 22.3996 49.7295 23.5566 51.1426 23.5566C52.5558 23.5566 53.7129 22.3996 53.7129 20.9864C53.7129 19.5732 52.5558 18.4162 51.1426 18.4162Z" fill="#D1D1D2"/>
<path d="M81.904 114C97.1672 114 109.541 101.627 109.541 86.364C109.541 71.1008 97.1672 58.7275 81.904 58.7275C66.6408 58.7275 54.2676 71.1008 54.2676 86.364C54.2676 101.627 66.6408 114 81.904 114Z" fill="#E8E8E8"/>
<path d="M100.16 97.3067L90.8066 90.4175C94.3573 83.9699 92.6791 75.7116 86.5936 71.2336C79.9782 66.3581 70.6247 67.7713 65.7492 74.3868C60.8738 81.0022 62.287 90.3557 68.9024 95.2311C71.4903 97.1389 74.5551 98.1458 77.7171 98.1458C78.4678 98.1458 79.2186 98.0928 79.9782 97.978C83.2638 97.4834 86.2138 95.9377 88.4749 93.5883L97.8195 100.478C98.1728 100.734 98.5791 100.857 98.9854 100.857C99.586 100.857 100.178 100.584 100.566 100.062C101.22 99.1704 101.035 97.9427 100.16 97.3067ZM71.2341 92.0603C66.3587 88.4655 65.3164 81.5763 68.9112 76.7008C70.6512 74.3426 73.2126 72.7969 76.1096 72.3553C76.666 72.267 77.2225 72.2317 77.7789 72.2317C80.1107 72.2317 82.3629 72.9736 84.2707 74.3779C86.6289 76.1179 88.1746 78.6793 88.6162 81.5763C89.0578 84.4733 88.3336 87.3792 86.5936 89.7374C82.9988 94.6129 76.1096 95.6551 71.2341 92.0603Z" fill="#989899"/>
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
    this.props.forEach(key => this[key as keyof typeof EmployeeDetailDefault] = this.getAttribute(key));
  }
}
export default EmployeeDetailDefault