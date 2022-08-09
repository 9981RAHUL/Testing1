import { LightningElement } from 'lwc';

export default class P2cParent extends LightningElement {
    fName
    handleChange(event)
    {
        this.fName=event.target.value
    }
}