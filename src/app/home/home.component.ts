import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { StoreservicesService } from '../services/storeservices.service';
import { Store } from '../beans/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stores_list : Store[];
  search_text : string = null;

  address: Object;
  formattedAddress: string = null;
  latitude : any;
  longitude : any;
  store_obj : Store;

  constructor(public zone: NgZone,private router:Router,private storeservice : StoreservicesService) { }

  ngOnInit() {

    this.displayAllStores();
  }
  displayAllStores() {
    this.storeservice.getAllStores().subscribe(data => {
      this.stores_list = data;
      console.log(this.stores_list);
    });
  }

  onSearchByname(data)
  {
    this.search_text = data.search_text;

    console.log(this.search_text);
    this.storeservice.findStoresByName(this.search_text).subscribe(data => {
      this.stores_list = data;
      console.log(this.stores_list);
    });

  }

  onSearchBylocation(data)
  {
    if(this.formattedAddress != null)
    {
    this.storeservice.findStoresByLocation(this.latitude,this.longitude).subscribe(data => {
      this.stores_list = data;
      console.log(this.stores_list);
    });
    }
  }

  getAddress(place: any ) {
    this.address = place['formatted_address'];
    this.formattedAddress = place['formatted_address'];
    this.latitude = place.geometry.location.lat();
    this.longitude  = place.geometry.location.lng();
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }

}
