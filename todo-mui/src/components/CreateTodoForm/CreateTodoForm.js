import React from 'react'
import "./CreateTodoForm.scss";

import { Formik, Form } from "formik";

import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const CreateTodoForm = (props) => {
    const classes = useStyles();  
    return (
      <Formik
                initialValues={{
                    task: '',
                    howDays: ''                    
                }}
                validationSchema={Yup.object().shape({
                  task: Yup.string()
                    .min(6, "Task should be longer then 7 characters")
                    .max(30, "Task should be shorter then 30 characters")
                    .required("Task is required"),
                  howDays: Yup.string()
                    .min(2, 'This field is require')
                    .required("This field is require")
                })}
                // onSubmit={ values => { props.addTask( values )
                // }}
                onSubmit={(values, {setSubmitting , resetForm}) => {
                  props.addTask( values )
                  setSubmitting(true)
                  resetForm()
                }}>
                {({ errors, touched, values, handleChange, handleBlur, isSubmiting, handleSubmit }) => (
                  <Form className="CreateTodoForm">
                  <h2>Create New Task</h2>
                  <div className="textInput">
                    <TextField
                      id="task"
                      name="task"
                      label="New Task"
                      placeholder="Type to add new task"
                      value={values.task}
                      helperText={errors.task}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.task && errors.task}
                      fullWidth
                    />
                  </div>
            
                  <FormControl className={classes.formControl}>
                    <Select
                      value={values.howDays}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      name="howDays"
                    >
                      <MenuItem value="" disabled>
                        Choose your termin
                      </MenuItem>
                      <MenuItem value="up to 1 day">1 Day</MenuItem>
                      <MenuItem value="up to 7 days">7 Days</MenuItem>
                      <MenuItem value="up to 14 days">14 Days</MenuItem>
                      <MenuItem value="up to 21 days">21 Days</MenuItem>
                      <MenuItem value="up to 30 days">30 Days</MenuItem>
                      <MenuItem value="More than 30 days">More time</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors.howDays ? errors.howDays : null}
                    </FormHelperText>
                  </FormControl>
            
                  <Button 
                     type="submit"
                     color="primary"
                     variant="contained"
                     disabled={ errors.task || errors.howDays || isSubmiting } 
                   >Add</Button>
                </Form>
                )}
            </Formik>
    )
  }
