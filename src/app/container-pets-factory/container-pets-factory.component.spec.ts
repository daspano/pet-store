import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPetsFactoryComponent } from './container-pets-factory.component';

describe('ContainerPetsFactoryComponent', () => {
  let component: ContainerPetsFactoryComponent;
  let fixture: ComponentFixture<ContainerPetsFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPetsFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPetsFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
