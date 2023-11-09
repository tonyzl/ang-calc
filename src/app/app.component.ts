import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-calc';

  calcValue:number=0;
  funcT:any='NoFunction';

  calcNumber: string='noValue';

  firstNumber:number=0;
  secondNumber:number=0;

  onClickValue(val:string, type:any){
    if (type== 'number'){
      this.onNumberClick(val);
    }
    else if (type == 'function'){
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val:string){
    if(this.calcNumber != 'noValue'){
      this.calcNumber=this.calcNumber+val;
    }
    else{
      this.calcNumber=val;
    }
    this.calcValue=parseFloat(this.calcNumber);
  }

  onFunctionClick(val:string){

    //call the clear all method when click the C Function
    if (val=='c'){
      this.clearAll();
    }
    else if (this.funcT=='NoFunction'){
      this.firstNumber=this.calcValue;
      this.calcValue=0;
      this.calcNumber='noValue';
      this.funcT=val;
    }
    else if(this.funcT!='Nofunction'){
      this.secondNumber=this.calcValue;
      //get the result
      this.valueCalculate(val);
    }
  }

  valueCalculate(val:string){
    if(this.funcT=='+'){
    const Total=this.firstNumber+this.secondNumber
    this.totalAsignValues(Total,val);
    }
    if(this.funcT=='-'){
    const Total=this.firstNumber-this.secondNumber
    this.totalAsignValues(Total,val);
    }
    if(this.funcT=='*'){
    const Total=this.firstNumber*this.secondNumber
    this.totalAsignValues(Total,val);
    }
    if(this.funcT=='/'){
    const Total=this.firstNumber/this.secondNumber
    this.totalAsignValues(Total,val);

    }
    if(this.funcT=='%'){
    const Total=this.firstNumber%this.secondNumber
    this.totalAsignValues(Total,val);
    }

  }
 
  totalAsignValues(Total:number,val:string) {
  this.calcValue=Total;
  this.firstNumber=Total;
  this.secondNumber=0;
  this.calcNumber='novalue'
  this.funcT=val;
  if (val=='='){this.onEqualPress()}
  }

  onEqualPress(){
  this.firstNumber=0;
  this.secondNumber=0;
  this.funcT='NoFunction';
  this.calcNumber='noValue'
  }

  clearAll(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.calcValue=0;
    this.funcT='NoFunction';
    this.calcNumber='noValue';
  }

}
