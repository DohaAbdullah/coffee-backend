const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

let errors = [];

function validateIt(body) {
  errors = [];
  const bodyKeys = Object.keys(body);
  bodyKeys.map((key) => {
    if (key === "email") {
      if (!emailRegex.test(body.email)) {
        errors.push("Please enter a valid email");
      }
    } else if (key === "password") {
      if (!passwordRegex.test(body.password)) {
        errors.push(
          "Password must have at least: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
        );
      }
    }
  });
  return errors;
}

module.exports = validateIt;
