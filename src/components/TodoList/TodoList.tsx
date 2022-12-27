import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import AddTask from '../AddTask/AddTask';
import Header from './Header/Header';
import TodoItem from './TodoItem/TodoItem';

import type { IPropsTodoList } from './TodoList.types';
import s from './TodoList.module.scss';

const TodoList: FC<IPropsTodoList> = observer(({ todos, data }) => (
    <div className={s.todo}>
        <Header data={data} />
        <AddTask />
        <ul>
            {todos.length > 0 &&
                todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.dataCreated} />;
                })}
        </ul>
        <div className={s.backline} />
    </div>
));

export default TodoList;
