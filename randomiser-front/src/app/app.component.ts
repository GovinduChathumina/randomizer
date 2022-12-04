import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { RandomiserService } from './service/randomiser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'randomiser';
  timeLeft: number = 0;
  interval: any;
  subscribeTimer: any;

  constructor(private randomiserService: RandomiserService) {}

  oberserableTimer() {
    const source = timer(1000, 1);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft + val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit(): void {}

  public submitForm(data: any) {
    this.startTimer();
    this.randomiserService
      .submitRandomiser(data.number)
      .subscribe((data: any) => {
        console.log(data);
        this.pauseTimer();
      });
  }
}
