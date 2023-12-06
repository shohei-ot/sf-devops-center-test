import { LightningElement, api } from 'lwc';

export default class HelloWorld2 extends LightningElement {
  /**
   * @type {string} account record id
   */
  @api
  recordId;
}