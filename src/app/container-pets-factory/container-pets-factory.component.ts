import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'container-pets-factory',
  templateUrl: './container-pets-factory.component.html',
  styleUrls: ['./container-pets-factory.component.scss']
})
export class ContainerPetsFactoryComponent implements OnInit {

  public name: string;
  public status: string;
  isSubmitted = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmitted = true;
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }

}
