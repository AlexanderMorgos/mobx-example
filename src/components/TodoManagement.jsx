import React from 'react';

export const TodoManagement = ({ create, submitting }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }
    
    await create(e, inputValue);
    setInputValue('');
  }, [inputValue, create]);

  const handleInputChange = React.useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
      {submitting && <div>Loading</div>}
    </form>
  );
}