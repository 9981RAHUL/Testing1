import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.email'
const fields = [NAME_FIELD,EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    //0055j000003zWlyAAE
    //@wire(adapter, {adapterConfig})
    //propertyorfunction


    userDetail
    @wire(getRecord, {recordId:'$userId', fields:fields} )
    userDetailHandler({data,error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    
    

        //console.log(response)
        //response.data
       // responce.error
       //or
       //console.log(responce)
       //let data= response.data
       //let error=responce.error
    }
    @wire(getRecord, {recordId:'$userId',fields:fields})
    userDetailProperty
}