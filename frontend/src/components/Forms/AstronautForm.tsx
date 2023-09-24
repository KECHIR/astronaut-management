import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
import { AstronautType } from "../../types";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().required(),
});

type astronautFormPropsType = {
  onSubmit: Function;
  submitButtonTitle: string;
  defaultValues?: AstronautType;
  handleCancel: Function;
};

const AstronautForm = ({
  onSubmit,
  submitButtonTitle,
  defaultValues,
  handleCancel,
}: astronautFormPropsType) => {
  let useFormOptions = {
    defaultValues,
    resolver: yupResolver(schema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(useFormOptions);
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        autoFocus
        margin="dense"
        id="firstName"
        label="First name"
        fullWidth
        {...register("firstName")}
      />
      <p color="red">{errors.firstName?.message}</p>
      <br />
      <TextField
        autoFocus
        margin="dense"
        id="lastName"
        label="Last name"
        fullWidth
        {...register("lastName")}
      />
      <p color="red">{errors.firstName?.message}</p>
      <br />
      <TextField
        autoFocus
        margin="dense"
        id="age"
        label="Age"
        fullWidth
        type="number"
        {...register("age")}
      />
      <p color="red">{errors.age?.message}</p>
      <Button type="submit">{submitButtonTitle}</Button>
      <Button onClick={() => handleCancel()}>{"Annuler"}</Button>
    </form>
  );
};

export default AstronautForm;
