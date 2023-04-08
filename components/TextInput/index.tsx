import debounce from "lodash.debounce";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { locationType } from "@/utils/types";
import useComponentVisible from "@/utils/useComponentVisible";
import styles from "./TextInput.module.scss";

type inputProps = {
  label: String;
  options: Array<optionType>;
  onSelect: Function;
  onInputChange: Function;
  loading: boolean;
  error: String;
};
// this type can be extended to reuse the component with different options
type optionType = locationType;

const TextInput = (props: inputProps) => {
  const [value, setValue] = useState<any>("");
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleFocus = (e: any) => {
    setIsComponentVisible(true);
    if (e.target.value || props.options.length > 0) return;
    else {
      props.onInputChange("a");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleOptionClick = (option: optionType) => {
    props.onSelect(option);
    setValue(option.name);
    setIsComponentVisible(false);
  };
  const handleFetch = (input: String) => {
    props.onInputChange(input);
  };
  const debouncedFetch = useMemo(() => debounce(handleFetch, 500), []);

  useEffect(() => {
    if (!value) return;
    else {
      debouncedFetch(value);
    }
  }, [value]);
  return (
    <div className={styles.wrapper} ref={ref}>
      <label htmlFor="query">{props.label} </label>
      <input
        onChange={handleChange}
        onFocus={handleFocus}
        type="text"
        name="query"
        id="query"
        value={value}
        autoComplete="off"
      />
      {isComponentVisible && (props.options.length > 0 || props.loading) && (
        <ul className={`${props.loading ? styles.loading : ""}`}>
          {props.options.map((option: optionType, i) => (
            <li onClick={() => handleOptionClick(option)} key={i}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
      {props.error && <p className={styles.error}>{props.error} </p>}
    </div>
  );
};

export default TextInput;
