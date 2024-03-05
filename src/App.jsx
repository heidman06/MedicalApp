import RegisterPatient from "./RegisterPatient.jsx";
import {useEffect} from "react";


function App() {
    const handlePatientDataSubmit = async (formData) => {
        const response = await fetch('http://localhost:8080/register_patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log({formData});
        const data = await response.json();
        console.log(data);
    };

    return (
        <RegisterPatient onDataSubmit={handlePatientDataSubmit}/>
    )
}

export default App
