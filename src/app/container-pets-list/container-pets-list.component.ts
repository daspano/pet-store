import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container-pets-list',
  templateUrl: './container-pets-list.component.html',
  styleUrls: ['./container-pets-list.component.scss']
})
export class ContainerPetsListComponent implements OnInit {

  public status: string;

  constructor() { }

  ngOnInit(): void {
  }

}
