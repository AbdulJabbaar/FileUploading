import { UploadService } from './services/upload.service';
import { Component, ViewChild } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  dropzone: any;
  files: any[] = [];

  config: DropzoneConfigInterface = {
    url: `${environment.baseUrl}uploadfiles`,
    autoProcessQueue: false,
    autoQueue: false,
    maxFiles: 10,
    clickable: true,
    acceptedFiles: 'image/*'
  };

  constructor(private uploadService: UploadService) { }

  nationalDropZoneInit(arg: any): void {
    this.dropzone = arg;
  }

  uploadFiles() {
    this.files = [];
    this.dropzone.files.forEach(element => {
      this.files.push(element);
    });

    this.uploadService.sendData(this.files).subscribe(res => {
      console.log('res', res);
    },
      error => {
        console.log(error);
      });
  }
}
