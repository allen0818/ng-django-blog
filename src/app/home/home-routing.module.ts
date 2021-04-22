import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'intro', component: IntroComponent },
      { path: 'demo', component: DemoComponent }
      // { path: 'devices', loadChildren: () => import('../device/device.module').then(mod => mod.DeviceModule) }
    ]
  },
  { path: 'posts', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
