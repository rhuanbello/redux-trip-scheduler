import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReserve } from '../../store/modules/reserve/actions'
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md'
import './style.css'

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api.get('trips')
      .then(response => setTrips(response.data))
  }, []);

  useEffect(() => {
    console.log('aqui', trips)
  }, [trips])

  const handleAddReserve = (trip) => {
    dispatch(addReserve(trip));
  }

  return (
    <div>
      <ul className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img 
              src={trip.image} 
              alt={trip.title}
            />
            <strong>
              {trip.title}
            </strong>
            <span>
              Status: {trip.status ? 'Disponível' : 'Indisponível'}
            </span>
            <button
              type="button"
              onClick={() => {
                handleAddReserve(trip)
              }}>
                <div> 
                  <MdFlightTakeoff
                    className="icon"
                    size={16} 
                    color="#FFF"
                  />
                </div>
                <span>
                  Solicitar Reserva
                </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}