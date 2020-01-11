import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../beans/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreservicesService {


  api_url = "http://localhost:6699/api";



  constructor(private http: HttpClient) { }

  getAllStores() : Observable<Store[]>
  {
    return this.http.get<Store[]>(this.api_url+"/all");
  }

  addNewStore(store_obj: Store) : Observable<Store>
  {
   console.log(store_obj);
   
    return this.http.post<Store>(this.api_url+"/add",store_obj,{responseType:'json'});

  }

  findStoresByName(search_text: string) : Observable<Store[]> {

    return this.http.get<Store[]>(this.api_url+"/findbyname/"+search_text);
   
  }

  findStoresByLocation(latitude: any, longitude: any) : Observable<Store[]> {
    
    return this.http.get<Store[]>(this.api_url+"/findbyloc/"+latitude+"/"+longitude);

  }
  
 
}
