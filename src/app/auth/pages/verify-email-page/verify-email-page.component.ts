import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { EmailResendFormComponent } from '../../components/email-resend-form/email-resend-form.component';

@Component({
    templateUrl: './verify-email-page.component.html',
    styles: [],
    imports: [RouterLink, MatProgressSpinner, EmailResendFormComponent]
})
export class VerifyEmailPageComponent implements OnInit {

  verificationStatus: 'verifying' | 'verified' | 'fail' | 'error' = 'verifying';

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({token}) => {
      this.verifyEmail(token);
    });
  }

  /**
   * Verifies the email of the user with the token provided
   * @param token The token to verify the email
   */
  verifyEmail(token: string): void {
    this.authService.verifyEmail(token)
      .subscribe({
        next: () => {
          this.verificationStatus = 'verified';
        },
        error: (err) => {
          if (err.status == 0) {
            this.verificationStatus = 'error';
            return;
          }
          this.verificationStatus = 'fail';
        }
      });
  }

}
