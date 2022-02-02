import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/homeservice/home.service';

@Component({
  selector: 'app-allproparty',
  templateUrl: './allproparty.component.html',
  styleUrls: ['./allproparty.component.css']
})
export class AllpropartyComponent implements OnInit {

  constructor(public home:HomeService) {
 

    this.home.getallProparty();

   }

  ngOnInit(): void {
  }

}
