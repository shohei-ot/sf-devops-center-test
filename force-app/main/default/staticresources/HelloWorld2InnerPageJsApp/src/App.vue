<template>
  <div ref="root">
    <p>LWC のボタンが押された回数: {{count}}</p>
    <button @click="handleClick">Vue app 内のボタン</button>
    <hr />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const APP_NAME = 'HelloWorld2InnerPageJsApp';
const DIST_NAME = 'HelloWorld2';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      count:0,
      messagePort: null as MessagePort | null
    }
  },
  computed: {
    registered() {
      return this.$data.messagePort !== null;
    }
  },
  created() {
    console.debug('App created!')
    this.initMessageReceiver();
  },
  mounted() {
    // console.log('App mounted!')
    // this.postMessage('loaded', {documentBodyHeight: document.body.scrollHeight});
  },
  unmounted() {
    this.removeMessageReceiver();
  },
  methods: {
    handleClick(e: MouseEvent){
      e.stopPropagation();
      e.preventDefault();
      console.debug('handleClick', e);
      this.postMessage('clickButton', undefined);
    },
    initMessageReceiver(){
      console.debug('initMessageReceiver')
      window.addEventListener('message', this.registerMessagePort.bind(this));
    },

    removeMessageReceiver(){
      window.removeEventListener('message', this.registerMessagePort.bind(this));
      this.$data.messagePort?.close();
    },

    registerMessagePort(e: MessageEvent){
      console.debug('registerMessagePort', e);
      const {from, to, event} = e.data;
      console.debug('{from, to, event}', JSON.stringify({from,to,event}));

      if (from === 'HelloWorld2' && to === APP_NAME && event === 'registerMessageHandler' && !this.registered) {
        const port2 = e.ports[0];
        console.debug('port2', port2);

        this.$data.messagePort = port2;
        this.$data.messagePort.onmessage = this.messageReceiver;
      }
    },

    messageReceiver(e: MessageEvent){
      console.debug('messageReceiver')
      const {from, to, event, payload} = e.data

      if (to !== APP_NAME) return;

      console.debug({from,to,event,payload})

      switch (from) {
        case 'HelloWorld2':
          this.handleMessageFromHelloWorld2(event,payload)
          break;
        default:
          break;
      }
    },

    handleMessageFromHelloWorld2(event: string, payload: any){
      console.debug('handleMessageFromHelloWorld2', {event,payload})

      switch (event) {
        case 'clickButton':
          this.$data.count++;
          break;
        default:
          break;
      }
    },

    postMessage(event: string, payload: any){
      console.debug('postMessage')
      console.debug('this.$data.messagePort',this.$data.messagePort)
      this.$data.messagePort?.postMessage({
        from: APP_NAME,
        to: DIST_NAME,
        event,
        payload
      });
    }
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
