import React, {useEffect, useState} from 'react'
import { Container, Grid } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';



import {useStyles} from './styles';
import {getPeopleBypageNo} from '../../GraphQL/query';
import {getPages} from '../../actions/people';
import MapData from './mapData/map';
import SelectPage from './selectPagesNo/select';
import PersonBySeacrh from './personBySearch/person_search';
import {RootSore} from '../../store/store';
import {FormElement, Iprops, IbyPageData, IbyPageVars} from '../../interfaces/people_interface';



const GetUsers:React.FC = () => {
    const styles = useStyles();
    const dispatch = useDispatch();


    // storing states properties to get a person by seach(child component)
    const initSearch = useSelector((state: RootSore) => state.page.person);    
    const searchResult = useSelector((state: RootSore) => state.page.showSearch);   
    const [personName, setPersonName] = useState("");
    const [name, setName] = useState<Iprops['name']>(initSearch === undefined || initSearch === null?"":initSearch.name);
    const [person, setPerson] = useState<Iprops['person']>();
    const [showSearch, setShowSearch] = useState(searchResult);
    const [nameValidation, setNameValidation] = useState("");



    // storing states to get pages
    const initPageNo = useSelector((state: RootSore) => state.page.pageNo);   
    const [pageNo, setPageNo] = useState(initPageNo);
    const [people, setPeople] = useState<Iprops['people']>([]);



    // query data from Graphql to get people by pages and storing the states using redux
    const { loading, data} = useQuery<IbyPageData, IbyPageVars>(getPeopleBypageNo, {variables: {page: pageNo}} );

    useEffect(() => {

        if (loading)  {
            <h3>Loading...</h3>
        };
        setPeople(data?.getPage);
        if(data){
            if(people){
                dispatch(getPages(people, pageNo, person, showSearch));
            }
        }

    }, [data, people, loading , pageNo, person, showSearch, dispatch]);



    // Handle Input data and the seacrh validation 
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        if(!personName){
            setNameValidation('Please enter valid characters ');
            setName(undefined)
            setPersonName("");
            setShowSearch(false);
            return false;
        }else{
            setName(personName);
            setShowSearch(true);
            setNameValidation('')
            setPersonName("");
        }        
    };

    useEffect(() => {
        if(personName){
            setNameValidation('')
        }

    }, [personName])

    const handleShowAll = () => {
        setShowSearch(false)
        setNameValidation('')
        setPageNo(1)
    }; 





    return (
        <div className={styles.root}>

            {/* Input field for search */}
            <Grid container spacing={0}>
                <Grid  item xl={12} lg={12} md={12} sm={12} xs={12}>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <button className={styles.buttons} type='button' onClick={handleShowAll} >Pages</button>
                        <input className={styles.inputs} placeholder='Cast name' value={personName} onChange={(e) => setPersonName(e.target.value)}/>
                        {nameValidation? (<h4 className={styles.validationText}>{nameValidation}</h4>) : null}
                        <button className={styles.buttons} type='submit' >Search</button>
                    </form>

                </Grid>
                
                <Grid container item   xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Container >
                            <Grid container spacing={4}>
                                {
                                        // Search logics 
                                        showSearch?
                                        (<PersonBySeacrh name={name} person={person} setPerson={setPerson} />):
                                    (
                                    <>  
                                        {/* Select pages logics */}
                                        <SelectPage pageNo={pageNo} setPageNo={setPageNo} />

                                        {/* Get data by pages logics */}
                                        <MapData people={people}/>
                                        
                                    </>)
                                    
                                }
                            </Grid>
                        </Container>
                </Grid>

            </Grid>

        </div>
    )
}

export default GetUsers
