import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './modules/portifolio/pages/home/home.component';
import { AboutComponent } from './modules/portifolio/pages/about/about.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ptf';
}
