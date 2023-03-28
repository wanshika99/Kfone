import { Injectable } from '@angular/core';
import { sample_phones, sample_tags } from 'src/data';
import { Phones } from '../shared/models/phones';
import { Tag } from '../shared/Tags';


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

  getAllTags():Tag[] {
    return sample_tags;
  }

  getAllPhonesByTag(tag:string):Phones[] {
    return tag == 'All'?
    this.getAll():
    this.getAll().filter(Phones =>Phones.tags?.includes(tag));
  }

  getphoneById(phoneId:string):Phones{
    return this.getAll().find(Phones => Phones.id = phoneId) ?? new Phones();
  }
}
