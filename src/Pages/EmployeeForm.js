import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { Grid, TextField, FormControl, FormLabel } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';

const initialFieldValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Full Name'
            name='fullName'
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup>
              <FormControlLabel value='male' control={<Radio />} label='Male' />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
