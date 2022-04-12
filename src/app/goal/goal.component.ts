import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service'; /**we import the GoalService */
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService]

})

export class GoalComponent implements OnInit {


  
  /**We removed our list of goalsfrom here and stored it in goalList */

  goals:Goal[]; /* property goals and assign it a type*/
  quote!: Quote;
  constructor(goalService:GoalService, private http:HttpClient, private quoteService:QuoteRequestService) {  /**we use the getGoals() method of the goal service*/
    this.goals=goalService.getGoals()
   } 
   
    addNewGoal(goal :any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }  completeGoal(isComplete: any, index: any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete: any, index: | number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)     
       if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  
  
  ngOnInit(): void {

    this.quoteService.quoteRequest()
      this.quote = this.quoteService.quote

      
    interface ApiResponse{
      author:string;
      quote:string;

      
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    },err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
  }}