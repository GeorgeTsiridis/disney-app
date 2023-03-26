import { createAction, props } from "@ngrx/store";
import { CharacterParams } from "src/app/models/character-params";
import { CharacterResponse } from "src/app/models/character-response";

enum CharacterActionType {
  Loading = "[Character] Loading",
  LoadCharactersSuccess = "[Character] Loaded Success",
  loadCharactersFailure = "[Character] Loaded Failure",
}

export const loadingCharacters = createAction(
  CharacterActionType.Loading,
  props<{ params: CharacterParams }>()
);

export const loadCharactersSuccess = createAction(
  CharacterActionType.LoadCharactersSuccess,
  props<{ response: CharacterResponse }>()
);

export const loadCharactersFailure = createAction(
  CharacterActionType.loadCharactersFailure,
  props<{ error: any }>()
);
