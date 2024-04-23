import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  // const config: sql.config = {
  //   server: 'travel-tracker-server.database.windows.net',
  //   database: 'TravelTracker',
  //   user: 'bocchial',
  //   password: 'Zakumi01@',
  //   options: {
  //     encrypt: true, // Enable encryption if needed
  //   },
  // };
}
