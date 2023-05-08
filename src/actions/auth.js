import { AUTH } from '../constants/actionTypes';
import * as api from '../api'

export const signUp = (form, nevigate)=> async (dispatch) =>{
    try {
        const { data } = await api.signUp(form);
        // dispatch({ type: AUTH, data });

        // nevigate('/auth')
    } catch (error) {
        console.log(error);
    }
}

export const signIn = (form, nevigate)=> async (dispatch) =>{
    try {
        const { data } = await api.signIn(form);
        dispatch({ type: AUTH, data });

        nevigate('/')
    } catch (error) {
        console.log(error);
    }
}