import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  private dataUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your data API endpoint


  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
