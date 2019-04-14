import { Component, OnInit } from '@angular/core';
import { EdenItemsService } from '../eden-items.service';

@Component({
  selector: 'app-eden-items-list',
  templateUrl: './eden-items-list.component.html',
  styleUrls: ['./eden-items-list.component.scss']
})
export class EdenItemsListComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  area: string = 'Giardino';
  edenItems;
  constructor(private edenItemsService: EdenItemsService) { }

  ngOnInit() {
    this.edenItems = this.edenItemsService.get();
  }

  onEdenItemDelete(edenItem) {
    this.edenItemsService.delete(edenItem);
  }
}
