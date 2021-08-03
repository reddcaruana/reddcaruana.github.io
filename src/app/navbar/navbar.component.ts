import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from '../services/portfolio.service';
import { Page, Project } from '../structs';

@Component({
  selector: 'redd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
  @ViewChild('sidebar', { static: true }) sidebarRef: ElementRef | undefined;

  // The navbar pages.
  navbar: Page[] = [
    { name: 'Home', url: '' }
  ];

  // The projects.
  portfolio: Project[] = [];

  // The FontAwesome Icons
  faBars = faBars;
  faTimes = faTimes;

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit()
  {
    this.portfolio = this.portfolioService.getProjects();
  }

  toggleSidebar()
  {
    const sidebar: HTMLElement = this.sidebarRef?.nativeElement;
    const isShowing = sidebar.classList.contains('show');

    if (isShowing) sidebar.classList.remove('show');
    else sidebar.classList.add('show');
  }
}
