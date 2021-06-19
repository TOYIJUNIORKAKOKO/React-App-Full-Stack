import React from 'react';
import {FormControl, Select, Grid} from '@material-ui/core';


import {useStyles} from './styles';


interface Iprops {
    pageNo: number
    setPageNo:  React.Dispatch<React.SetStateAction<number>>

}


const SelectPage:React.FC<Iprops> = ({pageNo, setPageNo}) => {

    const styles = useStyles();


    const handleChange = (e:React.ChangeEvent<{name?: string | undefined; value: any;}>) => {

        setPageNo(parseInt(e.target.value))

    }

    return (
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <FormControl  >
                <Select
                className={styles.selects}
                native
                value={pageNo}
                onChange={handleChange}
                >
                    <option className={styles.options} value={1}>Page 1</option>
                    <option className={styles.options} value={2}>Page 2</option>
                    <option className={styles.options} value={3}>Page 3</option>
                    <option className={styles.options} value={4}>Page 4</option>
                    <option className={styles.options} value={5}>Page 5</option>
                    <option className={styles.options} value={6}>Page 6</option>
                    <option className={styles.options} value={7}>Page 7</option>
                    <option className={styles.options} value={8}>Page 8</option>
                    <option className={styles.options} value={9}>Page 9</option>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectPage
