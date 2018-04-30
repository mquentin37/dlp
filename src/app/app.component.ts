import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading = true;

  ngOnInit(): void {
     setTimeout(() => {
      this.loading = false;
     },2000);
  }
}
