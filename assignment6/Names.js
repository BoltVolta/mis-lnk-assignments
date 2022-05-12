import React, {useState} from "react";

export default function Names() {
    const [values, setValues] = useState({
	firstName: '',
	lastName: '',
	email: '',
});
const [submitted, setSubmitted] = useState(false);

const handleFirstNameInputChange = (event) => {
	event.persist();
	setValues((values) => ({
		...values,
		firstName: event.target.value,
	}));
};

const handleLastNameInputChange = (event) => {
	event.persist();
	setValues((values) => ({
		...values,
		lastName: event.target.value,
	}));
};
const handleSubmit = (event) => {
	event.preventDefault();
	setSubmitted(true);
};

    return(
        <div>
            <form onSubmit={handleSubmit}>
                { submitted ? alert('Hello ' + values.firstName + ' ' + values.lastName)  : null }
                <input
                  id="first-name"
                  class="form-field"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleFirstNameInputChange}
                />
                <input
                  id="last-name"
                  class="form-field"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleLastNameInputChange}
                />
                <button type="submit">Greet me</button>
            </form>
        </div>
    )
}
