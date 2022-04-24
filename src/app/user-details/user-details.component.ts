import { Component, OnInit } from '@angular/core';
import {obj} from '../../models/User'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user = obj;
  constructor() {
   }

  ngOnInit(): void {
  }

}
