export function addReserve(trip) {
  return {
    type: 'add_reserve',
    trip
  }
}

export function removeReserve(id) {
  return {
    type: 'remove_reserve',
    id,
  }
}

export function updateAmountReserve(id, amount) {
  return {
    type: 'update_reserve',
    id,
    amount
  }

}