import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { AboutComponent } from './components/home/about/about.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ServiceComponent } from './components/home/service/service.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { ContactMapComponent } from './components/home/contact-us/contact-map/contact-map.component';
import { SocialIconsComponent } from './components/footer/social-icons/social-icons.component';
import { ContactFormComponent } from './components/home/contact-us/contact-form/contact-form.component';

import { AmcComponent } from './components/services/amc/amc.component';
import { UserSupportComponent } from './components/services/user-support/user-support.component';
import { NetworkInstallationComponent } from './components/services/network-installation/network-installation.component';
import { DataBackupComponent } from './components/services/data-backup/data-backup.component';
import { RentalComponent } from './components/services/rental/rental.component';
import { InstallationComponent } from './components/services/installation/installation.component';

import { ServiceCardComponent } from './components/services/service-card/service-card.component';

import { TestimonialComponent } from './components/home/testimonial/testimonial.component';

import { NotificationComponent } from './components/notification/notification.component';
import { ModalFormComponent } from './components/header/modal-form/modal-form.component';

import { QuickLinksComponent } from './components/services/quick-links/quick-links.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'services/amc', component: AmcComponent, pathMatch: 'full' },
  {
    path: 'services/usersupport',
    component: UserSupportComponent,
    pathMatch: 'full'
  },
  {
    path: 'services/network',
    component: NetworkInstallationComponent,
    pathMatch: 'full'
  },
  {
    path: 'services/databackup',
    component: DataBackupComponent,
    pathMatch: 'full'
  },
  { path: 'services/rental', component: RentalComponent, pathMatch: 'full' },
  {
    path: 'services/installation',
    component: InstallationComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  ServiceComponent,
  CarouselComponent,
  ServicesComponent,
  ContactUsComponent,
  ContactMapComponent,
  SocialIconsComponent,
  ContactFormComponent,
  AboutComponent,
  AmcComponent,
  UserSupportComponent,
  NetworkInstallationComponent,
  DataBackupComponent,
  RentalComponent,
  InstallationComponent,
  ContactComponent,
  ServiceCardComponent,
  AboutUsComponent,
  NotificationComponent,
  ModalFormComponent,
  TestimonialComponent,
  QuickLinksComponent
];
