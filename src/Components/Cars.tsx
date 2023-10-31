import React, { useState, useEffect } from "react";
import TableData from "./TableCarData";

// Define the shape of a car model
interface CarModel {
  id: number;
  name: string;
}

// Define the props for the Cars component
interface CarsProps {
  futureCars: CarModel[];
}

const Cars: React.FC<CarsProps> = (props) => {
  // Initialize checkboxes on component mount
  useEffect(() => {
    let arr = Array.from(
      document.getElementsByName("carCheckbox")
    ) as HTMLInputElement[];
    arr.forEach((el, i) => {
      el.checked = false;
    });
  }, []);

  // Destructure props
  const { futureCars } = props;

  // State for tracking apply button status and changed array of cars
  const [applyStuts, setapplyStuts] = useState(false);
  const [ChangeArr, setChangeArr] = useState<CarModel[]>([]);

  // Function to check if any checkbox is checked
  function CheckApply() {
    let arr = Array.from(
      document.getElementsByName("carCheckbox")
    ) as HTMLInputElement[];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked) {
        setapplyStuts(true); // At least one checkbox is checked
        break;
      } else if (i === arr.length - 1) {
        setapplyStuts(false); // No checkboxes are checked
      }
    }
  }

  // Function to set a new state for the array of cars
  function SetNewstateArray() {
    // Sort checkboxes based on value
    let arrCheckBoxInputs = Array.from(
      document.getElementsByName("carCheckbox")
    ) as HTMLInputElement[];
    let sortedArrCheckBoxInputs = arrCheckBoxInputs.sort(
      (a, b) => Number(a.value) - Number(b.value)
    );

    let SelectedCars: CarModel[] = [];
    let NonSelectedCars: CarModel[] = [];

    // Split futureCars into selected and non-selected cars
    futureCars.forEach((el, i) => {
      if (sortedArrCheckBoxInputs[i].checked) {
        SelectedCars.push(el);
      } else {
        NonSelectedCars.push(el);
      }
    });

    // Set the new state by combining selected and non-selected cars
    setChangeArr([
      ...SelectedCars.sort((a, b) => a.id - b.id),
      ...NonSelectedCars.sort((a, b) => a.id - b.id),
    ]);
  }

  // Function to reset the array of changed cars
  function ResetToInitialState() {
    setChangeArr([]);
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-muted">
        {ChangeArr.length === 0 ? "Initial State" : "State Changed"}
      </h2>
      <div className="card border-0 rounded-1">
        <div className="card-header border-0 bg-secondary text-dark">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 d-flex justify-content-center align-items-center">
                <button className="btn btn-dark" onClick={ResetToInitialState}>
                  RESET
                </button>
              </div>
              <div className="col-sm-5 d-flex justify-content-center align-items-center">
                <h3>Future Cars</h3>
              </div>
              <div className="col-sm-4 d-flex justify-content-center align-items-center">
                {applyStuts ? (
                  <button className="btn btn-dark" onClick={SetNewstateArray}>
                    Apply Changes
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <TableData
            data={ChangeArr.length === 0 ? futureCars : ChangeArr}
            CheckApply={CheckApply}
          />
        </div>
      </div>
    </div>
  );
};

export default Cars;
