import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo-comment';
import { AlertService } from '../../shared/components/alerts/alert.service';
import { UserService } from '../../core/user/user.service';

@Component({
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.css']
})
export class PhotoDetailComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {

   }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.id;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {}, err => {
      console.log(err);
      this.router.navigate(['not-found']);
    })

   }

   remove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo Removed', true);
        this.router.navigate(['/user', this.userService.getUserName]);
      },
      err => {
        this.alertService.danger('Photo not removed', true);
      });
   }

   like(photo: Photo) {
    this.photoService
      .like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      });
   }
}
