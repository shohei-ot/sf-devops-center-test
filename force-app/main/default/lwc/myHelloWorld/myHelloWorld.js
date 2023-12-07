import { LightningElement, api } from 'lwc';

export default class MyHelloWorld extends LightningElement {
  @api
  foo = 'foo';
}