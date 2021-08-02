import { Component } from '@angular/core';
import { Page } from '../structs';

@Component({
  selector: 'redd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent
{
  // The navbar pages.
  navbar: Page[] = [
    { name: 'Home', url: '/' },
  ];
}
