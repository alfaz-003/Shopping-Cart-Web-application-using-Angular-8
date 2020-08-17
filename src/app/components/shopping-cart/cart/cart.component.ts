import { Component, OnInit } from '@angular/core';
import  { MessengerService } from 'src/app/services/messenger.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    //{id: 1,productid:1, productName: "Test 1", qty: 4 , price:300},
    //{id: 2,productid:3,  productName: "Test 2", qty: 2 , price:150},
   // {id: 3, productid:5,  productName: "Test 3", qty: 3 , price:730},
    //{id: 4,  productid:7,  productName: "Test 4",qty: 3 , price:100},
  ];
  cartTotal = 0;

  constructor(private msg : MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product : Products)=>
      {
        this.addProductToCart(product)
      

    })
  }

  addProductToCart(product : Products){


    let productExits = false


    
      for (let item in this.cartItems){
        if(this.cartItems[item].productid === product.id){
          this.cartItems[item].cartItems.qty++
          productExits = true
          break;
        } 
  }

    if(!productExits) {
        
      this.cartItems.push({
          
        productId : product.id ,  
        productName : product.name,
        qty : 1 ,
        price : product.price  
  
        })
    }

    // if(this.cartItems.length === 0){
      
    //   this.cartItems.push({
          
    //     productId : product.id ,  
    //     productName : product.name,
    //     qty : 1 ,
    //     price : product.price  
  
    //     })
    // } else{
    //   for (let item in this.cartItems){
    //     if(this.cartItems[item].productid === product.id){
    //       this.cartItems[item].qty++
    //     } 
    //     else
    //      {
  
    //       this.cartItems.push({
            
    //         productId : product.id ,  
    //         productName : product.name,
    //         qty : 1 ,
    //         price : product.price  
      
    //         })
    // }

    
    
    //   }
    // }

   
      this.cartTotal = 0
      this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price )
    })
    
  }

}
