import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class WireTest extends LightningElement {
@api recordId;

@wire(getRecord,{recordId:'$recordId'})
account;



}