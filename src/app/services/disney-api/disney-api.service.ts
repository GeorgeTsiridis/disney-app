import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisneyApiService {

  constructor(
    private http: HttpClient
  ) { }

  public findById(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${apiUrl}/characters/${id}`);
  }

  getCharacters(page: number, pageSize: number): Observable<any> {
    const skip = page / pageSize;
    return this.http.get<any[]>(`${apiUrl}/characters?pageSize=${pageSize}&page=${skip}`);
  }

  filterCharacter(name: string): Observable<any> {
    return this.http.get<any[]>(`${apiUrl}/character?name=${name}`);
  }
}
