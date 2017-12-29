import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PoliticsComponent } from './politics/politics.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { NewssourcesComponent } from './newssources/newssources.component';
import { AuthService } from './services/auth.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { VenueService } from "app/services/venue.service";

import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';


import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

const appRoutes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'signup', component: SignupComponent},
    // {path:'login', component: LoginComponent},
    {path:'politics',component:PoliticsComponent},
    {path:'privacy',component:PrivacypolicyComponent},
    {path:'sources',component:NewssourcesComponent},
   // { path: 'status', component: StatusComponent },
     {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
      },
     
      {
        path: 'status',
        component: StatusComponent,
        canActivate:
        [EnsureAuthenticated]
      }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      SignupComponent,
      LoginComponent,
      PoliticsComponent,
      PrivacypolicyComponent,
      NewssourcesComponent,
      StatusComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      MDBBootstrapModule.forRoot(),
      NgbModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      LocalStorageModule.withConfig({
          prefix: 'my-app',
          storageType: 'localStorage'
      }),
      AgmCoreModule.forRoot({
          // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
          apiKey: 'Your_api_key'
      })
  ],
  providers: [AuthService,VenueService,EnsureAuthenticated,
    LoginRedirect],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
