import React from 'react';
import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const State = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                State (useState)
            </Typography>
            <Typography paragraph>
                При разработке React-приложений состояние (state) играет важную роль. Оно
                представляет собой данные, которые используются внутри компонента для отслеживания и
                обновления информации. Состояние позволяет компонентам React быть динамичными и
                реагировать на изменения данных или взаимодействие пользователя. Простыми словами,
                это то, что ИЗМЕНЯЕТСЯ в компоненте, нежели props-ы которые неизменны.
            </Typography>
            <Typography paragraph>
                В React 16.8 появилась возможность использовать state в функциональных компонентах,
                путем использования нового хука useState.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';
const [state, setState] = useState(initialState);`}
                />
            </Typography>
            <Typography paragraph component="div">
                Хук useState позволяет функциональным компонентам в React добавлять локальное
                состояние. Он возвращает возвращает массив с парой значений: текущее значение
                состояния и функцию для его обновления. При вызове функции обновления, React
                перерисует компонент с новым значением состояния.
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>
                        <b>state:</b> текущее значение состояния.
                    </ListItemText>
                    <ListItemText>
                        <b>setState:</b> setState: функция для обновления значения состояния.
                    </ListItemText>
                    <ListItemText>
                        <b>initialState (необязательный параметр):</b> начальное значение состояния.
                        Может быть примитивным типом данных, объектом или функцией.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph variant="h5">
                Создание state
            </Typography>
            <Typography paragraph>
                Для создания состояния в функциональных компонентах используется хук useState. Он
                позволяет объявить переменную состояния и ее инициализацию. Например, можно создать
                состояние для отслеживания текущего счетчика:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    // Остальной код компонента
};`}
                />
            </Typography>
            <Typography paragraph>
                В классовых компонентах состояние хранится в свойстве state. Начальное состояние
                определяется в конструкторе компонента:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    // Остальной код компонента
}`}
                />
            </Typography>
            <Typography paragraph variant="h5">
                Обновление состояния
            </Typography>
            <Typography paragraph>
                Для обновления состояния в функциональных компонентах используется функция setCount,
                которая является вторым элементом массива, возвращаемого useState. При вызове
                setCount передается новое значение состояния. React автоматически обновит компонент
                и перерисует его с новым значением состояния:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    // Остальной код компонента
};`}
                />
            </Typography>
            <Typography paragraph>
                В классовых компонентах обновление состояния происходит с использованием метода
                setState. Он принимает объект с обновленными значениями состояния или функцию
                (подробнее ниже). React обновит состояние компонента и выполнит его перерисовку:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0,
        };
    }
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
        // или
        this.setState(state=>({ count: state.count + 1 }));
    };
    
    // Остальной код компонента
    }`}
                />
            </Typography>
            <Typography paragraph variant="h5">
                Применение состояния в компонентах
            </Typography>
            <Typography paragraph>
                Состояние позволяет компонентам отображать и обновлять данные. Например, состояние
                может использоваться для отслеживания введенных пользователем значений в форме или
                для хранения информации, полученной из сервера. Состояние также позволяет
                реагировать на события и обновлять компонент в соответствии с новыми данными.
            </Typography>
            <Typography paragraph>
                Пример использования состояния для отслеживания текущего счетчика и его отображения:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p>Счетчик: {count}</p>
        <button onClick={increment}>Увеличить</button>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                Компонент будет отображать текущее значение счетчика, а при нажатии на кнопку
                счетчик будет увеличиваться.
            </Typography>
            <Typography paragraph variant="h5">
                Примеры использования state в компонентах
            </Typography>
            <Typography paragraph variant="h6">
                Управление отображением элементов
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';

const Example = () => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(!showText);
    }

    return (
        <div>
            <button onClick={handleClick}>Показать/скрыть текст</button>
            {showText && <p>Этот текст может быть скрыт или показан</p>}
        </div>
    );
}`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере по клику на кнопку вызывается функция handleClick, которая вызывается
                при клике на кнопку. Она вызывает функцию setShowText которая изменяет текущий state
                на противоположный, что и отвечает за “показать” или “скрыть” текст.
            </Typography>
            <Typography paragraph variant="h6">
                Управление input-ом
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';

const Example = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <label>
            Введи свое имя:
            <input type="text" value={name} onChange={handleChange} />
            </label>
            <p>Привет, {name}!</p>
        </div>
    );
}`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы создали state с начальным значением пустой строки и присвоили его
                переменной name. В инпуте по событию onChange мы вызываем эту функцию, и меняет
                пустую строку, на те данные которые ввел пользователь. Да да, event.target.value это
                те данные, которые вводит пользователь. И затем мы обратно в input в атрибуте value
                присваиваем значение state.
            </Typography>
            <Typography paragraph variant="h6">
                Управление стилями
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';

const Example = () => {
    const [color, setColor] = useState('red');

    const handleClick = () => {
        setColor(color === 'red' ? 'blue' : 'red');
    }

    const style = {
        color: color
    };

    return (
        <div>
            <button onClick={handleClick}>Сменить цвет</button>
            <p style={style}>Этот текст может быть красным или синим</p>
        </div>
    );
}`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы создали state с начальным значением 'red' и присвоили его
                переменной color. Мы также создали функцию handleClick, которая вызывается при клике
                на кнопку, и использует функцию setColor для изменения значения state. Мы используем
                объект style для установки цвета текста, который зависит от значения state.
            </Typography>
            <Typography paragraph sx={{ fontWeight: '500' }}>
                State можно передавать в дочерние компоненты при помощи props.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const ParentComponent = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <ChildComponent count={count} />
            <button onClick={increment}>Увеличить</button>
        </div>
    );
};
    
const ChildComponent = ({ count }) => {
    return <p>Счетчик: {count}</p>;
};`}
                />
            </Typography>
            <Typography paragraph>
                В данном примере состояние счетчика хранится в родительском компоненте
                ParentComponent, а значение состояния передается в дочерний компонент ChildComponent
                через пропсы.
            </Typography>
            <Typography paragraph variant="h5">
                Примечания
            </Typography>

            <Typography paragraph>
                При вызове useState в компоненте, он будет выполнен при каждом рендеринге
                компонента. Поэтому важно обеспечить стабильность и неизменность порядка вызовов
                хуков внутри компонента. (поговорим про это дальше в LifeCycle)
            </Typography>
            <Typography paragraph>
                Можно использовать несколько хуков useState в одном компоненте для добавления
                нескольких независимых состояний.
            </Typography>
            <Typography paragraph>
                Если новое значение состояния совпадает с текущим значением, React выполнит
                оптимизацию и не проведет повторную отрисовку компонента.
            </Typography>
            <Typography paragraph>
                Важно помнить, что хуки могут использоваться только внутри функциональных
                компонентов или других хуков.
            </Typography>
            <Typography paragraph>
                Функция обновления состояния из useState может принимать значение или функцию,
                которая вычисляет новое значение состояния на основе предыдущего состояния. Это
                особенно полезно при работе с состоянием, которое зависит от предыдущего значения.
            </Typography>
            <Typography paragraph variant="h5">
                State в классах
            </Typography>
            <Typography paragraph variant="h6">
                Как создать state в компоненте React
            </Typography>
            <Typography paragraph>state создается в конструкторе компонента.</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    ...
}`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                Как изменять state в компоненте React
            </Typography>
            <Typography paragraph>
                В React, метод setState используется для обновления состояния компонента. У этого
                метода есть две формы:
            </Typography>
            <Typography paragraph>Первая запись:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`this.setState({ count: this.state.count + 1 });`}
                />
            </Typography>
            <Typography paragraph>
                Здесь используется метод setState для обновления состояния. Мы передаем объект с
                обновлением, в данном случае, мы увеличиваем значение count на 1 относительно
                текущего значения this.state.count.
            </Typography>
            <Typography paragraph>Вторая запись:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`this.setState((state) => ({ count: state.count + 1 }));`}
                />
            </Typography>
            <Typography paragraph>
                Здесь также используется метод setState, но внутрь передается ФУНКЦИЯ . Эта функция
                получает текущее состояние state в качестве аргумента и возвращает новый объект с
                обновлениями. В этом случае, также увеличивается значение count на 1 относительно
                текущего значения state.count.
            </Typography>
            <Typography paragraph>
                Оба способа делают одно и то же - увеличивают значение count на 1. Но второй способ
                может быть предпочтительным в некоторых ситуациях, например, когда обновление
                состояния зависит от предыдущего состояния, чтобы избежать потенциальных проблем с
                асинхронностью.
            </Typography>
            <Typography paragraph>
                То есть еще раз, когда СЛЕДУЮЩЕЕ СОСТОЯНИЕ ЗАВИСИТ ОТ ПРЕДЫДУЩЕГО, всегда используй
                callback функцию, а не объект в качестве первого параметра у setState()
            </Typography>
            <Typography paragraph variant="h6">
                Пример с функциональным компонентом:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Ты кликнул {count} раз</p>
            <button onClick={handleClick}>Кликни сюда</button>
        </div>
    );
}`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                Пример с классовым компонентом:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`class Example extends React.Component {
    constructor() {
        this.state = { count: 0 }
    }

    handleClick = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    }

    render() {
        return (
            <div>
                <p>Ты кликнул {this.state.count} раз</p>
                <button onClick={handleClick}>Кликни сюда</button>
            </div>
        );
    }
}`}
                />
            </Typography>
        </div>
    );
};

export default State;
