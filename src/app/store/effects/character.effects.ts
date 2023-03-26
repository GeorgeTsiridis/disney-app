import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError, of, Observable } from "rxjs";
import { CharacterParams } from "src/app/models/character-params";
import { CharacterResponse } from "src/app/models/character-response";
import { DisneyApiService } from "src/app/services/disney-api/disney-api.service";
import { loadCharactersFailure, loadCharactersSuccess, loadingCharacters } from "../actions/character.actions";

@Injectable()
export class CharacterEffects {
  constructor(private actions$: Actions, private service: DisneyApiService) {}

  public loadCharacter$ = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(loadingCharacters),
        switchMap((payload: { params: CharacterParams }) =>
          this.service.getCharacters(payload.params.pageIndex, payload.params.pageSize).pipe(
            map((response: CharacterResponse) =>
            loadCharactersSuccess({ response })
            ),
            catchError((error: HttpErrorResponse) =>
              of(loadCharactersFailure({ error }))
            )
          )
        )
      )
  );
}
