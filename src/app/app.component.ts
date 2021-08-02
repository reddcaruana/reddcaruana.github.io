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
  // The navbar pages.
  navbar: Page[] = [
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '#portfolio' },
    { name: 'About', url: '#contact' }
  ];

  // The footer links.
  footer: Page[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/redd-caruana/', icon: faLinkedinIn },
    { name: 'Instagram', url: 'https://www.instagram.com/redd.caruana/', icon: faInstagram }
  ]

  // The current year.
  year: number = new Date().getFullYear();
}
