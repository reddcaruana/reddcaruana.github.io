import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../structs';

@Component({
  selector: 'redd-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit
{
  projects: Project[] = [];
  
  // The projects.
  constructor(
    private portfolioService: PortfolioService
  ) { }

  async ngOnInit()
  {
    this.projects = await this.portfolioService.getProjects();
  }

}
