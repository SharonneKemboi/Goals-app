import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();
  form: any;
  
  submitGoal(){
    this.addGoal.emit(this.newGoal);
    
    
    }
    resetForm(value: undefined ): void{
      this.form.reset(value);
      (this as unknown as{submiited: boolean}) .submiited=false;
 
  }

  constructor() { }

  ngOnInit() {
  }

}

function resetForm(value: any, arg1: undefined) {
  throw new Error('Function not implemented.');
}


function value(value: any, arg1: undefined) {
  throw new Error('Function not implemented.');
}
