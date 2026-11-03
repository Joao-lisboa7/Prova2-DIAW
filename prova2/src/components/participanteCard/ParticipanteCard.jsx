import './participandeCard.css';

function ParticipanteCard({ participante, onVotar }) {
  const { nome, foto, naRoca } = participante;

  return (
    <article className={`participante-card${naRoca ? ' card-roca' : ''}`}>
      <img className="participante-card-foto" src={foto} alt={nome} />
      <h2 className="participante-card-nome">{nome}</h2>
      {naRoca && <span className="participante-card-selo">Na roça</span>}
      {onVotar && (
        <button
          className="botao botao-principal participante-card-votar"
          type="button"
          onClick={() => onVotar(participante)}
        >
          Votar para eliminar
        </button>
      )}
    </article>
  );
}

export default ParticipanteCard;