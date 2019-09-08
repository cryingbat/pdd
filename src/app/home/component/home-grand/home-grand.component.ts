import { Component, OnInit, Injectable, Inject, Injector, InjectionToken } from "@angular/core";
import { tokenName } from '@angular/compiler';

// @Injectable() // 表示可依赖注入
// class Product {
//   constructor(private pro: Product) {}
// }

// @Injectable()
// class PurchaseOrder{
//   private amount : number;
//   constructor(private product: Product) {

//   }
// }
@Component({
  selector: "app-home-grand",
  templateUrl: "./home-grand.component.html",
  styleUrls: ["./home-grand.component.css"]
})
export class HomeGrandComponent implements OnInit {
  // token = new InjectionToken<string>('baseUrl');
  constructor() {}

  ngOnInit() {
    // 练习自定义依赖注入
    // const injector = Injector.create({
    //   providers: [{
    //     provide: Product,
    //     useClass: Product,
    //     deps: []  //依赖的其他东西
    //   },{
    //     provide: PurchaseOrder,
    //     useClass: PurchaseOrder,
    //     deps: [Product]
    //   },{
    //     provide: this.token,
    //     useValue: 'htto://localhost'
    //   }]
    // })
    // console.log(injector.get('this.token'))
  }
}
