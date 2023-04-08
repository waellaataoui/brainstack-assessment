import React, { useState } from "react";
import TextInput from "../TextInput";
type pickerProps = {
  label: String;
  onSelect: Function;
  fetchOptions: Function;
};
const Picker = (props: pickerProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String>("");
  const [options, setOptions] = useState([]);
  const handleChange = async (value: String) => {
    setLoading(true);
    setError("");
    // fetch options
    try {
      const _options = await props.fetchOptions(value);
      setOptions(_options);
    } catch (error) {
      console.log(error);
      setError("couldn't fetch data");
    } finally {
      setLoading(false);
    }
  };
  const handleSelect = (value: any) => {
    props.onSelect(value);
  };
  return (
    <TextInput
      onInputChange={handleChange}
      label={props.label}
      options={options}
      loading={loading}
      onSelect={handleSelect}
      error={error}
    ></TextInput>
  );
};

export default Picker;
