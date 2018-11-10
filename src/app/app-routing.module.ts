import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'profile/login', pathMatch: 'full' },
  { path: 'profile', loadChildren: "./profile/profile.module#ProfileModule" },
  { path: 'events', loadChildren: "./events/events.module#EventsModule" },
  
 // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
