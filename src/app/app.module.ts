import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './componets/gallery/gallery.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'donate', component: ProductComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CalculatorComponent,
    CartComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PaymentComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
