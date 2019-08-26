import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface TopMenu {
  title: string,
  link?: string
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1;

  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: string = '#fff'; 
  @Output() TabSelected = new EventEmitter();

  handleSelection(index: number): void {
    this.selectedIndex = index;
    this.TabSelected.emit(this.menus[this.selectedIndex]);
  }

  constructor() { }

  ngOnInit() {
  }
}
