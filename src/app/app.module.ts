import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/products.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'donate', component: ProductComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    NavbarComponent,
    PaymentComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
