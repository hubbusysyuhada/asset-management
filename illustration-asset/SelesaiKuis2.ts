class SelesaiKuis2 extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.1505 154.377C34.1505 154.377 1.10049 137.747 9.31049 107.917C18.5105 74.4874 45.2505 82.1474 73.6005 53.0374C107.81 17.8974 142.21 8.21736 173.55 25.0474C202.19 40.4274 189.39 74.1074 218.62 94.7374C244.97 113.337 223.49 144.957 209.63 149.897C195.77 154.827 186.4 154.827 186.4 154.827L34.1505 154.377Z" fill="#CFD3FF"/>
<path d="M141.832 148.774H97.2422L103.512 118.004H135.572L141.832 148.774Z" fill="#7D5BCA"/>
<path d="M138.482 132.054H100.602L103.512 118.004H135.572L138.482 132.054Z" fill="#3D00C3"/>
<path d="M157.771 153.246H81.3105C81.3105 149.386 84.4205 146.266 88.2705 146.266H150.821C154.661 146.266 157.771 149.396 157.771 153.246Z" fill="#3D00C3"/>
<path d="M188.911 128.886H50.1713C46.9613 128.886 44.3613 126.276 44.3613 123.056V36.0956C44.3613 32.8756 46.9613 30.2656 50.1713 30.2656H188.911C192.121 30.2656 194.721 32.8756 194.721 36.0956V123.056C194.721 126.276 192.121 128.886 188.911 128.886Z" fill="#2F00A7"/>
<path d="M190.652 37.3164H48.4219V112.576H190.652V37.3164Z" fill="white"/>
<path d="M190.791 37.3164H48.5605V112.576H190.791V37.3164Z" fill="#F9F5FE"/>
<path opacity="0.6" d="M190.782 37.3164H48.4219V42.3864H190.782V37.3164Z" fill="#EDB6E0"/>
<path d="M119.541 123.895C121.281 123.895 122.701 122.475 122.701 120.725C122.701 118.975 121.291 117.555 119.541 117.555C117.791 117.555 116.381 118.975 116.381 120.725C116.381 122.475 117.801 123.895 119.541 123.895Z" fill="#F9F5FE"/>
<path d="M119.672 102.765C135.036 102.765 147.492 90.3096 147.492 74.945C147.492 59.5804 135.036 47.125 119.672 47.125C104.307 47.125 91.8516 59.5804 91.8516 74.945C91.8516 90.3096 104.307 102.765 119.672 102.765Z" fill="#35A583"/>
<path d="M142.783 65.7434L137.042 59.5234L113.963 80.8234L102.783 68.7234L96.5625 74.4734L113.543 92.8634L142.783 65.7434Z" fill="white"/>
<path d="M86.4496 75.1562H26.5996V153.246H86.4496V75.1562Z" fill="#F9FAFB"/>
<path d="M42.3393 91.3475H35.8793C34.9993 91.3475 34.2793 90.6275 34.2793 89.7475V83.2875C34.2793 82.4075 34.9993 81.6875 35.8793 81.6875H42.3393C43.2293 81.6875 43.9393 82.4075 43.9393 83.2875V89.7475C43.9393 90.6375 43.2193 91.3475 42.3393 91.3475Z" fill="#DBC8F9"/>
<path d="M47.4691 87.4884H77.6091C77.9791 87.4884 78.2791 87.1884 78.2791 86.8184C78.2791 86.4484 77.9791 86.1484 77.6091 86.1484H47.4691C47.0991 86.1484 46.7991 86.4484 46.7991 86.8184C46.7891 87.1884 47.0991 87.4884 47.4691 87.4884Z" fill="#DBC8F9"/>
<path d="M47.4691 83.6291H77.6091C77.9791 83.6291 78.2791 83.3291 78.2791 82.9591C78.2791 82.5891 77.9791 82.2891 77.6091 82.2891H47.4691C47.0991 82.2891 46.7991 82.5891 46.7991 82.9591C46.7891 83.3191 47.0991 83.6291 47.4691 83.6291Z" fill="#DBC8F9"/>
<path d="M47.4691 91.3478H77.6091C77.9791 91.3478 78.2791 91.0478 78.2791 90.6778C78.2791 90.3078 77.9791 90.0078 77.6091 90.0078H47.4691C47.0991 90.0078 46.7991 90.3078 46.7991 90.6778C46.7891 91.0478 47.0991 91.3478 47.4691 91.3478Z" fill="#DBC8F9"/>
<path d="M47.3798 82.8077L46.0298 81.3477L40.5998 86.3577L37.9698 83.5077L36.5098 84.8577L40.4998 89.1877L47.3798 82.8077Z" fill="#3D00C3"/>
<path d="M42.3393 109.746H35.8793C34.9993 109.746 34.2793 109.026 34.2793 108.146V101.686C34.2793 100.806 34.9993 100.086 35.8793 100.086H42.3393C43.2293 100.086 43.9393 100.806 43.9393 101.686V108.146C43.9393 109.026 43.2193 109.746 42.3393 109.746Z" fill="#DBC8F9"/>
<path d="M47.4691 105.883H77.6091C77.9791 105.883 78.2791 105.583 78.2791 105.213C78.2791 104.843 77.9791 104.543 77.6091 104.543H47.4691C47.0991 104.543 46.7991 104.843 46.7991 105.213C46.7891 105.573 47.0991 105.883 47.4691 105.883Z" fill="#DBC8F9"/>
<path d="M47.4691 102.016H77.6091C77.9791 102.016 78.2791 101.716 78.2791 101.346C78.2791 100.976 77.9791 100.676 77.6091 100.676H47.4691C47.0991 100.676 46.7991 100.976 46.7991 101.346C46.7891 101.716 47.0991 102.016 47.4691 102.016Z" fill="#DBC8F9"/>
<path d="M47.4691 109.746H77.6091C77.9791 109.746 78.2791 109.446 78.2791 109.076C78.2791 108.706 77.9791 108.406 77.6091 108.406H47.4691C47.0991 108.406 46.7991 108.706 46.7991 109.076C46.7891 109.446 47.0991 109.746 47.4691 109.746Z" fill="#DBC8F9"/>
<path d="M47.3798 101.194L46.0298 99.7344L40.5998 104.744L37.9698 101.904L36.5098 103.254L40.4998 107.574L47.3798 101.194Z" fill="#3D00C3"/>
<path d="M42.3393 128.148H35.8793C34.9993 128.148 34.2793 127.428 34.2793 126.548V120.088C34.2793 119.208 34.9993 118.488 35.8793 118.488H42.3393C43.2293 118.488 43.9393 119.208 43.9393 120.088V126.548C43.9393 127.428 43.2193 128.148 42.3393 128.148Z" fill="#DBC8F9"/>
<path d="M47.4691 124.277H77.6091C77.9791 124.277 78.2791 123.977 78.2791 123.607C78.2791 123.237 77.9791 122.938 77.6091 122.938H47.4691C47.0991 122.938 46.7991 123.237 46.7991 123.607C46.7891 123.977 47.0991 124.277 47.4691 124.277Z" fill="#DBC8F9"/>
<path d="M47.4691 120.418H77.6091C77.9791 120.418 78.2791 120.118 78.2791 119.748C78.2791 119.378 77.9791 119.078 77.6091 119.078H47.4691C47.0991 119.078 46.7991 119.378 46.7991 119.748C46.7891 120.108 47.0991 120.418 47.4691 120.418Z" fill="#DBC8F9"/>
<path d="M47.4691 128.149H77.6091C77.9791 128.149 78.2791 127.849 78.2791 127.479C78.2791 127.109 77.9791 126.809 77.6091 126.809H47.4691C47.0991 126.809 46.7991 127.109 46.7991 127.479C46.7891 127.839 47.0991 128.149 47.4691 128.149Z" fill="#DBC8F9"/>
<path d="M47.3798 119.597L46.0298 118.137L40.5998 123.147L37.9698 120.297L36.5098 121.647L40.4998 125.977L47.3798 119.597Z" fill="#3D00C3"/>
<path d="M42.3393 146.539H35.8793C34.9993 146.539 34.2793 145.819 34.2793 144.939V138.479C34.2793 137.599 34.9993 136.879 35.8793 136.879H42.3393C43.2293 136.879 43.9393 137.599 43.9393 138.479V144.939C43.9393 145.819 43.2193 146.539 42.3393 146.539Z" fill="#DBC8F9"/>
<path d="M47.4691 142.676H77.6091C77.9791 142.676 78.2791 142.376 78.2791 142.006C78.2791 141.636 77.9791 141.336 77.6091 141.336H47.4691C47.0991 141.336 46.7991 141.636 46.7991 142.006C46.7891 142.366 47.0991 142.676 47.4691 142.676Z" fill="#DBC8F9"/>
<path d="M47.4691 138.809H77.6091C77.9791 138.809 78.2791 138.509 78.2791 138.139C78.2791 137.769 77.9791 137.469 77.6091 137.469H47.4691C47.0991 137.469 46.7991 137.769 46.7991 138.139C46.7891 138.509 47.0991 138.809 47.4691 138.809Z" fill="#DBC8F9"/>
<path d="M47.4688 146.539H77.6088C77.9788 146.539 78.2788 146.239 78.2788 145.869C78.2788 145.499 77.9788 145.199 77.6088 145.199H47.4688C47.0988 145.199 46.7988 145.499 46.7988 145.869C46.7988 146.239 47.0988 146.539 47.4688 146.539Z" fill="#DBC8F9"/>
<path d="M47.3798 137.997L46.0298 136.527L40.5998 141.537L37.9698 138.697L36.5098 140.047L40.4998 144.367L47.3798 137.997Z" fill="#3D00C3"/>
<path d="M33.1599 57.2483C28.8099 58.3583 27.2899 59.8783 26.1799 64.2283C25.9899 64.9583 24.9399 64.9583 24.7599 64.2283C23.6499 59.8783 22.1299 58.3583 17.7799 57.2483C17.0499 57.0583 17.0499 56.0083 17.7799 55.8283C22.1299 54.7183 23.6499 53.1983 24.7599 48.8483C24.9499 48.1183 25.9999 48.1183 26.1799 48.8483C27.2899 53.1983 28.8099 54.7183 33.1599 55.8283C33.8899 56.0083 33.8899 57.0583 33.1599 57.2483Z" fill="#FFC401"/>
<path d="M214.581 70.7083C212.401 71.2683 211.651 72.0183 211.091 74.1983C211.001 74.5583 210.471 74.5583 210.381 74.1983C209.821 72.0183 209.071 71.2683 206.891 70.7083C206.531 70.6183 206.531 70.0883 206.891 69.9983C209.071 69.4383 209.821 68.6883 210.381 66.5083C210.471 66.1483 211.001 66.1483 211.091 66.5083C211.651 68.6883 212.401 69.4383 214.581 69.9983C214.941 70.0883 214.941 70.6183 214.581 70.7083Z" fill="#FFC401"/>
<path d="M224.52 156.086H13.9902V163.136H224.52V156.086Z" fill="#7D5BCA"/>
<path d="M224.52 153.086H13.9902V160.136H224.52V153.086Z" fill="#FFC401"/>
<path d="M203.186 120.762L206.033 121.121L209.532 93.3721L206.685 93.013L203.186 120.762Z" fill="#FFC401"/>
<path d="M200.334 120.403L203.182 120.762L206.681 93.0127L203.833 92.6537L200.334 120.403Z" fill="#3D00C3"/>
<path d="M206.028 121.118L208.875 121.477L212.374 93.7275L209.527 93.3685L206.028 121.118Z" fill="#3D00C3"/>
<path d="M212.362 93.7389L209.242 84.1289L203.832 92.6589L212.362 93.7389Z" fill="#F9F5FE"/>
<path d="M210.292 87.3589L209.242 84.1289L207.422 86.9889L210.292 87.3589Z" fill="#3D00C3"/>
<path d="M205.741 153.087H189.281C184.781 153.087 181.131 149.438 181.131 144.938V105.688H213.901V144.938C213.901 149.438 210.251 153.087 205.741 153.087Z" fill="#7D5BCA"/>
<path d="M194.801 109.688H207.871C208.901 109.688 209.731 110.518 209.731 111.548C209.731 112.578 208.901 113.408 207.871 113.408H194.801C193.771 113.408 192.941 112.578 192.941 111.548C192.941 110.518 193.771 109.688 194.801 109.688Z" fill="#DBC8F9"/>
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
    this.props.forEach(key => this[key as keyof typeof SelesaiKuis2] = this.getAttribute(key));
  }
}
export default SelesaiKuis2