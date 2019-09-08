import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { TopMenu } from 'src/app/shared/component';
import { HomeService, token } from '../../service';

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.css"]
})
export class HomeContainerComponent implements OnInit {
  menus: TopMenu[] = [];  

  constructor(private router: Router, private service: HomeService,
    @Inject(token) private baseUrl: string ) {
  }
  
  ngOnInit() {
    this.menus = this.service.getMenus();
    console.log(this.baseUrl);
  }

  handleSelected(topMenu: TopMenu) {
    console.log(topMenu);
    this.router.navigate(["home", topMenu.link]);
  }
}
