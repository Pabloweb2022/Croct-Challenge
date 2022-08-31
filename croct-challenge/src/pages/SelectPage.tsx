import React, { ReactElement, useCallback, useState } from 'react';
import { useCroct } from '@croct/plug-react';
import { useEvaluation } from '@croct/plug-react';
import { goToHomePage } from '../Routes/coodinator';
import { useNavigate } from 'react-router-dom'

export default function SelectPage(): ReactElement {
    const navigate = useNavigate()
    const persona = useEvaluation<string>("user's persona or else 'unknown'", { fallback: 'unknown' });
    const croct = useCroct();
    const  [changePersona, setChangePersona] = useState('')
    
    const setPersona = useCallback(
        () => croct.user.edit()
            .set('custom.persona', changePersona)
            .save().then(() => {
                goToHomePage(navigate)
            }),
        [croct],
    );

   function changeDeveloper(){
    setChangePersona('developer')
    setPersona()
   }
   function changeMarketer(){
    setChangePersona('marketer')
    setPersona()
   }   function changeGrowthHacker(){
    setChangePersona('growth-hacker')
    setPersona()
   }

    return (
        <>
            <button onClick={changeDeveloper}>I'm a developer</button>
            <button onClick={changeMarketer}>I'm a marketer</button>
            <button onClick={changeGrowthHacker}>I'm a growth</button>
        </>
    );
}
