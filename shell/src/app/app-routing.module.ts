import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: () => import('mfeLogin/Module').then(m => m.LoginModule) },
  { path: 'detail', loadChildren: () => import('mfeDetail/Module').then(m => m.DetailModule) },
  { path: 'summary', loadChildren: () => import('mfeSummary/Module').then(m => m.SummaryModule) }
  // {
  //   path: 'detail', loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry:
  //         'http://localhost:5000/remoteEntry.js',
  //       exposedModule: './Module'
  //     }).then((m) => m.AppModule)
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
