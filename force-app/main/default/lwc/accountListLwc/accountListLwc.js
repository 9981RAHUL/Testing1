import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountList.getAccountList'
export default class AccountListLwc extends LightningElement {

    //@track accList;

    @wire(getAccountList) accList;

   /* @wire(getAccountList)
        AccountList({data,error}){
            if(data){
                this.accList = data;
            }
            else if(error){
                console.log('error'+ error);
            }
        } */
}