import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EdenItemsService } from '../eden-items.service';

@Component({
  selector: 'app-eden-item-form',
  templateUrl: './eden-item-form.component.html',
  styleUrls: ['./eden-item-form.component.scss']
})
export class EdenItemFormComponent implements OnInit {
  form;
  lookupLists = {
    areas: ['Balcone', 'Giardino', 'Appartamento']
  };
  constructor(private edenItemsService: EdenItemsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      area: new FormControl('Balcone'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      year: new FormControl('', this.yearValidator)
    });
  }

  yearValidator(control: any) {
    if (control.value.trim().length === 0) {
      return null;
    }
    // tslint:disable-next-line:radix
    const year = parseInt(control.value);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { 'year': {
        'min': minYear,
        'max': maxYear
      }
    };
    }
  }

  onSubmit(edenItem) {
    this.edenItemsService.add(edenItem);
  }
}
