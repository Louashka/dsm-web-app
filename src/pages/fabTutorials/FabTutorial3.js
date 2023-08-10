const FabTutorial3 = () => {
    return ( 
        <div>
            <div className="fabrication-tutorial">
                <h3>Prepare the Required Materials</h3>
                <p>Before you begin the integration of the heater and electrodes, ensure you have gathered the necessary tools and materials:</p>
                <ul>
                    <li>An enameled copper wire with a diameter of 0.1mm</li>
                    <li>A copper tape and/or conductive pen/ink</li>
                    <li>Scissors</li>
                    <li>Masking tape</li>
                    <li>Superglue</li>
                </ul>
            </div>

            <div className="fabrication-tutorial">
                <h3>Integrate the Heater and Electrodes</h3>
                <ol>
                <li>Begin by gluing one end of the enameled copper wire to the base of the silicone tube. Make sure the connection is made beside the groove in the tube where it meets the plastic enclosure.</li>
                <li>Tightly coil the enameled copper wire around the open area of the silicone tube. Secure the other end of the wire by gluing it to the base, close to the groove.</li>
                <li>Cut appropriately sized electrodes from the copper tape. Attach these electrodes to the plastic enclosures, either inside the socket or on top of the plug. This strategic placement ensures efficient electrical contact.</li>
                <li>With careful precision, remove the insulation from the wire ends and fix their placement within the grooves with a masking tape. Proceed to solder these exposed wire ends to the corresponding electrodes. This connection ensures the proper functioning of the heater and electrodes.</li>
                </ol>
            </div>
        </div>
     );
}
 
export default FabTutorial3;