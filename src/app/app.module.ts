import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService} from 'ngx-toastr';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MasterfileComponent } from './masterfile/masterfile.component';



const routes:any=[
  {path:'',component:HomeComponent},
  {path:'master',component:MasterfileComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
   
   
    HomeComponent,
        MasterfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(
      {
        positionClass: 'toast-center',
        preventDuplicates: true,
        closeButton: true,
      }
    ),
   
    
  ],
  providers: [
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
