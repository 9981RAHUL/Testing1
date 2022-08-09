import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe  } from 'lightning/messageService';

export default class LmsComponentB extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()
    }
    subscribeMessage(){
    //subscribe(messageContext, messageChannel, listener, subscriberOptions)
    console.log("Subscribe");
    this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope: APPLICATION_SCOPE })
    
    }
    handleMessage(message){
        //console.log(message.lmsData.value);
        this.recievedMessage = message.lmsData.value? message.lmsData.value : 'No Message published'
    }
    unsubsctibeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null 
        console.log(this.subscription);
    }

}