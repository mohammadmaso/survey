import { useParams } from 'react-router';
import Viewer from '../components/Viewer';
import { useReduxSelector } from '../redux';

const Results = () => {
  const { id } = useParams();
  const surveys = useReduxSelector((state) => state.surveys.surveys);
  const survey = surveys.filter((s) => s.id === id)[0];
  return (
    <>
      {/* <h1>{'\'' + survey.name + '\' results'}</h1> */}
      <div className="sjs-results-container">
        <Viewer id={id as string} />
      </div>
    </>
  );
};

export default Results;
