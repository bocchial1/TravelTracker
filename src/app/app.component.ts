import { Component, Injectable, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  isLoggedIn: boolean = false;
  authService = inject(AuthServiceService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null)
      }
      console.log(this.authService.currentUserSig());
      
    });
  }

  // const config: sql.config = {
  //   server: 'travel-tracker-server.database.windows.net',
  //   database: 'TravelTracker',
  //   user: 'bocchial',
  //   password: 'Zakumi01@',
  //   options: {
  //     encrypt: true, // Enable encryption if needed
  //   },
  // };

  logout(): void {
    this.authService.logout();
  }


}
