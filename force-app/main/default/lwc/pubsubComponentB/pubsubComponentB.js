import { LightningElement } from 'lwc';
import {subscribe,unsubscribe} from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
       sub = subscribe('componentA', (message)=>{
            this.message = message
        })
    }
    unsubscibe(){
        
         unsubscribe('componentA',sub);

    }
}