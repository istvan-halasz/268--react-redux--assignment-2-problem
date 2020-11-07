import * as actionTypes from '../actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDPERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: action.age
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETEPERSON:
            const updatedPersonsArray = state.persons.filter(person => person.id !== action.personId);
            return {
                ...state,
                persons: updatedPersonsArray
            }
    }
    return state;
};

export default reducer;