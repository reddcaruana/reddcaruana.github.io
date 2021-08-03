import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import * as YAML from 'yaml';
import { Project } from '../structs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends BaseService
{
  private projects: Project[] = [];

  /**
   * Preloads the YAML data.
   */
  async init()
  {
    this.projects = await this.http.get('/assets/data/projects.yml', {
      responseType: 'text'
    }).pipe(
      map(text => YAML.parse(text) as Project[])
    ).toPromise();
  }

  /**
   * Returns the projects.
   * @returns The projects as a promise.
   */
  getProjects(): Project[]
  {
    return this.projects;
  }

  /**
   * Returns a project.
   * @param slug The project slug.
   * @returns The project, or false.
   */
  getProject(slug: string): Project | undefined
  {
    return this.projects.find(p => p.slug == slug) || undefined;
  }
}
