import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public name: string;
  public status: string;
  isSubmitted = false;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmitted = true;
    alert('New Pet Added Successfully!!');
    this.location.back();
  }

}
