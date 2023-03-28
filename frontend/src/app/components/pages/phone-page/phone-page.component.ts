import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartphonesService } from 'src/app/services/smartphones.service';
import { Phones } from 'src/app/shared/models/phones';

@Component({
  selector: 'app-phone-page',
  templateUrl: './phone-page.component.html',
  styleUrls: ['./phone-page.component.css']
})
export class PhonePageComponent implements OnInit {
  phone!: Phones;
  constructor(activatedRoute:ActivatedRoute, phoneservice:SmartphonesService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.phone = phoneservice.getphoneById(params.id);
    })
   }

  ngOnInit(): void {
  }

}
