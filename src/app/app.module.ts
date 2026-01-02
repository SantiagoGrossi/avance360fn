import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { DataTablesModule } from "angular-datatables";
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { MatTableModule } from "@angular/material/table";
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      countDuplicates:true,
      progressBar:true,
      timeOut:1000,
      resetTimeoutOnDuplicate:true,
      closeButton:true,
      enableHtml: true
    }),
    ReactiveFormsModule,
    DataTablesModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HammerModule,

  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, HomeComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
