import React from 'react';
import { observer } from 'mobx-react';
import { uuid } from 'uuidv4';

import { AppViewModel } from './App.vm';
import { TodoList } from './components/TodoList';
import { TodoManagement } from './components/TodoManagement';

export const App = observer((props) => {
  const $vm = React.useMemo(() => {
    return new AppViewModel();
  }, []);

  const [submitting, setSubmitting] = React.useState(false);

  const handleAddTodo = async (e, value) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await $vm.addTodo({ text: value, id: uuid() });
    } catch (err) {
      throw err;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <TodoManagement create={handleAddTodo} submitting={submitting} />
      <TodoList list={$vm.list} />
    </>
  );
})