import { Grid } from '@material-ui/core';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/Controls/Controls';
import * as employeeService from '../service/employeeService';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

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
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onchange={handleInputChange}
          />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.Checkbox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
