import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes } from './user.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
@NgModule({
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    imports:[
        ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
    ],

providers:[],
  
})
export class UserModule{}