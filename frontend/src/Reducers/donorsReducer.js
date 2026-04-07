import * as constants from '../Constants/donors';

export default function donorsReducer(state, action) {

    let newState = structuredClone(state ? state : []);
    let donor = null;

    switch (action.type) {
        case constants.GET_DONORS_FROM_SERVER:
            newState = action.payload;
            break;

        case constants.CREATE_DONOR:
            // Sukuriam laikiną donorą (su UUID kaip id)
             //console.log('Reduceris gavo CREATE_DONOR veiksmą:', action.payload);
            newState.unshift({ ...action.payload, temp: true });
           
            break;
            

        case constants.CREATE_DONOR_REAL:
            // Surandam donorą pagal jo laikiną id
            donor = newState.find(donor => donor.id === action.payload.id);
            if (donor) {
                donor.id = action.payload.donorId || action.payload.id;
                donor.temp = false;
                donor.name = action.payload.name;
                donor.amount = action.payload.amount;
                donor.story_id = action.payload.story_id;
                donor.date = action.payload.date;
            } 
            break;

        case constants.CREATE_DONOR_UNDO:
            newState = newState.filter(donor => donor.id !== action.payload.id);
            break;

        default:
    }

    return newState;
}