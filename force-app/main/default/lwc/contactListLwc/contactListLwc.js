import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactList.getContactList'

export default class ContactListLwc extends LightningElement {

    @track conList;

    /*@wire(getContactList)
    constactList({data,error}){
        if(data){
            this.conList = data;
        }
        else if(error){
            console.log('error'+ error);
        }
    }*/
    getContactList(){
        getContactList().then(result=>{
            this.conList = result;
        })
        .catch(error=>{
            console.log('error #');
        })
    }
}