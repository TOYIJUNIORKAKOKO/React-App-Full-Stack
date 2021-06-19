import {Reducer} from 'redux';
import {IpeopleState, intitValues, Action} from '../interfaces/people_interface';
import {NEXT_PAGE} from '../constants/constants';



const peopleReducer:Reducer<IpeopleState, Action> = (state = intitValues, action) => {
    switch (action.type) {
        case NEXT_PAGE:
           return { 
               people: action.payload.people, 
               pageNo:action.payload.pageNo, 
               person:action.payload.person,
               showSearch: action.payload.showSearch
            };
        default:
           return state; 
    }
}

export default peopleReducer