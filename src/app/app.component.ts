import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';

    employeeArray = [
      {id:1,name:"leonardo", position: "manager", email:'leonardo@hotmail.com'},
      {id:2,name:"pedro", position: "designer", email:'pedro@hotmail.com'},
      {id:3,name:"juan", position: "programmer", email:'juan@hotmail.com'}
    ];

    model:any = {};
    model2:any = {};
    hideUpdate:boolean = true;

    addemployee():void{
       this.model.id = this.employeeArray.length + 1 ;
       this.employeeArray.push(this.model);
       this.model = {};
    }

    deleteEmployee(i):void {
      if(confirm('are you sure you want delete it')){
        this.employeeArray.splice(i, 1);
      }

    }
    myValue;
    editEmployee(i):void {
      this.model2.id = this.employeeArray[i].id;
      this.model2.name = this.employeeArray[i].name;
      this.model2.position = this.employeeArray[i].position;
      this.model2.email = this.employeeArray[i].email;
      this.myValue = i ;
    }

    updateemployee(){
      
    }
}
