import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  FormRow,
} from "../../components/form";

export default function AddressModalForm({ onSubmit, defaultValues  }) {
  const methods = useForm({
    defaultValues: {
      address_type: "HOME",
      line1: "",
      line2: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
    },
  });
  const { reset } = methods;

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <Form methods={methods} onSubmit={onSubmit} className="space-y-2">
      <Select
        name="address_type"
        options={[
          { label: "HOME", value: "HOME" },
          { label: "WORK", value: "WORK" },
          { label: "OTHER", value: "OTHER" }
        ]}
      />

      <Input name="line1" label="Address Line 1" required />
{/*       <Input name="line2" label="Address Line 2" /> */}
{/*       <Input name="area" label="Area" /> */}
      <Input name="landmark" label="Landmark" />

      <FormRow cols={2}>
        <Input name="city" label="City" required />
        <Input name="pincode" label="Pincode" required />
      </FormRow>
      <FormRow cols={2}>
        <Input name="state" label="State" required />
      </FormRow>

      <Button className="w-full rounded-xl bg-fuchsia-500">
        Save Address
      </Button>
    </Form>
  );
}
