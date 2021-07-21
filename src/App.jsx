import React from 'react';
import { observer } from 'mobx-react';
import { uuid } from 'uuidv4';

import { AppViewModel } from './App.vm';
import { TodoList } from './components/TodoList';
import { TodoManagement } from './components/TodoManagement';

const $vm = new AppViewModel();

export const App = observer((props) => {
  const [submitting, setSubmitting] = React.useState(false);

  const handleTodoCreate = React.useCallback(async (e, value) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await $vm.create({ text: value, id: uuid() });
    } catch (err) {
      throw err;
    } finally {
      setSubmitting(false);
    }
  }, []);

  return (
    <>
      <TodoManagement create={handleTodoCreate} submitting={submitting} />
      <TodoList list={$vm.list} />
    </>
  );
})