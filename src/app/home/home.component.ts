import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'redd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  title: string = "hello,";

  tagline: string = `
    i'm a <span class="accent">game developer</span> and <span class="accent">lecturer</span> based in malta.
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
