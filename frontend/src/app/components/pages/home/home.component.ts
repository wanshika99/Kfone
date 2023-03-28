import { Component, OnInit } from '@angular/core';
import { Phones } from 'src/app/shared/models/phones';
import { SmartphonesService } from 'src/app/services/smartphones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phones:Phones[] = [];
  constructor(private phoneservice:SmartphonesService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=> {
      if (params.searchTerm)
        this.phones = this.phoneservice.getAllPhonesBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.phones = this.phoneservice.getAllPhonesByTag(params.tag);
      else
        this.phones = phoneservice.getAll()
    })

  }
  ngOnInit(): void {
  }

}
