import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../components/about/about.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HeroComponent },
{ path: '**', redirectTo: '' },
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }