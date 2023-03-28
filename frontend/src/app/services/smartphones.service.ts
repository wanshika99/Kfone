import { Injectable } from '@angular/core';
import { sample_phones } from 'src/data';
import { Phones } from '../shared/models/phones';


@Injectable({
  providedIn: 'root'
})
export class SmartphonesService {

  constructor() { }

  getAll():Phones[] {
    return sample_phones;
  }
  getAllPhonesBySearchTerm(searchTerm:string){
    return this.getAll().filter(Phones => Phones.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }
}
