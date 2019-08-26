import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './shared/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdd';
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
  menus: TopMenu[] = [{
    title: '热门',
    link: ""
  }, {
    title: '男装',
    link: ""
  }, {
    title: '食品',
    link: ""
  }, {
    title: '手机',
    link: ""
  }, {
    title: '电脑',
    link: ""
  }, {
    title: '鞋包',
    link: ""
  }, {
    title: '女装',
    link: ""
  }, {
    title: '运动',
    link: ""
  }, {
    title: '电器',
    link: ""
  }, {
    title: '百货',
    link: ""
  }, {
    title: '汽车',
    link: ""
  }, {
    title: '水果',
    link: ""
  }, {
    title: '内衣',
    link: ""
  }, {
    title: '家装',
    link: ""
  }];

  handleSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
}
