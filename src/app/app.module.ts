import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { PortfolioNavComponent } from './portfolio/portfolio-nav/portfolio-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioService } from './services/portfolio.service';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    ProjectComponent,
    PortfolioNavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: providerFactory,
      deps: [ PortfolioService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function providerFactory(provider: BaseService)
{
  return () => provider.init();
}
