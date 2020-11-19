import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/components/alerts/alert.service';
import { UserService } from '../../core/user/user.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(30)],
      allowComments: [true]
    });
  }

  upload() {
    const  { description, allowComments } = this.photoForm.value;
    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUserName]);
      }))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentDone = Math.round(100 * (event.loaded / event.total));
          } else if (event.type === HttpEventType.Response) {
            this.alertService.success('Upload Complete', true);
          }
        },
        (err) => {
          console.log(err);
          this.alertService.danger('Upload failed', true);
        },
      );
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
