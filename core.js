function errorReport(param) {
  alert(param);
}

function speciaCharValidation(param) {
  // return true means error
  const ruleFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (ruleFormat.test(param)) {
    //find speciall char. If found then true.
    return true;
  } else {
    return false;
  }
}

const listContainer = document.getElementById("list-container").addEventListener("click", function (event) {
  // get element from button
  const getElementValue = event.target.innerText;

  // Push value to input Field
  const getInputField = document.getElementById("input-field");
  const getInputFieldValue = getInputField.value;
  let inputFieldUpdateValue = getInputFieldValue + getElementValue;
  // BACKSPACE TO REMOVE LAST ONE ITEM
  if (getElementValue == "Backspace") {
    inputFieldUpdateValue = getInputFieldValue.slice(0, -1);
  } // # BACKSPACE

  // ERROR CHECK:: Last 2 charrecter not allow as speciall charrecter

  if (getInputFieldValue.length > 1) {
    // get last second
    const getLastSecond = inputFieldUpdateValue.slice(-2, -1);
    // get last first
    const getLastFirst = inputFieldUpdateValue.slice(-1);
    // CHECK LAST SECOND HAS OPERATOR OR NOT
    if (speciaCharValidation(getLastSecond) == true) {
     // console.log("last second: ", getLastSecond);
      // Allow bracket as last second
      if (getLastSecond != ")") {
        // CHECK LAST FAST HAS OPERATOR OR NOT
        if (speciaCharValidation(getLastFirst) == true) {
          // DELETE LAST FARST OPERATOR AND SET NEW VALUE
          inputFieldUpdateValue = getInputFieldValue.slice(0, -1);
          console.log("TWICE OPERATOR NOT ALLOWD ", getLastFirst);
        } //# last first operator check
      } //# check brackets
    }
  }
  // # ERROR CHECK COMPLETED

  //:: LETS CONDITION APPLY IF SPECIALL BUTTON PRESS
  //== If = EQUAL PRESS APPLY eval method
  // The eval() method evaluates or executes an argument.
  if (getElementValue == "=") {
    // CHECK CURRENT INPUT FIELD STATUS. IF NO DATA FOUND THEN EQUAL WILL NOT WORK
    if (getInputFieldValue.length != 0) {
      // CALCULATE THE INPUT FIELD ITEMS
      const soruceData = eval(getInputFieldValue);
      // PUSH THE RESULT TO INPUT FIELD
      getInputField.value = soruceData;
      //   console.log(soruceData);
      return;
    } else {
      // IF NO DATA FOUND IN INPUT FILED THEN = EQUAL WILL NOT PRINT / AUTO REMOVE BY EMPTY SPACE
      getInputField.value = "";
      return;
    }
  }
  // NOW CHECK IF PRESS AC THEN ALL DATA WILL REMOVE
  if (getElementValue == "AC") {
    // console.log(getElementValue);
    getInputField.value = "";
    // event.clear();
    return;
  }

  getInputField.value = inputFieldUpdateValue;
  // const htmlElement = document.getElementById(elementID);
  // htmlElement.innerText = newValue;
  // console.log(inputFieldUpdateValue);
});

