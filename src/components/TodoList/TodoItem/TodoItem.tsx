import React, { FC } from 'react';
import TodoStore from 'store';
import { observer } from 'mobx-react-lite';

import type { IPropsTodoItem } from './TodoItem.types';

import Delete from 'assets/delete.svg';
import s from './TodoItem.module.scss';

const TodoItem: FC<IPropsTodoItem> = observer(({ todo }) => {
    const className = todo.isTaskCompleted
        ? `${s.todoItem} ${s.completedTask}`
        : `${s.todoItem}`;

    const handleDelete = () => TodoStore.deleteTask(todo.dataCreated);
    const onToggle = () => TodoStore.toggleComplitedActive(todo.dataCreated);

    return (
        <li className={className}>
            <label>
                <input
                    type="checkbox"
                    className={s.checkbox}
                    checked={todo.isTaskCompleted}
                    onChange={onToggle}
                />
                <span className={s.fake} />
                <p className={s.description}>{todo.description}</p>
            </label>
            <button className={s.btnDel} onClick={handleDelete}>
                <img src={Delete} alt="удалить" />
            </button>
        </li>
    );
});

export default TodoItem;
