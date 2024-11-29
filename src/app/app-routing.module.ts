import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'area',  // Ruta por defecto
    pathMatch: 'full'
  },
  {
    path: 'area',  // Ruta para acceder a la página del área
    loadChildren: () => import('./area/area.module').then(m => m.AreaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
