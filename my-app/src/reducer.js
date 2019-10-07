const SET_MAX_VALUE= 'SET_MAX_VALUE';
const SET_MIN_VALUE = 'SET_MIN_VALUE';
const SET_START_VALUE ='SET_START_VALUE';
const SET_VALUE ='SET_VALUE';
const SET_RESET ='SET_RESET';
const CLICK_PLUS = 'CLICK_PLUS';
const CLICK_MINUS = 'CLICK_MINUS';
const CHANGE_START_VALUES = 'CHANGE_START_VALUES';



const initialState = {
        tasks: [
            {action: 'Плюс',},
            {action: 'Минус'},
        ],
        count: 0,
        countStart: 0,
        lowLimit: 0,
        highLimit: 0,
        editMode: false,
        counterEditMode: true

};

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_MAX_VALUE:
            return {
                ...state,
                highLimit: action.highLimit,
            };
        case SET_MIN_VALUE:
            return {
                ...state,
                lowLimit: action.lowLimit,
            };
        case SET_START_VALUE:
            return {
                ...state,
                count: action.count,
            };
        case SET_VALUE:
            return {
                ...state,
                editMode: true,
                counterEditMode: false,
                countStart: state.count
            };
        case CLICK_PLUS:
            return {
                ...state,
                countStart: state.countStart + 1
            };

        case CLICK_MINUS:
            return {
                ...state,
                countStart: state.countStart -1
            };
        case SET_RESET:
            return {
                ...state,
                countStart: state.count
            };
        case CHANGE_START_VALUES:
            return {
                ...state,
                counterEditMode: true,
                editMode: false
            };
    }
    return state;
};

export const setMaxValueAC = (highLimit)=> {
    return {
        type:SET_MAX_VALUE,
        highLimit
    }
};
export const setMinValueAC = (lowLimit)=> {
    return {
        type:SET_MIN_VALUE,
        lowLimit
    }
};
export const setStartValueAC = (count)=> {
    return {
        type:SET_START_VALUE,
        count
    }
};
export const setValueAC = ()=> {
    return {
        type:SET_VALUE,
    }
};
export const clickPlusAC = ()=> {
    return {
        type:CLICK_PLUS,
    }
};

export const clickMinusAC = ()=> {
    return {
        type:CLICK_MINUS,
    }
};

export const setResetAC = ()=> {
    return {
        type:SET_RESET,
    }
};
export const changeStartValuesAC = ()=> {
    return {
        type:CHANGE_START_VALUES,
    }
};



export default reducer;