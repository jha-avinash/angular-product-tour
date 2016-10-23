 import {Component} from '@angular/core';
 import {RouterModule} from '@angular/router';
// import {ProductsComponent} from './products.component';


 @Component({
     selector: 'my-app',
     template:`
     <h1>{{title}}</h1>
     <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink ="/products" routerLinkActive="active">Products</a>
     </nav>
     <router-outlet></router-outlet>
    `,
    styleUrls: [ './app/CSS/app.component.css' ]
 })

 export class AppComponent{
     title = 'Product Tour';
 }