import React from 'react';
import { MdDelete, MdRemoveCircle, MdAddCircle } from 'react-icons/md';
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions'
import { useSelector, useDispatch } from 'react-redux';
import './style.css'


export default function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);

  console.log('minhas reservas', reserves);
  const handleRemoveReserve = (id) => {
      dispatch(removeReserve(id));
  }

  const incrementAmount = (trip) => {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1));
    
  }

  const decrementAmount = (trip) => {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1));

  }

  return (

    <div>
      <h1 className="title">Você solicitou {reserves.length} reservas</h1>

    {reserves.map(reserve => (

      <div key={reserve.id} className="reservas">
        <img 
          src={reserve.image}
          alt={reserve.title}
        />
        <strong>{reserve.title}</strong>
        <div className="amount">
          <button type="button" 
            onClick={() => {
              decrementAmount(reserve);
            }}
          >
            <MdRemoveCircle size={25} color ="#191919" />
          </button>
          <input type="text" readOnly value={reserve.amount} />
          <button type="button" 
            onClick={() => {
              incrementAmount(reserve);
            }}
          >
            <MdAddCircle size={25} color ="#191919" />
          </button>
        </div>
        <button 
          type="button"
          onClick={() => {
            handleRemoveReserve(reserve.id)
          }}
        >
          <MdDelete size={20} color="#000" />
        </button>
      </div>

    ))}

      <footer>
        <button type="button">
          Solicitar Reservas
        </button>
      </footer>
    
    </div>
  );
}