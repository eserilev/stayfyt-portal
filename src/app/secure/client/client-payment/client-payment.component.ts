import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../../models/user.model';
import { PaymentService } from '../../../services/payment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.css']
})
export class ClientPaymentComponent implements OnInit {

 // @Input()trainer: User;
  router: Router;


  // set trainer to be the trainer who's profile is selected
  trainer: User;

  constructor(
    private paymentService: PaymentService,
    private _router: Router,
) {
    this.router = _router;
  }

  ngOnInit() {
    // trainer = this.user;
  }

  checkout() {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_4yWO55r9XQrIIS3TbbDKn3jn',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`
        // Send token.id to payment.js
        // this.paymentService.charge(trainer, token);
    }
    });

    handler.open({
      name: 'StayFyt',
      description: 'Purchase Training Session With ' + this.trainer.name,
      amount: this.trainer.rate,
       image: 'assets/images/stayfyt_logo.png'

    });

  }
}
