import React from "react";

export default function Form(props) {
  const { disabled, values, change, submit, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h4>FRIEND INFO FORM</h4>
        <label>
          {" "}
          Name
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Password
          <input
            name="password"
            type="text"
            value={values.password}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Agree to Terms of Service?
          <input
            name="tos"
            type="checkbox"
            checked={values.tos}
            onChange={onChange}
          />
        </label>
        <button disabled={disabled}>Submit!</button>
        <div>
          <p>{errors.name}</p>
          <p>{errors.email}</p>
          <p>{errors.password}</p>
          <p>{errors.tos}</p>
        </div>
      </form>
    </div>
  );
}
