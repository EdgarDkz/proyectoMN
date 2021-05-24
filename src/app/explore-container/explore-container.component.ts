import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Nivel1Component } from '../components/nivel1/nivel1.component';
import { Nivel2Component } from '../components/nivel2/nivel2.component';
import { Nivel3Component } from '../components/nivel3/nivel3.component';
import { Nivel4Component } from '../components/nivel4/nivel4.component';
import { Nivel5Component } from '../components/nivel5/nivel5.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}


  async nivel1() {
    const modal = await this.modalController.create({
      component: Nivel1Component
    });
    return await modal.present();
  }

  async nivel2() {
    const modal = await this.modalController.create({
      component: Nivel2Component
    });
    return await modal.present();
  }

  async nivel3() {
    const modal = await this.modalController.create({
      component: Nivel3Component
    });
    return await modal.present();
  }

  async nivel4() {
    const modal = await this.modalController.create({
      component: Nivel4Component
    });
    return await modal.present();
  }

  async nivel5() {
    const modal = await this.modalController.create({
      component: Nivel5Component
    });
    return await modal.present();
  }


}
