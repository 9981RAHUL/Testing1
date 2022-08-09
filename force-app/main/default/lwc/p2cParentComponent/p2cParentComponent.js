import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    percentage=10

    changeHandler(event){

        this.percentage = event.target.value
    }

    handleClick(){

        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
}