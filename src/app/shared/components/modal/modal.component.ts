import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { IUserData } from '../../Interface/IUserData';
import { OnboardingService } from '../../services/onboarding/onboarding.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  userServiceSub: Subscription = new Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IUserData,
    private _dialogRef: MatDialogRef<ModalComponent>,
    private _onboardingService: OnboardingService) { }

  ngOnInit(): void {
  }

  public onCancel() {
    this._dialogRef.close();
  }

  protected deleteUserById(id: number) {
    try {
      this.userServiceSub = this._onboardingService.deleteUser(id).subscribe((res) => {
        if (res.status == 200) {
          alert('Delete Successful');
        } else {
          alert('Delete functionality was not implemented on the Docs');
        }
      })
    } catch (error) {
      alert("Erro: Please try again");
    }
  }

  ngOnDestroy() {
    if (this.userServiceSub) {
      this.userServiceSub.unsubscribe();
    }
  }

}
