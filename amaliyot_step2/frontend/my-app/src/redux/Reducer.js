import { createStore } from 'redux'
const initalState = {
    savatcha: []

}

const Reduser = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            let Savat = state.savatcha;
            Savat.push(action.payload)
            return { ...state, savatcha: Savat }
        case "DEL_CARD":
            const DelSavat = state.savatcha.filter(value => {
                return value.id !== action.payload.id;
            });
            return { ...state, savatcha: DelSavat };
        case "DEL_ALL":
            const DelAll = [];
            return { ...state, savatcha: DelAll };
        default:
            break;
    }
}
const store = createStore(Reduser)

export default store;