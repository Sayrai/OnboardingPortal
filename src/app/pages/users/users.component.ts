import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IUser } from 'src/app/shared/Interface/IUser';
import { IUserData } from 'src/app/shared/Interface/IUserData';
import { OnboardingService } from 'src/app/shared/services/onboarding/onboarding.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'actions'];
  dataSource = new MatTableDataSource<IUserData>();
  userServiceSub: Subscription = new Subscription;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private _onboardingService: OnboardingService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    try {
      this.userServiceSub = this._onboardingService.getAllUsers('2').subscribe((res) => {
        if (res.status == 200) {
          this.dataSource = new MatTableDataSource<IUserData>(res.body?.data);

          this.dataSource.paginator = this.paginator;
        }
      })
    } catch (error) {
      alert("Erro: Please try again");
    }
  }


  ngOnDestroy() {
    if (this.userServiceSub) { // if subscription exists, unsubscribe from it.
      this.userServiceSub.unsubscribe(); // unsubscribe or may cause memory leaks which makes app slower.
    }
  }

  openDialog(row: IUserData) {
    console.log(row)
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        width: '70%',
        maxWidth: '400px',
        height: 'auto',
        hasBackdrop: true,
        maxHeight: '700px',
        email: row.email,
        first_name: row.first_name,
        last_name: row.last_name,
        avatar: row.avatar,
      }

    });

  }
}


