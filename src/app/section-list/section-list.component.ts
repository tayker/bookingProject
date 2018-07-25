import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  list: any;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.list = this.ds.getGoodsList();
  }

}
