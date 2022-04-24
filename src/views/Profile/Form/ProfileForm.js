

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { useNavigate, useParams } from 'react-router-dom';
import { addProfile, fetchProfile } from '../../../store/actions';

import TitlePage from '../../../shared/components/TitlePage';
import RenderedRadio from '../../../shared/components/wrapped/RadioField';
import RenderedSelect from '../../../shared/components/wrapped/SelectField';
import RenderedTextField from '../../../shared/components/wrapped/TextField';
import {
  dateMask,
  maxLength11,
  onlyChar,
  required, requiredSelect, rgMask, validateDate
} from '../../../shared/utils/validators.js';

import './ProfileForm.scss';

const ProfileForm = ({ match, handleSubmit, submitting, submitFailed, invalid }) => {
  let { id } = useParams(); 
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const selector = formValueSelector('profileForm');
  const genderSelected = selector(state, 'gender');
  const issuingAgencySelected = selector(state, 'issuingAgency');
  const [issuingAgencyOptions, setIssuingAgencyOptions] = useState([]);

  const onSubmit = (value) => {
    dispatch(addProfile(value, navigate));
  };

  const onFetchProfileById = useCallback((id) => {
    dispatch(fetchProfile(id, navigate));
  },[dispatch, navigate]);

  const getIssuingAgency = () => {
    axios.get('https://62634d5ac430dc560d2d9d91.mockapi.io/api/issuing-agency')
    .then(res => {
      setIssuingAgencyOptions(res.data.orgao_emissor);
    }, error => {
      console.error(error);
    });
  }

  useEffect(() => {
    if(id) {
      onFetchProfileById(id);
    }
  }, [id, onFetchProfileById])

  useEffect(() => {
    getIssuingAgency();
  }, [])

  return (
    <div id="profile-form">
      <TitlePage title="Cadastrar Perfil" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row f-justify-center f-align-center'>
          <Field
            label="Nome"
            name="name"
            type="text"
            classInput="input-size"
            component={RenderedTextField}
            validate={[required]}
            normalize={onlyChar}
          />
        </div>
        <div className='row f-justify-center f-align-center'>
          <Field
            label="Número do RG"
            name="documentNumber"
            type="text"
            classInput="input-size"
            component={RenderedTextField}
            validate={[required, maxLength11]}
            normalize={rgMask}
            maxLength={12}
          />
          <span className="divider label">-</span>
          <Field
            label="Data de Emissão"
            name="issueDate"
            type="text"
            classInput="input-size"
            component={RenderedTextField}
            validate={[required, validateDate]}
            normalize={dateMask}
          />
          <span className="divider label">-</span>
          <Field
            label="Orgão Expedidor"
            name="issuingAgency"
            valueSelected={issuingAgencySelected}
            options={issuingAgencyOptions}
            classInput="input-size"
            component={RenderedSelect}
            validate={[requiredSelect]}
          />
        </div>
        <div className='row gender-container f-justify-center f-align-center'>
          <label className={`label-input ${submitFailed && !genderSelected && 'error'}`}>Sexo</label>
          <label className='label-field'>
            <Field
              label="Masculino"
              name="gender"
              type="radio"
              value="Masculino"
              classInput="input-size"
              component={RenderedRadio}
              validate={[required]}
            />
          </label>
          <span className="divider">-</span>
          <label className='label-field'>
            <Field
              label="Feminino"
              name="gender"
              type="radio"
              value="Feminino"
              classInput="input-size"
              component={RenderedRadio}
              validate={[required]}
            />
          </label>
        </div>
        <div className='row f-justify-center f-align-center'>
          <button type='submit' disabled={(submitFailed && invalid) || submitting}>Adicionar</button>
        </div>
      </form>
    </div>   
  );
}

export default reduxForm({
  form: 'profileForm',
})(ProfileForm);
