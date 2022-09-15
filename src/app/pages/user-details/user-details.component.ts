import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { IUserData } from 'src/app/shared/Interface/IUserData';
import { OnboardingService } from 'src/app/shared/services/onboarding/onboarding.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private userServiceSub: Subscription = new Subscription;
  userData: any;
  userDetailsForm!: FormGroup;
  id!: number;
  isShowEditForm = false;

  constructor(private _onboardingService: OnboardingService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.getUserById(id);

    this.initUserDetails();

  }


  initUserDetails(): void {
    this.userDetailsForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  private getUserById(id: number) {
    try {
      this.userServiceSub = this._onboardingService.getUserById(id).subscribe((res) => {
        if (res.status == 200) {
          this.userData = res.body?.data;
        } else {
          alert("Info: Could be network");
        }
      })
    } catch (error) {
      alert("Error: Please try again");
    }
  }

  public onClick() {
    console.log('method called');
    alert("Edit Successful, this would have been sent to the BE service")

  }


  protected editUser(payload: IUserData) {
    this.isShowEditForm = true;
    try {
      if (payload) {
        this.userDetailsForm.patchValue({
          email: payload.email,
          firstName: payload.first_name,
          lastName: payload.last_name
        });
      }
    } catch {
      alert("Error");
    }

  }

  ngOnDestroy() {
    if (this.userServiceSub) {
      this.userServiceSub.unsubscribe();
    }
  }

}
