import { LightningElement } from 'lwc';

export default class Hello_querySelectorDemo extends LightningElement {
    userName = ["rahul","jaiswal","kaku","bhola"]
    fatchDetailHandler(){
        const elem = this.template.querySelector('h1')
        elem.style.border = "1px solid red";
        console.log(elem.innerText)
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title",item.innerText)
        })
        ///lwc:dom="manual"
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = "<p> Hi I am child </p>"

    }

}