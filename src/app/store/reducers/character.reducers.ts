
// import { characterAdapter, initialCharacterState } from "../states/customer.state";

// export const characterReducer = createReducer(
//   initialCharacterState,
//   on(character.loadingCharacters, (state) => ({ ...state, loading: true })),
//   on(character.loadCharactersSuccess, (state, { response }) =>
//     characterAdapter.setAll(response.characters, {
//       ...state,
//       error: false,
//       loading: false,
//       total: response.total,
//     })
//   ),
//   on(character.loadCharactersFailure, (state) =>
//     characterAdapter.removeAll({
//       ...state,
//       error: true,
//       loading: false,
//       total: 0,
//     })
//   )
// );
