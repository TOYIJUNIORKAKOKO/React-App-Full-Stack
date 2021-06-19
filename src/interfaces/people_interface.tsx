import {NEXT_PAGE} from '../constants/constants';



// people_reducer & actions Interfaces
export interface IpeopleState {
    people?:Iperson[]
    pageNo:number
    person?:Iperson 
    showSearch:boolean
}

interface Iperson {
    name:string
    height:string
    mass:string
    gender:string
    homeworld:string
}


// people_reducer state Initial values
const initPerson = {
    name:"",
    height:"",
    mass:"",
    gender:"",
    homeworld:""
}

export const intitValues = {
    people:[],
    pageNo:1,
    person:initPerson,
    showSearch:false
}

// people_reducer action type definition
export type Action = {type:typeof NEXT_PAGE, payload:IpeopleState}


// people array of object interface
export interface Ipeople {
    people:IpeopleState['people']
}


// props interface for personBySearch
export interface IpersonSearch {
    name?:string
    person?:Iperson 
    setPerson : any
}


// apollo client personBySearch interface 
export  interface IonePersonData {
    getPerson: Iperson[];
  }
  
export interface IonePersonNameVars {
    name?: string;
  }


// type of e => on form submmit home_page
export type FormElement = React.FormEvent<HTMLFormElement>;


// home_page props interface
export interface Iprops {
    name?:string
    person?:Iperson 
    persons:Iperson 
    people?:Iperson[]
}


// apollo client get people by page interface  
export  interface IbyPageData {
    getPage: Iperson[];
  }
  
 export interface IbyPageVars {
    page: number;
  }




