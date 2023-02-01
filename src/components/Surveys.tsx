import React, { useEffect } from 'react';
import { create, load, remove } from '../redux/surveys';
import { useReduxDispatch, useReduxSelector } from '../redux';
import { Link } from 'react-router-dom';
import './Surveys.css';

const Surveys = (): React.ReactElement => {
  const surveys: any = useReduxSelector((state) => state.surveys.surveys);
  const dispatch = useReduxDispatch();

  const postStatus = useReduxSelector((state) => state.surveys.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(load());
    }
    console.log(surveys);
  }, [postStatus, dispatch]);
  // @ts-nocheck
  return (
    <>
      <table className="sjs-surveys-list">
        {surveys.map((survey: any) => (
          <tr key={survey.id} className="sjs-surveys-list__row">
            <td>
              <span>{survey.name == null ? 'بدون عنوان' : survey.name}</span>
            </td>
            <td>
              <Link className="sjs-button" to={'run/' + survey.id}>
                <span>اجرا</span>
              </Link>
              <Link className="sjs-button" to={'edit/' + survey.id}>
                <span>ویرایش</span>
              </Link>
              <Link className="sjs-button" to={'results/' + survey.id}>
                <span>نتایج</span>
              </Link>
              <span
                className="sjs-button sjs-remove-btn"
                onClick={() => dispatch(remove(survey.id))}
              >
                حذف
              </span>
            </td>
          </tr>
        ))}
      </table>
      <div className="sjs-surveys-list__footer">
        <span
          className="sjs-button sjs-add-btn"
          title="increment"
          onClick={() => dispatch(create())}
        >
          افزودن نظرسنجی
        </span>
      </div>
    </>
  );
};

export default Surveys;
