import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPetsListComponent } from './container-pets-list.component';

describe('ContainerPetsListComponent', () => {
  let component: ContainerPetsListComponent;
  let fixture: ComponentFixture<ContainerPetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
