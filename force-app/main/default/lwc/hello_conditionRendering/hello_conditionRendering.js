import { LightningElement } from 'lwc';

export default class Hello_conditionRendering extends LightningElement {
    isVisible = false
    name
    handleClick(){

        this.isVisible = true
    }
    changeHandler(event){

        this.name = event.target.value
    }
    get helloMethod(){
        return this.name === 'hello'
    }
}