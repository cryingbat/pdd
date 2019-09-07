import { Component, OnInit } from "@angular/core";
import { TopMenu } from "src/app/shared/component";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.css"]
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  menus: TopMenu[] = [
    {
      title: "热门",
      link: "hot"
    },
    {
      title: "男装",
      link: "man"
    },
    {
      title: "食品",
      link: "eat"
    },
    {
      title: "手机",
      link: "phone"
    },
    {
      title: "电脑",
      link: "pc"
    },
    {
      title: "鞋包",
      link: "shot"
    },
    {
      title: "女装",
      link: "women"
    },
    {
      title: "运动",
      link: "sport"
    },
    {
      title: "电器",
      link: "elec"
    },
    {
      title: "百货",
      link: "product"
    },
    {
      title: "汽车",
      link: "car"
    },
    {
      title: "水果",
      link: "friut"
    },
    {
      title: "内衣",
      link: "Underwear"
    },
    {
      title: "家装",
      link: "homefix"
    }
  ];

  handleSelected(topMenu: TopMenu) {
    console.log(topMenu);
    this.router.navigate(["home", topMenu.link]);
  }
}
