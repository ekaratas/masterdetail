import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {

  oncekiSayfadanAd: string
  oncekiSayfadanSoyad: string

  constructor(public activatedRoute:ActivatedRoute) { 
    this.verial();
  }

  ngOnInit() {

  }

  verial()
  {
this.oncekiSayfadanAd = this.activatedRoute.snapshot.paramMap.get('ad');
this.oncekiSayfadanSoyad = this.activatedRoute.snapshot.paramMap.get('soyad');
  }

}
