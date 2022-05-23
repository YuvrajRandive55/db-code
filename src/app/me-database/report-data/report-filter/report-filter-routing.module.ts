import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFilterComponent } from './report-filter.component';

const routes: Routes = [{ path: '', component: ReportFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
