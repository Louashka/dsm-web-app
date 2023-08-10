const FabTutorial2 = () => {
    return ( 
        <div>
            <div className="fabrication-tutorial">
                <h3>Prepare the Required Materials</h3>
                <p>Before you begin the assembling of the modules, ensure you have gathered the necessary tools and materials:</p>
                <ul>
                    <li>A hot gun</li>
                    <li>Silicone plastic tubes (inner diameter: 3mm, wall thickness: 0.5mm, length: 15mm)</li>
                    <li>Filed's metal bars (diameter: 3mm, length: 5mm)</li>
                    <li>Two types of plastic enclosures designed with a snap-fit mechanism</li>
                </ul>
            </div>

            <div className="fabrication-tutorial">
                <h3>Assemble the Modules and Distribute the Alloy</h3>
                <ol>
                    <li>Begin by identifying the two types of plastic enclosures, each featuring a snap-fit design intended to securely join when the modular units are assembled within fibers.</li>
                    <li>Select the enclosure with the round socket. Carefully insert the silicone tubes and metal pieces into this enclosure.</li>
                    <li>Now, employ a hot gun set to approximately 150°C. Aim the hot air at the enclosure's metal contents, initiating the melting process. During this step, slightly blowing on the molten metal aids in removing air from the silicone tube and evenly distributing the metal within.</li>
                    <li>Exercise caution not to position the hot gun too close to the plastic enclosure to prevent potential damage. Keep in mind that plastic can melt under higher temperatures.</li>
                    <li>Perform a second round of metal melting using the hot gun. Subsequently, insert the other plastic enclosure—featuring a round plug—into the silicone tube.</li>
                    <li>Ensure precise alignment of the wire grooves within both enclosures. This alignment is crucial for maintaining structural integrity and efficient module performance.</li>
                </ol>
            </div>
        </div>
     );
}
 
export default FabTutorial2;