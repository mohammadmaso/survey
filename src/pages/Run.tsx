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
  const [start, setStart] = useState(0);

  useEffect(() => {
    (async () => {
      const surveyAction = await dispatch(get(id as string));
      setModel(new Model(surveyAction.payload.content));
      const model = new Model(surveyAction.payload.content);
    })();
  }, [dispatch, id]);

  useEffect(() => {
    setStart(Date.now());
  }, []);

  model.onComplete.add((sender: Model) => {
    let hiddenValues = {
      idd: searchParams.get('n'),
      time: Math.floor((Date.now() - start) / 1000),
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
      <div className="logos">
        <img alt="Daneshbonyan" src="/DaneshBonyan.jpg" height="80" />
        <img alt="IMOBS" src="/IMOBS.png" height="100" />
      </div>
      <Survey model={model} />
    </>
  );
};

export default Run;
