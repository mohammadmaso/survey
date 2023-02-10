import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiBaseAddress } from '../models/survey'

export const load = createAsyncThunk('results/load', async (id: string) => {
    const response = await axios.get(apiBaseAddress + '/SurveyResult/?survey_id=' + id)
    return response.data
})

export const post = createAsyncThunk('results/post', async (data: {survey_schema_id: string, content: any}) => {
  const response = await axios.post(apiBaseAddress + '/SurveyResult/', data);
  return response.data
})
