export class Store {

    store_id : string;
    store_name : string;
    store_address : string;
    store_category : string;
    latitude : number;
    longitude : number;
    store_owner : string;

    constructor(
        store_name : string,
        store_address : string,
        store_category: string,
        latitude : number,
        longitude : number,
        store_owner : string)
        {
        
            this.store_name = store_name;
            this.store_address = store_address;
            this.store_category = store_category;
            this.latitude = latitude;
            this.longitude = longitude;
            this.store_owner = store_owner;
        }
}
