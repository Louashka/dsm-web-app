import { useState } from "react";
import { Link } from "react-router-dom";

const Fabrication = () => {

    const [fabricationSteps] = useState([
        { title: "Prepare the Modules' Components", body: "Learn how to gather and prepare the essential materials for assembling the modular units.", id: 1 },
        { title: "Assemble the Modules", body: "Discover the step-by-step process of assembling the modules, including securing the components and aligning the design.", id: 2 },
        { title: "Integrate the Heater and Electrodes", body: "Follow detailed instructions to integrate the heater and electrodes into the modules for enhanced functionality.", id: 3 }
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