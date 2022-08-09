import { LightningElement } from 'lwc';

export default class C2pChildModal extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close', {
            bubbles : true, 
            detail: {
                msg: "Model Closed Successfully"}
        })
        this.dispatchEvent(myEvent)

    }
    footerHandler(){
        console.log("footerHandler called")
    }
}