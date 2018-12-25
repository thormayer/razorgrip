import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  city;
  lng;
  lat;

  constructor(private service: AppService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCityCode();
  }

  back(){
    this.router.navigate(['main'])
  }

  getCityCode(){
    this.activeRoute.params.subscribe(p => {
      this.getCityByCityCode(p.id);
    })
  }

  getCityByCityCode(code){
    this.service.getCityByAbbrv(code).subscribe((data)=>{
      this.city = data[0];
      this.service.getlatlng(this.city.City).subscribe((geo: any)=> {
        console.log('geo', geo.results[0].geometry.location);
        this.lat = geo.results[0].geometry.location.lat;
        this.lng = geo.results[0].geometry.location.lng;
      });
    })
  }

}
