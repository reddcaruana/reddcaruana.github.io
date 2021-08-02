import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Project } from 'src/app/structs';

@Component({
  selector: 'redd-portfolio-nav',
  templateUrl: './portfolio-nav.component.html',
  styleUrls: ['./portfolio-nav.component.scss']
})
export class PortfolioNavComponent implements OnInit
{
  // The projects list.
  projects: Project[] = [];

  constructor(
    private portfolio: PortfolioService
  ) { }

  async ngOnInit()
  {
    this.projects = await this.portfolio.getProjects();
  }

}
