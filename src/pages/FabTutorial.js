import { useParams } from "react-router-dom";
import FabTutorial1 from './fabTutorials/FabTutorial1';
import FabTutorial2 from './fabTutorials/FabTutorial2';
import FabTutorial3 from './fabTutorials/FabTutorial3';

const tutorialComponents = {
    "1": FabTutorial1,
    "2": FabTutorial2,
    "3": FabTutorial3
};

const FabTutorial = () => {
    const { id } = useParams();
    const SelectedTutorialComponent = tutorialComponents[id] || (() => <p>Invalid tutorial step</p>);
     
    return ( 
        <div className="fab-tutorial">
            <h2>Fabrication Tutorial: Step { id }</h2>
            <SelectedTutorialComponent />
        </div>
     );
}
 
export default FabTutorial;