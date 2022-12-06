import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { RandomiserService } from './service/randomiser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'randomiser';
  timer = 0; // seconds
  intervalId = 0;
  subscribeTimer: any;
  public number:any;
   Severate: any;

  constructor(private randomiserService: RandomiserService) {}

  ngOnInit(): void {
    this.Severate = new FormGroup({
      number: new FormControl('')
    });
  }
  get hours() {
    return Math.floor(this.timer / 3600);
  }

  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    return this.timer % 60;
  }

  start() {
    if (!this.intervalId)
      this.intervalId = window.setInterval(() => this.timer++, 1000);
  }

  stop() {
    if (this.intervalId) {
      console.log(this.intervalId);
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }

  public submitForm(data: any) {
    this.start();
    this.randomiserService
      .submitRandomiser(data.number)
      .subscribe((data: any) => {
        Swal.fire({
          title: this.hours+":"+this.minutes+":"+this.seconds,
          text: 'Unique codes genarated successfully',
          icon: 'success',
        })
        this.stop();
      });
  }
}
