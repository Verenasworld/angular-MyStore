import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CartService, } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

/*
definieren der eigenschaft 
*/
export class CartComponent implements OnInit {
  items;
  checkoutForm;


/*
injizieren 
*/
  constructor(private cartService: CartService, 
  private formBuilder: FormBuilder,
  ) {

   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      adress: ''
    });
  }
onSubmit(customerDate){
  //Process checkout data here 
  console.warn('Your order has been submited' , customerDate);

  this.items = this.cartService.clearCart();
  this.checkoutForm.reset();
}
}
