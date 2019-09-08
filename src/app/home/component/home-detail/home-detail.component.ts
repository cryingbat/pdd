import { Component, OnInit, Inject } from "@angular/core";
import { Channel, ImageSlider } from 'src/app/shared/component';
import { HomeService } from '../../service';

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"]
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.imageSliders = this.service.getImageSlider();
    this.channels = this.service.getChannels();
  }
}
