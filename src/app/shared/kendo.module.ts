import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule, DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { BodyModule, ExcelModule, GridModule, HeaderModule, RowFilterModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PopupModule } from '@progress/kendo-angular-popup';
import { IntlModule } from '@progress/kendo-angular-intl';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { EditorModule } from '@progress/kendo-angular-editor';
import { PopoverModule } from '@progress/kendo-angular-tooltip';
import { ChartModule, SparklineModule } from '@progress/kendo-angular-charts';
/**
 * Created by Teo on 20/09/2019.
 */
@NgModule({
  exports: [
    ButtonsModule,
    HeaderModule,
    DateInputsModule,
    DropDownsModule,
    ExcelExportModule,
    DialogsModule,
    GridModule,
    InputsModule,
    LabelModule,
    PDFExportModule,
    PopupModule,
    DatePickerModule,
    ExcelModule,
    IntlModule,
    RowFilterModule,
    BodyModule,
    LayoutModule,
    EditorModule,
    PopoverModule,
    ChartModule, 
    SparklineModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class KendoModule {}
