import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
export interface ImageSlider {
  imgUrl: string,
  link: string,
  caption: string
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = []
  @Input() sliderHeight = "160px"
  @Input() scrollByseconds = 2;
  @ViewChild("imageSlider", { static: true }) imageSlider: ElementRef
  // {static: true} 包含在ngfor下是动态的，就是false
  // 实现自定义渲染器Renderer2

  selectedIndex = 0;
  intervalId = null;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // console.log("init", this.imageSlider)
  }
  ngAfterContentInit(): void {
    let i = 0;
    this.intervalId = setInterval(() => {
      this.renderer.setProperty(
        this.imageSlider.nativeElement, 
        "scrollLeft", 
        (this.getIndex(++this.selectedIndex)) * this.imageSlider.nativeElement.scrollWidth / this.sliders.length)
    }, this.scrollByseconds * 1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  getIndex(idx:number):number {
    return idx > 0 ? idx %  this.sliders.length 
           : this.sliders.length - Math.abs(idx) %  this.sliders.length 
  }
  handleScroll(ev) {
    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
}
