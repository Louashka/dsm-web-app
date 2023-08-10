const FabTutorial1 = () => {
    return ( 
        <div>
            <div className="fabrication-tutorial">
                <h3>Prepare the Required Materials</h3>
                <p>Before you begin the fabrication process, ensure you have gathered the necessary tools and materials:</p>
                <ul>
                    <li>A 10ml syringe</li>
                    <li>A flexible silicone tube with an inner diameter of 3mm and a wall thickness of 0.5mm</li>
                    <li>A glass beaker</li>
                    <li>A hot plate</li>
                    <li>Field's metal</li>
                    <li>Depth Gauge or other precision tool</li>
                    <li>Scissors</li>
                    <li>A 3D printer</li>
                </ul>
            </div>

            <div className="fabrication-tutorial">
                <h3>Prepare the Field's Metal Bars</h3>
                <ol>
                    <li>If your Field's metal is provided in larger chunks, begin by carefully cutting it into smaller, manageable pieces. This will facilitate the melting process.</li>
                    <li>Place the alloy pieces into a glass beaker, ensuring they are fully submerged in water. This step prevents excessive oxidation during the heating process.</li>
                    <li>Position the beaker onto the hot plate and gradually raise the temperature above 63 degrees Celsius. This controlled heating will cause the Field's metal to melt.</li>
                    <li>Using precision, cut the flexible silicone tube to the desired length. This tube will serve as a conduit for transferring the molten Field's metal.</li>
                    <li>Securely attach the silicone tube to the nozzle of the syringe. This will be the delivery mechanism for injecting the molten alloy.</li>
                    <li>Once the alloy is fully melted, cautiously insert the silicone tube into the molten metal. Carefully avoid introducing any water into the tube during this crucial step. Gradually draw the Field's metal into the tube by gently pulling the syringe plunger. This technique ensures a controlled transfer.</li>
                    <li>After withdrawing the syringe, gently straighten the silicone tube and allow the molten metal to solidify. This process may take a short while, and you can refer to the provided photo for visual guidance.</li>
                </ol>
            </div>

            <div className="fabrication-tutorial">
                <h3>Print the Plastic Enclosures</h3>
                <p>
                    Utilize your 3D printer to fabricate the plastic enclosure. Use PLA material for this purpose. The necessary design files are available for download through the provided link.
                </p>
            </div>

            <div className="fabrication-tutorial">
                <h3>Prepare Asembling Parts</h3>
                <ol>
                    <li>Trim the flexible silicone tubes into segments measuring 15mm in length. This size is optimal for the intended application and can be seen in the provided photo.</li>
                    <li>Carefully cut the alloy bar into smaller pieces, each approximately 5mm in length. These alloy segments will play a role in the subsequent stages of the fabrication process.</li>
                </ol>
            </div>
        </div>
     );
}
 
export default FabTutorial1;