import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule, COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactMapComponent } from './components/contact-us/contact-map/contact-map.component';

import { AgmCoreModule } from '@agm/core';
import { SocialIconsComponent } from './components/footer/social-icons/social-icons.component';
import { ContactFormComponent } from './components/contact-us/contact-form/contact-form.component';
import { AboutComponent } from './components/home/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    CarouselComponent,
    ServicesComponent,
    ContactUsComponent,
    ContactMapComponent,
    SocialIconsComponent,
    ContactFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWCMFdis6W971pRA2DRjdhM0_ZiD65yp4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
