import { LightningElement, api, track } from "lwc";

const VF_JS_APP_NAME = "HelloWorld2InnerPageJsApp";
const MY_NAME = "HelloWorld2";

export default class HelloWorld2 extends LightningElement {
  /**
   * @type {string} account record id
   */
  @api
  recordId;

  renderedCallback() {
    this.iframeEl.addEventListener("load", () => {
      console.debug("iframe loaded");
      this.registerMessageHandler();
    });
  }

  disconnectedCallback() {
    // window.removeEventListener('message', this.handleMessage.bind(this));
    this.unregisterMessageHandler();
  }

  get iframeEl() {
    return this.template.querySelector("iframe");
  }

  /**
   * @type {number}
   */
  @track
  vfAppCount = 0;

  /**
   * @type {MessagePort | null}
   */
  currentWindowPort = null;

  registerMessageHandler() {
    console.debug("registerMessageHandler");

    // // window.addEventListener('message', this.handleMessage.bind(this));
    const { port1, port2 } = new MessageChannel();
    console.debug("{ port1, port2 }", port1, port2);

    this.currentWindowPort = port1;

    // 子からのメッセージを受け付けるハンドラを登録
    this.currentWindowPort.onmessage = this.handleMessage.bind(this);

    console.debug("window.postMessage", window.postMessage);
    const data = {
      from: MY_NAME,
      to: VF_JS_APP_NAME,
      event: "registerMessageHandler",
      payload: undefined
    };
    console.debug("data", JSON.stringify(data));

    console.debug("send message to child window");
    // 子にメッセージを送るハンドラを送信.
    this.iframeEl.contentWindow.postMessage(data, "*", [port2]);
    console.debug("post done");
  }

  /**
   * post message to child window (Visualforce)
   *
   * @param {string} to
   * @param {string} event
   * @param {any} payload
   */
  postMessageToChild(to, event, payload) {
    console.debug("postMessageToChild", JSON.stringify({ to, event, payload }));
    console.debug("this.currentWindowPort", this.currentWindowPort);
    this.currentWindowPort.postMessage({ from: MY_NAME, to, event, payload });
  }

  unregisterMessageHandler() {
    this.currentWindowPort?.close();
    this.childWindowPort?.close();
  }

  /**
   * window の message イベントハンドラ
   */
  handleMessage(e) {
    console.debug("handleMessage", e);

    const { from, to, event, payload } = e.data;
    console.debug("{ from, to, event, payload }", { from, to, event, payload });

    if (to !== MY_NAME) {
      return;
    }

    switch (from) {
      case VF_JS_APP_NAME:
        switch (event) {
          case "adjustIframeHeight": {
            const height = `${e.data.payload.documentBodyHeight}px`;
            this.handleAdjustIframeHeight(height);
            break;
          }
          case "clickButton":
            this.vfAppCount++;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  /**
   * @param {string} height
   */
  adjustIframeHeight(height) {
    this.iframeEl.style.height = height;
    this.iframeEl.setAttribute("height", height);
  }

  /**
   * 画面上のボタンを押した時のハンドラ
   */
  handleClickButton(e) {
    console.debug("handleClickButton", this);

    e.preventDefault();
    e.stopPropagation();

    this.postMessageToChild(VF_JS_APP_NAME, "clickButton", undefined);
  }
}
