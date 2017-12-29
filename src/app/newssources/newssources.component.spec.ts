import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssourcesComponent } from './newssources.component';

describe('NewssourcesComponent', () => {
  let component: NewssourcesComponent;
  let fixture: ComponentFixture<NewssourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewssourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
