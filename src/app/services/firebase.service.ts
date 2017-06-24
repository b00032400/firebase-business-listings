import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Business } from '../Business';
import { Category } from '../Category';

@Injectable()
export class FirebaseService {
    businesses: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;
    
    constructor(private _afdb: AngularFireDatabase) {
    
    }
    
    getBusinesses(category:string = null) {
        if(category != null){
            this.businesses = this._afdb.list('/businesses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as 
            FirebaseListObservable<Business[]>
        } else {
            this.businesses = this._afdb.list('/businesses') as 
            FirebaseListObservable<Business[]>
        }
        
        return this.businesses;
    }
    
    getCategories() {
        this.categories = this._afdb.list('/categories') as 
        FirebaseListObservable<Category[]>
        return this.categories;
    }
}