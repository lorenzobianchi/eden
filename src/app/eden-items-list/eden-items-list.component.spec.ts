import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdenItemsListComponent } from './eden-items-list.component';

describe('EdenItemsListComponent', () => {
  let component: EdenItemsListComponent;
  let fixture: ComponentFixture<EdenItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdenItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdenItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
