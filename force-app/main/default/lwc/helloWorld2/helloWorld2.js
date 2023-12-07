import { LightningElement, api } from "lwc";

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
   * @type {MessagePort | null}
   */
  currentWindowPort = null;

  /**
   * @type {MessagePort | null}
   */
  childWindowPort = null;

  registerMessageHandler() {
    // window.addEventListener('message', this.handleMessage.bind(this));
    const { port1, port2 } = new MessageChannel();

    this.currentWindowPort = port1;
    this.childWindowPort = port2;

    // 子からのメッセージを受け付けるハンドラを登録
    this.currentWindowPort.onmessage = this.handleMessage.bind(this);

    // eslint-disable-next-line no-new
    new Promise(() => {
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
      window.postMessage(data, "*", [this.childWindowPort]);
      // FIXME: 動いてない.
      // NOTE: `[Violation] Only request notification permission in response to a user gesture.` が出る.
    });
  }

  /**
   * post message to child window (Visualforce)
   *
   * @param {any} payload
   */
  postMessageToChild(to, event, payload) {
    console.debug("postMessageToChild", JSON.stringify({ to, event, payload }));
    this.childWindowPort?.postMessage({ from: MY_NAME, to, event, payload });
  }

  unregisterMessageHandler() {
    this.currentWindowPort?.close();
    this.childWindowPort?.close();
  }

  /**
   * window の message イベントハンドラ
   */
  handleMessage(e) {
    const { from, to, event, payload } = e.data;

    if (to !== MY_NAME) {
      return;
    }

    console.debug("handleMessage", { from, to, event, payload });

    switch (from) {
      case VF_JS_APP_NAME:
        switch (event) {
          case "adjustIframeHeight": {
            const height = `${e.data.payload.documentBodyHeight}px`;
            this.handleAdjustIframeHeight(height);
            break;
          }
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

  handleClickButton(e) {
    console.debug("handleClickButton");

    e.preventDefault();
    e.stopPropagation();

    this.postMessageToChild(VF_JS_APP_NAME, "clickButton", undefined);
  }
}
