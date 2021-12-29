import produce from 'immer';

export default function reserve(state = [], action) {

  switch (action.type) {
    case 'add_reserve':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

        console.log('index', tripIndex)

        if (tripIndex >= 0) {
          draft[tripIndex].amount++;
        } else {
          draft.push({
            ...action.trip,
            amount: 1,
          })
        }

      });
    case 'remove_reserve':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);
        draft.splice(tripIndex, 1)
        
      })
    case 'update_reserve': {
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

      if (action.amount > 0) {
        draft[tripIndex].amount = Number(action.amount)
      } else {
        draft.splice(tripIndex, 1)
      }

      })
    }

    default: 
      return state;
  }

}

// export default function reserve(state = [], action) {

//   switch (action.type) {
//     case 'add_reserve':
//       return [...state, {
//         ...action.trip,
//         amount: 1,
//       }];
//     default: 
//       return state;
//   }

// }
