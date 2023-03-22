import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Piloti } from './piloti.model';

@Component({
  selector: 'app-piloti',
  templateUrl: './piloti.component.html',
  styleUrls: ['./piloti.component.css']
})
export class PilotiComponent implements OnInit{
  @Input() piloti:Piloti;

  constructor() {
  }

  ngOnInit() {}

}
