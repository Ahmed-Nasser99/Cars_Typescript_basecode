import React, { useEffect } from "react";

// Define the props interface for the TableData component
interface TableDataProps {
  data: { id: number; name: string }[]; // An array of objects with id and name properties
  CheckApply: () => void; // A function that takes no arguments and returns nothing
}

// TableData component receives props of type TableDataProps
export default function TableData({ data, CheckApply }: TableDataProps) {
  // This useEffect hook runs when the 'data' prop changes
  useEffect(() => {
    // Get all elements with the name "carCheckbox" and cast them to HTMLInputElement[]
    let arr = Array.from(
      document.getElementsByName("carCheckbox")
    ) as HTMLInputElement[];

    // Loop through the array of checkboxes and uncheck them
    arr.forEach((el, i) => {
      el.checked = false;
    });

    // Call the CheckApply function
    CheckApply();
  }, [data]);

  return (
    <>
      {/* Map over the 'data' array and render a div for each element */}
      {data.map((el, i) => (
        <div key={el.id} className="d-flex justify-content-between">
          <div className="d-flex gap-3 my-1">
            {/* Checkbox input element */}
            <label className="containerr">
              <input
                type="checkbox"
                value={el.id}
                name="carCheckbox"
                id={el.name}
                onClick={CheckApply}
              />
              <div className="checkmark"></div>
            </label>
            {/* Label for the checkbox */}
            <label className="form-check-label fw-bold" htmlFor={el.name}>
              {el.name}
            </label>
          </div>
          {/* Display the ID of the element */}
          <span className="fw-bold">{el.id}</span>
        </div>
      ))}
    </>
  );
}
