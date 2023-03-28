import { Component, OnInit } from '@angular/core';
import { SmartphonesService } from 'src/app/services/smartphones.service';
import { Tag } from 'src/app/shared/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(phoneservice:SmartphonesService){
    this.tags =phoneservice.getAllTags();
  }
  ngOnInit(): void {
  }

}
