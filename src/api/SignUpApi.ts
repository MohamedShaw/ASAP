/* eslint-disable prettier/prettier */

import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from 'utils/urls.json';
import { SignUpModel } from 'models/SignUp';
import { useDispatch } from 'react-redux';
import { login } from 'slices';


export const signUp = async (values: SignUpModel) => {


    try {
        const response = await axios.post(
            `${API_ENDPOINT}/user/register`, values
        );

        return response.data
    } catch (error) {
        console.log("error", JSON.parse(JSON.stringify(error)));


        throw "error"
    }

};
