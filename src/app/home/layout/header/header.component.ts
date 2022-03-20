import { Component, OnInit } from '@angular/core';
import { NavList } from 'src/app/core/constants/constants';
import { Nav } from 'src/app/core/models/nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navList: Nav[] = NavList;
  constructor() { }

  ngOnInit(): void {
  }

}
