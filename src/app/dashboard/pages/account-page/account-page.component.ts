import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styles: [
  ]
})
export class AccountPageComponent implements OnInit {
  user?: User;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
  }
}
