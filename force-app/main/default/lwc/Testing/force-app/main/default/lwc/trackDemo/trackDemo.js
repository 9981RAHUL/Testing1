import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {
   @track name;

   handleChange(event){
    console.log('event is' + event);
   }
}