<template>
  <div ref="root">
    <div>
      <p>LWC のボタンが押された回数: {{count}}</p>
      <hr />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const APP_NAME = 'HelloWorld2InnerPageJsApp';

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
  created() {
    console.debug('App created!')
    this.initMessageReceiver();
  },
  mounted() {
    console.log('App mounted!')
    // this.postMessage('loaded', {documentBodyHeight: document.body.scrollHeight});
  },
  unmounted() {
    this.removeMessageReceiver();
  },
  methods: {
    initMessageReceiver(){
      console.debug('initMessageReceiver')
      window.addEventListener('message', this.registerMessagePort);
    },

    removeMessageReceiver(){
      window.removeEventListener('message', this.registerMessagePort);
      this.$data.messagePort?.close();
    },

    registerMessagePort(e: MessageEvent){
      console.debug('registerMessagePort', e);
      const {from, to, event} = e.data;
      console.debug('{from, to, event}', JSON.stringify({from,to,event}));

      if (from === 'HelloWorld2' && event === 'registerMessageHandler') {
        const port2 = e.ports[0];
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
      this.$data.messagePort?.postMessage({
        from: APP_NAME,
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
