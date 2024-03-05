import  {useState} from "react";
import PropTypes from "prop-types";
import {RadioGroup, Radio, Button, Input} from "@nextui-org/react";



function RegisterPatient({onDataSubmit}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        vitalCardNumber: '',
        address: '',
        birthDate: '',
        gender: '',
        assignedDoctor: '',
    });

    // const [isOpen, setIsOpen] = React.useState(false);

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // send the data to another component or API
        onDataSubmit(formData);
    };

    const validateVitalCardNumber = (vitalCardNumber) => vitalCardNumber.match(/^\d{15}$/);

    const isInvalidVitalCardNumber = formData.vitalCardNumber !== '' && !validateVitalCardNumber(formData.vitalCardNumber);

    return (
        <div
            className="flex flex-col items-center justify-center p-14 bg-primary-customPurple ">
            <form onSubmit={handleSubmit}
                  className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-lg space-y-4 scale-80">
                <h1 className="text-3xl font-bold p-2">Register Patient</h1>
                <Input
                    isRequired
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    classNames="max-w-xs "
                />
                <Input
                    isRequired
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="max-w-xs "
                />
                <Input
                    isRequired
                    type="text"
                    label="Vital Card Number"
                    name="vitalCardNumber"
                    variant="bordered"
                    value={formData.vitalCardNumber}
                    description={"This is the number on your vital card and your password to connect."}
                    isInvalid={isInvalidVitalCardNumber}
                    color={isInvalidVitalCardNumber ? "danger" : "success"}
                    errorMessage={isInvalidVitalCardNumber && "Please enter a valid vital card number (15 digit number)."}
                    onChange={handleChange}
                    maxLength={15}
                    className="max-w-xs "
                />
                <Input
                    isRequired
                    type="text"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="max-w-xs "
                />
                <Input
                    isRequired
                    type="date"
                    label="Birth date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="max-w-xs "
                />
                <Input
                    isRequired
                    type="text"
                    label="Assigned Doctor"
                    name="assignedDoctor"
                    value={formData.assignedDoctor}
                    onChange={handleChange}
                    className="max-w-xs "
                />
                <RadioGroup
                    label="Select your Gender"
                    orientation="horizontal"
                    onChange={handleChange}
                >
                    <Radio value="Male" checked={formData.gender === "Male"} onChange={() => setFormData({...formData, gender: "Male"})}>Male</Radio>
                    <Radio value="Female" checked={formData.gender === "Female"} onChange={() => setFormData({...formData, gender: "Female"})}>Female</Radio>
                </RadioGroup>
                <Button type="submit">Register</Button>
            </form>
        </div>
    )
}

RegisterPatient.propTypes = {
    onDataSubmit: PropTypes.func.isRequired,
};
export default RegisterPatient;