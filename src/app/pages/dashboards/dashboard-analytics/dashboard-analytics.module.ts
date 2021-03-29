import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardAnalyticsRoutingModule } from "./dashboard-analytics-routing.module";
import { DashboardAnalyticsComponent } from "./dashboard-analytics.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartModule } from "../../../../@vex/components/chart/chart.module";
import { MatIconModule } from "@angular/material/icon";
import { WidgetQuickLineChartModule } from "../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module";
import { WidgetQuickValueCenterModule } from "../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module";
import { WidgetQuickValueStartModule } from "../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module";
import { WidgetLargeGoalChartModule } from "../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module";
import { IconModule } from "@visurel/iconify-angular";
import { WidgetAssistantModule } from "../../../../@vex/components/widgets/widget-assistant/widget-assistant.module";
import { WidgetLargeChartModule } from "../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module";
import { WidgetTableModule } from "../../../../@vex/components/widgets/widget-table/widget-table.module";
import { SecondaryToolbarModule } from "../../../../@vex/components/secondary-toolbar/secondary-toolbar.module";
import { BreadcrumbsModule } from "../../../../@vex/components/breadcrumbs/breadcrumbs.module";
import { MatButtonModule } from "@angular/material/button";
import { PageLayoutModule } from "../../../../@vex/components/page-layout/page-layout.module";
import { ContainerModule } from "../../../../@vex/directives/container/container.module";
import { TransactionTableComponent } from "./transaction-table/transaction-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { PayoutsComponent } from "./payouts/payouts.component";
import { AioTableRoutingModule } from "../../apps/aio-table/aio-table-routing.module";
import { CustomerCreateUpdateModule } from "../../apps/aio-table/customer-create-update/customer-create-update.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { TransactionDetailsComponent } from "./transaction-details/transaction-details.component";
import { UserProfilComponent } from "./user-profil/user-profil.component";
import { AddBusinessComponent } from "./add-business/add-business.component";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { BusinessSettingsComponent } from './business-settings/business-settings.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DevelopersComponent } from './developers/developers.component';
import { BusinessActivationPendingComponent } from './business-activation-pending/business-activation-pending.component'; 
import {MatDialogModule} from '@angular/material/dialog'; 
@NgModule({
  declarations: [
    DashboardAnalyticsComponent,
    TransactionTableComponent,
    PayoutsComponent,
    TransactionDetailsComponent,
    UserProfilComponent,
    AddBusinessComponent,
    BusinessSettingsComponent,
    DevelopersComponent,
    BusinessActivationPendingComponent,
  ],
  imports: [
    CommonModule,
    DashboardAnalyticsRoutingModule,
    FlexLayoutModule,
    ChartModule,
    MatIconModule,
    WidgetQuickLineChartModule,
    WidgetQuickValueCenterModule,
    WidgetQuickValueStartModule,
    WidgetLargeGoalChartModule,
    WidgetAssistantModule,
    WidgetLargeChartModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    MatButtonModule,
    PageLayoutModule,
    ContainerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    AioTableRoutingModule,
    FlexLayoutModule,
    CustomerCreateUpdateModule,
    MatPaginatorModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule,
    IconModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatDialogModule
  ],
})
export class DashboardAnalyticsModule {}
