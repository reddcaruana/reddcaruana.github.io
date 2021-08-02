import { Component } from '@angular/core';
import { Page } from './structs';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{


  // The current year.
  year: number = new Date().getFullYear();
}
