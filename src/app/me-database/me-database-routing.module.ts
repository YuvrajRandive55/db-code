import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [ 
  {
    path: 'report-data',
    loadChildren: () => import('./report-data/report-data.module').then(m => m.ReportDataModule)
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeDatabaseRoutingModule { }