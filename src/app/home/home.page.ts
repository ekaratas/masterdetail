import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ad: string;
  soyad: string;

  constructor(public alertController:AlertController, public router: Router, public toastController: ToastController) {}

  async presentToast(mesaj) {
    const toast = await this.toastController.create({
      message: mesaj,
      position: 'top',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async bilgiGoster() {
    const alert = await this.alertController.create({
      header: 'Bilgi Girişi!',
      inputs: [
        {
          name: 'ad',
          type: 'text',
          value: this.ad,
          placeholder: 'adınızı giriniz'
        },
        {
          name: 'soyad',
          type: 'text',
          value: this.soyad,
          placeholder: 'soyadınızı giriniz'
        },
      ],
      buttons: [
        {
          text: 'Vazgeç',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Tamam',
          handler: veri => {
            console.log('Confirm Ok');
            this.ad = veri.ad;
            this.soyad = veri.soyad;
            this.presentToast('Kayıt Eklendi !');
          }
        }
      ]
    });

    await alert.present();
  }


  tamam(){
    this.presentToast('Merhaba ' + this.ad + ' ' + this.soyad);
  }

  git()
  {
    this.router.navigate(['/detay',{ad:this.ad, soyad:this.soyad }]);
  }

}
