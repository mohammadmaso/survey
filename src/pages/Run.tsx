import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useReduxDispatch, useReduxSelector } from '../redux';
import { post } from '../redux/results';
import { Model, StylesManager } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.css';
import { useEffect, useState } from 'react';
import { get } from '../redux/surveys';

StylesManager.applyTheme('defaultV2');

const Run = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useReduxDispatch();
  //   const surveys = useReduxSelector((state) => state.surveys.surveys);
  //   const survey = surveys.filter((s) => s.id === id)[0];
  //   const model = new Model(survey.json);
  const [model, setModel] = useState(new Model());

  useEffect(() => {
    (async () => {
      const surveyAction = await dispatch(get(id as string));
      setModel(new Model(surveyAction.payload.content));
      const model = new Model(surveyAction.payload.content);
    })();
  }, [dispatch, id]);

  model.onComplete.add((sender: Model) => {
    let hiddenValues = {
      email: searchParams.get('email'),
      name: searchParams.get('name'),
    };
    dispatch(
      post({
        survey_schema_id: id as string,
        content: { ...sender.data, ...hiddenValues },
      })
    );
  });
  return (
    <>
      <h1></h1>
      <Survey model={model} />
    </>
  );
};

export default Run;
