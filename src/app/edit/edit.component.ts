import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public name: string;
  public status: string;
  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }



}
