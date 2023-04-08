import debounce from "lodash.debounce";
import React, { ChangeEvent, useState } from "react";
import { locationType } from "@/utils/types";
import useComponentVisible from "@/utils/useComponentVisible";
import styles from "./TextInput.module.scss";
type inputProps = {
  label: String;
  options: Array<locationType>;
  onSelect: Function;
  onInputChange: Function;
  loading: boolean;
};
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
    props.onInputChange(e.target.value);
  };
  const handleOptionClick = (option: locationType) => {
    props.onSelect(option);
    setValue(option.name);
    setIsComponentVisible(false);
  };
  return (
    <div className={styles.wrapper} ref={ref}>
      <label htmlFor="query">{props.label} </label>
      <input
        onChange={debounce(handleChange, 300)}
        onFocus={handleFocus}
        type="text"
        name="query"
        id="query"
        value={value}
      />
      {((isComponentVisible && props.options.length > 0) || props.loading) && (
        <ul className={`${props.loading ? styles.loading : ""}`}>
          {props.options.map((option: locationType, i) => (
            <li onClick={() => handleOptionClick(option)} key={i}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextInput;
