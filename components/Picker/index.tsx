import React, { useState } from "react";
import TextInput from "../TextInput";
import styles from "./Picker.module.scss";
type pickerProps = {
  label: String;
  onSelect: Function;
  fetchOptions: Function;
};
const Picker = (props: pickerProps) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const handleChange = async (value: String) => {
    setLoading(true);
    // fetch options
    try {
      const _options = await props.fetchOptions(value);
      setOptions(_options);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSelect = (value: any) => {
    console.log(value);
    props.onSelect(value);
  };
  return (
    <TextInput
      onInputChange={handleChange}
      label={props.label}
      options={options}
      loading={loading}
      onSelect={handleSelect}
    ></TextInput>
  );
};

export default Picker;
