import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdenItemComponent } from './eden-item.component';

describe('EdenItemComponent', () => {
  let component: EdenItemComponent;
  let fixture: ComponentFixture<EdenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
