import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'report-filter',
  loadChildren: () => import('./report-filter/report-filter.module').then(m => m.ReportFilterModule)
},
{
  path: '',
  redirectTo: 'ecommerce1',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportDataRoutingModule { }
