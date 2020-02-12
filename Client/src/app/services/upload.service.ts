import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  constructor(private http: HttpClient) { }

  sendData(files: File[]) {
    const formData = new FormData();
    files.forEach(element => formData.append('files', element));
    return this.http.post(`${environment.baseUrl}uploadfiles`, formData);
  }
}
