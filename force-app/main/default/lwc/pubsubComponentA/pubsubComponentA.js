import { LightningElement } from 'lwc';
import {publish} from 'c/pubsub';
export default class PubsubComponentA extends LightningElement {
    message
    inputHandler(event){
        this.message = event.target.value
    }
    publishHandler(){
       publish('componentA', this.message)
    }
}