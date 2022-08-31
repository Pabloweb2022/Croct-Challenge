import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useCroct, useEvaluation } from '@croct/plug-react';
import { goToHomePage } from '../Routes/coodinator';
import { useNavigate } from 'react-router-dom'

export default function SelectPage(): ReactElement {
    const navigate = useNavigate()
    const croct = useCroct();
    const persona = useEvaluation<string>("user's persona or else 'unknown'", { fallback: 'unknown' });

    const setPersona = useCallback(
        (persona:string) => croct.user.edit()
            .set('custom.persona', persona)
            .save().then(() => {
                goToHomePage(navigate)
            }),
        [croct],
    );

    return (
        <>
            <button onClick={()=>setPersona('developer')}>I'm a developer</button>
            <button onClick={()=>setPersona('marketer')}>I'm a marketer</button>
            <button onClick={()=>setPersona('growth-hacker')}>I'm a growth</button> 
        </>
    );
}
