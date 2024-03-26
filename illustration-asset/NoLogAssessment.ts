class NoLogAssessment extends HTMLElement {
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
<g clip-path="url(#clip0_2609_39463)">
<path d="M237.741 96.988C234.731 111.208 226.641 123.798 215.401 134.428C191.311 157.218 152.771 171.028 118.771 172.708C118.151 172.738 117.521 172.768 116.911 172.788C112.711 172.938 108.331 172.918 103.811 172.708C75.2113 171.378 41.5613 162.618 20.3313 144.488C11.7013 137.128 5.12135 128.218 1.76135 117.628C1.46135 116.668 1.17135 115.688 0.921349 114.688C-3.82865 96.158 0.10135 71.948 14.7513 59.678C20.6613 54.728 28.0514 51.948 35.5014 50.498C41.4914 49.328 47.5213 49.018 52.8913 49.108C61.1514 49.248 67.8013 50.358 70.2013 50.798C73.3013 51.368 76.3213 52.118 79.4213 52.868C81.1913 53.298 82.9913 53.728 84.8513 54.118C89.2213 55.058 93.8913 55.818 99.2413 55.968C102.401 56.058 105.791 55.938 109.511 55.518C110.931 55.358 115.891 54.758 124.961 52.238C151.761 44.778 157.391 36.368 172.461 32.538C183.101 29.828 197.461 29.648 210.031 34.468C214.551 36.198 218.831 38.568 222.621 41.708C223.191 42.178 223.761 42.668 224.301 43.178C235.961 53.968 238.771 69.578 238.991 81.218C239.151 89.908 237.871 96.388 237.741 96.988Z" fill="#CFD3FF"/>
<path d="M237.551 96.9866C227.951 142.257 166.931 170.947 116.721 172.787C75.1607 174.307 14.5207 158.387 1.5607 117.627C1.2507 116.667 0.970703 115.687 0.720703 114.687C43.0907 126.177 88.6007 126.247 130.651 113.507C166.681 102.587 202.201 82.7766 238.801 81.2266C238.961 89.9066 237.671 96.3866 237.551 96.9866Z" fill="#EAECFF"/>
<path d="M81.8607 42.0781C71.8107 39.9181 61.1707 35.7481 56.2207 26.7381C54.4407 23.4981 53.5507 19.5481 54.8507 16.0981C56.6007 11.4581 61.7707 9.0081 66.6807 8.2981C72.7707 7.4081 79.1307 8.5281 84.5507 11.4281C92.0007 15.4181 97.9707 22.7381 106.341 23.9081C112.741 24.8081 118.951 21.8481 125.121 19.9081C131.281 17.9681 138.821 17.3081 143.461 21.8181C144.571 22.8981 144.751 24.3281 144.861 24.9081C145.761 29.8381 140.881 34.3581 139.121 35.9981C136.711 38.2281 131.121 42.4481 113.601 43.8581C104.181 44.6181 94.5707 44.8081 81.8607 42.0781Z" fill="#CFD3FF"/>
<path d="M215.209 107.812V134.433C191.119 157.223 152.579 171.033 118.579 172.713H103.619C75.0187 171.383 41.3687 162.623 20.1387 144.493V107.812H215.209Z" fill="#3D00C3"/>
<path d="M215.209 107.812H20.1289V109.923H215.209V107.812Z" fill="#2F00A7"/>
<path d="M23.398 124.803C23.408 124.953 23.298 125.093 23.138 125.103C23.128 125.103 23.118 125.103 23.108 125.103C22.968 125.103 22.838 124.993 22.828 124.843L22.428 120.373L22.368 119.723L22.078 116.433L22.018 115.713L21.668 111.753C21.698 111.723 21.718 111.693 21.748 111.653C21.858 111.503 21.988 111.363 22.108 111.223C22.168 111.263 22.198 111.333 22.208 111.413L22.238 111.723L22.258 111.983L22.588 115.763L22.648 116.423L22.928 119.603L22.988 120.313L23.398 124.803Z" fill="white"/>
<path d="M35.558 119.934C35.508 120.014 35.418 120.064 35.318 120.064C35.268 120.064 35.218 120.054 35.168 120.024L31.398 117.674L30.298 116.994L27.088 114.994L26.178 114.424L22.258 111.984L21.778 111.684C21.768 111.674 21.758 111.674 21.748 111.664C21.858 111.514 21.988 111.374 22.108 111.234H22.118L22.918 111.734L26.948 114.244L27.478 114.574L31.298 116.954L31.818 117.284L35.468 119.554C35.598 119.624 35.638 119.804 35.558 119.934Z" fill="white"/>
<path d="M41.2598 111.666C41.2098 111.706 41.1498 111.726 41.0798 111.726H21.9398C21.8898 111.726 21.8298 111.706 21.7898 111.686C21.7798 111.676 21.7698 111.676 21.7598 111.666C21.8698 111.516 21.9998 111.376 22.1198 111.236H22.1298C22.1498 111.216 22.1598 111.196 22.1898 111.176H40.8598C40.9898 111.326 41.1298 111.496 41.2598 111.666Z" fill="white"/>
<path d="M35.5787 111.535C35.5487 111.615 35.4887 111.675 35.4187 111.705C35.4087 111.705 35.3987 111.715 35.3687 111.725C34.9687 111.905 32.3787 113.185 31.8187 117.275C31.8087 117.335 31.7987 117.395 31.7887 117.445C31.7787 117.525 31.7387 117.595 31.6687 117.645C31.5987 117.685 31.5187 117.705 31.4487 117.685C31.4487 117.685 31.4287 117.685 31.3987 117.675C30.8987 117.575 26.5387 116.815 22.9987 120.315C22.9687 120.345 22.9387 120.375 22.9087 120.405C22.8487 120.455 22.7787 120.485 22.7087 120.485C22.6587 120.485 22.6187 120.475 22.5787 120.455C22.5387 120.435 22.4987 120.415 22.4487 120.385C21.9387 120.125 20.9687 119.705 20.1387 119.595V119.035C20.9787 119.135 21.8787 119.495 22.3987 119.735C22.4987 119.785 22.5887 119.825 22.6687 119.865C22.7587 119.775 22.8587 119.685 22.9487 119.595C25.6087 117.175 28.6487 116.905 30.3187 116.995C30.7387 117.015 31.0687 117.055 31.2887 117.085C31.2987 117.035 31.2987 116.995 31.3087 116.945C31.7887 113.985 33.2887 112.445 34.2887 111.725C34.5487 111.535 34.7787 111.405 34.9387 111.315C34.9187 111.265 34.8987 111.215 34.8787 111.165C34.7087 110.755 34.6287 110.325 34.5987 109.925C34.5487 109.055 34.7587 108.265 34.9187 107.815C34.9787 107.645 35.0287 107.525 35.0587 107.465C35.2387 107.515 35.4187 107.575 35.5887 107.635C35.5887 107.645 35.5787 107.655 35.5787 107.665C35.5787 107.665 35.5487 107.725 35.5187 107.815C35.3887 108.155 35.1087 109.005 35.1687 109.925C35.1987 110.335 35.2887 110.765 35.4987 111.165C35.5187 111.215 35.5487 111.255 35.5687 111.305C35.5987 111.375 35.6087 111.465 35.5787 111.535Z" fill="white"/>
<path d="M30.3689 107.004C30.3589 107.064 30.3289 107.114 30.2789 107.154C30.2489 107.184 29.9989 107.414 29.7189 107.814C29.3689 108.304 28.9889 109.034 28.9589 109.924C28.9489 110.314 28.9989 110.724 29.1489 111.164C29.1689 111.224 29.1889 111.284 29.2189 111.344C29.2589 111.454 29.2289 111.574 29.1489 111.654C29.1489 111.654 29.1189 111.684 29.0789 111.724C28.7589 112.034 27.5289 113.314 27.4889 114.564C27.4889 114.614 27.4889 114.664 27.4889 114.714C27.4889 114.794 27.4589 114.874 27.3889 114.934C27.3289 114.994 27.2389 115.014 27.1589 115.004C27.1589 115.004 27.1389 115.004 27.1089 114.994C26.7589 114.954 24.7289 114.804 22.6689 116.424C22.6289 116.454 22.5889 116.484 22.5489 116.514C22.4989 116.554 22.4389 116.574 22.3689 116.574C22.2989 116.574 22.2389 116.554 22.1889 116.514C22.1889 116.514 22.1589 116.484 22.0989 116.444C21.7989 116.224 20.8189 115.544 20.1289 115.724V115.154C20.7989 115.054 21.5489 115.414 22.0289 115.724C22.1589 115.804 22.2689 115.884 22.3589 115.944C22.4389 115.884 22.5189 115.824 22.5989 115.764C23.9789 114.774 25.2989 114.484 26.1789 114.424C26.4789 114.404 26.7389 114.404 26.9189 114.414C26.9289 114.354 26.9289 114.294 26.9389 114.234C27.0889 113.214 27.7889 112.264 28.2789 111.724C28.4089 111.574 28.5289 111.454 28.6089 111.364C28.5889 111.294 28.5689 111.224 28.5489 111.164C28.4189 110.724 28.3789 110.314 28.3989 109.924C28.4289 109.074 28.7289 108.354 29.0589 107.814C29.2289 107.524 29.4189 107.284 29.5589 107.104C29.8289 107.054 30.0989 107.024 30.3689 107.004Z" fill="white"/>
<path d="M38.4695 122.463C38.3195 122.463 38.1895 122.333 38.1895 122.183V111.733C38.1895 111.583 38.3195 111.453 38.4695 111.453C38.6195 111.453 38.7495 111.583 38.7495 111.733V122.183C38.7495 122.333 38.6295 122.463 38.4695 122.463Z" fill="white"/>
<path d="M38.3596 124.333C39.1936 124.333 39.8696 123.656 39.8696 122.823C39.8696 121.989 39.1936 121.312 38.3596 121.312C37.5257 121.312 36.8496 121.989 36.8496 122.823C36.8496 123.656 37.5257 124.333 38.3596 124.333Z" fill="#1C1C1C"/>
<path d="M38.3598 125.505C38.8292 125.505 39.2098 125.124 39.2098 124.655C39.2098 124.185 38.8292 123.805 38.3598 123.805C37.8903 123.805 37.5098 124.185 37.5098 124.655C37.5098 125.124 37.8903 125.505 38.3598 125.505Z" fill="#1C1C1C"/>
<path d="M41.7492 122.234C41.7292 122.234 41.7092 122.224 41.6992 122.214L40.4292 121.014L39.2692 121.944C39.2292 121.974 39.1792 121.964 39.1492 121.914C39.1192 121.864 39.1392 121.804 39.1792 121.764L40.4292 120.754L41.7992 122.034C41.8392 122.064 41.8392 122.134 41.8192 122.184C41.7992 122.224 41.7792 122.234 41.7492 122.234Z" fill="#1C1C1C"/>
<path d="M41.1895 123.574C41.1695 123.574 41.1395 123.564 41.1295 123.534L40.3595 122.424L39.5395 122.834C39.4995 122.854 39.4495 122.834 39.4295 122.774C39.4095 122.724 39.4295 122.654 39.4795 122.634L40.4095 122.164L41.2595 123.394C41.2895 123.434 41.2895 123.504 41.2495 123.544C41.2295 123.564 41.2095 123.574 41.1895 123.574Z" fill="#1C1C1C"/>
<path d="M40.4293 124.766C40.3893 124.766 40.3593 124.736 40.3493 124.676L40.1893 123.646H39.3593C39.3093 123.646 39.2793 123.596 39.2793 123.536C39.2793 123.476 39.3193 123.426 39.3593 123.426H40.3293L40.5193 124.626C40.5293 124.686 40.4993 124.736 40.4493 124.746C40.4393 124.766 40.4393 124.766 40.4293 124.766Z" fill="#1C1C1C"/>
<path d="M34.9683 122.236C34.9383 122.236 34.9183 122.226 34.8983 122.196C34.8683 122.146 34.8783 122.086 34.9183 122.046L36.2883 120.766L37.5383 121.776C37.5783 121.806 37.5883 121.876 37.5683 121.926C37.5383 121.976 37.4883 121.986 37.4483 121.956L36.2883 121.026L35.0183 122.226C35.0083 122.226 34.9883 122.236 34.9683 122.236Z" fill="#1C1C1C"/>
<path d="M35.5393 123.574C35.5193 123.574 35.4993 123.564 35.4793 123.544C35.4493 123.504 35.4393 123.444 35.4693 123.394L36.3193 122.164L37.2493 122.634C37.2893 122.654 37.3093 122.714 37.2993 122.774C37.2793 122.824 37.2293 122.854 37.1893 122.834L36.3693 122.424L35.5993 123.534C35.5893 123.564 35.5593 123.574 35.5393 123.574Z" fill="#1C1C1C"/>
<path d="M36.2892 124.765C36.2792 124.765 36.2792 124.765 36.2692 124.765C36.2192 124.755 36.1992 124.695 36.1992 124.645L36.3892 123.445H37.3592C37.4092 123.445 37.4392 123.495 37.4392 123.555C37.4392 123.615 37.3992 123.665 37.3592 123.665H36.5292L36.3692 124.695C36.3692 124.725 36.3292 124.765 36.2892 124.765Z" fill="#1C1C1C"/>
<path d="M215.269 107.811H20.0686C18.4086 107.811 17.0586 106.461 17.0586 104.801V100.061C17.0586 98.4008 18.4086 97.0508 20.0686 97.0508H215.269C216.929 97.0508 218.279 98.4008 218.279 100.061V104.801C218.279 106.461 216.929 107.811 215.269 107.811Z" fill="#7D5BCA"/>
<path d="M103.078 97.0602H39.8678L34.8478 45.9402C34.3678 41.0902 38.1378 37.1602 43.2578 37.1602H87.9278C93.0478 37.1602 97.5778 41.0902 98.0578 45.9402L103.078 97.0602Z" fill="#FFD740"/>
<path d="M57.3879 97.0602H39.8679L34.8079 45.4602C34.3579 40.8702 37.9179 37.1602 42.7579 37.1602C47.5979 37.1602 51.8879 40.8802 52.3379 45.4602L57.3879 97.0602Z" fill="#DBA300"/>
<path d="M203.159 56.1103C204.539 53.1703 203.219 49.6103 202.989 49.1103C202.359 47.7003 201.379 46.3303 201.299 44.8803C201.249 43.9703 201.739 43.1803 202.549 41.5903C203.499 39.7403 203.779 39.8103 203.949 38.9403C204.189 37.7003 203.919 36.0903 203.009 34.7003C201.869 32.9603 200.219 32.3203 199.739 32.1403C197.099 31.1203 194.509 32.1203 193.019 33.6803C192.569 34.1503 190.899 35.8903 191.229 38.4103C191.579 41.1203 193.929 42.2903 193.729 44.8603C193.709 45.1503 193.679 45.1503 192.869 47.2003C191.009 51.9003 190.949 52.4603 190.979 53.0503C191.089 55.3503 192.539 57.0403 192.969 57.5003C193.519 58.0903 194.899 59.4103 196.899 59.6903C199.659 60.0803 202.139 58.2803 203.159 56.1103Z" fill="#35A583"/>
<path d="M175.88 46.8804C176.43 50.1804 179.3 52.1304 179.74 52.3804C180.96 53.0904 182.42 53.5104 183.28 54.6404C183.82 55.3504 183.9 56.3604 184.2 58.2704C184.55 60.5304 184.3 60.6704 184.67 61.5404C185.19 62.7804 186.31 63.9604 187.78 64.4704C189.62 65.1104 191.18 64.4204 191.63 64.2204C194.11 63.1204 195.36 60.3604 195.49 57.9704C195.53 57.2604 195.68 54.6404 194.02 52.8204C192.24 50.8804 189.96 51.5704 188.67 49.3704C188.52 49.1204 188.55 49.1004 187.98 46.9304C186.71 42.0404 186.45 41.5704 186.12 41.1404C184.82 39.4604 182.92 39.1204 182.39 39.0504C181.7 38.9504 180.05 38.8504 178.5 39.9304C176.32 41.4504 175.48 44.4804 175.88 46.8804Z" fill="#35A583"/>
<path d="M222.438 42.9521C222.138 45.7821 220.358 48.4921 217.868 50.0021C216.378 50.9021 214.588 51.4621 213.628 52.8321C212.758 54.0821 212.838 55.6721 212.848 57.1321C212.858 58.7821 212.748 60.4621 212.088 61.9621C211.438 63.4521 210.188 64.7621 208.578 65.1521C207.478 65.4221 206.308 65.2421 205.218 64.9821C201.848 64.1621 198.588 62.2721 197.078 59.2521C195.558 56.2321 196.368 51.9021 199.398 50.2721C201.768 49.0021 205.288 49.2421 206.588 46.7621C207.058 45.8621 207.078 44.8221 207.158 43.8121C207.338 41.4021 207.898 38.9621 208.818 36.6121C209.418 35.0921 210.198 33.5521 211.428 32.4021C212.678 31.2321 214.468 30.5221 216.008 30.9421C219.298 31.8521 222.788 39.6921 222.438 42.9521Z" fill="#35A583"/>
<path d="M198.639 72.0531L197.799 71.8731C197.979 71.0131 202.339 50.7731 213.609 44.7031L214.019 45.4631C203.099 51.3531 198.679 71.8531 198.639 72.0531Z" fill="white"/>
<path d="M198.519 74.1931L197.869 72.0931C197.809 71.9031 191.939 53.2331 182.449 48.6331L182.829 47.8531C190.819 51.7231 196.139 64.6331 197.989 69.7531C198.349 60.5131 196.819 44.7031 196.799 44.5331L197.659 44.4531C197.679 44.6431 199.479 63.2831 198.709 72.0131L198.519 74.1931Z" fill="white"/>
<path d="M204.508 97.0611H187.998C187.028 97.0611 186.228 96.3311 186.128 95.3711L183.488 69.7011C183.378 68.5911 184.248 67.6211 185.358 67.6211H207.148C208.268 67.6211 209.138 68.5911 209.018 69.7011L206.378 95.3711C206.278 96.3311 205.478 97.0611 204.508 97.0611Z" fill="#DBC8F9"/>
<path d="M184.139 74.2695H208.549L207.969 79.9895H184.549L184.139 74.2695Z" fill="white"/>
<path d="M169.928 83.3606C172.889 83.3606 175.288 80.9609 175.288 78.0006C175.288 75.0404 172.889 72.6406 169.928 72.6406C166.968 72.6406 164.568 75.0404 164.568 78.0006C164.568 80.9609 166.968 83.3606 169.928 83.3606Z" fill="white"/>
<path d="M99.6882 97.6533H135.708C136.688 97.6533 137.488 96.8633 137.488 95.8833C137.488 94.9033 136.698 94.1133 135.708 94.1133H99.6882C98.7082 94.1133 97.9082 94.9033 97.9082 95.8833C97.9182 96.8633 98.7082 97.6533 99.6882 97.6533Z" fill="#8E8C8B"/>
<path d="M135.418 97.663H180.038C181.728 97.663 183.608 96.163 184.238 94.323L194.718 63.883C195.348 62.043 194.498 60.543 192.818 60.543H148.198C146.508 60.543 144.628 62.033 143.998 63.883L133.518 94.323C132.888 96.163 133.738 97.663 135.418 97.663Z" fill="#002264"/>
<path d="M136.467 97.663H181.087C182.777 97.663 184.657 96.163 185.287 94.323L195.767 63.883C196.397 62.043 195.547 60.543 193.867 60.543H149.247C147.557 60.543 145.677 62.033 145.047 63.883L134.567 94.323C133.927 96.163 134.787 97.663 136.467 97.663Z" fill="#2F00A7"/>
<path d="M126.898 96.7447H131.578C131.978 96.7447 132.298 96.4147 132.298 96.0247C132.298 95.6247 131.978 95.3047 131.578 95.3047H126.898C126.498 95.3047 126.178 95.6247 126.178 96.0247C126.178 96.4147 126.498 96.7447 126.898 96.7447Z" fill="#1C1C1C"/>
<path d="M123.658 96.7447C124.058 96.7447 124.378 96.4147 124.378 96.0247C124.378 95.6247 124.058 95.3047 123.658 95.3047C123.258 95.3047 122.938 95.6247 122.938 96.0247C122.928 96.4147 123.258 96.7447 123.658 96.7447Z" fill="#1C1C1C"/>
<path d="M170.008 82.6118C172.188 80.5618 172.458 77.3218 170.618 75.3818C168.778 73.4518 165.528 73.5418 163.348 75.5918C161.168 77.6418 160.898 80.8718 162.738 82.8118C164.578 84.7518 167.838 84.6518 170.008 82.6118Z" fill="#FFC401"/>
<path d="M177.688 63.7238H193.458C193.838 63.7238 194.148 63.4137 194.148 63.0337C194.148 62.6537 193.838 62.3438 193.458 62.3438H177.688C177.308 62.3438 176.998 62.6537 176.998 63.0337C176.998 63.4137 177.308 63.7238 177.688 63.7238Z" fill="#7D5BCA"/>
<path d="M172.249 63.7238H174.819C175.199 63.7238 175.509 63.4137 175.509 63.0337C175.509 62.6537 175.199 62.3438 174.819 62.3438H172.249C171.869 62.3438 171.559 62.6537 171.559 63.0337C171.569 63.4137 171.869 63.7238 172.249 63.7238Z" fill="#7D5BCA"/>
<path d="M6.40016 47.3327L6.16016 46.1127C17.5202 43.9127 25.4402 41.2127 29.8902 39.0527C28.6602 38.1427 27.6502 36.9627 26.9702 35.4727C26.1602 33.6927 25.9002 31.5827 26.1502 28.8227C26.5002 24.9527 27.7002 22.0327 29.7202 20.1527C30.9202 19.0327 32.5702 18.3127 34.2502 18.1727C36.0702 18.0227 37.7002 18.5727 38.8402 19.7127C40.6102 21.4727 41.2502 24.1927 40.7302 27.8027C40.3002 30.7827 38.8602 32.8327 38.0802 33.9427C38.0102 34.0427 36.3102 36.4327 33.5702 38.3827C33.2202 38.6327 32.8402 38.8727 32.4102 39.1227C35.3202 40.5127 39.0002 40.8827 42.1302 40.8627C53.2902 40.8127 64.6602 38.6027 75.0302 34.4627L75.4902 35.6127C70.2202 37.7127 64.7202 39.3327 59.1202 40.4227C53.5202 41.5127 47.8102 42.0727 42.1402 42.1027C38.5702 42.1227 34.3302 41.6527 31.1002 39.8327C25.8902 42.5227 16.6802 45.3427 6.40016 47.3327ZM34.9402 19.3927C33.3602 19.3627 31.6902 20.0127 30.5702 21.0627C28.7802 22.7327 27.7102 25.3827 27.3902 28.9427C27.1602 31.4827 27.3802 33.3927 28.1002 34.9627C28.7702 36.4427 29.8402 37.5627 31.1502 38.4127C31.8402 38.0427 32.4102 37.6927 32.8602 37.3627C35.4202 35.5427 37.0502 33.2427 37.0702 33.2227C37.7802 32.2027 39.1202 30.3127 39.5002 27.6227C39.9602 24.4227 39.4502 22.0527 37.9702 20.5927C37.1502 19.7827 36.0702 19.4127 34.9402 19.3927Z" fill="#2F00A7"/>
<path d="M186.548 125.212C183.048 125.412 179.528 125.312 176.038 124.932C173.998 124.712 171.868 124.352 170.068 123.272C168.878 122.562 167.908 121.532 167.208 120.342C164.368 121.752 161.098 122.762 157.478 123.352C154.038 123.912 150.508 124.122 147.098 124.322C143.468 124.532 139.708 124.752 136.088 125.412L135.898 124.342C139.578 123.682 143.368 123.452 147.028 123.242C150.418 123.042 153.918 122.832 157.298 122.282C159.788 121.872 163.308 121.042 166.708 119.362C165.998 117.732 165.778 115.892 166.168 114.142C166.938 110.682 170.048 107.912 173.568 107.572C174.538 107.482 175.278 107.632 175.818 108.042C177.168 109.052 176.828 111.082 175.898 112.652C174.168 115.562 171.558 117.982 168.148 119.842C168.758 120.852 169.588 121.722 170.608 122.332C172.138 123.252 173.928 123.602 176.138 123.842C181.178 124.402 186.288 124.332 191.308 123.662L191.448 124.732C189.838 124.962 188.198 125.112 186.548 125.212ZM173.878 108.632C173.808 108.632 173.748 108.642 173.678 108.652C170.618 108.952 167.898 111.362 167.228 114.382C166.888 115.882 167.078 117.462 167.668 118.872C170.498 117.322 173.168 115.152 174.988 112.092C175.648 110.982 175.988 109.512 175.188 108.912C174.888 108.692 174.468 108.602 173.878 108.632Z" fill="#DBC8F9"/>
</g>
<defs>
<clipPath id="clip0_2609_39463">
<rect width="240" height="180" fill="white"/>
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
    this.props.forEach(key => this[key as keyof typeof NoLogAssessment] = this.getAttribute(key));
  }
}
export default NoLogAssessment