import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdenItemFormComponent } from './eden-item-form.component';

describe('EdenItemFormComponent', () => {
  let component: EdenItemFormComponent;
  let fixture: ComponentFixture<EdenItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdenItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdenItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
