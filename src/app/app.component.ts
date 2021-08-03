import { Component, OnInit } from '@angular/core';
import { Page } from './structs';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { PortfolioService } from './services/portfolio.service';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  // Page Change subscription.
  onPageChange: Subscription;

  constructor(
    private router: Router,
    private portfolioService: PortfolioService
  ) {
    this.onPageChange = this.router.events.subscribe(e => {
      if (e instanceof NavigationStart)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }

  // The current year.
  year: number = new Date().getFullYear();

  async ngOnInit()
  {
    await this.portfolioService.init();
  }
}
