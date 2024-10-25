import { Component, OnInit } from '@angular/core';

import { faCoffee,faGear,faMagnifyingGlass,faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  faCoffee = faCoffee;
  faGear = faGear;
  faMagnifyingGlass=faMagnifyingGlass;
  faHeartCirclePlus = faHeartCirclePlus;

  ngOnInit(): void {
  }

}
