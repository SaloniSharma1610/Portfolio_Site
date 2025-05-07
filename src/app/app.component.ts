import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import * as AOS from 'aos';
import { FooterComponent } from '../components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent,FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'port';

  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false      // Animates only once while scrolling down
    });
}
}