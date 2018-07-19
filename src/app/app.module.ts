import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegisterComponent } from './authorization/register/register.component';
import {MatInputModule, MatRadioModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { FormComponent} from './form/form.component';
import {TextComponent} from './fields/text/text.component';
import {NumberComponent} from './fields/number/number.component';
import {EmailComponent} from './fields/email/email.component';
import {DataService} from './data.service';
import {FormService} from './form.service';
import {RadioComponent} from './fields/radio/radio.component';
import {SelectComponent} from './fields/select/select.component';
import { PasswordComponent } from './fields/password/password.component';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    TextComponent,
    NumberComponent,
    EmailComponent,
    RadioComponent,
    SelectComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatRadioModule
  ],
  providers: [DataService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
