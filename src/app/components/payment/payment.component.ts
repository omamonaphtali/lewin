import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public paymentOptions = [
		{name: 'mpesa', 
			placeholderUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1546939398/lewin/mpesa-logo.png'},
		{name: 'stripe', 
			placeholderUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1546939504/lewin/visa-mc.png'},
		{name: 'paypal', 
			placeholderUrl: 'https://res.cloudinary.com/jaredomamo/image/upload/v1546939588/lewin/paypal-logo.png'}
	];

  public mpesaOpen = true;
  constructor() { }

  ngOnInit() {
  }

}
