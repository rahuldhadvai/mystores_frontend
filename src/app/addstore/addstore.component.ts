import { Component, OnInit, Input, Output, EventEmitter, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { } from '@google/maps';
import { Store } from '../beans/store';
import { StoreservicesService } from '../services/storeservices.service';


@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrls: ['./addstore.component.css']
})
export class AddstoreComponent implements OnInit {

  address: Object;
  formattedAddress: string;
  latitude : any;
  longitude : number;
  store_obj : Store;

  constructor(public zone: NgZone,private service: StoreservicesService) { }

  ngOnInit() {
  }

 
  getAddress(place: any ) {
    this.address = place['formatted_address'];
    this.formattedAddress = place['formatted_address'];
    this.latitude = place.geometry.location.lat();
    this.longitude  = place.geometry.location.lng();
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }

  onClickSubmit(data) {
    
    this.store_obj = new Store(data.store_name,this.formattedAddress,data.store_category,this.latitude,this.longitude,data.store_owner);

    console.log(this.store_obj);
    
    this.service.addNewStore(this.store_obj).subscribe(data => {
      if(data != null)
      {
        window.alert("NewStore Added Successfully");
      }
    });
    
 }  


}
