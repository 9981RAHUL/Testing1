import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethodLifecycle.html'

export default class RenderMethodLifecycle extends LightningElement {
    selectBtn = ''

    render(){

        return this.selectBtn === 'signup' ? signupTemplate :
                this.selectBtn === 'signin' ? signinTemplate :
                renderTemplate
    }
    handleClick(event){
        this.selectBtn =event.target.label

    }
    submitHandler(event){
        console.log(`${event.target.label} sucssefully`)
    }
}