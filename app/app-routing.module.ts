import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PexampleComponent } from './pexample/pexample.component';
import { BexampleComponent } from './bexample/bexample.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pexample',component:PexampleComponent},
  {path:'bexample',component:BexampleComponent},
  {path:'animals',component:AnimalsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
