
import './ConfirmDialog.scss';

const ConfirmDialog = ({
  title = 'Deletar',
  description = "Você quer deletar esse item?",
  deleteText = "Não",
  confirmText = "Sim",
  onClose,
  handleClickDelete
}) => {
  return (
    <div className='custom-ui'>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='actions-container'>
        <button onClick={onClose}>{deleteText}</button>
        <button
          onClick={() => {
            handleClickDelete();
            onClose();
          }}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDialog;
