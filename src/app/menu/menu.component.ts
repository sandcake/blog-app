import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  active = 'list';

  constructor() { }

  ngOnInit() {
  }

  getActive(value: string): boolean {
    return value === this.active;
  }

  setActive(value: string): void {
    this.active = value;
  }

}
