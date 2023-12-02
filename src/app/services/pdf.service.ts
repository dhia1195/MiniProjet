import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private pdfUrl = 'http://localhost:8081/api/pdf/generate'; 

  constructor(private http: HttpClient) {}

  generatePDF(): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.http.get(this.pdfUrl, { responseType: 'blob', headers: headers });
  }
}
