import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiattiService {
  private apiUrl = 'http://localhost:4200/api/piatti'; 

  constructor(private http: HttpClient) {}

  getPiatti(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/api/piatti/list");
  }

  addPiatto(piatto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, piatto);
  }

  updatePiatto(id: number, piatto: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, piatto);
  }

  deletePiatto(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
