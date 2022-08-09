import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('Child constructor called')  
     }
     connectedCallback(){
         console.log('Child Connected callback called')
         throw new Error('loading of child component failed')
     }
     renderedCallback(){
         console.log('Child rendered callback called')
     }
     disconnectedCallback(){

       alert('Child disconnectedCallback called')
       console.log('disconnected call back called')
     }
}