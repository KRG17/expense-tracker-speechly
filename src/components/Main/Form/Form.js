import React,{useState, useContext} from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4} from 'uuid'
import { incomeCategories,expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import { useSpeechContext } from '@speechly/react-client';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date())
}

const Form = () => {

    const classes = useStyles();
    const [formData, setformData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction);
        setformData(initialState); //reseting all the fields so that user can add new transactions
    }

    const selectedCategories = formData.type === 'Income'? incomeCategories : expenseCategories;

    // console.log(formData)
  return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom> {/*gutterBottom-> adds padding and margin at bottom of typography*/}
                    ...
                </Typography>  
            </Grid>
            <Grid item xs={6}> {/*xs={6}-> takes half the screen*/}
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel> {/*select type either income or expense*/}
                    <Select value={formData.type} onChange={(e) => setformData({ ...formData, type: e.target.value})}> 
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>{/*Select->like a picker,allows u to select multiple option*/}
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setformData({ ...formData, category: e.target.value})}>
                        {/* <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="salary">Salary</MenuItem> */} 
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)} {/*rendering categories dynamically*/}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setformData({ ...formData, amount: e.target.value})}/> {/*fulllwidth->takes full width of the container*/}
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setformData({ ...formData, date: formatDate(e.target.value)})}/> 
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
  )
}

export default Form