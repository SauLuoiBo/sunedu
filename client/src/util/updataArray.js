export const updateArray = (update, index, data, setData) => {
  let temp_state = [...data];

  // 2. Make a shallow copy of the element you want to mutate
  let temp_element = { ...temp_state[index] };

  // 3. Update the property you're interested in
  temp_element = update;

  // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
  temp_state[index] = temp_element;

  // 5. Set the state to our new copy
  setData(temp_state);
  console.log(data);
};
