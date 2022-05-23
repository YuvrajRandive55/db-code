import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { EcommerceRoutingModule } from './report-filter-routing.module';
import { ReportFilterComponent } from './report-filter.component';
import { Select2Module } from 'ng-select2-component';



@NgModule({
  declarations: [
    ReportFilterComponent
  ],
  imports: [
    CommonModule,
    Select2Module,
    FormsModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    WidgetModule,
    UiModule,
    EcommerceRoutingModule
  ]
})
export class ReportFilterModule { }
