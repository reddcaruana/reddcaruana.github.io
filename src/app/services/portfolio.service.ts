import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import * as YAML from 'yaml';
import { Project } from '../structs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService
{
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Returns the projects.
   * @returns The projects as a promise.
   */
  async getProjects(): Promise<Project[]>
  {
    return this.http.get('/assets/data/projects.yml', {
      responseType: 'text'
    }).pipe(
      map(text => YAML.parse(text) as Project[])
    ).toPromise();
  }

  /**
   * Returns a project.
   * @param slug The project slug.
   * @returns The project, or false.
   */
  async getProject(slug: string): Promise<Project | undefined>
  {
    const projects: Project[] = await this.getProjects();
    return projects.find(p => p.slug == slug) || undefined;
  }
}
