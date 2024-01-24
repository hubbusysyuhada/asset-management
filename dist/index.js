"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// icons/Add.ts
var Add_exports = {};
__export(Add_exports, {
  default: () => Add_default
});
var Add, Add_default;
var init_Add = __esm({
  "icons/Add.ts"() {
    "use strict";
    Add = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9991 17.999C10.9991 18.5513 11.4468 18.999 11.9991 18.999C12.5514 18.999 12.9991 18.5513 12.9991 17.999V12.998H17.999C18.5513 12.998 18.999 12.5502 18.999 11.998C18.999 11.4457 18.5513 10.998 17.999 10.998H12.9991V6C12.9991 5.44771 12.5514 5 11.9991 5C11.4468 5 10.9991 5.44771 10.9991 6V10.998H6C5.44772 10.998 5 11.4457 5 11.998C5 12.5502 5.44772 12.998 6 12.998H10.9991V17.999Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Add_default = Add;
  }
});

// icons/AddSquare.ts
var AddSquare_exports = {};
__export(AddSquare_exports, {
  default: () => AddSquare_default
});
var AddSquare, AddSquare_default;
var init_AddSquare = __esm({
  "icons/AddSquare.ts"() {
    "use strict";
    AddSquare = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#414042" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    AddSquare_default = AddSquare;
  }
});

// icons/ArrowDown.ts
var ArrowDown_exports = {};
__export(ArrowDown_exports, {
  default: () => ArrowDown_default
});
var ArrowDown, ArrowDown_default;
var init_ArrowDown = __esm({
  "icons/ArrowDown.ts"() {
    "use strict";
    ArrowDown = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C11.4477 4 11 4.44772 11 5L11 16.5858L8.70711 14.2929C8.31658 13.9024 7.68342 13.9024 7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L16.7071 15.7071C17.0976 15.3166 17.0976 14.6834 16.7071 14.2929C16.3166 13.9024 15.6834 13.9024 15.2929 14.2929L13 16.5858L13 5C13 4.44772 12.5523 4 12 4Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ArrowDown_default = ArrowDown;
  }
});

// icons/ArrowLeft.ts
var ArrowLeft_exports = {};
__export(ArrowLeft_exports, {
  default: () => ArrowLeft_default
});
var ArrowLeft, ArrowLeft_default;
var init_ArrowLeft = __esm({
  "icons/ArrowLeft.ts"() {
    "use strict";
    ArrowLeft = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 11.4477 19.5523 11 19 11H7.41421L9.70711 8.70711C10.0976 8.31658 10.0976 7.68342 9.70711 7.29289C9.31658 6.90237 8.68342 6.90237 8.29289 7.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L8.29289 16.7071C8.68342 17.0976 9.31658 17.0976 9.70711 16.7071C10.0976 16.3166 10.0976 15.6834 9.70711 15.2929L7.41421 13H19C19.5523 13 20 12.5523 20 12Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ArrowLeft_default = ArrowLeft;
  }
});

// icons/ArrowRight.ts
var ArrowRight_exports = {};
__export(ArrowRight_exports, {
  default: () => ArrowRight_default
});
var ArrowRight, ArrowRight_default;
var init_ArrowRight = __esm({
  "icons/ArrowRight.ts"() {
    "use strict";
    ArrowRight = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 12.5523 4.44771 13 5 13L16.5858 13L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11L5 11C4.44772 11 4 11.4477 4 12Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ArrowRight_default = ArrowRight;
  }
});

// icons/ArrowUp.ts
var ArrowUp_exports = {};
__export(ArrowUp_exports, {
  default: () => ArrowUp_default
});
var ArrowUp, ArrowUp_default;
var init_ArrowUp = __esm({
  "icons/ArrowUp.ts"() {
    "use strict";
    ArrowUp = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 20C12.5523 20 13 19.5523 13 19V7.41421L15.2929 9.70711C15.6834 10.0976 16.3166 10.0976 16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L11 7.41421V19C11 19.5523 11.4477 20 12 20Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ArrowUp_default = ArrowUp;
  }
});

// icons/BackLeft.ts
var BackLeft_exports = {};
__export(BackLeft_exports, {
  default: () => BackLeft_default
});
var BackLeft, BackLeft_default;
var init_BackLeft = __esm({
  "icons/BackLeft.ts"() {
    "use strict";
    BackLeft = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 20.7071C9.31658 21.0976 8.68342 21.0976 8.29289 20.7071L4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929C10.0976 11.6834 10.0976 12.3166 9.70711 12.7071L6.41421 16L9.70711 19.2929C10.0976 19.6834 10.0976 20.3166 9.70711 20.7071Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M20 13C20 15.2091 18.2091 17 16 17H5C4.44771 17 4 16.5523 4 16C4 15.4477 4.44771 15 5 15H16C17.1046 15 18 14.1046 18 13V4C18 3.44771 18.4477 3 19 3C19.5523 3 20 3.44771 20 4V13Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    BackLeft_default = BackLeft;
  }
});

// icons/BackRight.ts
var BackRight_exports = {};
__export(BackRight_exports, {
  default: () => BackRight_default
});
var BackRight, BackRight_default;
var init_BackRight = __esm({
  "icons/BackRight.ts"() {
    "use strict";
    BackRight = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 20.7071C14.6834 21.0976 15.3166 21.0976 15.7071 20.7071L19.7071 16.7071C20.0976 16.3166 20.0976 15.6834 19.7071 15.2929L15.7071 11.2929C15.3166 10.9024 14.6834 10.9024 14.2929 11.2929C13.9024 11.6834 13.9024 12.3166 14.2929 12.7071L17.5858 16L14.2929 19.2929C13.9024 19.6834 13.9024 20.3166 14.2929 20.7071Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 15.2091 5.79086 17 8 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H8C6.89543 15 6 14.1046 6 13V4C6 3.44771 5.55228 3 5 3C4.44772 3 4 3.44771 4 4V13Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    BackRight_default = BackRight;
  }
});

// icons/Calendar.ts
var Calendar_exports = {};
__export(Calendar_exports, {
  default: () => Calendar_default
});
var Calendar, Calendar_default;
var init_Calendar = __esm({
  "icons/Calendar.ts"() {
    "use strict";
    Calendar = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4C19.7614 4 22 6.23858 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.23858 4.23858 4 7 4V3C7 2.44772 7.44772 2 8 2ZM7 6C5.34315 6 4 7.34315 4 9V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V9C20 7.34315 18.6569 6 17 6C17 6.55229 16.5523 7 16 7C15.4477 7 15 6.55229 15 6H9C9 6.55229 8.55228 7 8 7C7.44772 7 7 6.55229 7 6Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Calendar_default = Calendar;
  }
});

// icons/CancelCircle.ts
var CancelCircle_exports = {};
__export(CancelCircle_exports, {
  default: () => CancelCircle_default
});
var CancelCircle, CancelCircle_default;
var init_CancelCircle = __esm({
  "icons/CancelCircle.ts"() {
    "use strict";
    CancelCircle = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    CancelCircle_default = CancelCircle;
  }
});

// icons/CheckCircle.ts
var CheckCircle_exports = {};
__export(CheckCircle_exports, {
  default: () => CheckCircle_default
});
var CheckCircle, CheckCircle_default;
var init_CheckCircle = __esm({
  "icons/CheckCircle.ts"() {
    "use strict";
    CheckCircle = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM17.2975 8.29251C16.9074 7.89963 16.2719 7.89811 15.8804 8.28961L10 14.17L8.11568 12.293C7.72572 11.9045 7.09489 11.9051 6.70568 12.2943C6.31594 12.6841 6.31594 13.3159 6.70568 13.7057L8.58579 15.5858C9.36684 16.3668 10.6332 16.3668 11.4142 15.5858L17.2954 9.70461C17.6849 9.31506 17.6857 8.68343 17.2975 8.29251Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    CheckCircle_default = CheckCircle;
  }
});

// icons/ChevronDown.ts
var ChevronDown_exports = {};
__export(ChevronDown_exports, {
  default: () => ChevronDown_default
});
var ChevronDown, ChevronDown_default;
var init_ChevronDown = __esm({
  "icons/ChevronDown.ts"() {
    "use strict";
    ChevronDown = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M5.34923 8.23881C5.76855 7.87939 6.39985 7.92795 6.75927 8.34727L12 14.4615L17.2408 8.34727C17.6002 7.92795 18.2315 7.87939 18.6508 8.23881C19.0701 8.59823 19.1187 9.22953 18.7593 9.64886L12.9871 16.3831C12.4682 16.9884 11.5318 16.9884 11.013 16.3831L5.24076 9.64886C4.88134 9.22953 4.9299 8.59823 5.34923 8.23881Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ChevronDown_default = ChevronDown;
  }
});

// icons/ChevronLeft.ts
var ChevronLeft_exports = {};
__export(ChevronLeft_exports, {
  default: () => ChevronLeft_default
});
var ChevronLeft, ChevronLeft_default;
var init_ChevronLeft = __esm({
  "icons/ChevronLeft.ts"() {
    "use strict";
    ChevronLeft = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M16.5981 5.34923C16.9575 5.76855 16.909 6.39985 16.4896 6.75927L10.3754 12L16.4896 17.2408C16.909 17.6002 16.9575 18.2315 16.5981 18.6508C16.2387 19.0701 15.6074 19.1187 15.1881 18.7593L8.4538 12.9871C7.8485 12.4682 7.8485 11.5318 8.4538 11.013L15.1881 5.24076C15.6074 4.88134 16.2387 4.9299 16.5981 5.34923Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ChevronLeft_default = ChevronLeft;
  }
});

// icons/ChevronRight.ts
var ChevronRight_exports = {};
__export(ChevronRight_exports, {
  default: () => ChevronRight_default
});
var ChevronRight, ChevronRight_default;
var init_ChevronRight = __esm({
  "icons/ChevronRight.ts"() {
    "use strict";
    ChevronRight = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M8.24076 18.6508C7.88134 18.2314 7.9299 17.6001 8.34923 17.2407L14.4634 12L8.34923 6.75924C7.9299 6.39982 7.88134 5.76852 8.24076 5.34919C8.60018 4.92986 9.23148 4.8813 9.65081 5.24073L16.3851 11.0129C16.9904 11.5318 16.9904 12.4682 16.3851 12.987L9.65081 18.7592C9.23148 19.1187 8.60018 19.0701 8.24076 18.6508Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ChevronRight_default = ChevronRight;
  }
});

// icons/ChevronUp.ts
var ChevronUp_exports = {};
__export(ChevronUp_exports, {
  default: () => ChevronUp_default
});
var ChevronUp, ChevronUp_default;
var init_ChevronUp = __esm({
  "icons/ChevronUp.ts"() {
    "use strict";
    ChevronUp = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 16.5991C18.2314 16.9585 17.6001 16.9099 17.2407 16.4906L12 10.3764L6.75924 16.4906C6.39982 16.9099 5.76852 16.9585 5.34919 16.5991C4.92986 16.2397 4.8813 15.6084 5.24073 15.189L11.0129 8.45477C11.5318 7.84948 12.4682 7.84948 12.987 8.45477L18.7592 15.189C19.1187 15.6084 19.0701 16.2397 18.6508 16.5991Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ChevronUp_default = ChevronUp;
  }
});

// icons/ChevronUpDown.ts
var ChevronUpDown_exports = {};
__export(ChevronUpDown_exports, {
  default: () => ChevronUpDown_default
});
var ChevronUpDown, ChevronUpDown_default;
var init_ChevronUpDown = __esm({
  "icons/ChevronUpDown.ts"() {
    "use strict";
    ChevronUpDown = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2968 2 12.5783 2.13182 12.7682 2.35982L17.7682 8.35982C18.1218 8.78409 18.0645 9.41466 17.6402 9.76822C17.2159 10.1218 16.5854 10.0645 16.2318 9.64018L12 4.56205L7.76825 9.64018C7.41468 10.0645 6.78412 10.1218 6.35984 9.76822C5.93556 9.41466 5.87824 8.78409 6.2318 8.35982L11.2318 2.35982C11.4218 2.13182 11.7032 2 12 2Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C12.2968 22 12.5783 21.8682 12.7682 21.6402L17.7682 15.6402C18.1218 15.2159 18.0645 14.5853 17.6402 14.2318C17.2159 13.8782 16.5854 13.9355 16.2318 14.3598L12 19.438L7.76825 14.3598C7.41468 13.9355 6.78412 13.8782 6.35984 14.2318C5.93556 14.5853 5.87824 15.2159 6.2318 15.6402L11.2318 21.6402C11.4218 21.8682 11.7032 22 12 22Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ChevronUpDown_default = ChevronUpDown;
  }
});

// icons/Close.ts
var Close_exports = {};
__export(Close_exports, {
  default: () => Close_default
});
var Close, Close_default;
var init_Close = __esm({
  "icons/Close.ts"() {
    "use strict";
    Close = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Close_default = Close;
  }
});

// icons/ComputerEdit.ts
var ComputerEdit_exports = {};
__export(ComputerEdit_exports, {
  default: () => ComputerEdit_default
});
var ComputerEdit, ComputerEdit_default;
var init_ComputerEdit = __esm({
  "icons/ComputerEdit.ts"() {
    "use strict";
    ComputerEdit = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M105.876 50.4141C103.103 50.4141 100.834 52.6828 100.834 55.4557V71.337C100.834 79.2524 94.3806 85.7057 86.4652 85.7057H34.5361C26.6206 85.7057 20.1673 79.2524 20.1673 71.337V44.6161C20.1673 36.7007 26.6206 30.2474 34.5361 30.2474H55.459C58.2319 30.2474 60.5006 27.9786 60.5006 25.2057C60.5006 22.4328 58.2319 20.1641 55.459 20.1641H34.5361C21.0748 20.1641 10.084 31.1549 10.084 44.6161V71.2866C10.084 84.7982 21.0748 95.7891 34.5361 95.7891H55.459V100.831H35.2923C32.5194 100.831 30.2507 103.099 30.2507 105.872C30.2507 108.645 32.5194 110.914 35.2923 110.914H85.709C88.4819 110.914 90.7506 108.645 90.7506 105.872C90.7506 103.099 88.4819 100.831 85.709 100.831H65.5423V95.7891H86.4652C99.9769 95.7891 110.917 84.7982 110.917 71.337V55.4557C110.917 52.6828 108.649 50.4141 105.876 50.4141Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M99.1701 12.9558C95.3384 9.12411 89.0868 9.12411 85.2047 12.9558L63.828 34.3324L60.5509 54.1966C59.9459 57.877 63.1222 61.0533 66.8026 60.4483L86.6164 57.1208L107.993 35.7441C111.825 31.9124 111.825 25.6608 107.993 21.7787L99.1701 12.9558ZM71.3401 49.6591L73.1047 39.0716L92.2126 19.9637L101.036 28.7866L81.8772 47.9449L71.3401 49.6591Z" fill="#3D00C3"/>
<ellipse style="${this.colorStyle}" cx="30.2507" cy="40.3346" rx="5.04167" ry="5.04167" fill="#3D00C3"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    ComputerEdit_default = ComputerEdit;
  }
});

// icons/Copy.ts
var Copy_exports = {};
__export(Copy_exports, {
  default: () => Copy_default
});
var Copy, Copy_default;
var init_Copy = __esm({
  "icons/Copy.ts"() {
    "use strict";
    Copy = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M5.06673 6.49771C5.06673 5.56813 5.8337 4.81698 6.7734 4.81698H10.5467C10.5623 4.81698 10.5778 4.81771 10.5934 4.81916V6.64215C10.5934 7.28556 11.1268 7.81079 11.7801 7.81079H13.3334V11.6712C13.3334 12.5966 12.5707 13.352 11.6267 13.352H6.7734C5.8337 13.352 5.06673 12.6008 5.06673 11.6712V6.49771ZM6.7734 3.50391C5.09976 3.50391 3.7334 4.84054 3.7334 6.49771V11.6712C3.7334 13.3284 5.09976 14.665 6.7734 14.665H11.6267C13.3095 14.665 14.6667 13.3194 14.6667 11.6712V7.5613C14.6667 7.07423 14.4669 6.61685 14.1318 6.2768L14.1283 6.27329L11.8546 4.03414L11.851 4.03072C11.5058 3.70068 11.0413 3.50391 10.5467 3.50391H6.7734Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M4.3735 2.6451C3.42835 2.6451 2.66683 3.39506 2.66683 4.32584V9.10542C2.66683 10.0362 3.42835 10.7862 4.3735 10.7862V12.0992C2.69197 12.0992 1.3335 10.7614 1.3335 9.10542V4.32584C1.3335 2.66987 2.69197 1.33203 4.3735 1.33203H9.6335C11.3096 1.33203 12.6668 2.67107 12.6668 4.32584V5.8884H11.3335V4.32584C11.3335 3.39385 10.5708 2.6451 9.6335 2.6451H4.3735Z" fill="#3D00C3"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Copy_default = Copy;
  }
});

// icons/Detail.ts
var Detail_exports = {};
__export(Detail_exports, {
  default: () => Detail_default
});
var Detail, Detail_default;
var init_Detail = __esm({
  "icons/Detail.ts"() {
    "use strict";
    Detail = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><pathd="M6 13.3359H5.06667C4.11333 13.3359 3.33333 12.5559 3.33333 11.6026V4.4026C3.33333 3.44927 4.11333 2.66927 5.06667 2.66927H8.88667C9.02667 2.66927 9.16667 2.72927 9.26667 2.8226L9.30667 2.8626V4.28927C9.30667 4.8826 9.78667 5.36927 10.3867 5.36927H11.7C11.7133 5.40927 11.7267 5.45594 11.7267 5.5026C11.7267 5.86927 12.0267 6.16927 12.3933 6.16927C12.76 6.16927 13.06 5.86927 13.06 5.5026C13.06 5.00927 12.86 4.52927 12.5133 4.1826L10.2133 1.8826C9.86 1.53594 9.38 1.33594 8.88667 1.33594H5.06667C3.37333 1.33594 2 2.70927 2 4.4026V11.6026C2 13.2959 3.37333 14.6693 5.06667 14.6693H6C6.36667 14.6693 6.66667 14.3693 6.66667 14.0026C6.66667 13.6359 6.36667 13.3359 6 13.3359Z"
        fill="#3D00C3"/><path
        d="M13.7276 13.5255L12.501 12.2989C13.0476 11.6322 13.3743 10.7789 13.3743 9.85219C13.3743 7.72552 11.641 5.99219 9.5143 5.99219C7.38763 5.99219 5.6543 7.72552 5.6543 9.85219C5.6543 11.9789 7.38763 13.7122 9.5143 13.7122C10.2343 13.7122 10.9076 13.5122 11.481 13.1655L12.781 14.4655C12.9143 14.5989 13.081 14.6589 13.2543 14.6589C13.4276 14.6589 13.5943 14.5922 13.7276 14.4655C13.9876 14.2122 13.9876 13.7855 13.7276 13.5255ZM6.9943 9.85885C6.9943 8.46552 8.12763 7.33219 9.52096 7.33219C10.9143 7.33219 12.0476 8.46552 12.0476 9.85885C12.0476 11.2522 10.9143 12.3855 9.52096 12.3855C8.12763 12.3855 6.9943 11.2522 6.9943 9.85885Z"
        fill="#3D00C3"/></svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Detail_default = Detail;
  }
});

// icons/DoubleChevronDown.ts
var DoubleChevronDown_exports = {};
__export(DoubleChevronDown_exports, {
  default: () => DoubleChevronDown_default
});
var DoubleChevronDown, DoubleChevronDown_default;
var init_DoubleChevronDown = __esm({
  "icons/DoubleChevronDown.ts"() {
    "use strict";
    DoubleChevronDown = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M5.34923 5.24076C5.76855 4.88134 6.39985 4.9299 6.75927 5.34923L12 11.4634L17.2408 5.34923C17.6002 4.9299 18.2315 4.88134 18.6508 5.24076C19.0701 5.60018 19.1187 6.23148 18.7593 6.65081L12.9871 13.3851C12.4682 13.9904 11.5318 13.9904 11.013 13.3851L5.24076 6.65081C4.88134 6.23148 4.9299 5.60018 5.34923 5.24076Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M5.34923 11.2408C5.76855 10.8813 6.39985 10.9299 6.75927 11.3492L12 17.4634L17.2408 11.3492C17.6002 10.9299 18.2315 10.8813 18.6508 11.2408C19.0701 11.6002 19.1187 12.2315 18.7593 12.6508L12.9871 19.3851C12.4682 19.9904 11.5318 19.9904 11.013 19.3851L5.24076 12.6508C4.88134 12.2315 4.9299 11.6002 5.34923 11.2408Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    DoubleChevronDown_default = DoubleChevronDown;
  }
});

// icons/DoubleChevronLeft.ts
var DoubleChevronLeft_exports = {};
__export(DoubleChevronLeft_exports, {
  default: () => DoubleChevronLeft_default
});
var DoubleChevronLeft, DoubleChevronLeft_default;
var init_DoubleChevronLeft = __esm({
  "icons/DoubleChevronLeft.ts"() {
    "use strict";
    DoubleChevronLeft = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M19.1792 5.76915C19.5386 6.18847 19.49 6.81977 19.0707 7.1792L12.9565 12.4199L19.0707 17.6607C19.49 18.0201 19.5386 18.6514 19.1792 19.0707C18.8197 19.4901 18.1884 19.5386 17.7691 19.1792L11.0349 13.407C10.4296 12.8881 10.4296 11.9517 11.0349 11.4329L17.7691 5.66068C18.1884 5.30126 18.8197 5.34982 19.1792 5.76915Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M13.1792 5.76915C13.5386 6.18847 13.49 6.81977 13.0707 7.1792L6.95649 12.4199L13.0707 17.6607C13.49 18.0201 13.5386 18.6514 13.1792 19.0707C12.8197 19.4901 12.1884 19.5386 11.7691 19.1792L5.03485 13.407C4.42956 12.8881 4.42956 11.9517 5.03485 11.4329L11.7691 5.66068C12.1884 5.30126 12.8197 5.34982 13.1792 5.76915Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    DoubleChevronLeft_default = DoubleChevronLeft;
  }
});

// icons/DoubleChevronRight.ts
var DoubleChevronRight_exports = {};
__export(DoubleChevronRight_exports, {
  default: () => DoubleChevronRight_default
});
var DoubleChevronRight, DoubleChevronRight_default;
var init_DoubleChevronRight = __esm({
  "icons/DoubleChevronRight.ts"() {
    "use strict";
    DoubleChevronRight = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M5.24076 18.6508C4.88134 18.2314 4.9299 17.6001 5.34923 17.2407L11.4634 12L5.34923 6.75924C4.9299 6.39982 4.88134 5.76852 5.24076 5.34919C5.60018 4.92986 6.23148 4.8813 6.65081 5.24073L13.3851 11.0129C13.9904 11.5318 13.9904 12.4682 13.3851 12.987L6.65081 18.7592C6.23148 19.1187 5.60018 19.0701 5.24076 18.6508Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M11.2408 18.6508C10.8813 18.2314 10.9299 17.6001 11.3492 17.2407L17.4634 12L11.3492 6.75924C10.9299 6.39982 10.8813 5.76852 11.2408 5.34919C11.6002 4.92986 12.2315 4.8813 12.6508 5.24073L19.3851 11.0129C19.9904 11.5318 19.9904 12.4682 19.3851 12.987L12.6508 18.7592C12.2315 19.1187 11.6002 19.0701 11.2408 18.6508Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    DoubleChevronRight_default = DoubleChevronRight;
  }
});

// icons/DoubleChevronUp.ts
var DoubleChevronUp_exports = {};
__export(DoubleChevronUp_exports, {
  default: () => DoubleChevronUp_default
});
var DoubleChevronUp, DoubleChevronUp_default;
var init_DoubleChevronUp = __esm({
  "icons/DoubleChevronUp.ts"() {
    "use strict";
    DoubleChevronUp = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 19.5981C18.2314 19.9575 17.6001 19.909 17.2407 19.4896L12 13.3754L6.75924 19.4896C6.39982 19.909 5.76852 19.9575 5.34919 19.5981C4.92986 19.2387 4.8813 18.6074 5.24073 18.1881L11.0129 11.4538C11.5318 10.8485 12.4682 10.8485 12.987 11.4538L18.7592 18.1881C19.1187 18.6074 19.0701 19.2387 18.6508 19.5981Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M18.6508 13.5981C18.2314 13.9575 17.6001 13.909 17.2407 13.4896L12 7.37544L6.75924 13.4896C6.39982 13.909 5.76852 13.9575 5.34919 13.5981C4.92986 13.2387 4.8813 12.6074 5.24073 12.1881L11.0129 5.4538C11.5318 4.8485 12.4682 4.8485 12.987 5.4538L18.7592 12.1881C19.1187 12.6074 19.0701 13.2387 18.6508 13.5981Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    DoubleChevronUp_default = DoubleChevronUp;
  }
});

// icons/Envelope.ts
var Envelope_exports = {};
__export(Envelope_exports, {
  default: () => Envelope_default
});
var Envelope, Envelope_default;
var init_Envelope = __esm({
  "icons/Envelope.ts"() {
    "use strict";
    Envelope = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M17 3H7C4.24 3 2 5.24 2 8V16C2 18.76 4.24 21 7 21H17C19.76 21 22 18.76 22 16V8C22 5.24 19.76 3 17 3ZM7 5H17C17.88 5 18.66 5.39 19.21 5.99L12.55 10.43C12.21 10.65 11.78 10.65 11.44 10.43L4.79 5.99C5.34 5.39 6.12 5 7 5ZM20 16C20 17.65 18.65 19 17 19H7C5.35 19 4 17.65 4 16V8C4 7.96 4.01 7.92 4.01 7.88L10.33 12.1C10.84 12.43 11.42 12.6 12 12.6C12.58 12.6 13.16 12.43 13.66 12.09L19.98 7.87C19.99 7.92 20 7.96 20 8V16Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Envelope_default = Envelope;
  }
});

// icons/EnvelopeOpen.ts
var EnvelopeOpen_exports = {};
__export(EnvelopeOpen_exports, {
  default: () => EnvelopeOpen_default
});
var EnvelopeOpen, EnvelopeOpen_default;
var init_EnvelopeOpen = __esm({
  "icons/EnvelopeOpen.ts"() {
    "use strict";
    EnvelopeOpen = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M21.59 7.51253L21.6 7.49253L21.52 7.43253C21.32 7.19253 21.07 7.00253 20.78 6.87253L13.64 1.50253C12.66 0.842528 11.37 0.822528 10.3 1.50253L3.2 6.88253C2.92 7.01253 2.68 7.20253 2.48 7.43253L2.4 7.49253L2.42 7.51253C2.16 7.85253 2 8.26253 2 8.71253V17.0025C2 19.7625 4.24 22.0025 7 22.0025H17C19.76 22.0025 22 19.7625 22 17.0025V8.71253C22 8.26253 21.84 7.85253 21.59 7.51253ZM11.43 3.15253C11.76 2.94253 12.19 2.94253 12.48 3.13253L18.96 8.00253L12.57 12.8525C12.24 13.0625 11.81 13.0625 11.52 12.8725L5.04 8.00253L11.43 3.15253ZM17 20.0125H7C5.35 20.0125 4 18.6625 4 17.0125V9.72253L10.36 14.5025C10.86 14.8325 11.43 15.0025 12.01 15.0025C12.59 15.0025 13.17 14.8325 13.71 14.4925L20 9.73253V17.0125C20 18.6625 18.65 20.0125 17 20.0125Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    EnvelopeOpen_default = EnvelopeOpen;
  }
});

// icons/Error.ts
var Error_exports = {};
__export(Error_exports, {
  default: () => Error_default
});
var Error2, Error_default;
var init_Error = __esm({
  "icons/Error.ts"() {
    "use strict";
    Error2 = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V8Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Error_default = Error2;
  }
});

// icons/Filter.ts
var Filter_exports = {};
__export(Filter_exports, {
  default: () => Filter_default
});
var Filter, Filter_default;
var init_Filter = __esm({
  "icons/Filter.ts"() {
    "use strict";
    Filter = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8.36992L15 15.3699V17.3501C15 18.1405 14.5345 18.8567 13.8123 19.1777L11.3123 20.2889C9.9897 20.8767 8.5 19.9086 8.5 18.4612V15.3459L3 8.34586V5ZM19 5H5V7H19V5ZM17.8258 9H6.05746L10.0726 14.1102C10.3495 14.4626 10.5 14.8977 10.5 15.3459V18.4612L13 17.3501V15.3699C13 14.8925 13.1708 14.4308 13.4815 14.0683L17.8258 9Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Filter_default = Filter;
  }
});

// icons/Folder.ts
var Folder_exports = {};
__export(Folder_exports, {
  default: () => Folder_default
});
var Folder, Folder_default;
var init_Folder = __esm({
  "icons/Folder.ts"() {
    "use strict";
    Folder = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M9 5C9.36 5 10.28 5.82 10.73 6.21C11.69 7.06 12.68 7.93 14 7.93H17C18.65 7.93 20 9.28 20 10.93V15.86C20 17.51 18.65 18.86 17 18.86H7C5.35 18.86 4 17.51 4 15.86V7C4 5.9 4.9 5 6 5H9ZM9 3H6C3.79 3 2 4.79 2 7V15.86C2 18.62 4.24 20.86 7 20.86H17C19.76 20.86 22 18.62 22 15.86V10.93C22 8.17 19.76 5.93 17 5.93H14C12.73 5.93 11 3 9 3Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Folder_default = Folder;
  }
});

// icons/Info.ts
var Info_exports = {};
__export(Info_exports, {
  default: () => Info_default
});
var Info, Info_default;
var init_Info = __esm({
  "icons/Info.ts"() {
    "use strict";
    Info = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Info_default = Info;
  }
});

// icons/InfoSquare.ts
var InfoSquare_exports = {};
__export(InfoSquare_exports, {
  default: () => InfoSquare_default
});
var InfoSquare, InfoSquare_default;
var init_InfoSquare = __esm({
  "icons/InfoSquare.ts"() {
    "use strict";
    InfoSquare = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M12 17C11.4477 17 11 16.5523 11 16L11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11L13 16C13 16.5523 12.5523 17 12 17Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M11 8C11 7.44771 11.4477 7 12 7C12.5523 7 13 7.44771 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M17 22C19.7614 22 22 19.7614 22 17L22 7C22 4.23858 19.7614 2 17 2L7 2C4.23858 2 2 4.23858 2 7L2 17C2 19.7614 4.23858 22 7 22L17 22ZM20 17C20 18.6569 18.6569 20 17 20L7 20C5.34315 20 4 18.6569 4 17L4 7C4 5.34314 5.34315 4 7 4L17 4C18.6569 4 20 5.34315 20 7L20 17Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    InfoSquare_default = InfoSquare;
  }
});

// icons/Minus.ts
var Minus_exports = {};
__export(Minus_exports, {
  default: () => Minus_default
});
var Minus, Minus_default;
var init_Minus = __esm({
  "icons/Minus.ts"() {
    "use strict";
    Minus = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Minus_default = Minus;
  }
});

// icons/Search.ts
var Search_exports = {};
__export(Search_exports, {
  default: () => Search_default
});
var Search, Search_default;
var init_Search = __esm({
  "icons/Search.ts"() {
    "use strict";
    Search = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Search_default = Search;
  }
});

// icons/SortBy.ts
var SortBy_exports = {};
__export(SortBy_exports, {
  default: () => SortBy_default
});
var SortBy, SortBy_default;
var init_SortBy = __esm({
  "icons/SortBy.ts"() {
    "use strict";
    SortBy = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M8 4C7.44772 4 7 4.43642 7 4.97477L7 16.2682L4.70711 14.0332C4.31658 13.6525 3.68342 13.6525 3.29289 14.0332C2.90237 14.4138 2.90237 15.031 3.29289 15.4117L7.30199 19.3196C7.69034 19.6982 8.30966 19.6982 8.69802 19.3196L12.7071 15.4117C13.0976 15.031 13.0976 14.4138 12.7071 14.0332C12.3166 13.6525 11.6834 13.6525 11.2929 14.0332L9 16.2682L9 4.97477C9 4.43642 8.55228 4 8 4Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M16 20.4141C16.5523 20.4141 17 19.9776 17 19.4393L17 8.14588L19.2929 10.3809C19.6834 10.7616 20.3166 10.7616 20.7071 10.3809C21.0976 10.0002 21.0976 9.38306 20.7071 9.00239L16.698 5.09446C16.3097 4.71591 15.6903 4.71591 15.302 5.09446L11.2929 9.00239C10.9024 9.38305 10.9024 10.0002 11.2929 10.3809C11.6834 10.7616 12.3166 10.7616 12.7071 10.3809L15 8.14588L15 19.4393C15 19.9776 15.4477 20.4141 16 20.4141Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    SortBy_default = SortBy;
  }
});

// icons/SubSquare.ts
var SubSquare_exports = {};
__export(SubSquare_exports, {
  default: () => SubSquare_default
});
var SubSquare, SubSquare_default;
var init_SubSquare = __esm({
  "icons/SubSquare.ts"() {
    "use strict";
    SubSquare = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M15 12H9M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#414042" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    SubSquare_default = SubSquare;
  }
});

// icons/Time.ts
var Time_exports = {};
__export(Time_exports, {
  default: () => Time_default
});
var Time, Time_default;
var init_Time = __esm({
  "icons/Time.ts"() {
    "use strict";
    Time = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 7C12.5523 7 13 7.44772 13 8V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11 12.4142V8C11 7.44772 11.4477 7 12 7Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Time_default = Time;
  }
});

// icons/TurnLeft.ts
var TurnLeft_exports = {};
__export(TurnLeft_exports, {
  default: () => TurnLeft_default
});
var TurnLeft, TurnLeft_default;
var init_TurnLeft = __esm({
  "icons/TurnLeft.ts"() {
    "use strict";
    TurnLeft = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071C10.0976 12.3166 10.0976 11.6834 9.70711 11.2929L6.41421 8L9.70711 4.70711C10.0976 4.31658 10.0976 3.68342 9.70711 3.29289Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M20 11C20 8.79086 18.2091 7 16 7H5C4.44771 7 4 7.44772 4 8C4 8.55228 4.44771 9 5 9H16C17.1046 9 18 9.89543 18 11V20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20V11Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    TurnLeft_default = TurnLeft;
  }
});

// icons/TurnRight.ts
var TurnRight_exports = {};
__export(TurnRight_exports, {
  default: () => TurnRight_default
});
var TurnRight, TurnRight_default;
var init_TurnRight = __esm({
  "icons/TurnRight.ts"() {
    "use strict";
    TurnRight = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 3.29289C14.6834 2.90237 15.3166 2.90237 15.7071 3.29289L19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711L15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071C13.9024 12.3166 13.9024 11.6834 14.2929 11.2929L17.5858 8L14.2929 4.70711C13.9024 4.31658 13.9024 3.68342 14.2929 3.29289Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 8.79086 5.79086 7 8 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H8C6.89543 9 6 9.89543 6 11V20C6 20.5523 5.55228 21 5 21C4.44772 21 4 20.5523 4 20V11Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    TurnRight_default = TurnRight;
  }
});

// icons/Verified.ts
var Verified_exports = {};
__export(Verified_exports, {
  default: () => Verified_default
});
var Verified, Verified_default;
var init_Verified = __esm({
  "icons/Verified.ts"() {
    "use strict";
    Verified = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M21 10.4514C21 11.4358 19.0996 12.1067 18.8144 12.9906C18.5171 13.9107 19.646 15.5659 19.0916 16.3293C18.5291 17.1007 16.6006 16.5342 15.8292 17.0967C15.0659 17.6551 15.0096 19.664 14.0936 19.9653C13.2057 20.2546 11.9843 18.6676 11 18.6676C10.0157 18.6676 8.7943 20.2546 7.90639 19.9653C6.98634 19.668 6.93411 17.6551 6.17075 17.0967C5.39936 16.5342 3.47087 17.1007 2.9084 16.3293C2.34994 15.5659 3.48292 13.9066 3.18562 12.9906C2.89634 12.1027 1 11.4318 1 10.4514C1 9.46711 2.90036 8.79616 3.18562 7.91227C3.48292 6.99222 2.35396 5.33694 2.9084 4.57358C3.47087 3.80218 5.39936 4.36867 6.17075 3.8062C6.93411 3.24774 6.99036 1.2389 7.90639 0.937578C8.7943 0.648305 10.0157 2.23529 11 2.23529C11.9843 2.23529 13.2057 0.648305 14.0936 0.937578C15.0137 1.23489 15.0659 3.24774 15.8292 3.8062C16.6006 4.36867 18.5291 3.80218 19.0916 4.57358C19.6501 5.33694 18.5171 6.99624 18.8144 7.91227C19.0996 8.80017 21 9.47113 21 10.4514Z" fill="#35A583"/>
<path style="${this.colorStyle}" d="M9.02787 14.6933C8.82699 14.6933 8.62209 14.617 8.46942 14.4603L5.50839 11.4993C5.19903 11.1899 5.19903 10.6877 5.50839 10.3783C5.81775 10.069 6.31996 10.069 6.62932 10.3783L9.03189 12.7809L15.3718 6.44101C15.6811 6.13164 16.1834 6.13164 16.4927 6.44101C16.8021 6.75037 16.8021 7.25258 16.4927 7.56194L9.58633 14.4603C9.43366 14.613 9.23277 14.6933 9.02787 14.6933Z" fill="white"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Verified_default = Verified;
  }
});

// icons/Visibility.ts
var Visibility_exports = {};
__export(Visibility_exports, {
  default: () => Visibility_default
});
var Visibility, Visibility_default;
var init_Visibility = __esm({
  "icons/Visibility.ts"() {
    "use strict";
    Visibility = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Visibility_default = Visibility;
  }
});

// icons/VisibilityOff.ts
var VisibilityOff_exports = {};
__export(VisibilityOff_exports, {
  default: () => VisibilityOff_default
});
var VisibilityOff, VisibilityOff_default;
var init_VisibilityOff = __esm({
  "icons/VisibilityOff.ts"() {
    "use strict";
    VisibilityOff = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 2.29289C3.68342 1.90237 4.31658 1.90237 4.70711 2.29289L21.2071 18.7929C21.5976 19.1834 21.5976 19.8166 21.2071 20.2071C20.8166 20.5976 20.1834 20.5976 19.7929 20.2071L3.29289 3.70711C2.90237 3.31658 2.90237 2.68342 3.29289 2.29289Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M7.58952 6.00374C5.45704 7.01693 3.55091 8.78875 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C14.2453 19 16.4611 18.2472 18.3642 16.7784L16.936 15.3502C15.4103 16.4608 13.6917 17 12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C5.41562 9.70355 7.20038 8.24612 9.11403 7.52825L7.58952 6.00374ZM18.4241 14.0099C18.9653 13.4146 19.4646 12.7282 19.9083 11.9487C17.9314 8.59614 14.9268 7 12 7C11.8116 7 11.6229 7.00661 11.4341 7.01989L9.68278 5.26857C10.444 5.09002 11.2203 5 12 5C15.8122 5 19.542 7.15186 21.83 11.2807C22.0536 11.6844 22.0564 12.1821 21.8397 12.5876C21.2632 13.6665 20.5884 14.6133 19.8391 15.4249L18.4241 14.0099ZM10.8247 9.23895C9.752 9.69615 9 10.7603 9 12C9 13.6569 10.3431 15 12 15C13.2397 15 14.3038 14.248 14.761 13.1753L10.8247 9.23895ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    VisibilityOff_default = VisibilityOff;
  }
});

// icons/Warning.ts
var Warning_exports = {};
__export(Warning_exports, {
  default: () => Warning_default
});
var Warning, Warning_default;
var init_Warning = __esm({
  "icons/Warning.ts"() {
    "use strict";
    Warning = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M2.88648 18.493C2.49435 19.1596 2.975 20 3.74842 20H20.2516C21.025 20 21.5057 19.1596 21.1135 18.493L12.8619 4.46529C12.4753 3.80798 11.5247 3.80798 11.1381 4.46529L2.88648 18.493ZM5.15455 18.2105L12 6.57L18.8455 18.2105H5.15455ZM11.0909 16.4211C11.0909 15.9269 11.4915 15.5263 11.9856 15.5263H12.0144C12.5085 15.5263 12.9091 15.9269 12.9091 16.4211C12.9091 16.9152 12.5085 17.3158 12.0144 17.3158H11.9856C11.4915 17.3158 11.0909 16.9152 11.0909 16.4211ZM11.0909 11.067C11.0909 10.5649 11.4979 10.1579 12 10.1579C12.5021 10.1579 12.9091 10.5649 12.9091 11.067V12.8278C12.9091 13.3298 12.5021 13.7368 12 13.7368C11.4979 13.7368 11.0909 13.3298 11.0909 12.8278V11.067Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Warning_default = Warning;
  }
});

// icons/Whatsapp.ts
var Whatsapp_exports = {};
__export(Whatsapp_exports, {
  default: () => Whatsapp_default
});
var Whatsapp, Whatsapp_default;
var init_Whatsapp = __esm({
  "icons/Whatsapp.ts"() {
    "use strict";
    Whatsapp = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_443_3349)">
<path style="${this.colorStyle}" d="M1.44043 22.5604L2.89697 17.2804C1.95028 15.642 1.44043 13.8212 1.44043 11.9274C1.44043 6.17428 6.17428 1.44043 11.9641 1.44043C17.754 1.44043 22.5604 6.17428 22.5604 11.9274C22.5604 17.6806 17.754 22.5604 11.9641 22.5604C10.1434 22.5604 8.39559 21.978 6.82974 21.1039L1.44043 22.5604Z" fill="white"/>
<path style="${this.colorStyle}" d="M7.12051 19.2105L7.44844 19.3924C8.79567 20.2298 10.3615 20.7396 12 20.7396C16.7701 20.7396 20.7392 16.7705 20.7392 11.9274C20.7392 7.0842 16.7701 3.26074 11.9637 3.26074C7.15722 3.26074 3.26074 7.12092 3.26074 11.9274C3.26074 13.6025 3.73429 15.241 4.60797 16.6249L4.82659 16.9529L3.98922 20.0115L7.12051 19.2105Z" fill="#49C190"/>
<path style="${this.colorStyle}" d="M9.16011 7.04851L8.46835 7.01221C8.24972 7.01221 8.03151 7.08522 7.8859 7.23083C7.55796 7.52206 7.01181 8.06821 6.8662 8.79668C6.61127 9.88898 7.01181 11.1999 7.9585 12.5108C8.90519 13.8218 10.726 15.9338 13.9303 16.8441C14.95 17.1354 15.751 16.9535 16.4065 16.5529C16.9164 16.225 17.2439 15.7155 17.3532 15.169L17.4625 14.6591C17.4988 14.5135 17.4262 14.3312 17.2806 14.2586L14.9867 13.2026C14.8411 13.1296 14.6587 13.1663 14.5498 13.3119L13.6394 14.4772C13.5664 14.5502 13.4575 14.5865 13.3482 14.5502C12.7291 14.3316 10.6538 13.4579 9.52476 11.2729C9.48846 11.1636 9.48846 11.0543 9.56106 10.9817L10.4351 9.99871C10.5082 9.88939 10.5445 9.74378 10.5082 9.63447L9.45216 7.26754C9.41462 7.15741 9.30572 7.04851 9.16011 7.04851Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_443_3349">
<rect width="21.12" height="21.12" fill="white" transform="translate(1.44043 1.44043)"/>
</clipPath>
</defs>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Whatsapp_default = Whatsapp;
  }
});

// icons/Wifi.ts
var Wifi_exports = {};
__export(Wifi_exports, {
  default: () => Wifi_default
});
var Wifi, Wifi_default;
var init_Wifi = __esm({
  "icons/Wifi.ts"() {
    "use strict";
    Wifi = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M11.965 6.50746C8.77717 6.50746 5.87088 7.70344 3.6659 9.67307C3.25387 10.0411 2.62172 10.0052 2.25396 9.59284C1.8862 9.18047 1.92209 8.54782 2.33412 8.17977C4.89139 5.89545 8.26722 4.50586 11.965 4.50586C15.6992 4.50586 19.105 5.92296 21.6711 8.24748C22.0805 8.61839 22.112 9.25128 21.7414 9.66107C21.3708 10.0709 20.7384 10.1024 20.3289 9.73146C18.1162 7.72708 15.1841 6.50746 11.965 6.50746Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M11.9648 10.1705C9.63732 10.1705 7.52257 11.0726 5.94699 12.5484C5.54376 12.926 4.91094 12.9051 4.53355 12.5015C4.15617 12.098 4.17712 11.4646 4.58036 11.0869C6.51178 9.2779 9.10999 8.16895 11.9648 8.16895C14.8196 8.16895 17.4178 9.2779 19.3492 11.0869C19.7525 11.4646 19.7734 12.098 19.396 12.5015C19.0186 12.9051 18.3858 12.926 17.9826 12.5484C16.407 11.0726 14.2923 10.1705 11.9648 10.1705Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M11.964 13.8766C10.5678 13.8766 9.30414 14.4362 8.38145 15.3458C7.988 15.7337 7.35485 15.729 6.96728 15.3352C6.57971 14.9414 6.58447 14.3078 6.97792 13.9199C8.25957 12.6564 10.0216 11.875 11.964 11.875C13.9065 11.875 15.6685 12.6564 16.9502 13.9199C17.3436 14.3078 17.3484 14.9414 16.9608 15.3352C16.5732 15.729 15.9401 15.7337 15.5466 15.3458C14.6239 14.4362 13.3603 13.8766 11.964 13.8766Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M13.5289 17.9404C13.5289 17.0758 12.8285 16.3749 11.9646 16.3749C11.1007 16.3749 10.4004 17.0758 10.4004 17.9404C10.4004 18.805 11.1007 19.5059 11.9646 19.5059C12.8285 19.5059 13.5289 18.805 13.5289 17.9404Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Wifi_default = Wifi;
  }
});

// icons/WifiOff.ts
var WifiOff_exports = {};
__export(WifiOff_exports, {
  default: () => WifiOff_default
});
var WifiOff, WifiOff_default;
var init_WifiOff = __esm({
  "icons/WifiOff.ts"() {
    "use strict";
    WifiOff = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M10.6156 12.0172C11.0746 11.924 11.5496 11.875 12.036 11.875C13.9784 11.875 15.7404 12.6564 17.0221 13.9199C17.4155 14.3078 17.4203 14.9414 17.0327 15.3352C16.6451 15.729 16.012 15.7337 15.6185 15.3458C14.7982 14.5371 13.7084 14.0051 12.4955 13.897L10.6156 12.0172ZM10.0481 14.2781C9.44989 14.5314 8.9099 14.8958 8.45338 15.3458C8.05993 15.7337 7.42678 15.729 7.03921 15.3352C6.65163 14.9414 6.6564 14.3078 7.04985 13.9199C7.49737 13.4787 8.00346 13.0963 8.55535 12.7854L10.0481 14.2781Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M7.68103 9.08279C9.01324 8.49532 10.4865 8.16895 12.0352 8.16895C14.89 8.16895 17.4882 9.2779 19.4196 11.0869C19.8229 11.4646 19.8438 12.098 19.4664 12.5015C19.0891 12.9051 18.4562 12.926 18.053 12.5484C16.4774 11.0726 14.3627 10.1705 12.0352 10.1705C11.0528 10.1705 10.1083 10.3313 9.22629 10.628L7.68103 9.08279ZM7.31279 11.5429C6.84996 11.8377 6.41639 12.1747 6.0174 12.5484C5.61417 12.926 4.98135 12.9051 4.60396 12.5015C4.22658 12.098 4.24754 11.4646 4.65077 11.0869C5.03222 10.7297 5.43967 10.3997 5.86997 10.1002L7.31279 11.5429Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M4.95396 6.35588C7.0472 5.17804 9.46324 4.50586 12.035 4.50586C15.7328 4.50586 19.1086 5.89545 21.6659 8.17977C22.0779 8.54782 22.1138 9.18047 21.746 9.59284C21.3783 10.0052 20.7461 10.0411 20.3341 9.67307C18.1291 7.70344 15.2228 6.50746 12.035 6.50746C10.0198 6.50746 8.11704 6.98543 6.43284 7.83468L4.95396 6.35588ZM4.67906 8.90934C4.32877 9.16595 3.99233 9.44044 3.67105 9.73146C3.26159 10.1024 2.62921 10.0709 2.25859 9.66107C1.88797 9.25128 1.91946 8.61839 2.32893 8.24748C2.62494 7.97933 2.93212 7.72327 3.24969 7.48006L4.67906 8.90934Z" fill="#414042"/>
<path style="${this.colorStyle}" d="M10.4711 17.9404C10.4711 17.0758 11.1715 16.3749 12.0354 16.3749C12.8993 16.3749 13.5996 17.0758 13.5996 17.9404C13.5996 18.805 12.8993 19.5059 12.0354 19.5059C11.1715 19.5059 10.4711 18.805 10.4711 17.9404Z" fill="#414042"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M3.29287 3.29291C2.90236 3.68345 2.90238 4.31661 3.29291 4.70713L19.2929 20.7062C19.6834 21.0968 20.3166 21.0967 20.7071 20.7062C21.0976 20.3157 21.0976 19.6825 20.7071 19.292L4.70709 3.29287C4.31655 2.90236 3.68339 2.90238 3.29287 3.29291Z" fill="#414042"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    WifiOff_default = WifiOff;
  }
});

// illustrations/Confirmation.ts
var Confirmation_exports = {};
__export(Confirmation_exports, {
  default: () => Confirmation_default
});
var Confirmation, Confirmation_default;
var init_Confirmation = __esm({
  "illustrations/Confirmation.ts"() {
    "use strict";
    Confirmation = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}" d="M15.7215 121.099C26.5168 151.817 76.5254 173.239 124.107 171.888C171.689 170.537 232.609 149.063 234.93 113.543C237.252 78.0229 180.964 77.7696 170.517 63.091C160.07 48.4123 147.375 13.7365 64.3161 36.2558C24.9866 46.9139 2.50963 83.4997 15.7215 121.099Z" fill="#CFD3FF"/>
<path style="${this.colorStyle}" d="M38.7472 128.085C38.7472 126.196 36.1196 124.74 32.0779 123.864C34.3151 120.381 35.1487 117.5 33.8085 116.16C32.4684 114.82 29.5875 115.654 26.1052 117.891C25.2293 113.849 23.773 111.222 21.8841 111.222C19.9952 111.222 18.539 113.849 17.6631 117.891C14.1807 115.654 11.2999 114.82 9.95971 116.16C8.61954 117.5 9.45319 120.381 11.6903 123.864C7.62759 124.74 5 126.196 5 128.085C5 129.974 7.62759 131.43 11.6692 132.306C9.43208 135.788 8.59843 138.669 9.93861 140.009C11.2788 141.349 14.1596 140.516 17.642 138.278C18.5179 142.32 19.9741 144.948 21.863 144.948C23.7519 144.948 25.2082 142.32 26.0841 138.278C29.5664 140.516 32.4473 141.349 33.7874 140.009C35.1276 138.669 34.294 135.788 32.0568 132.306C36.1196 131.43 38.7472 129.984 38.7472 128.085Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M212.547 144.812C220.132 134.985 224.014 125.27 221.218 123.112C218.422 120.954 210.007 127.171 202.422 136.997C194.838 146.824 190.955 156.539 193.751 158.697C196.547 160.855 204.962 154.638 212.547 144.812Z" stroke="#22008C" stroke-width="1.2399" stroke-miterlimit="10"/>
<path style="${this.colorStyle}" d="M216.341 147.747C223.926 137.92 227.808 128.205 225.012 126.047C222.217 123.889 213.802 130.106 206.217 139.932C198.632 149.759 194.75 159.474 197.546 161.632C200.341 163.79 208.756 157.574 216.341 147.747Z" stroke="#22008C" stroke-width="1.2399" stroke-miterlimit="10"/>
<path style="${this.colorStyle}" d="M68.4662 19.6913C64.2453 20.7677 62.7721 22.2414 61.688 26.4722C61.5059 27.1759 60.4879 27.1759 60.3058 26.4722C59.2299 22.2497 57.7568 20.7759 53.5276 19.6913C52.8241 19.5092 52.8241 18.4908 53.5276 18.3087C57.7485 17.2323 59.2216 15.7586 60.3058 11.5278C60.4879 10.8241 61.5059 10.8241 61.688 11.5278C62.7639 15.7503 64.237 17.2241 68.4662 18.3087C69.1779 18.4908 69.1779 19.5175 68.4662 19.6913Z" fill="#FFC401"/>
<path style="${this.colorStyle}" d="M159.2 27.13C159.2 26.36 159.3 25.71 159.51 25.18C159.71 24.64 160.06 24.15 160.54 23.69C161.25 23 161.91 22.4 162.51 21.89C163.11 21.38 163.63 20.9 164.06 20.46C164.49 20.01 164.83 19.59 165.07 19.2C165.31 18.8 165.43 18.39 165.43 17.96C165.43 17.12 165.17 16.46 164.65 15.99C164.13 15.52 163.47 15.28 162.68 15.28C161.48 15.28 160.57 15.61 159.94 16.27C159.32 16.93 158.96 17.74 158.89 18.68L153 18.3C153.28 15.6 154.28 13.54 155.98 12.12C157.69 10.7 159.88 10 162.56 10C163.73 10 164.84 10.16 165.87 10.48C166.9 10.8 167.81 11.28 168.6 11.91C169.39 12.55 170.02 13.34 170.48 14.28C170.94 15.22 171.17 16.31 171.17 17.53C171.17 18.27 171.09 18.94 170.94 19.54C170.79 20.14 170.52 20.73 170.16 21.32C169.79 21.91 169.31 22.5 168.71 23.1C168.11 23.7 167.35 24.36 166.43 25.07C165.84 25.53 165.45 25.98 165.24 26.41C165.03 26.84 164.93 27.28 164.93 27.71V28.82H159.19V27.13H159.2ZM158.55 34.48C158.55 34 158.64 33.54 158.82 33.1C159 32.67 159.25 32.29 159.57 31.97C159.89 31.65 160.26 31.4 160.7 31.22C161.13 31.04 161.59 30.95 162.08 30.95C162.57 30.95 163.02 31.04 163.46 31.22C163.89 31.4 164.27 31.65 164.59 31.97C164.91 32.29 165.16 32.66 165.34 33.1C165.52 33.53 165.61 33.99 165.61 34.48C165.61 34.96 165.52 35.42 165.34 35.86C165.16 36.29 164.91 36.67 164.59 36.99C164.27 37.31 163.89 37.56 163.46 37.74C163.03 37.92 162.57 38.01 162.08 38.01C161.59 38.01 161.14 37.92 160.7 37.74C160.27 37.56 159.89 37.31 159.57 36.99C159.25 36.67 159 36.3 158.82 35.86C158.64 35.42 158.55 34.96 158.55 34.48Z" fill="#2F00A7"/>
<path style="${this.colorStyle}" d="M81.071 54.5619C81.071 54.1771 81.1205 53.8522 81.2246 53.5873C81.3236 53.3174 81.497 53.0725 81.7347 52.8426C82.0864 52.4977 82.4133 52.1978 82.7105 51.9429C83.0077 51.688 83.2653 51.4481 83.4783 51.2281C83.6912 51.0032 83.8597 50.7933 83.9785 50.5984C84.0974 50.3984 84.1569 50.1935 84.1569 49.9786C84.1569 49.5587 84.0281 49.2288 83.7705 48.9939C83.5129 48.759 83.186 48.6391 82.7947 48.6391C82.2003 48.6391 81.7496 48.804 81.4375 49.1339C81.1304 49.4638 80.9521 49.8686 80.9174 50.3385L78 50.1485C78.1387 48.799 78.634 47.7694 79.4761 47.0596C80.3231 46.3499 81.4078 46 82.7353 46C83.3148 46 83.8646 46.08 84.3748 46.2399C84.885 46.3999 85.3357 46.6398 85.727 46.9547C86.1183 47.2745 86.4304 47.6694 86.6582 48.1392C86.8861 48.6091 87 49.1539 87 49.7637C87 50.1335 86.9604 50.4684 86.8861 50.7683C86.8118 51.0682 86.678 51.3631 86.4997 51.658C86.3165 51.9529 86.0787 52.2478 85.7815 52.5477C85.4843 52.8476 85.1079 53.1774 84.6522 53.5323C84.3599 53.7622 84.1668 53.9871 84.0627 54.2021C83.9587 54.417 83.9092 54.6369 83.9092 54.8518V55.4066H81.066V54.5619H81.071ZM80.749 58.2356C80.749 57.9957 80.7936 57.7658 80.8828 57.5459C80.9719 57.331 81.0958 57.141 81.2543 56.9811C81.4128 56.8211 81.596 56.6962 81.814 56.6062C82.027 56.5162 82.2548 56.4713 82.4975 56.4713C82.7402 56.4713 82.9631 56.5162 83.1811 56.6062C83.3941 56.6962 83.5823 56.8211 83.7408 56.9811C83.8993 57.141 84.0231 57.326 84.1123 57.5459C84.2014 57.7608 84.246 57.9907 84.246 58.2356C84.246 58.4755 84.2014 58.7055 84.1123 58.9254C84.0231 59.1403 83.8993 59.3302 83.7408 59.4902C83.5823 59.6501 83.3941 59.7751 83.1811 59.865C82.9681 59.955 82.7402 60 82.4975 60C82.2548 60 82.0319 59.955 81.814 59.865C81.601 59.7751 81.4128 59.6501 81.2543 59.4902C81.0958 59.3302 80.9719 59.1453 80.8828 58.9254C80.7936 58.7055 80.749 58.4755 80.749 58.2356Z" fill="#2F00A7"/>
<path style="${this.colorStyle}" d="M90.1698 160.365C89.9166 161.231 89.695 162.17 89.5578 163.151C89.4733 163.753 89.2412 165.652 88.9141 168.565C96.628 170.38 105.112 171.435 113.924 171.794C113.924 169.514 113.955 167.203 114.008 164.871C104.268 164.196 93.6311 162.507 90.1698 160.365Z" fill="#FFF9D6"/>
<path style="${this.colorStyle}" d="M122.683 165.197C121.986 165.197 121.258 165.186 120.519 165.176C120.741 167.244 120.931 169.534 121.089 171.94C122.366 171.94 123.643 171.919 124.92 171.887C124.909 169.756 124.856 167.529 124.772 165.176C124.086 165.186 123.39 165.197 122.683 165.197Z" fill="#FFF9D6"/>
<path style="${this.colorStyle}" d="M125.31 165.166C125.405 167.508 125.447 169.745 125.458 171.877C134.142 171.655 142.901 170.811 151.343 169.408C151.048 166.115 150.837 163.984 150.752 163.33C150.636 162.496 150.478 161.694 150.277 160.934C146.309 162.791 137.16 164.881 125.31 165.166Z" fill="#FFF9D6"/>
<path style="${this.colorStyle}" d="M114.008 164.871C113.956 167.203 113.924 169.503 113.924 171.793C116.119 171.878 118.324 171.93 120.551 171.93C120.393 169.524 120.203 167.224 119.981 165.156C118.082 165.113 116.066 165.018 114.008 164.871Z" fill="#FFF9D6"/>
<path style="${this.colorStyle}" d="M40.9314 99.6548C40.9314 99.6548 41.0158 99.9186 41.1636 100.372L41.3641 100.32C41.2585 100.161 41.1108 99.9397 40.9314 99.6548Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M50.6611 97.8092L52.0541 97.4293C51.3365 96.2474 50.9144 95.5615 50.9144 95.5615C51.0621 96.4585 50.9566 97.1972 50.6611 97.8092Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M124.772 165.174C124.867 167.517 124.909 169.754 124.919 171.886C125.099 171.886 125.278 171.875 125.458 171.875C125.447 169.743 125.394 167.517 125.31 165.164C125.131 165.164 124.951 165.174 124.772 165.174Z" fill="#EDCE7E"/>
<path style="${this.colorStyle}" d="M119.981 165.164C120.213 167.232 120.403 169.522 120.551 171.938C120.73 171.938 120.91 171.938 121.089 171.938C120.931 169.532 120.741 167.242 120.519 165.174C120.34 165.174 120.16 165.164 119.981 165.164Z" fill="#EDCE7E"/>
<path style="${this.colorStyle}" d="M196.962 101.681C197.184 100.964 197.279 100.341 197.31 99.729C196.941 100.183 196.456 100.774 195.886 101.481L196.941 101.776C196.941 101.734 196.952 101.713 196.962 101.681Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M111.845 61.4761C111.697 61.4972 111.55 61.5183 111.402 61.5394C111.539 61.7504 111.687 61.972 111.856 62.2042L111.845 61.4761Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M144.062 67.3945C144.062 67.3945 149.222 68.4708 154.477 71.4572C154.477 71.4572 146.689 65.5267 133.731 62.5931L134.438 63.3528C134.438 63.3528 131.145 70.7397 125.489 75.1084C125.436 75.1506 125.352 75.119 125.246 75.0662C124.181 74.7602 121.965 72.3542 120.825 71.0668L121.458 165.059L120.403 165.069L119.77 71.0668C118.714 72.2698 116.72 74.4436 115.58 74.9818C115.401 75.119 115.264 75.1717 115.19 75.1084C109.534 70.7291 106.895 63.3528 106.895 63.3528L108.098 62.0654C93.0821 64.8935 83.4265 72.3753 83.4265 72.3753C83.4265 72.3753 83.4371 72.4175 83.4476 72.4703C89.2304 68.7136 95.5514 67.3945 95.5514 67.3945L91.6575 108.908L88.8189 116.01C89.2515 125.919 89.5892 149.905 88.9983 158.885C88.9666 159.402 89.3887 159.898 90.1591 160.373C93.6203 162.505 104.257 164.204 114.008 164.879C116.066 165.027 118.071 165.122 119.97 165.175C120.149 165.175 120.339 165.185 120.519 165.185C121.258 165.196 121.986 165.206 122.682 165.206C123.389 165.206 124.075 165.196 124.772 165.185C124.951 165.185 125.13 165.175 125.31 165.175C137.16 164.89 146.309 162.8 150.267 160.943C151.712 160.268 152.472 159.613 152.419 159.096C151.944 154.569 152.81 125.265 152.831 117.435L147.945 108.919L144.062 67.3945ZM131.905 106.154L132.063 91.8026L145.402 91.982L145.244 106.534L145.096 106.65C144.621 107.041 140.421 110.428 138.553 110.428C138.543 110.428 138.543 110.428 138.532 110.428C136.675 110.396 132.517 106.882 132.053 106.471L131.905 106.344V106.154Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M138.554 109.616C139.873 109.616 143.176 107.199 144.516 106.123L144.664 92.8058L132.782 92.6475L132.634 105.965C133.963 107.083 137.224 109.605 138.533 109.627C138.543 109.616 138.543 109.616 138.554 109.616Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M95.5516 67.3955C95.5516 67.3955 89.2306 68.7146 83.4478 72.4713C81.791 73.5477 80.187 74.8245 78.7835 76.323C73.5917 81.8631 67.8933 99.4437 64.1682 112.592L64.3159 112.814C64.3159 112.814 77.9604 117.14 83.9437 121.878C85.1362 116.549 86.0965 111.431 86.7402 107.822C86.7718 106.134 86.8035 104.446 86.8352 102.757C87.0146 97.8714 87.1728 92.9961 87.6161 88.1208C87.7743 93.0172 87.6583 97.903 87.5633 102.778C87.5633 102.884 87.5527 102.989 87.5527 103.084C87.5949 102.821 87.6161 102.662 87.6161 102.662L88.819 115.568L85.2206 136.599L88.819 115.99L91.6577 108.888L95.5516 67.3955Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M87.5531 102.787C87.6481 97.9011 87.7641 93.0152 87.6058 88.1294C87.1626 93.0047 87.0044 97.88 86.825 102.766C86.7933 104.454 86.7616 106.143 86.73 107.831C87.1415 105.52 87.4159 103.842 87.532 103.104C87.5531 102.987 87.5531 102.882 87.5531 102.787Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M157.242 134.54C155.786 128.113 152.852 117.413 152.852 117.413L157.242 134.54Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M152.061 102.789C151.966 97.903 151.85 93.0172 152.008 88.1313C152.451 93.0066 152.61 97.8819 152.789 102.768C152.81 103.696 152.831 104.625 152.842 105.554V105.511C152.842 105.511 154.541 114.608 157.253 124.358C161.474 120.169 177.25 119.166 177.25 119.166C173.789 106.166 166.961 82.8761 160.841 76.3335C158.962 74.3286 156.715 72.7246 154.488 71.4583C149.233 68.4824 144.073 67.3955 144.073 67.3955L147.966 108.909L152.852 117.425C152.399 112.55 152.251 107.664 152.061 102.789Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M152.841 105.543C152.82 104.615 152.81 103.686 152.789 102.758C152.609 97.8717 152.451 92.9964 152.008 88.1211C151.849 93.0175 151.966 97.9033 152.061 102.779C152.24 107.664 152.398 112.54 152.841 117.415V105.543Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M68.0093 149.981C67.8299 149.897 67.6611 149.823 67.4817 149.738C67.6611 149.823 67.8405 149.897 68.0093 149.981Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M68.8958 150.37C68.8641 150.36 68.8324 150.349 68.8008 150.328C68.8324 150.349 68.8641 150.36 68.8958 150.37Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M66.2683 149.071C66.2788 149.082 66.2894 149.082 66.2999 149.092C66.2788 149.082 66.2472 149.061 66.2261 149.05C66.2366 149.05 66.2472 149.061 66.2683 149.071Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M81.0313 148.755C81.2107 148.534 81.4007 148.238 81.6012 147.879C81.2529 148.407 80.8625 148.903 80.4509 149.357C80.6514 149.167 80.8519 148.966 81.0313 148.755Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M73.9927 146.53C77.6755 146.255 81.3478 133.539 83.9438 121.879C77.9605 117.141 64.316 112.814 64.316 112.814L64.1682 112.592L53.9006 96.9219L52.0539 97.4178L50.6609 97.7977C49.0147 101.217 41.5224 100.563 41.5224 100.563C41.5224 100.563 41.4591 100.468 41.3641 100.309L41.1636 100.362L38.7471 101.016C38.7471 101.016 43.3269 115.062 50.1228 128.21C65.3079 145.696 69.2018 146.899 73.9927 146.53ZM69.0119 119.198C66.722 115.262 64.316 113.173 64.316 113.173C69.1491 114.703 69.0119 119.198 69.0119 119.198Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M138.532 110.44C138.543 110.44 138.543 110.44 138.553 110.44C140.41 110.44 144.621 107.053 145.096 106.662L145.243 106.546L145.402 91.9943L132.063 91.8149L131.905 106.166V106.378L132.053 106.504C132.517 106.884 136.675 110.409 138.532 110.44ZM132.77 92.638L144.653 92.7963L144.505 106.114C143.154 107.201 139.862 109.607 138.543 109.607H138.532C137.213 109.585 133.963 107.063 132.633 105.945L132.77 92.638Z" fill="#F9F5FE"/>
<path style="${this.colorStyle}" d="M88.8191 115.59L87.6161 102.685C87.6161 102.685 87.595 102.832 87.5528 103.107C87.4367 103.845 87.1518 105.534 86.7508 107.834C86.1071 111.443 85.1468 116.551 83.9543 121.89C81.3584 133.551 77.6861 146.267 74.0032 146.541C69.2018 146.9 65.3185 145.707 50.1333 128.232C53.1619 134.501 57.5729 141.233 60.116 144.22C60.7809 145 63.0708 147.227 66.2471 149.053C66.2682 149.063 66.2999 149.084 66.321 149.095C66.7009 149.316 67.1019 149.527 67.5134 149.739C67.6822 149.823 67.8616 149.897 68.041 149.981C68.3048 150.108 68.5581 150.224 68.8325 150.34C68.8641 150.351 68.8958 150.361 68.9275 150.382C70.8797 151.195 73.0218 151.754 75.2695 151.754C77.4223 151.754 79.1318 150.804 80.472 149.38C80.8941 148.937 81.274 148.43 81.6222 147.902C84.6191 143.418 85.2417 136.632 85.2417 136.632L88.8191 115.59Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M161.991 148.609C162.297 149.231 162.592 149.717 162.867 150.044C163.774 151.142 164.766 152.07 166.286 152.587C164.597 151.891 163.173 150.424 161.991 148.609Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M157.252 124.348C160.218 135.027 164.407 146.487 168.913 147.648C173.577 148.84 180.489 147.817 195.685 129.941C202.586 117.752 208.274 104.899 208.274 104.899L208.063 104.847C206.66 106.63 205.657 107.801 205.657 107.801C205.657 107.801 195.326 107.443 196.93 101.765L195.875 101.47L193.11 100.71L177.239 119.156C177.239 119.156 173.947 121.625 172.786 124.158C172.786 124.158 173.029 119.641 177.239 119.156C177.25 119.156 161.473 120.169 157.252 124.348Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M195.696 129.94C180.5 147.816 173.588 148.839 168.924 147.647C164.407 146.497 160.228 135.026 157.263 124.347C154.551 114.596 152.852 105.5 152.852 105.5V105.532V117.414C152.852 117.414 155.796 128.114 157.242 134.541C157.516 135.733 157.727 136.778 157.865 137.58C158.339 140.302 159.701 145.083 161.991 148.607C163.172 150.422 164.597 151.889 166.285 152.586C166.729 152.765 167.193 152.913 167.668 152.976C177.524 154.285 183.993 147.942 185.196 146.497C187.739 143.437 192.635 136.219 195.696 129.94Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M69.0118 119.197C69.0118 119.197 69.149 114.702 64.3159 113.171C64.3159 113.171 66.7114 115.25 69.0118 119.197Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M172.796 124.159C173.957 121.626 177.25 119.157 177.25 119.157C173.039 119.653 172.796 124.159 172.796 124.159Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M207.609 82.5377C207.472 82.0311 207.483 81.4824 207.609 80.9653C206.617 82.0839 205.625 83.5718 206.438 84.511C207.335 85.5452 208.918 85.8512 209.973 85.925C210.29 84.8381 210.364 83.8567 210.364 83.8567C210.364 83.8567 208.148 84.5954 207.609 82.5377Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M196.941 101.767C195.337 107.444 205.668 107.803 205.668 107.803C205.668 107.803 206.67 106.631 208.074 104.848C211.345 100.69 216.843 93.1769 217.138 89.2408C217.328 86.7292 215.766 79.6907 211.64 78.6354C209.519 78.0867 208.01 79.4058 207.62 80.9675C207.493 81.4846 207.483 82.0228 207.62 82.5399C208.158 84.5976 210.374 83.8589 210.374 83.8589C210.374 83.8589 210.3 84.8403 209.984 85.9272C209.562 87.3624 208.717 88.9664 207.029 88.7659C204.064 88.3966 204.728 84.2177 204.728 84.2177C204.728 84.2177 207.873 82.0017 206.934 79.9861C205.995 77.9706 200.349 80.6087 199.589 82.962C196.012 94.0738 197.489 96.6592 197.321 99.7195C197.289 100.332 197.194 100.954 196.972 101.672C196.951 101.714 196.941 101.735 196.941 101.767Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M42.6835 75.2578C41.8921 77.2311 39.7921 76.2392 39.7921 76.2392C39.7921 76.2392 39.7394 77.2206 39.9293 78.3391C40.9846 78.3919 42.5886 78.2864 43.6122 77.3683C44.5302 76.5346 43.7388 74.9306 42.884 73.7065C42.9368 74.2236 42.8735 74.7724 42.6835 75.2578Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M41.5227 100.573C41.5227 100.573 49.015 101.228 50.6612 97.8087C50.9567 97.1966 51.0622 96.458 50.9145 95.561C50.1441 91.1184 53.236 90.4219 50.6084 76.6719C50.1441 74.2342 44.8678 70.9313 43.6859 72.8202C42.504 74.7091 45.3532 77.2839 45.3532 77.2839C45.3532 77.2839 45.501 81.5155 42.5146 81.5155C40.8156 81.5155 40.1719 79.806 39.9292 78.3392C39.7498 77.2206 39.792 76.2392 39.792 76.2392C39.792 76.2392 41.9025 77.2417 42.6834 75.2578C42.8839 74.7619 42.9367 74.2237 42.8734 73.696C42.6729 72.1026 41.3433 70.6041 39.1694 70.8891C34.9484 71.4378 32.5319 78.2231 32.4158 80.7452C32.1942 85.5149 38.8845 96.4369 40.9317 99.6554C41.1111 99.9403 41.2588 100.162 41.3644 100.32C41.4593 100.479 41.5227 100.573 41.5227 100.573Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M129.425 55.2156L129.542 56.598C134.047 53.6117 137.815 48.3881 137.699 41.4867C137.688 40.9591 137.656 40.3365 137.614 39.6506C137.467 39.6295 137.372 39.6084 137.372 39.6084L136.717 34.9969C135.356 30.5754 133.815 28.7709 132.676 24.9297C130.945 25.9111 128.497 26.9242 125.025 27.8528C119.485 29.3513 113.006 27.9689 107.655 24.1172C105.904 27.5468 102.727 32.2321 102.801 38.838C102.801 38.838 102.791 38.8064 102.759 38.7431L102.706 40.2943C102.738 41.1068 102.77 41.835 102.822 42.4259C103.361 49.4012 107.17 54.1498 111.718 56.8302L111.687 55.6483L129.425 55.2156ZM120.54 53.4006C118.556 53.7699 116.404 51.2901 116.404 51.2901C119.791 53.1051 121.806 52.1237 121.806 52.1237C121.806 52.1237 121.311 53.2529 120.54 53.4006ZM125.088 30.6176C125.637 30.4065 126.756 29.7839 128.571 29.5834C131.283 29.288 133.995 30.9025 132.718 30.9658C132.021 30.9975 130.28 30.9447 128.74 31.2824C127.473 31.5568 126.365 32.2005 125.996 32.3693C125.426 32.6331 124.761 32.0422 124.592 31.4618C124.497 31.1135 124.719 30.7548 125.088 30.6176ZM128.138 35.4718C130.681 35.4718 132.064 38.838 131.926 39.123C131.768 39.429 130.227 39.9672 128.138 39.9672C126.049 39.9672 124.582 39.6189 124.35 39.123C124.107 38.6059 125.669 35.4718 128.138 35.4718ZM120.403 45.349C120.582 45.3595 121.184 45.3595 121.68 44.8952C121.712 44.8741 122.345 44.2726 122.218 43.3968C122.081 42.447 121.173 42.0566 121.163 42.046C121.078 42.0144 121.036 41.9088 121.068 41.8244C121.099 41.74 121.205 41.6978 121.289 41.7294C121.332 41.7505 122.387 42.2043 122.545 43.344C122.693 44.3781 121.986 45.0641 121.901 45.1379C121.311 45.6867 120.582 45.6867 120.371 45.6761H120.361C120.276 45.6656 120.202 45.5917 120.213 45.4967C120.234 45.4123 120.308 45.349 120.403 45.349ZM116.446 47.7972C118.081 50.868 122.218 50.0238 122.26 50.0132C122.397 49.9921 122.545 50.0765 122.577 50.2137C122.608 50.3615 122.514 50.4986 122.376 50.5303C122.355 50.5303 121.785 50.6569 120.962 50.6569C119.464 50.6569 117.153 50.2665 115.981 48.0504C115.918 47.9238 115.96 47.7655 116.087 47.6917C116.224 47.6178 116.382 47.6705 116.446 47.7972ZM107.824 30.9553C106.547 30.9025 109.259 29.2774 111.971 29.5729C113.776 29.7734 114.895 30.4065 115.454 30.607C115.823 30.7442 116.045 31.103 115.939 31.4407C115.77 32.0211 115.106 32.6226 114.536 32.3482C114.177 32.1794 113.058 31.5357 111.792 31.2613C110.262 30.9342 108.521 30.9869 107.824 30.9553ZM108.626 39.1335C108.479 38.8486 109.872 35.4823 112.415 35.4823C114.873 35.4823 116.435 38.6059 116.203 39.1335C115.981 39.6295 114.504 39.9777 112.415 39.9777C110.315 39.9777 108.785 39.4395 108.626 39.1335Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M115.982 48.0429C117.164 50.259 119.464 50.6494 120.963 50.6494C121.786 50.6494 122.355 50.5334 122.377 50.5228C122.514 50.4911 122.609 50.354 122.577 50.2062C122.545 50.069 122.408 49.9846 122.261 50.0057C122.218 50.0163 118.082 50.8605 116.446 47.7897C116.372 47.6631 116.214 47.6103 116.087 47.6842C115.961 47.758 115.918 47.9163 115.982 48.0429Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M101.799 36.2025C101.493 35.4111 101.102 34.3453 100.691 33.1528C99.4666 33.4166 98.2213 34.3769 98.3585 37.2683C98.6223 42.8401 102.706 41.2994 102.706 41.2994L102.738 40.3075L102.791 38.7563C102.664 38.4502 102.274 37.4899 101.799 36.2025Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M137.108 36.2972C136.981 35.8329 136.865 35.4108 136.738 34.9993L137.393 39.6108C137.393 39.6108 137.488 39.6319 137.635 39.653C138.511 39.7901 141.571 39.9168 141.276 35.1365C141.075 31.844 139.366 31.232 137.994 31.2848C137.783 32.3611 137.582 33.2898 137.414 33.9651C137.234 35.3686 137.108 36.2972 137.108 36.2972Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M124.846 26.0701C119.59 27.7585 113.333 26.8404 107.94 23.5691C107.856 23.7485 107.771 23.9279 107.677 24.1179C113.027 27.9696 119.506 29.3414 125.046 27.8535C128.507 26.9143 130.956 25.9118 132.697 24.9304C132.528 24.35 132.359 23.7274 132.211 23.0415C130.238 24.0651 127.832 25.1098 124.846 26.0701Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M107.086 23.0332C105.313 26.4417 102.274 31.0743 102.327 37.5536C102.327 37.5536 102.116 37.0365 101.789 36.2028C102.263 37.4902 102.654 38.4611 102.77 38.746C102.791 38.8093 102.812 38.841 102.812 38.841C102.749 32.2351 105.915 27.5497 107.666 24.1201C107.761 23.9302 107.846 23.7508 107.93 23.5714C107.656 23.4025 107.371 23.2231 107.086 23.0332Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M102.337 37.5522C102.273 31.0729 105.313 26.4508 107.096 23.0318C106.737 22.7891 106.378 22.5464 106.03 22.2826L103.371 16.5631C103.371 16.5631 103.287 16.5103 103.149 16.4048C101.292 17.8927 98.8123 20.6997 98.8123 25.0685C98.8123 27.1579 99.7725 30.4608 100.691 33.1517C101.102 34.3442 101.493 35.4205 101.799 36.2014C102.115 37.0351 102.337 37.5522 102.337 37.5522Z" fill="#002264"/>
<path style="${this.colorStyle}" d="M137.403 33.954C137.224 34.6926 137.097 35.157 137.097 35.157C135.557 29.3319 134.09 27.633 132.929 22.6416C132.697 22.7682 132.454 22.8949 132.201 23.032C132.349 23.718 132.518 24.3406 132.686 24.921C133.826 28.7727 135.367 30.5666 136.728 34.9881C136.855 35.3997 136.981 35.8218 137.097 36.2861C137.108 36.2966 137.235 35.368 137.403 33.954Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M106.02 22.2827C106.368 22.5465 106.727 22.7892 107.086 23.0319C107.37 23.2219 107.655 23.3907 107.94 23.5701C113.333 26.8414 119.59 27.7595 124.846 26.0711C127.821 25.1108 130.238 24.0661 132.201 23.0319C132.443 22.9053 132.686 22.7681 132.929 22.6415C132.792 22.0506 132.654 21.4174 132.528 20.7209L132.665 16.4049C132.665 16.4049 136 15.9195 137.762 19.2541C139.64 17.5446 140.221 16.3205 140.221 16.3205C138.743 17.1436 136.348 16.7743 136.348 16.7743C138.891 16.0989 139.292 13.3341 139.292 13.3341C133.657 13.7246 122.661 7.32971 113.85 8.05783C105.049 8.78596 104.342 15.0647 104.342 15.0647C102.147 15.4869 103.097 10.6643 103.097 10.6643C101.071 14.1889 102.548 15.8984 103.139 16.4049C103.265 16.5105 103.36 16.5632 103.36 16.5632L106.02 22.2827Z" fill="#002264"/>
<path style="${this.colorStyle}" d="M132.665 16.4173L132.528 20.7333C132.655 21.4297 132.792 22.0629 132.929 22.6538C134.09 27.6452 135.557 29.3442 137.097 35.1692C137.097 35.1692 137.224 34.7049 137.403 33.9662C137.572 33.2803 137.773 32.3622 137.984 31.2858C138.606 28.0251 139.197 23.4664 138.321 20.6172C138.163 20.1001 137.973 19.6675 137.762 19.2665C136 15.9318 132.665 16.4173 132.665 16.4173Z" fill="#002264"/>
<path style="${this.colorStyle}" d="M120.477 68.7459C120.403 68.6298 120.35 68.5454 120.35 68.5454L120.361 68.6298L120.477 68.7459Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M113.628 64.3045C116.604 67.312 120.35 68.5467 120.35 68.5467C120.35 68.5467 124.751 67.312 127.727 64.3045C128.719 63.302 129.447 62.3206 129.964 61.5186L129.542 56.6011L129.426 55.2188L111.708 55.6514L111.739 56.8333L111.845 61.4659L111.866 62.194C112.32 62.8483 112.9 63.5658 113.628 64.3045ZM111.75 56.865C111.75 56.865 115.296 59.1338 121.237 58.9333C126.534 58.7539 129.542 56.6328 129.542 56.6328L129.605 57.4137C129.605 57.4137 127.589 61.392 121.427 61.392C114.852 61.392 111.782 57.7303 111.782 57.7303L111.75 56.865Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M121.427 61.3793C127.589 61.3793 129.605 57.401 129.605 57.401L129.542 56.6201C129.542 56.6201 126.545 58.7306 121.237 58.9206C115.296 59.1211 111.75 56.8523 111.75 56.8523L111.782 57.7176C111.782 57.7281 114.842 61.3793 121.427 61.3793Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M116.403 51.2905C116.403 51.2905 118.567 53.7704 120.54 53.401C121.3 53.2533 121.796 52.1242 121.796 52.1242C121.796 52.1242 119.791 53.1056 116.403 51.2905Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M114.546 32.3617C115.116 32.6255 115.781 32.0346 115.95 31.4542C116.045 31.1165 115.834 30.7577 115.464 30.6205C114.916 30.4095 113.797 29.7869 111.982 29.5864C109.27 29.2909 106.558 30.9054 107.835 30.9688C108.531 31.0004 110.272 30.9477 111.813 31.2853C113.069 31.5492 114.177 32.1929 114.546 32.3617Z" fill="#002264"/>
<path style="${this.colorStyle}" d="M120.371 45.6895C120.382 45.6895 120.382 45.6895 120.371 45.6895C120.593 45.7 121.31 45.7 121.912 45.1513C121.996 45.0774 122.703 44.3915 122.556 43.3574C122.397 42.2177 121.342 41.7639 121.3 41.7428C121.215 41.7112 121.11 41.7428 121.078 41.8378C121.047 41.9222 121.089 42.0277 121.173 42.0594C121.184 42.0594 122.091 42.4499 122.228 43.4101C122.355 44.286 121.722 44.8769 121.69 44.9086C121.194 45.3624 120.582 45.3729 120.413 45.3624C120.318 45.3518 120.245 45.4257 120.234 45.5207C120.224 45.6051 120.287 45.6789 120.371 45.6895Z" fill="#E88981"/>
<path style="${this.colorStyle}" d="M110.283 37.8563C110.283 37.6874 110.304 37.5291 110.346 37.3814C110.462 37.6663 110.737 37.8563 111.053 37.8563C111.476 37.8563 111.824 37.508 111.824 37.0859C111.824 36.6638 111.476 36.3156 111.053 36.3156C111.001 36.3156 110.958 36.3367 110.916 36.3472C111.296 35.9674 111.824 35.7352 112.404 35.7352C113.575 35.7352 114.525 36.6849 114.525 37.8563C114.525 39.0276 113.575 39.9773 112.404 39.9773C114.494 39.9773 115.96 39.6291 116.193 39.1331C116.435 38.6055 114.873 35.4819 112.404 35.4819C109.861 35.4819 108.479 38.8482 108.616 39.1331C108.774 39.4392 110.315 39.9773 112.404 39.9773C111.233 39.9773 110.283 39.0276 110.283 37.8563Z" fill="white"/>
<path style="${this.colorStyle}" d="M114.536 37.8589C114.536 36.6875 113.586 35.7378 112.415 35.7378C111.834 35.7378 111.307 35.9699 110.927 36.3498C110.969 36.3393 111.011 36.3182 111.064 36.3182C111.486 36.3182 111.834 36.6664 111.834 37.0885C111.834 37.5106 111.486 37.8589 111.064 37.8589C110.747 37.8589 110.473 37.6584 110.357 37.384C110.325 37.5423 110.293 37.7006 110.293 37.8589C110.293 39.0302 111.243 39.9799 112.415 39.9799C113.586 39.9799 114.536 39.0302 114.536 37.8589Z" fill="#040605"/>
<path style="${this.colorStyle}" d="M125.996 32.3598C126.354 32.191 127.473 31.5473 128.739 31.2729C130.269 30.9458 132.011 30.988 132.718 30.9564C133.995 30.9036 131.283 29.2785 128.571 29.574C126.766 29.7745 125.647 30.4076 125.088 30.6081C124.719 30.7453 124.497 31.1041 124.603 31.4418C124.772 32.0327 125.436 32.6237 125.996 32.3598Z" fill="#002264"/>
<path style="${this.colorStyle}" d="M128.138 39.9773C126.967 39.9773 126.017 39.0276 126.017 37.8563C126.017 36.6849 126.967 35.7352 128.138 35.7352C128.719 35.7352 129.246 35.9674 129.626 36.3472C129.584 36.3367 129.542 36.3156 129.489 36.3156C129.067 36.3156 128.719 36.6638 128.719 37.0859C128.719 37.508 129.067 37.8563 129.489 37.8563C129.806 37.8563 130.08 37.6558 130.196 37.3814C130.228 37.5397 130.259 37.698 130.259 37.8563C130.259 39.0276 129.31 39.9773 128.138 39.9773C130.228 39.9773 131.768 39.4392 131.927 39.1331C132.074 38.8482 130.681 35.4819 128.138 35.4819C125.68 35.4819 124.118 38.6055 124.35 39.1331C124.572 39.6185 126.049 39.9773 128.138 39.9773Z" fill="white"/>
<path style="${this.colorStyle}" d="M130.259 37.8589C130.259 37.69 130.238 37.5317 130.196 37.384C130.08 37.6689 129.805 37.8589 129.489 37.8589C129.067 37.8589 128.719 37.5106 128.719 37.0885C128.719 36.6664 129.067 36.3182 129.489 36.3182C129.542 36.3182 129.584 36.3393 129.626 36.3498C129.246 35.9699 128.719 35.7378 128.138 35.7378C126.967 35.7378 126.017 36.6875 126.017 37.8589C126.017 39.0302 126.967 39.9799 128.138 39.9799C129.309 39.9799 130.259 39.0302 130.259 37.8589Z" fill="#040605"/>
<path style="${this.colorStyle}" d="M120.477 68.7459L120.35 68.6298L120.34 68.5454C120.34 68.5454 116.868 73.9905 115.581 74.9719C116.72 74.4232 118.715 72.2599 119.77 71.0569V70.4554H120.298H120.825V71.078C121.965 72.376 124.181 74.782 125.247 75.0775C124.255 74.5393 121.121 69.7484 120.477 68.7459Z" fill="#22008C"/>
<path style="${this.colorStyle}" d="M127.727 64.303C124.751 67.3105 120.35 68.5451 120.35 68.5451C120.35 68.5451 120.403 68.6296 120.477 68.7456C121.121 69.7481 124.255 74.539 125.257 75.0666C125.352 75.1194 125.447 75.1405 125.5 75.1088C131.156 70.7295 134.449 63.3533 134.449 63.3533L133.742 62.5935L130.987 59.6704C130.987 59.6704 130.671 60.4302 129.964 61.5277C129.447 62.3191 128.719 63.3005 127.727 64.303Z" fill="#F9F5FE"/>
<path style="${this.colorStyle}" d="M115.2 75.0966C115.274 75.1599 115.411 75.1072 115.591 74.97C116.868 73.9781 120.35 68.5435 120.35 68.5435C120.35 68.5435 116.604 67.3088 113.628 64.3013C112.9 63.5627 112.33 62.8451 111.855 62.2014C111.686 61.9692 111.539 61.7476 111.401 61.5366C110.684 60.4391 110.367 59.6582 110.367 59.6582L108.109 62.0536L106.906 63.3411C106.906 63.3411 109.544 70.7279 115.2 75.0966Z" fill="#F9F5FE"/>
<path style="${this.colorStyle}" d="M120.308 70.4458H119.781V109.837L120.414 165.06L121.469 165.05L120.836 109.837V70.4458H120.308Z" fill="#F9F5FE"/>
<path style="${this.colorStyle}" d="M42.45 90.9C58.7148 90.9 71.9 77.7148 71.9 61.45C71.9 45.1852 58.7148 32 42.45 32C26.1852 32 13 45.1852 13 61.45C13 77.7148 26.1852 90.9 42.45 90.9Z" fill="#EA6465"/>
<path style="${this.colorStyle}" d="M41.4329 52.5455V70H38.2454L30.6516 59.0142H30.5238V70H26.8335V52.5455H30.0721L37.6062 63.5227H37.7596V52.5455H41.4329ZM50.3285 70.2557C49.0046 70.2557 47.8597 69.9744 46.8938 69.4119C45.9336 68.8437 45.1921 68.054 44.6694 67.0426C44.1467 66.0256 43.8853 64.8466 43.8853 63.5057C43.8853 62.1534 44.1467 60.9716 44.6694 59.9602C45.1921 58.9432 45.9336 58.1534 46.8938 57.5909C47.8597 57.0227 49.0046 56.7386 50.3285 56.7386C51.6523 56.7386 52.7944 57.0227 53.7546 57.5909C54.7205 58.1534 55.4648 58.9432 55.9876 59.9602C56.5103 60.9716 56.7717 62.1534 56.7717 63.5057C56.7717 64.8466 56.5103 66.0256 55.9876 67.0426C55.4648 68.054 54.7205 68.8437 53.7546 69.4119C52.7944 69.9744 51.6523 70.2557 50.3285 70.2557ZM50.3455 67.4432C50.9478 67.4432 51.4506 67.2727 51.854 66.9318C52.2575 66.5852 52.5614 66.1136 52.766 65.517C52.9762 64.9205 53.0813 64.2415 53.0813 63.4801C53.0813 62.7188 52.9762 62.0398 52.766 61.4432C52.5614 60.8466 52.2575 60.375 51.854 60.0284C51.4506 59.6818 50.9478 59.5085 50.3455 59.5085C49.7376 59.5085 49.2262 59.6818 48.8114 60.0284C48.4023 60.375 48.0927 60.8466 47.8825 61.4432C47.6779 62.0398 47.5756 62.7188 47.5756 63.4801C47.5756 64.2415 47.6779 64.9205 47.8825 65.517C48.0927 66.1136 48.4023 66.5852 48.8114 66.9318C49.2262 67.2727 49.7376 67.4432 50.3455 67.4432Z" fill="white"/>
<path style="${this.colorStyle}" d="M208.294 90.5879C224.473 90.5879 237.588 77.4726 237.588 61.294C237.588 45.1154 224.473 32 208.294 32C192.115 32 179 45.1154 179 61.294C179 77.4726 192.115 90.5879 208.294 90.5879Z" fill="#35A583"/>
<path style="${this.colorStyle}" d="M187.47 52.6939H191.603L195.584 60.2109H195.754L199.734 52.6939H203.868L197.501 63.978V70.1484H193.836V63.978L187.47 52.6939ZM209.039 70.4041C207.692 70.4041 206.533 70.1314 205.562 69.5859C204.596 69.0348 203.851 68.2564 203.329 67.2507C202.806 66.2393 202.544 65.0433 202.544 63.6626C202.544 62.3161 202.806 61.1342 203.329 60.1172C203.851 59.1001 204.587 58.3075 205.536 57.7393C206.491 57.1712 207.61 56.8871 208.894 56.8871C209.758 56.8871 210.562 57.0263 211.306 57.3047C212.056 57.5774 212.709 57.9893 213.266 58.5405C213.829 59.0916 214.266 59.7848 214.579 60.62C214.891 61.4496 215.047 62.4212 215.047 63.5348V64.532H203.993V62.282H211.63C211.63 61.7592 211.516 61.2962 211.289 60.8928C211.062 60.4893 210.746 60.174 210.343 59.9467C209.945 59.7138 209.482 59.5973 208.954 59.5973C208.402 59.5973 207.914 59.7251 207.488 59.9808C207.067 60.2308 206.738 60.5689 206.499 60.995C206.26 61.4155 206.138 61.8842 206.133 62.4013V64.5405C206.133 65.1882 206.252 65.7479 206.491 66.2195C206.735 66.6911 207.079 67.0547 207.522 67.3104C207.965 67.5661 208.491 67.6939 209.098 67.6939C209.502 67.6939 209.871 67.6371 210.206 67.5234C210.542 67.4098 210.829 67.2393 211.067 67.0121C211.306 66.7848 211.488 66.5064 211.613 66.1768L214.971 66.3984C214.8 67.2053 214.451 67.9098 213.922 68.5121C213.4 69.1087 212.723 69.5746 211.894 69.9098C211.07 70.2393 210.118 70.4041 209.039 70.4041ZM228.309 60.7905L224.985 60.995C224.928 60.7109 224.806 60.4553 224.618 60.228C224.431 59.995 224.184 59.8104 223.877 59.674C223.576 59.532 223.215 59.4609 222.794 59.4609C222.232 59.4609 221.758 59.5803 221.371 59.8189C220.985 60.0518 220.792 60.3643 220.792 60.7564C220.792 61.0689 220.917 61.3331 221.167 61.549C221.417 61.7649 221.846 61.9382 222.454 62.0689L224.823 62.5462C226.096 62.8075 227.044 63.228 227.669 63.8075C228.294 64.3871 228.607 65.1484 228.607 66.0916C228.607 66.9496 228.354 67.7024 227.848 68.3501C227.348 68.9979 226.661 69.5036 225.786 69.8672C224.917 70.2251 223.914 70.4041 222.777 70.4041C221.044 70.4041 219.664 70.0433 218.635 69.3217C217.613 68.5945 217.013 67.6058 216.837 66.3558L220.408 66.1683C220.516 66.6967 220.777 67.1001 221.192 67.3786C221.607 67.6513 222.138 67.7876 222.786 67.7876C223.422 67.7876 223.934 67.6655 224.32 67.4212C224.712 67.1712 224.911 66.8501 224.917 66.4581C224.911 66.1286 224.772 65.8587 224.499 65.6484C224.226 65.4325 223.806 65.2678 223.238 65.1541L220.971 64.7024C219.692 64.4467 218.741 64.0036 218.116 63.3729C217.496 62.7422 217.187 61.9382 217.187 60.9609C217.187 60.12 217.414 59.3956 217.868 58.7876C218.329 58.1797 218.973 57.7109 219.803 57.3814C220.638 57.0518 221.616 56.8871 222.735 56.8871C224.388 56.8871 225.689 57.2365 226.638 57.9354C227.593 58.6342 228.15 59.5859 228.309 60.7905Z" fill="white"/>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    Confirmation_default = Confirmation;
  }
});

// illustrations/DuplicateItem.ts
var DuplicateItem_exports = {};
__export(DuplicateItem_exports, {
  default: () => DuplicateItem_default
});
var DuplicateItem, DuplicateItem_default;
var init_DuplicateItem = __esm({
  "illustrations/DuplicateItem.ts"() {
    "use strict";
    DuplicateItem = class extends HTMLElement {
      constructor() {
        super();
        this.id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
        this.props = ["height", "width", "color"];
        this.contentStyle = "";
        this.colorStyle = "";
        this.height = "";
        this.width = "";
        this.color = "";
        this._initElement();
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1938_21688)">
<path style="${this.colorStyle}" d="M26.5099 69.8318L27.0699 67.8918C31.8199 51.5718 44.9599 38.9818 61.4699 35.6518C63.5899 35.2218 65.7499 34.9518 67.9099 34.8418C83.5199 34.0418 99.3599 41.7618 108.52 54.6318C113.91 62.2018 117.38 71.6518 125.11 76.7318C135.17 83.3419 148.38 80.1018 159.82 76.6418C171.27 73.1918 184.49 69.9718 194.52 76.6318C200.8 80.8018 209.79 87.7118 212.22 103.762C215.22 123.612 204.41 139.152 189.56 152.362C174.71 165.572 151.6 168.752 131.8 170.002C104.07 171.752 75.1399 163.892 54.0699 145.432C33.0099 126.962 20.9899 97.3318 26.5099 69.8318Z" fill="#CFD3FF"/>
<path style="${this.colorStyle}" d="M50.4199 102.641C50.6199 103.711 49.9099 104.731 48.8399 104.931C47.7699 105.131 46.7498 104.421 46.5498 103.351C46.3498 102.281 47.0598 101.261 48.1298 101.061C49.1998 100.861 50.2299 101.571 50.4199 102.641Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M69.8896 64.9023L47.6196 104.232" stroke="#3D00C3" stroke-width="0.75" stroke-miterlimit="10" stroke-dasharray="8 8"/>
<path style="${this.colorStyle}" d="M47.84 140.473H23.1C21.39 140.473 20 139.083 20 137.373V103.123C20 101.413 21.39 100.023 23.1 100.023H38.8L50.95 112.543V137.373C50.94 139.083 49.55 140.473 47.84 140.473Z" fill="#EFEEEA"/>
<path style="${this.colorStyle}" opacity="0.34" d="M35.2198 109.812H24.2998V110.973H35.2198V109.812Z" fill="#987AEA"/>
<path style="${this.colorStyle}" opacity="0.34" d="M40.3398 117.332H24.2998V118.492H40.3398V117.332Z" fill="#987AEA"/>
<path style="${this.colorStyle}" opacity="0.34" d="M47.8198 121.852H24.2998V123.012H47.8198V121.852Z" fill="#987AEA"/>
<path style="${this.colorStyle}" opacity="0.34" d="M47.8198 126.363H24.2998V127.523H47.8198V126.363Z" fill="#987AEA"/>
<path style="${this.colorStyle}" opacity="0.34" d="M47.8198 130.883H24.2998V132.043H47.8198V130.883Z" fill="#987AEA"/>
<path style="${this.colorStyle}" d="M38.79 100.023V109.663C38.79 111.253 40.08 112.543 41.67 112.543H50.94L38.79 100.023Z" fill="#EFEADA"/>
<path style="${this.colorStyle}" opacity="0.2" d="M38.9198 110.512C38.9198 110.512 38.7998 112.852 41.4598 113.622C41.5598 113.652 41.6598 113.672 41.7598 113.692C42.9698 113.912 50.9398 115.322 50.9398 115.142C50.9398 114.942 50.9398 112.552 50.9398 112.552H41.6698C41.6698 112.542 39.3598 112.462 38.9198 110.512Z" fill="#B58F31"/>
<path style="${this.colorStyle}" d="M168.17 55.37L173.47 46.04C171.13 42.24 169.77 37.76 169.77 32.97C169.77 19.18 180.94 8 194.73 8C208.52 8 219.69 19.18 219.69 32.96C219.69 46.75 208.51 57.92 194.73 57.92C188.97 57.92 183.68 55.97 179.45 52.69L179.46 52.7L168.17 55.37Z" fill="#723EE4"/>
<path style="${this.colorStyle}" d="M202.54 42.1495H187.49C186.57 42.1495 185.82 41.3995 185.82 40.4795V25.4395C185.82 24.5195 186.57 23.7695 187.49 23.7695H202.54C203.46 23.7695 204.21 24.5195 204.21 25.4395V40.4895C204.21 41.4095 203.46 42.1495 202.54 42.1495Z" fill="#E5DFF2"/>
<path style="${this.colorStyle}" d="M201.41 43.9888C201.4 43.9588 201.7 44.0187 202.05 43.7087C202.47 43.3887 202.3 42.6188 202.32 41.7288C202.31 39.8888 202.29 37.2688 202.27 34.0288C202.26 32.3988 202.26 30.6187 202.25 28.7087C202.25 28.2287 202.25 27.7488 202.25 27.2488C202.25 27.0088 202.25 26.7588 202.24 26.5088C202.22 26.2888 202.12 26.0888 201.95 25.9388C201.78 25.7888 201.57 25.7188 201.33 25.7388C201.07 25.7388 200.81 25.7388 200.55 25.7388C200.03 25.7388 199.5 25.7388 198.96 25.7388C194.66 25.7388 189.94 25.7488 184.98 25.7488C184.72 25.7488 184.46 25.8788 184.31 26.0888C184.14 26.3088 184.15 26.5587 184.15 26.8787C184.15 27.4887 184.15 28.0988 184.15 28.6988C184.15 29.9088 184.15 31.0988 184.15 32.2688C184.15 34.6088 184.14 36.8588 184.14 39.0088C184.14 40.0788 184.14 41.1288 184.13 42.1488C184.13 42.3988 184.13 42.6588 184.13 42.9088C184.12 43.1488 184.18 43.3488 184.32 43.5188C184.45 43.6888 184.65 43.7988 184.86 43.8288C185.07 43.8488 185.33 43.8388 185.56 43.8388C187.47 43.8488 189.25 43.8488 190.88 43.8588C194.11 43.8788 196.74 43.8988 198.58 43.9088C199.47 43.9188 200.17 43.9287 200.67 43.9387C200.9 43.9487 201.07 43.9487 201.21 43.9587C201.34 43.9687 201.41 43.9788 201.41 43.9888ZM201.41 43.9888C201.41 43.9988 201.35 43.9987 201.22 44.0087C201.08 44.0087 200.9 44.0187 200.68 44.0287C200.18 44.0387 199.48 44.0488 198.59 44.0588C196.75 44.0688 194.13 44.0888 190.89 44.1088C189.26 44.1188 187.48 44.1188 185.57 44.1288C185.32 44.1288 185.11 44.1387 184.83 44.1187C184.56 44.0887 184.3 43.9388 184.12 43.7188C183.94 43.5088 183.85 43.1987 183.87 42.9387C183.87 42.6887 183.87 42.4388 183.87 42.1788C183.87 41.1588 183.87 40.1088 183.86 39.0388C183.86 36.8888 183.85 34.6287 183.85 32.2987C183.85 31.1287 183.85 29.9388 183.85 28.7288C183.85 28.1288 183.85 27.5188 183.85 26.9088C183.85 26.7488 183.84 26.6088 183.86 26.4288C183.89 26.2488 183.95 26.0788 184.06 25.9388C184.27 25.6488 184.62 25.4688 184.98 25.4688C189.94 25.4688 194.66 25.4788 198.96 25.4788C199.5 25.4788 200.03 25.4788 200.55 25.4788C200.81 25.4788 201.07 25.4788 201.33 25.4788C201.6 25.4588 201.92 25.5588 202.13 25.7488C202.35 25.9388 202.49 26.2088 202.51 26.4988C202.52 26.7688 202.51 27.0088 202.51 27.2588C202.51 27.7488 202.51 28.2388 202.51 28.7188C202.5 30.6287 202.5 32.4088 202.49 34.0388C202.47 37.2688 202.45 39.8988 202.44 41.7388C202.43 42.1888 202.43 42.5888 202.43 42.9488C202.45 43.3088 202.28 43.6088 202.09 43.7688C201.7 44.0688 201.39 43.9788 201.41 43.9888Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10"/>
<path style="${this.colorStyle}" d="M195.5 29.6211V33.1511H198.9V34.0511H195.5V37.6111H194.54V34.0511H191.14V33.1511H194.54V29.6211H195.5Z" fill="#4219B2"/>
<path style="${this.colorStyle}" d="M58.8102 11.4102V14.9402H62.2102V15.8402H58.8102V19.4002H57.8502V15.8402H54.4502V14.9402H57.8502V11.4102H58.8102Z" fill="white"/>
<path style="${this.colorStyle}" d="M66.75 64.4909L71.02 62.9609L72.13 67.0609" stroke="#3D00C3" stroke-width="0.75" stroke-miterlimit="10"/>
<path style="${this.colorStyle}" d="M107.58 135.701C101.41 158.201 101.34 168.011 101.34 168.011C110.91 170.641 156.66 171.181 155.69 166.411C154.67 161.361 156.39 147.791 146.73 136.581C134.51 122.411 107.58 135.701 107.58 135.701Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M84.45 98.9229C85.68 102.713 89.16 102.643 91.38 103.493C93.87 104.473 96.08 99.9729 95.71 97.1729C95.34 94.3729 82.25 56.8629 82.25 56.8629C79.74 56.1229 78.21 64.4629 78.21 64.4629C78.21 64.4629 83.19 95.1429 84.45 98.9229Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M164.59 89.8422L160.34 43.3822C159.75 37.2022 154.17 38.9322 147.44 39.5722L133.59 40.8822C126.86 41.5222 122.24 42.0322 122.42 53.2622L126.26 93.4622C126.85 99.6322 165.18 96.0122 164.59 89.8422Z" fill="#001E65"/>
<path style="${this.colorStyle}" d="M113.63 90.9628C114.25 91.7028 115 92.3128 115.85 92.8028C117.76 93.8928 119.98 94.1628 122.1 93.5828C124.22 92.9928 125.98 91.6228 127.07 89.7028C128.77 86.7128 128.41 82.9328 126.19 80.3028C125.57 79.5628 124.82 78.9528 123.97 78.4728C120.03 76.2328 114.99 77.6228 112.75 81.5728C111.05 84.5628 111.41 88.3328 113.63 90.9628Z" fill="#EDB6E0"/>
<path style="${this.colorStyle}" d="M92.5502 104.252C93.6002 103.962 115.93 97.9322 124.99 92.2522L125.76 91.7722L117.79 77.4922L116.63 78.0722C105.82 83.7322 93.5502 91.1522 91.1602 91.9722L92.5502 104.252Z" fill="#EDB6E0"/>
<path style="${this.colorStyle}" d="M157.77 100.372C158.66 100.742 159.61 100.952 160.58 101.002C162.78 101.102 164.88 100.342 166.5 98.8516C168.12 97.3716 169.07 95.3416 169.17 93.1416C169.33 89.7016 167.3 86.5016 164.13 85.1616C163.24 84.7916 162.29 84.5816 161.32 84.5316C156.79 84.3316 152.93 87.8516 152.72 92.3916C152.57 95.8416 154.6 99.0416 157.77 100.372Z" fill="#EDB6E0"/>
<path style="${this.colorStyle}" d="M114.32 91.5113C114.25 91.4513 114.18 91.3913 114.12 91.3313C112.55 89.7913 111.68 87.7313 111.66 85.5313C111.65 84.5613 117.8 77.4913 117.8 77.4913C117.8 77.4913 118.37 77.1713 128.84 74.8613C135.06 73.3813 141.83 69.9113 153.15 77.5313C155.7 79.9913 160.63 81.5013 165.79 85.9113C167.26 87.3613 168.16 88.6213 168.75 90.3613C169.45 92.4513 169.3 94.6813 168.32 96.6513C167.34 98.6213 165.66 100.091 163.57 100.791C162.65 101.101 161.69 101.251 160.73 101.221C160.32 101.211 159.92 101.161 159.52 101.091C157.02 107.371 151.15 124.111 151.15 124.111L154.04 141.201C129.37 153.271 105.54 137.661 105.54 137.661C105.54 137.661 114.09 122.411 113.11 101.201C112.98 98.3613 114.35 94.6013 114.32 91.5113Z" fill="#EDB6E0"/>
<path style="${this.colorStyle}" d="M151.39 75.9948C150.98 75.7848 150.51 75.4648 150.08 75.0048C149.98 74.8948 149.88 74.8148 149.82 74.6948C149.53 74.2848 148.74 73.0748 149.24 68.7148C149.25 68.6448 149.25 68.6048 149.25 68.5348C149.34 67.7248 149.49 66.7248 149.71 65.6048C149.83 64.9648 150.02 64.3048 150.21 63.6048L135.02 62.4648C135.18 63.6248 135.25 64.6648 135.32 65.6348C135.33 66.0348 135.4 66.9648 135.38 68.1748C135.39 68.5348 135.39 69.0648 135.38 69.6748C135.36 70.8848 135.28 72.4948 135.06 74.4448C135.04 74.6548 134.99 74.8648 134.98 75.0448C134.91 75.4648 134.89 75.8248 134.83 76.1448C134.77 76.4948 134.5 76.8048 134.14 76.8848L133.03 77.1248C132.78 77.1748 132.62 77.4148 132.67 77.6648C132.81 78.6448 144.6 83.2748 147.15 80.7848C148.26 79.6848 149.75 78.1548 151.41 76.2748C151.54 76.2548 151.52 76.0748 151.39 75.9948Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M157.69 56.9623C156.63 59.9523 154.9 60.6723 152.92 60.8023C152.46 60.8423 152.01 60.8423 151.52 60.8023C151.42 60.7923 151.31 60.7823 151.21 60.7823L152.62 52.1323C152.62 52.1323 152.66 52.0623 152.74 52.0023C153 51.7723 153.57 51.2523 154.28 51.0223C154.6 50.9423 154.92 50.8923 155.27 50.9523C156.68 51.2023 159.06 53.1423 157.69 56.9623Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M133.66 37.8243C133.66 37.8243 129.97 39.9943 128.02 46.2843C126.07 52.5743 126.13 63.1943 129.97 67.1943C136.65 74.2343 147.46 70.2243 150.61 63.9943C153.01 59.1843 154.14 50.6043 152.7 43.7743C151.73 39.2443 144.04 31.0643 133.66 37.8243Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" fill-rule="evenodd" clip-rule="evenodd" d="M155.03 53.3716C155.21 53.3416 155.42 53.3616 155.67 53.4716C155.81 53.5316 155.97 53.4716 156.03 53.3316C156.09 53.1916 156.03 53.0216 155.89 52.9616C155.56 52.8116 155.24 52.7616 154.93 52.8216C154.63 52.8716 154.37 53.0216 154.14 53.2316C153.7 53.6216 153.38 54.2416 153.14 54.8616C152.9 55.4816 152.74 56.1316 152.64 56.6316C152.59 56.8816 152.55 57.0916 152.53 57.2316C152.52 57.3016 152.51 57.3616 152.5 57.4016V57.4516V57.4616C152.5 57.4616 152.5 57.4616 152.77 57.5016L152.5 57.4616L152.43 58.0616L152.92 57.7316L152.93 57.7216C152.94 57.7116 152.95 57.7116 152.97 57.7016C153.01 57.6816 153.06 57.6516 153.12 57.6216C153.25 57.5516 153.42 57.4716 153.59 57.4016C153.77 57.3316 153.95 57.3016 154.08 57.3116C154.21 57.3216 154.28 57.3616 154.33 57.4316C154.41 57.5616 154.58 57.6016 154.71 57.5116C154.83 57.4216 154.87 57.2516 154.78 57.1216C154.61 56.8616 154.35 56.7616 154.1 56.7416C153.86 56.7316 153.61 56.7916 153.4 56.8616C153.3 56.8916 153.2 56.9416 153.12 56.9716C153.13 56.8916 153.15 56.8116 153.17 56.7216C153.27 56.2416 153.42 55.6316 153.64 55.0516C153.86 54.4616 154.15 53.9416 154.49 53.6416C154.68 53.4916 154.85 53.4016 155.03 53.3716Z" fill="#DA8369"/>
<path style="${this.colorStyle}" d="M135.91 46.894C136.03 46.174 133.9 44.824 131.77 44.844C130.23 44.864 128.92 45.604 128.98 45.854C129.03 46.104 130.47 45.544 132.41 46.104C134.05 46.574 135.23 47.574 135.75 47.154C135.79 47.094 135.9 47.034 135.91 46.894Z" fill="#001E65"/>
<path style="${this.colorStyle}" d="M143.33 47.7638C143.52 46.9938 146.04 46.7038 147.91 47.6738C149.28 48.3838 150.16 49.7238 149.97 49.9338C149.82 50.1438 148.79 48.9838 146.81 48.5938C145.14 48.2738 143.65 48.7238 143.38 48.0638C143.35 48.0338 143.29 47.9138 143.33 47.7638Z" fill="#001E65"/>
<path style="${this.colorStyle}" d="M137.65 58.3633C137.4 58.2733 136.53 58.0033 136.18 57.2433C135.74 56.3033 136.19 55.1033 137.21 54.4433C137.29 54.3833 137.43 54.4233 137.46 54.4933C137.53 54.5633 137.48 54.7033 137.4 54.7333C136.5 55.3033 136.13 56.2933 136.48 57.0533C136.77 57.6733 137.49 57.9333 137.67 57.9833C137.78 58.0233 137.85 58.1033 137.8 58.2033C137.83 58.3333 137.76 58.3633 137.65 58.3633Z" fill="#DA8369"/>
<path style="${this.colorStyle}" d="M145.27 52.0746C143.33 51.8246 141.75 54.0046 141.87 54.4346C141.99 54.8246 143.11 55.2546 144.76 55.4746C146.41 55.6946 147.7 55.4446 147.86 55.2446C148.02 55.0546 147.28 52.3646 145.27 52.0746Z" fill="white"/>
<path style="${this.colorStyle}" d="M142.92 53.3316C142.88 53.4316 142.83 53.5716 142.83 53.6716C142.7 54.5616 143.33 55.3616 144.21 55.5016C145.1 55.6316 145.9 55.0016 146.04 54.1216C146.17 53.2316 145.54 52.4316 144.65 52.2916C144.21 52.2216 143.78 52.3616 143.45 52.5816C143.49 52.5816 143.52 52.5916 143.55 52.5916C143.86 52.6516 144.08 52.9416 144.05 53.2516C143.99 53.5616 143.7 53.7816 143.39 53.7516C143.16 53.7316 142.97 53.5416 142.92 53.3316Z" fill="#040605"/>
<path style="${this.colorStyle}" d="M132.09 49.8719C134 50.1319 134.91 52.8119 134.66 53.2319C134.42 53.5819 133.24 53.7119 131.61 53.4819C129.99 53.2519 129.22 52.0119 129.17 51.7519C129.09 51.5219 130.12 49.6119 132.09 49.8719Z" fill="white"/>
<path style="${this.colorStyle}" d="M130.21 51.1524C130.17 51.2524 130.12 51.3924 130.11 51.4924C129.97 52.3924 130.61 53.2024 131.51 53.3024C132.41 53.4424 133.22 52.8024 133.32 51.9024C133.46 51.0024 132.82 50.1924 131.92 50.0924C131.47 50.0224 131.04 50.1624 130.71 50.3824C130.75 50.3824 130.78 50.3924 130.81 50.3924C131.12 50.4524 131.34 50.7424 131.32 51.0624C131.26 51.3724 130.97 51.5924 130.66 51.5724C130.46 51.5524 130.26 51.3624 130.21 51.1524Z" fill="#040605"/>
<path style="${this.colorStyle}" d="M134.47 52.9419C134.48 52.9419 134.49 52.9419 134.5 52.9419C134.63 52.9319 134.73 52.8119 134.71 52.6819C134.71 52.6519 134.42 49.9719 131.95 49.6319C129.91 49.3619 129.09 50.7619 128.79 51.2919C128.77 51.3319 128.75 51.3619 128.73 51.3919C128.66 51.5019 128.7 51.6519 128.81 51.7219C128.92 51.7919 129.07 51.7519 129.14 51.6419C129.16 51.6119 129.18 51.5719 129.2 51.5319C129.49 51.0419 130.16 49.8819 131.89 50.1019C133.98 50.3919 134.23 52.6319 134.24 52.7219C134.26 52.8419 134.36 52.9319 134.47 52.9419Z" fill="#001E65"/>
<path style="${this.colorStyle}" d="M147.87 55.3821C147.89 55.3821 147.9 55.3821 147.92 55.3821C148.05 55.3621 148.13 55.2321 148.11 55.1021L148.1 55.0521C147.68 52.7721 146.44 52.0721 145.47 51.8821C142.99 51.3921 141.9 53.8021 141.89 53.8321C141.84 53.9521 141.89 54.0921 142.01 54.1421C142.13 54.1921 142.27 54.1421 142.32 54.0221C142.36 53.9321 143.26 51.9321 145.37 52.3521C146.2 52.5121 147.26 53.1321 147.63 55.1421L147.64 55.1921C147.67 55.3021 147.76 55.3821 147.87 55.3821Z" fill="#001E65"/>
<path style="${this.colorStyle}" d="M135.45 70.4645C135.45 70.4645 140.23 71.8845 144.38 69.6445C148.54 67.4045 149.68 65.6445 149.68 65.6445C149.68 65.6445 143.41 74.1245 135.34 72.2445L135.45 70.4645Z" fill="#DB837B"/>
<path style="${this.colorStyle}" d="M157.25 56.6131C157.25 56.6131 155.06 57.7431 152.88 56.0231C151.54 54.9731 150.56 53.5731 149.81 52.0531C148.5 49.3531 147.38 46.5331 145.75 44.0131C144.12 41.4831 141.89 39.2131 139.05 38.2231C136.8 37.4331 134.13 37.6131 132.16 38.8531C131.46 40.7331 130.76 42.6231 130.06 44.5031C129.51 45.9831 128.04 48.7731 126.92 49.8931C125.8 51.0031 124.07 51.5731 122.7 50.7931C122.7 50.7931 122.54 31.2331 133.03 31.7231C133.03 31.7231 135.04 29.3331 140.02 28.5331C146.55 27.4631 159.99 30.3631 160.25 42.4631C160.44 51.5231 157.25 56.6131 157.25 56.6131Z" fill="#001E65"/>
<path style="${this.colorStyle}" d="M149.28 73.2812C149.28 73.2812 139.89 80.5013 138.02 80.1413C136.15 79.7813 135.16 73.3112 135.16 73.3112C135.16 73.3112 131.44 73.8313 130.59 74.7513C129.75 75.6713 128.3 84.4713 128.3 84.4713C129.7 86.0213 136.33 80.8213 137.33 81.6513C138.33 82.4713 142.31 89.0413 143.27 88.9613C143.27 88.9613 152.09 78.2513 151.88 76.5713C151.78 75.8513 149.28 73.2812 149.28 73.2812Z" fill="#BD54AE"/>
<path style="${this.colorStyle}" d="M107.26 134.425C107.33 134.265 114.41 118.255 113.36 106.775C112.33 95.5445 117.2 91.8645 117.25 91.8245L116.94 91.3945C116.73 91.5445 111.78 95.2645 112.83 106.825C113.87 118.165 106.84 134.055 106.77 134.215L107.26 134.425Z" fill="#BF6BAF"/>
<path style="${this.colorStyle}" opacity="0.38" d="M155.69 112.145L154.47 102.145C154.47 102.145 146.76 118.005 146.45 124.095C146.14 130.185 149.01 143.305 149.01 143.305L154.04 141.205L151.15 124.115L155.69 112.145Z" fill="#A36497"/>
<path style="${this.colorStyle}" d="M145.55 159.861C145.55 159.861 147.12 164.511 150.47 164.311C150.47 164.311 170.23 134.071 171.61 130.671C172.98 127.271 170.49 122.741 167.1 123.241C164.08 123.661 161.26 124.651 158.52 129.041C155.74 133.391 145.55 159.861 145.55 159.861Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M142.25 172.781C141.52 172.621 141.17 171.801 141.17 171.801C141.17 171.801 141.16 172.411 140.09 172.271C139.22 172.161 139.35 171.171 139.43 170.811C139.34 171.111 139.03 171.831 138.19 171.581C137.12 171.261 137.54 170.131 137.54 170.131C137.34 170.051 137.16 169.971 137.04 169.891C136.16 169.341 136.75 167.641 137.4 165.201C138.04 162.761 140.02 162.401 142.64 161.921C144.57 161.561 145.24 160.631 145.46 160.151L145.56 159.871C149.42 160.101 150.48 164.321 150.48 164.321C150.48 164.321 149.47 165.481 149 166.211C148.52 166.931 148.6 168.061 147.29 170.571C145.97 173.081 144.7 173.031 144.07 172.941C143.43 172.861 143.2 172.261 143.2 172.261C143.2 172.261 142.98 172.941 142.25 172.781Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M172.18 131.113L172.35 129.863C172.4 128.773 171.55 101.243 168.95 90.8527L168.73 89.9727L152.74 93.5527L152.89 94.4227C154.93 106.453 158.08 126.743 158.12 129.273L158.13 130.153L172.18 131.113Z" fill="#EDB6E0"/>
<path style="${this.colorStyle}" d="M140.12 61.5427L133.54 59.9727C133.54 59.9727 132.1 65.0027 135.32 65.6427C139.69 66.5027 140.12 61.5427 140.12 61.5427Z" fill="#BA3917"/>
<path style="${this.colorStyle}" d="M86.9899 51.7522L88.1099 54.5322C88.5299 55.5722 88.4199 56.7622 87.8099 57.7122L84.9699 62.1422C83.8399 63.9122 81.9099 65.0322 79.8099 65.1322L78.5099 65.1922C76.3399 60.7122 77.2999 54.2722 77.2999 54.2722L77.3699 52.4022C77.4299 50.7422 78.7199 49.4922 80.3299 49.5322L84.0299 49.6222C85.3099 49.6522 86.4799 50.5022 86.9899 51.7522Z" fill="#FFB7A9"/>
<path style="${this.colorStyle}" d="M93.4901 58.282H68.7401C67.0301 58.282 65.6401 56.892 65.6401 55.182V20.932C65.6401 19.222 67.0301 17.832 68.7401 17.832H84.4401L96.5901 30.352V55.182C96.5801 56.892 95.2001 58.282 93.4901 58.282Z" fill="#EFEEEA"/>
<path style="${this.colorStyle}" d="M84.4302 17.832V27.472C84.4302 29.062 85.7202 30.352 87.3102 30.352H96.5802L84.4302 17.832Z" fill="#EFEADA"/>
<path style="${this.colorStyle}" opacity="0.2" d="M84.5599 28.3203C84.5599 28.3203 84.4399 30.6603 87.0999 31.4303C87.1999 31.4603 87.2999 31.4803 87.3999 31.5003C88.6099 31.7203 96.5799 33.1303 96.5799 32.9503C96.5799 32.7503 96.5799 30.3603 96.5799 30.3603H87.3099C87.3099 30.3603 84.9999 30.2803 84.5599 28.3203Z" fill="#B58F31"/>
<g opacity="0.34">
<path style="${this.colorStyle}" d="M80.8101 28.9805H69.8901V30.1405H80.8101V28.9805Z" fill="#987AEA"/>
<path style="${this.colorStyle}" d="M85.9301 36.4922H69.8901V37.6522H85.9301V36.4922Z" fill="#987AEA"/>
<path style="${this.colorStyle}" d="M93.4101 41.0117H69.8901V42.1717H93.4101V41.0117Z" fill="#987AEA"/>
<path style="${this.colorStyle}" d="M93.4101 45.5312H69.8901V46.6912H93.4101V45.5312Z" fill="#987AEA"/>
<path style="${this.colorStyle}" d="M93.4101 50.0508H69.8901V51.2108H93.4101V50.0508Z" fill="#987AEA"/>
</g>
<path style="${this.colorStyle}" d="M104.92 64.9002H98.5498V64.0802H104.17V57.9102H104.92V64.9002Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M87.01 64.082H75.48V64.902H87.01V64.082Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M63.9498 64.9002H57.5698V57.9102H58.3198V64.0802H63.9498V64.9002Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M58.3198 32.6016H57.5698V45.2516H58.3198V32.6016Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M58.3198 19.9509H57.5698V12.9609H63.9498V13.7809H58.3198V19.9509Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M87.01 12.9609H75.48V13.7809H87.01V12.9609Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M104.92 19.9509H104.17V13.7809H98.5498V12.9609H104.92V19.9509Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M104.92 32.6016H104.17V45.2516H104.92V32.6016Z" fill="#3D00C3"/>
<path style="${this.colorStyle}" d="M60.6115 20.8935C63.8998 19.5674 65.4904 15.8267 64.1644 12.5385C62.8383 9.25021 59.0976 7.65956 55.8094 8.98564C52.5211 10.3117 50.9305 14.0524 52.2565 17.3406C53.5826 20.6289 57.3233 22.2195 60.6115 20.8935Z" fill="#FFC401"/>
<path style="${this.colorStyle}" d="M58.8102 10.9414V14.4714H62.2102V15.3714H58.8102V18.9314H57.8502V15.3714H54.4502V14.4714H57.8502V10.9414H58.8102Z" fill="#723EE4"/>
<path style="${this.colorStyle}" d="M206.14 140.473C206.14 134.873 201.58 130.312 195.98 130.312C190.38 130.312 185.82 134.873 185.82 140.473C185.82 146.073 190.38 150.633 195.98 150.633C201.58 150.633 206.14 146.063 206.14 140.473ZM202.25 140.473C202.25 143.923 199.44 146.743 195.99 146.743C192.53 146.743 189.73 143.933 189.73 140.473C189.73 137.013 192.53 134.213 195.99 134.213C199.44 134.203 202.25 137.013 202.25 140.473Z" fill="#723EE4"/>
<path style="${this.colorStyle}" d="M47.73 78.3033C42.74 79.5733 41 81.3133 39.73 86.3033C39.52 87.1333 38.32 87.1333 38.1 86.3033C36.83 81.3133 35.09 79.5733 30.1 78.3033C29.27 78.0933 29.27 76.8933 30.1 76.6733C35.09 75.4033 36.83 73.6633 38.1 68.6733C38.31 67.8433 39.51 67.8433 39.73 68.6733C41 73.6633 42.74 75.4033 47.73 76.6733C48.57 76.8933 48.57 78.0933 47.73 78.3033Z" fill="#835EEA"/>
<path style="${this.colorStyle}" d="M31.9899 65.3434C29.3099 66.0234 28.3799 66.9634 27.6999 69.6334C27.5899 70.0834 26.9399 70.0834 26.8199 69.6334C26.1399 66.9534 25.1999 66.0234 22.5299 65.3434C22.0799 65.2334 22.0799 64.5834 22.5299 64.4634C25.2099 63.7834 26.1399 62.8434 26.8199 60.1734C26.9299 59.7234 27.5799 59.7234 27.6999 60.1734C28.3799 62.8534 29.3199 63.7834 31.9899 64.4634C32.4399 64.5834 32.4399 65.2334 31.9899 65.3434Z" fill="#FFC401"/>
<path style="${this.colorStyle}" d="M82.7198 128.101C85.426 128.101 87.6198 125.907 87.6198 123.201C87.6198 120.495 85.426 118.301 82.7198 118.301C80.0136 118.301 77.8198 120.495 77.8198 123.201C77.8198 125.907 80.0136 128.101 82.7198 128.101Z" fill="#FFC401"/>
</g>
<defs>
<clipPath id="clip0_1938_21688">
<rect width="199.69" height="164.96" fill="white" transform="translate(20 8)"/>
</clipPath>
</defs>
</svg>
`;
      }
      attributeChangedCallback(name, _, newValue) {
        this._setState();
      }
      connectedCallback() {
        this._setState();
      }
      disconnectedCallback() {
        this._setState();
      }
      _initElement() {
        this._setState();
        if (!this.width && !this.height) {
          this.width = "24";
          this.height = "24";
        }
        let contentStyle = "object-fit: content;";
        if (this.width)
          contentStyle += `width: ${this.width}px;`;
        if (this.height)
          contentStyle += `height: ${this.height}px;`;
        this.contentStyle = contentStyle;
        if (this.color)
          this.colorStyle = `fill: ${this.color}`;
      }
      _setState() {
        this.props.forEach((key) => this[key] = this.getAttribute(key));
      }
    };
    DuplicateItem_default = DuplicateItem;
  }
});

// index.ts
var talentics_icon_exports = {};
__export(talentics_icon_exports, {
  metadata: () => metadata
});
module.exports = __toCommonJS(talentics_icon_exports);
window.customElements.define("talentics-icons-add", (init_Add(), __toCommonJS(Add_exports)).default);
window.customElements.define("talentics-icons-add-square", (init_AddSquare(), __toCommonJS(AddSquare_exports)).default);
window.customElements.define("talentics-icons-arrow-down", (init_ArrowDown(), __toCommonJS(ArrowDown_exports)).default);
window.customElements.define("talentics-icons-arrow-left", (init_ArrowLeft(), __toCommonJS(ArrowLeft_exports)).default);
window.customElements.define("talentics-icons-arrow-right", (init_ArrowRight(), __toCommonJS(ArrowRight_exports)).default);
window.customElements.define("talentics-icons-arrow-up", (init_ArrowUp(), __toCommonJS(ArrowUp_exports)).default);
window.customElements.define("talentics-icons-back-left", (init_BackLeft(), __toCommonJS(BackLeft_exports)).default);
window.customElements.define("talentics-icons-back-right", (init_BackRight(), __toCommonJS(BackRight_exports)).default);
window.customElements.define("talentics-icons-calendar", (init_Calendar(), __toCommonJS(Calendar_exports)).default);
window.customElements.define("talentics-icons-cancel-circle", (init_CancelCircle(), __toCommonJS(CancelCircle_exports)).default);
window.customElements.define("talentics-icons-check-circle", (init_CheckCircle(), __toCommonJS(CheckCircle_exports)).default);
window.customElements.define("talentics-icons-chevron-down", (init_ChevronDown(), __toCommonJS(ChevronDown_exports)).default);
window.customElements.define("talentics-icons-chevron-left", (init_ChevronLeft(), __toCommonJS(ChevronLeft_exports)).default);
window.customElements.define("talentics-icons-chevron-right", (init_ChevronRight(), __toCommonJS(ChevronRight_exports)).default);
window.customElements.define("talentics-icons-chevron-up", (init_ChevronUp(), __toCommonJS(ChevronUp_exports)).default);
window.customElements.define("talentics-icons-chevron-up-down", (init_ChevronUpDown(), __toCommonJS(ChevronUpDown_exports)).default);
window.customElements.define("talentics-icons-close", (init_Close(), __toCommonJS(Close_exports)).default);
window.customElements.define("talentics-icons-computer-edit", (init_ComputerEdit(), __toCommonJS(ComputerEdit_exports)).default);
window.customElements.define("talentics-icons-copy", (init_Copy(), __toCommonJS(Copy_exports)).default);
window.customElements.define("talentics-icons-detail", (init_Detail(), __toCommonJS(Detail_exports)).default);
window.customElements.define("talentics-icons-double-chevron-down", (init_DoubleChevronDown(), __toCommonJS(DoubleChevronDown_exports)).default);
window.customElements.define("talentics-icons-double-chevron-left", (init_DoubleChevronLeft(), __toCommonJS(DoubleChevronLeft_exports)).default);
window.customElements.define("talentics-icons-double-chevron-right", (init_DoubleChevronRight(), __toCommonJS(DoubleChevronRight_exports)).default);
window.customElements.define("talentics-icons-double-chevron-up", (init_DoubleChevronUp(), __toCommonJS(DoubleChevronUp_exports)).default);
window.customElements.define("talentics-icons-envelope", (init_Envelope(), __toCommonJS(Envelope_exports)).default);
window.customElements.define("talentics-icons-envelope-open", (init_EnvelopeOpen(), __toCommonJS(EnvelopeOpen_exports)).default);
window.customElements.define("talentics-icons-error", (init_Error(), __toCommonJS(Error_exports)).default);
window.customElements.define("talentics-icons-filter", (init_Filter(), __toCommonJS(Filter_exports)).default);
window.customElements.define("talentics-icons-folder", (init_Folder(), __toCommonJS(Folder_exports)).default);
window.customElements.define("talentics-icons-info", (init_Info(), __toCommonJS(Info_exports)).default);
window.customElements.define("talentics-icons-info-square", (init_InfoSquare(), __toCommonJS(InfoSquare_exports)).default);
window.customElements.define("talentics-icons-minus", (init_Minus(), __toCommonJS(Minus_exports)).default);
window.customElements.define("talentics-icons-search", (init_Search(), __toCommonJS(Search_exports)).default);
window.customElements.define("talentics-icons-sort-by", (init_SortBy(), __toCommonJS(SortBy_exports)).default);
window.customElements.define("talentics-icons-sub-square", (init_SubSquare(), __toCommonJS(SubSquare_exports)).default);
window.customElements.define("talentics-icons-time", (init_Time(), __toCommonJS(Time_exports)).default);
window.customElements.define("talentics-icons-turn-left", (init_TurnLeft(), __toCommonJS(TurnLeft_exports)).default);
window.customElements.define("talentics-icons-turn-right", (init_TurnRight(), __toCommonJS(TurnRight_exports)).default);
window.customElements.define("talentics-icons-verified", (init_Verified(), __toCommonJS(Verified_exports)).default);
window.customElements.define("talentics-icons-visibility", (init_Visibility(), __toCommonJS(Visibility_exports)).default);
window.customElements.define("talentics-icons-visibility-off", (init_VisibilityOff(), __toCommonJS(VisibilityOff_exports)).default);
window.customElements.define("talentics-icons-warning", (init_Warning(), __toCommonJS(Warning_exports)).default);
window.customElements.define("talentics-icons-whatsapp", (init_Whatsapp(), __toCommonJS(Whatsapp_exports)).default);
window.customElements.define("talentics-icons-wifi", (init_Wifi(), __toCommonJS(Wifi_exports)).default);
window.customElements.define("talentics-icons-wifi-off", (init_WifiOff(), __toCommonJS(WifiOff_exports)).default);
window.customElements.define("talentics-illustrations-confirmation", (init_Confirmation(), __toCommonJS(Confirmation_exports)).default);
window.customElements.define("talentics-illustrations-duplicate-item", (init_DuplicateItem(), __toCommonJS(DuplicateItem_exports)).default);
var metadata = {
  "icons": [
    {
      "class": "Add",
      "tag": "talentics-icons-add"
    },
    {
      "class": "AddSquare",
      "tag": "talentics-icons-add-square"
    },
    {
      "class": "ArrowDown",
      "tag": "talentics-icons-arrow-down"
    },
    {
      "class": "ArrowLeft",
      "tag": "talentics-icons-arrow-left"
    },
    {
      "class": "ArrowRight",
      "tag": "talentics-icons-arrow-right"
    },
    {
      "class": "ArrowUp",
      "tag": "talentics-icons-arrow-up"
    },
    {
      "class": "BackLeft",
      "tag": "talentics-icons-back-left"
    },
    {
      "class": "BackRight",
      "tag": "talentics-icons-back-right"
    },
    {
      "class": "Calendar",
      "tag": "talentics-icons-calendar"
    },
    {
      "class": "CancelCircle",
      "tag": "talentics-icons-cancel-circle"
    },
    {
      "class": "CheckCircle",
      "tag": "talentics-icons-check-circle"
    },
    {
      "class": "ChevronDown",
      "tag": "talentics-icons-chevron-down"
    },
    {
      "class": "ChevronLeft",
      "tag": "talentics-icons-chevron-left"
    },
    {
      "class": "ChevronRight",
      "tag": "talentics-icons-chevron-right"
    },
    {
      "class": "ChevronUp",
      "tag": "talentics-icons-chevron-up"
    },
    {
      "class": "ChevronUpDown",
      "tag": "talentics-icons-chevron-up-down"
    },
    {
      "class": "Close",
      "tag": "talentics-icons-close"
    },
    {
      "class": "ComputerEdit",
      "tag": "talentics-icons-computer-edit"
    },
    {
      "class": "Copy",
      "tag": "talentics-icons-copy"
    },
    {
      "class": "Detail",
      "tag": "talentics-icons-detail"
    },
    {
      "class": "DoubleChevronDown",
      "tag": "talentics-icons-double-chevron-down"
    },
    {
      "class": "DoubleChevronLeft",
      "tag": "talentics-icons-double-chevron-left"
    },
    {
      "class": "DoubleChevronRight",
      "tag": "talentics-icons-double-chevron-right"
    },
    {
      "class": "DoubleChevronUp",
      "tag": "talentics-icons-double-chevron-up"
    },
    {
      "class": "Envelope",
      "tag": "talentics-icons-envelope"
    },
    {
      "class": "EnvelopeOpen",
      "tag": "talentics-icons-envelope-open"
    },
    {
      "class": "Error",
      "tag": "talentics-icons-error"
    },
    {
      "class": "Filter",
      "tag": "talentics-icons-filter"
    },
    {
      "class": "Folder",
      "tag": "talentics-icons-folder"
    },
    {
      "class": "Info",
      "tag": "talentics-icons-info"
    },
    {
      "class": "InfoSquare",
      "tag": "talentics-icons-info-square"
    },
    {
      "class": "Minus",
      "tag": "talentics-icons-minus"
    },
    {
      "class": "Search",
      "tag": "talentics-icons-search"
    },
    {
      "class": "SortBy",
      "tag": "talentics-icons-sort-by"
    },
    {
      "class": "SubSquare",
      "tag": "talentics-icons-sub-square"
    },
    {
      "class": "Time",
      "tag": "talentics-icons-time"
    },
    {
      "class": "TurnLeft",
      "tag": "talentics-icons-turn-left"
    },
    {
      "class": "TurnRight",
      "tag": "talentics-icons-turn-right"
    },
    {
      "class": "Verified",
      "tag": "talentics-icons-verified"
    },
    {
      "class": "Visibility",
      "tag": "talentics-icons-visibility"
    },
    {
      "class": "VisibilityOff",
      "tag": "talentics-icons-visibility-off"
    },
    {
      "class": "Warning",
      "tag": "talentics-icons-warning"
    },
    {
      "class": "Whatsapp",
      "tag": "talentics-icons-whatsapp"
    },
    {
      "class": "Wifi",
      "tag": "talentics-icons-wifi"
    },
    {
      "class": "WifiOff",
      "tag": "talentics-icons-wifi-off"
    }
  ],
  "illustrations": [
    {
      "class": "Confirmation",
      "tag": "talentics-illustrations-confirmation"
    },
    {
      "class": "DuplicateItem",
      "tag": "talentics-illustrations-duplicate-item"
    }
  ]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  metadata
});
//# sourceMappingURL=index.js.map