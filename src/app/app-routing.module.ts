import {RouterModule, Routes} from '@angular/router';
import {ExperienceComponent} from './experience/experience.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {depth: 1}},
  { path: 'profile', component: ProfileComponent, data: {depth: 2}},
  { path: 'experience', component: ExperienceComponent, data: {depth: 3}},
  { path: 'technologies', component: TechnologiesComponent, data: {depth: 4}},
  { path: 'projects', component: ProjectsComponent, data: {depth: 5}},
  { path: 'contact', component: ContactComponent, data: {depth: 6}},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '',
    component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
