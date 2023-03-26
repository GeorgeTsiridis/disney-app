import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { DisneyApiService } from './disney-api/disney-api.service';
import { MovieDetails } from '../model/movie-details.model';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<MovieDetails> {
  constructor(private disneyApiService: DisneyApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.disneyApiService.findById(id).pipe(
        catchError(() => {
            this.router.navigate(['error']);
          return of();
        }),
        map((movie: HttpResponse<MovieDetails>) => movie)
      );
    }
    return of();
  }
}
