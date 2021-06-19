import {Dispatch} from 'redux';
import {IpeopleState} from '../interfaces/people_interface'
import {NEXT_PAGE} from '../constants/constants';




export const getPages = (people:IpeopleState['people'], 
                         pageNo:IpeopleState['pageNo'], 
                         person:IpeopleState['person'], 
                         showSearch:IpeopleState['showSearch']) => (dispatch:Dispatch) => {

    dispatch({
        type:NEXT_PAGE, 
        payload: {
            people, 
            pageNo,
            person,
            showSearch
            
        }
    })
};

