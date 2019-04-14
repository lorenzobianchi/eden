import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eden-item',
  templateUrl: './eden-item.component.html',
  styleUrls: ['./eden-item.component.scss']
})
export class EdenItemComponent implements OnInit {
  @Input() edenItem;
  constructor() { }

  ngOnInit() {
  }

}
