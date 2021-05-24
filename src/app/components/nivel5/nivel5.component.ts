import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivel5',
  templateUrl: './nivel5.component.html',
  styleUrls: ['./nivel5.component.scss'],
})
export class Nivel5Component implements OnInit {

  
  ocultarp1:boolean=false;
  ocultarp2:boolean=false;
  ocultarp3:boolean=false;
  ocultarp4:boolean=false;
  ocultarp5:boolean=false;
  total:number=0;
  monedas:number=3;
  timeLeft: number = 75;
  interval;

  buttonColor1: string = 'primary';
  buttonColor2: string = 'primary';
  buttonColor3: string = 'primary';
  buttonColor4: string = 'primary';
  buttonColor5: string = 'primary';
  buttonColor6: string = 'primary';
  buttonColor7: string = 'primary';
  buttonColor8: string = 'primary';
  buttonColor9: string = 'primary';
  buttonColor10: string = 'primary';
  buttonColor11: string = 'primary';
  buttonColor12: string = 'primary';
  buttonColor13: string = 'primary';
  buttonColor14: string = 'primary';
  buttonColor15: string = 'primary';
  buttonColor16: string = 'primary';
  buttonColor17: string = 'primary';
  buttonColor18: string = 'primary';
  buttonColor19: string = 'primary';
  buttonColor20: string = 'primary';
  
  mostrarN1P1:boolean=true;
  mostrarN1P2:boolean;
  mostrarN1P3:boolean;
  mostrarN1P4:boolean;
  mostrarN1P5:boolean;
  mostrarN1R1:boolean;
  mostrarN1R2:boolean;
  mostrarN1R3:boolean;
  mostrarN1R4:boolean;
  mostrarN1R5:boolean;
  

  constructor() { 
    this.mostrarN1P2=false;
    this.mostrarN1P3=false;
    this.mostrarN1P4=false;
    this.mostrarN1P5=false;
    this.mostrarN1R1=false;
    this.mostrarN1R2=false;
    this.mostrarN1R3=false;
    this.mostrarN1R4=false;
    this.mostrarN1R5=false;
    this.startTimer();
  }

  ngOnInit() {
  
  }
  
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
    },1000)
  }

}
