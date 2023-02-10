import React from 'react';

import { Listbox, Combobox } from "@shopify/polaris";
import { useState, useCallback, useMemo } from "react";
import "./Page2.css"
function Page2() {
  const deselectedOptions1 = useMemo(
    () => [
      { value: "coupons", label: "Coupons" },
      { value: "values", label: "Values" }
    ],
    []
  );
  const deselectedOptions2 = useMemo(
    () => [
      { value: "Post", label: "Per Post Share" },
      { value: "Views", label: "Per 100 Views" },
      { value: "Likes", label: "Per 100 Likes" }
    ],
    []
  );
  const deselectedOptions3 = useMemo(
    () => [
      { value: "1000", label: "1000" },
      { value: "50000", label: "50000" },
      { value: "100000", label: "100000" }
    ],
    []
  );
  const [selectedOption, setSelectedOption] = useState();
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [options1, setOptions1] = useState(deselectedOptions1);
  const [options2, setOptions2] = useState(deselectedOptions2);
  const [options3, setOptions3] = useState(deselectedOptions3);
  const updateText1 = useCallback(
    (value) => {
      setInputValue1(value);

      if (value === "") {
        setOptions1(deselectedOptions1);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions1.filter((option) =>
        option.label.match(filterRegex)
      );
      setOptions1(resultOptions);
    },
    [deselectedOptions1]
  );

  const updateText2 = useCallback(
    (value) => {
      setInputValue2(value);

      if (value === "") {
        setOptions2(deselectedOptions2);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions2.filter((option) =>
        option.label.match(filterRegex)
      );
      setOptions2(resultOptions);
    },
    [deselectedOptions2]
  );
  const updateText3 = useCallback(
    (value) => {
      setInputValue3(value);

      if (value === "") {
        setOptions3(deselectedOptions3);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions3.filter((option) =>
        option.label.match(filterRegex)
      );
      setOptions3(resultOptions);
    },
    [deselectedOptions3]
  );

  const updateSelection1 = useCallback(
    (selected) => {
      const matchedOption = options1.find((option) => {
        return option.value.match(selected);
      });

      setSelectedOption(selected);
      setInputValue1((matchedOption && matchedOption.label) || "");
    },
    [options1]
  );
  const updateSelection2 = useCallback(
    (selected) => {
      const matchedOption = options2.find((option) => {
        return option.value.match(selected);
      });

      setSelectedOption(selected);
      setInputValue2((matchedOption && matchedOption.label) || "");
    },
    [options2]
  );
  const updateSelection3 = useCallback(
    (selected) => {
      const matchedOption = options3.find((option) => {
        return option.value.match(selected);
      });

      setSelectedOption(selected);
      setInputValue3((matchedOption && matchedOption.label) || "");
    },
    [options3]
  );
  const optionsMarkup1 =
    options1.length > 0
      ? options1.map((option) => {
          const { label, value } = option;


          return (
            <Listbox.Option
              key={`${value}`}
              value={value}
              selected={selectedOption === value}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;
const optionsMarkup2 =
      options2.length > 0
        ? options2.map((option) => {
            const { label, value } = option;
  
  
            return (
              <Listbox.Option
                key={`${value}`}
                value={value}
                selected={selectedOption === value}
                accessibilityLabel={label}
              >
                {label}
              </Listbox.Option>
            );
          })
        : null;
        const optionsMarkup3 =
        options3.length > 0
          ? options3.map((option) => {
              const { label, value } = option;
    
    
              return (
                <Listbox.Option
                  key={`${value}`}
                  value={value}
                  selected={selectedOption === value}
                  accessibilityLabel={label}
                >
                  {label}
                </Listbox.Option>
              );
            })
          : null;
  return (
    <div>
    <div className="page2-root">
    <div className="flex1">
        <h1 className='heading-h1'>Incentive Type</h1>
    </div>
    <div className="flex1">
        <h1 className='heading-h1'>:</h1>
    </div>
    <div className="flex2">
      <Combobox
        activator={
          <Combobox.TextField
            onChange={updateText1}
            label="Search tags"
            labelHidden
            value={inputValue1}
            placeholder="Incentive Type"
          />
        }
      >
        {options1.length > 0 ? (
          <Listbox onSelect={updateSelection1}>{optionsMarkup1}</Listbox>
        ) : null}
      </Combobox>
      </div>
    </div>
    <div className="page2-root">
    <div className="flex1">
        <h1 className='heading-h1'>Share Metric</h1>
    </div>
    <div className="flex1">
        <h1 className='heading-h1'>:</h1>
    </div>
    <div className="flex2">
      <Combobox
        activator={
          <Combobox.TextField
            onChange={updateText2}
            label="Search tags"
            labelHidden
            value={inputValue2}
            placeholder="Share Metric"
          />
        }
      >
        {options1.length > 0 ? (
          <Listbox onSelect={updateSelection2}>{optionsMarkup2}</Listbox>
        ) : null}
      </Combobox>
      </div>
    </div>
    <div className="page2-root">
    <div className="flex1">
        <h1 className='heading-h1'>Maximum Size</h1>
    </div>
    <div className="flex1">
        <h1 className='heading-h1'>:</h1>
    </div>
    <div className="flex2">
      <Combobox
        activator={
          <Combobox.TextField
            onChange={updateText3}
            label="Search tags"
            labelHidden
            value={inputValue3}
            placeholder="Maximum Size"
          />
        }
      >
        {options1.length > 0 ? (
          <Listbox onSelect={updateSelection3}>{optionsMarkup3}</Listbox>
        ) : null}
      </Combobox>
      </div>
    </div>
    <div className="page2">
        <h1 >Rules</h1>
    </div>
    </div>
  );
}

export default Page2;
