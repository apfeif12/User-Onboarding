import "./App.css";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import Form from "./Form";
import Validation from "./Validation";
import User from "./User";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  tos: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tos: "",
};

const initialUsers = [];
const buttonDisabled = true;

function App() {
  const [buttonDisable, setButtonDisable] = useState(buttonDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);

  const createNewUser = newUser => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const changes = (name, value) => {
    Yup.reach(Validation, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    };
    createNewUser(newUser);
  };

  useEffect(() => {
    Validation.isValid(formValues).then((valid) => {
      setButtonDisable(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <div>
        <Form
          disabled={buttonDisable}
          values={formValues}
          change={changes}
          errors={errors}
          submit={submitForm}
        />
      </div>
      <div>
        {users.map(user => {
          return <User details={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
