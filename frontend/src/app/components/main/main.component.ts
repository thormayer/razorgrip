import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  list = [];
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.getAllCities();
  }

  getAllCities(){
    this.service.getAllCities().subscribe((data: any)=> {
      this.list = data;
    })
  }

  searchPress(e){
    let term = e.target.value;
    if(!this.isEmpty(term)){
      this.service.getCityByAbbrv(term).subscribe((data:any)=> {
        this.list = data;
      })
    }
  }

  selectCity(cityCode){
    this.router.navigate(['city', cityCode]);
  }

  isEmpty(str){
    return str === '' ? true: false;
  }
}
