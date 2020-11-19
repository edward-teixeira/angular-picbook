import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  isShown = false;

  constructor() { }

  ngOnInit(): void { }

  toggle() {
    this.isShown = !this.isShown;
}
}
