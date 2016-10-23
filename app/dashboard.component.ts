import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Product} from './product';
import {ProductService} from './product.service';
@Component({
    moduleId: module.id,
    selector : 'my-dashboard',
    templateUrl : '/app/product-component/dashboard.component.html',
    styleUrls: [ '/app/CSS/dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {

    products : Product[] = [];
    constructor(private  productservice : ProductService,
                private router : Router
    ){}

    ngOnInit():void {
        this.productservice.getProducts()
        .then(products => this.products = products.slice(1,5));
    }
    gotoDetail(product : Product):void {
        let link = ['/detail', product.id];
        this.router.navigate(link);  
    }

}