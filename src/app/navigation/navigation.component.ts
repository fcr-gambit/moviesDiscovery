import { Component, OnInit } from '@angular/core';
import {animationmenu} from '../animations/animation-menu';


@Component({
  selector: 'md-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [animationmenu]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
