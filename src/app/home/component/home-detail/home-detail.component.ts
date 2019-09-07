import { Component, OnInit } from "@angular/core";
import { Channel, ImageSlider } from 'src/app/shared/component';

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"]
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = [{
    imgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1566609936&di=bc9ea510f76326c1119545c9ab3ab8e2&src=http://i1.17173.itc.cn/2009/kx/2009/06/16/20090616171420490.jpg',
    link: '',
    caption: '1'
  },{
    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566620027015&di=9719e047a07d7460701f0fcd05e08f28&imgtype=0&src=http%3A%2F%2Fpic.k73.com%2Fup%2Fsoft%2F2016%2F0102%2F092635_44907394.jpg',
    link: '',
    caption: '1'
  },{
    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566620027015&di=f6e13a766e448c320f5f9ef2940fdf91&imgtype=0&src=http%3A%2F%2Fwww.sx198.com%2Fp%2F84%2Fimage%2F201611%2F1479608859183678447.gif',
    link: '',
    caption: '1'
  }]
  channels: Channel[] = [
    {
      id: 1,
      icon: "../../../../assets/images/1.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 2,
      icon: "../../../../assets/images/2.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 3,
      icon: "../../../../assets/images/3.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 4,
      icon: "../../../../assets/images/4.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 5,
      icon: "../../../../assets/images/5.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 6,
      icon: "../../../../assets/images/6.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 7,
      icon: "../../../../assets/images/7.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 8,
      icon: "../../../../assets/images/8.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 9,
      icon: "../../../../assets/images/9.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 10,
      icon: "../../../../assets/images/10.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 11,
      icon: "../../../../assets/images/11.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 12,
      icon: "../../../../assets/images/12.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 13,
      icon: "../../../../assets/images/7.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 14,
      icon: "../../../../assets/images/8.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 15,
      icon: "../../../../assets/images/9.png",
      title: "限时秒杀",
      link: ""
    },
    {
      id: 16,
      icon: "../../../../assets/images/10.png",
      title: "限时秒杀",
      link: ""
    }
  ];
  constructor() {}

  ngOnInit() {}
}
