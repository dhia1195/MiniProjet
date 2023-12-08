import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrl = environment.apiUrl;
  private pdfUrl = `${this.apiUrl}/api/pdf/generate`;

  constructor(private http: HttpClient) {}

  generatePDF(): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.http.get(this.pdfUrl, { responseType: 'blob', headers: headers });
  }
}
