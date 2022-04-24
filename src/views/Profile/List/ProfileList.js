import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProfile, fetchProfileList } from '../../../store/actions';
import axios from 'axios';
import TitlePage from '../../../shared/components/TitlePage';
import ConfirmDialog from '../../../shared/components/ConfirmDialog'
import { confirmAlert } from 'react-confirm-alert';
import './ProfileList.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProfileList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { profileList } = state.profile;

  const handleDelete = (id) => {
    dispatch(deleteProfile(id));
  }

  useEffect(() => {
    dispatch(fetchProfileList());
  },[dispatch])

  const onDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDialog
            title="Excluir Perfil"
            description="Você tem certeza que quer excluir esse perfil?"
            deleteText="Não"
            confirmText="Sim"
            onClose={onClose}
            handleClickDelete={() => handleDelete(id)} 
          />
        );
      }
    });
  }

  const editProfile = (id) => {
    navigate(`/profile/edit/${id}`)
  }

  return (
    <>
      <TitlePage title="Dados Cadastrados" />

      <div className='profiles-container'>
        {profileList.map(item => (
          <div key={`profile-${item.id}`} className='profile-container'>
            <div className='user-detail'>
              <div className='field'>
                <label>Nome</label>
                <span>{item?.name}</span>
              </div>
              <div className='field'>
                <label>RG</label>
                <span>{item?.documentNumber}</span>
              </div>
            </div>
            <div className='actions'>
              <button onClick={() => editProfile(item.id)}>Editar</button>
              <button onClick={() => onDelete(item.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </>   
  );
}

export default ProfileList;
