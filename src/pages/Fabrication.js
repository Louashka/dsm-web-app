import { useState } from "react";
import { Link } from "react-router-dom";

const Fabrication = () => {

    const [fabricationSteps, setFabricationSteps] = useState([
        { title: "Prepare the Materials", body: "Short description...", id: 1 },
        { title: "Assemble the Modules", body: "Short description...", id: 2 },
        { title: "Integrate the Heater and Electrodes", body: "Short description...", id: 3 }
    ]);

    return ( 
        <div>
            <h2>Fabrication steps:</h2>
            <div className="fabrication">
                {fabricationSteps.map((step) => (
                    <div className="fabrication-step" key={step.id}>
                        <Link to={`/fabrication/${step.id}`}>
                            <h2>{ step.title }</h2>
                            <p>{ step.body }</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Fabrication;