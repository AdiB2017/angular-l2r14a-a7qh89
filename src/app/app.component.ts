import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Tower';
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  reportlistmalfunctioning():void
  {
    alert("This is the list of malfunctioning sensors");
    
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  
    var i:number;
    for (i=0;i<10000;i++)
    {
      var temp1 = this.heroes[i].tempvalue;
      var side1 = this.heroes[i].face;
      var j:number;
      var sumtemp:number = 0;
      var Ntemp:number =0;
      for (j=0;j<10000;j++)
      {
        var temp2 = this.heroes[j].tempvalue;
        var side2 = this.heroes[j].face;
        if (side2===side1)
        {
          if (temp2!=temp1)
          {
          sumtemp = sumtemp+temp2;
          Ntemp++;
          }
        }
      }
      if (Ntemp>=2000)
      {
        /*
        alert("Sensor "+i+" malfunction , averege="+
        sumtemp/Ntemp+",");
        */
      }
    }

  }
  reporthourlyforpastweek():void
  {
    alert("This is report hourly for past week");

    var i:number;
    for (i=0;i<10000;i++)
    {
      var temp1 = this.heroes[i].tempvalue;
      var side1 = this.heroes[i].face;
      var time1 = this.heroes[i].time; 
      var timenow = 1600000; // date(); 
      var sumsouth:number = 0;
      var Nsouth:number=0;
      var sumeast:number = 0;
      var Neast:number=0;
      var sumnorth:number = 0;
      var Nnorth:number=0;
      var sumwest:number = 0;
      var Nwest:number=0;
      if ((time1>timenow-7*24*60*60*1000)&&(time1<timenow))
      {
       if (side1==="south")
       {
         sumsouth=sumsouth+temp1;
         Nsouth++;
       }
       else if (side1==="east")
       {
         sumeast=sumeast+temp1;
         Neast++;
       }
       else if (side1==="north")
       {
         sumnorth=sumnorth+temp1;
         Nnorth++;
       }
       else if (side1==="west")
       {
         sumwest=sumwest+temp1;
         Nwest++;
       }
      }
      /*
      alert("south average = "+sumsouth/Nsouth +
      "east avarage = "+sumeast/Neast+
      "north average = "+sumnorth/Nnorth+
      "west average = "+sumwest/Nwest);
      */
    }
  }
  ngOnInit(): void {
   
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/