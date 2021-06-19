import {gql} from '@apollo/client';

export const GetAllpeople = gql`

        query{
            getPeople {  
            name
            height
            mass
            gender
            homeworld
            } 
            
        }



` 
export const getPeopleBypageNo = gql`

    query getPage ($page: Int) {
        getPage (page: $page) {
                name
                height
                mass
                gender
                homeworld
                
        }
    }



` 

export const getPersonByName = gql`

    query getPerson ($name: String) {
        getPerson (name: $name) {
                name
                height
                mass
                gender
                homeworld
                
        }
    }



` 