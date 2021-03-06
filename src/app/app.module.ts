import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";

// Using for login form
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

// Firebase service
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

// Components/
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { CreateAProjectComponent } from "./create-aproject/create-aproject.component";
import { UpdateConfirmDialogComponent } from "./components/update-confirm-dialog/update-confirm-dialog.component";

// Using for createAProject
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import {
  AngularFirestoreModule,
  FirestoreSettingsToken,
} from "@angular/fire/firestore";

// Using for Home
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
// import { ReqUpdateFormComponent } from './components/req-update-form/req-update-form.component';

// Req-Update-Form
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

// Server
import { HttpClientModule } from "@angular/common/http";
import { DeleteConfirmDialogComponent } from "./components/delete-confirm-dialog/delete-confirm-dialog.component";
import { MyPaginatorComponent } from "./components/my-paginator/my-paginator.component";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    HomeComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    CreateAProjectComponent,
    // ReqUpdateFormComponent,
    UpdateConfirmDialogComponent,
    DeleteConfirmDialogComponent,
    MyPaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatSelectModule,
    MatSliderModule,
    AngularFirestoreModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    HttpClientModule,
    MatButtonToggleModule,
  ],
  // entryComponents: [LoginFormComponent],
  entryComponents: [
    HomeComponent,
    UpdateConfirmDialogComponent,
    DeleteConfirmDialogComponent,
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
