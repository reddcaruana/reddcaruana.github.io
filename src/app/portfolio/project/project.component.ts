import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Project } from 'src/app/structs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy
{
  // The project to show.
  project: Project | undefined = undefined;

  // The page change subscription.
  onChange: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private portfolioService: PortfolioService
  ) {
    this.onChange = this.router.events.subscribe(async e => {
      if (e instanceof NavigationEnd) this.getProject();
    });
  }

  // Get the project on init.
  async ngOnInit()
  {
    this.getProject();
  }

  // Unsubscribe on destroy.
  ngOnDestroy()
  {
    this.onChange.unsubscribe();
  }

  /**
   * Gets a project from the YAML file.
   */
  async getProject()
  {
    const slug = this.route.snapshot.params.slug;
    this.project = await this.portfolioService.getProject(slug);

    if (this.project === undefined)
      this.router.navigateByUrl('404')
  }
}
