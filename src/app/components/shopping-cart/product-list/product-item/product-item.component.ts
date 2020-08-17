import { Component, OnInit , Input} from '@angular/core';
import { Products } from 'src/app/models/products';

import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() productItem: Products

  constructor(private msg : MessengerService) { }

  ngOnInit(): void {
  }

  handleAddTocart(){
    this.msg.sendMsg(this.productItem)
  
  }

}
