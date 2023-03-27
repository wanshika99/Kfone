import { Component, OnInit } from '@angular/core';
import { Phones } from 'src/app/shared/models/phones';
import { SmartphonesService } from 'src/app/services/smartphones.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phone:Phones[] = [];
  constructor(private phoneservice:SmartphonesService) {
    this.phone = phoneservice.getAll()
  }
  ngOnInit(): void {
  }

}
