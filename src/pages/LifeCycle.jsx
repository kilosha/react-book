import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

import lifecycle from '../assets/lifecycle.jpeg';

const LifeCycle = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                LifeCycle (useEffect)
            </Typography>
            <Typography paragraph>
                <b>"Жизненный цикл"</b> в React - это набор этапов, через которые компонент
                проходит, чтобы правильно работать на странице (создание, обновление, удаление и
                тд).
            </Typography>
            <Typography paragraph>
                Ты можешь использовать эти этапы, чтобы выполнять разные действия, например,
                загружать данные с сервера, обновлять информацию на странице или очищать ресурсы,
                когда компонент больше не нужен.
            </Typography>
            <Typography variant="h5" paragraph>
                Методы жизненного цикла в React можно разделить на следующие группы:
            </Typography>
            <Typography variant="h6" paragraph>
                Методы монтирования (Mounting Methods):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>constructor()</ListItemText>
                    <ListItemText sx={{ display: 'list-item', textDecoration: 'line-through' }}>
                        static getDerivedStateFromProps()
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>render()</ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>componentDidMount()</ListItemText>
                </List>
            </Typography>
            <Typography variant="h6" paragraph>
                Методы обновления (Updating Methods):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        shouldComponentUpdate()
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>render()</ListItemText>
                    <ListItemText sx={{ display: 'list-item', textDecoration: 'line-through' }}>
                        getSnapshotBeforeUpdate()
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>componentDidUpdate()</ListItemText>
                </List>
            </Typography>
            <Typography variant="h6" paragraph>
                Методы размонтирования (Unmounting Methods):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        componentWillUnmount()
                    </ListItemText>
                </List>
            </Typography>
            <Typography variant="h6" paragraph>
                Методы обработки ошибок (Error Handling Methods):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>componentDidCatch()</ListItemText>
                </List>
            </Typography>

            <img src={lifecycle} alt="Lifecycle" height={500} />

            <Typography variant="h5" paragraph>
                Жизненный цикл классовых компонентов:
            </Typography>
            <Typography variant="h6" paragraph>
                Mounting (Монтирование):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>constructor(): </b>Вызывается при создании экземпляра компонента.
                        Используется для инициализации состояния и привязки методов.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>render(): </b>Отрисовывает компонент и возвращает React элементы.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>componentDidMount(): </b>Вызывается после рендеринга компонента и его
                        добавления в DOM. Используется для выполнения запросов к серверу, подписки
                        на события и других побочных эффектов.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`class MyComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = { count: 0 }
        this.increment = this.increment.bind(this)
    }

    increment () {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount () {
        // Здесь можно выполнять запросы к серверу.
        console.log('Компонент был смонтирован!')
    }

    render () {
        return (
            <div>
                <p>Количество: {this.state.count}</p>
                <button onClick={this.increment}>+++</button>
            </div>
        )
    }
}`}
                />
            </Typography>
            <Typography variant="h6" paragraph>
                Updating (Обновление):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>shouldComponentUpdate(nextProps, nextState): </b>Вызывается перед
                        обновлением компонента. Используется для оптимизации перерисовки компонента
                        путем возврата false, если обновление не требуется.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>render(): </b>Отрисовывает компонент и возвращает React элементы.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>componentDidUpdate(prevProps, prevState): </b>Вызывается после обновления
                        компонента и его рендеринга. Используется для выполнения дополнительных
                        действий после обновления компонента, например, для выполнения запросов к
                        серверу на основе новых пропсов.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`class MyComponent extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
        // В этом примере компонент будет обновляться только при изменении свойства name.
        return nextProps.name !== this.props.name
    }
    
    componentDidUpdate (prevProps, prevState) {
        // Здесь можно выполнять действия после обновления компонента.
        console.log('Компонент был обновлен!')
    }
    
    render () {
        return <div>Hello, {this.props.name}!</div>
    }
}`}
                />
            </Typography>
            <Typography variant="h6" paragraph>
                Unmounting (Размонтирование):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>componentWillUnmount(): </b>Вызывается перед удалением компонента из DOM.
                        Используется для выполнения необходимых очисток, отписки от событий и
                        освобождения ресурсов.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react'

class WillUnmountExample extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount () {
        this.timerID = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 1
            }));
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timerID);
        alert('Компонент удален из DOM');
    }

    render () {
        return (
            <div>
                <p>Время: {this.state.time} секунд</p>
            </div>
        )
    }
}

export default WillUnmountExample;`}
                />
            </Typography>
            <Typography variant="h6" paragraph>
                Error Handling (Обработка ошибок):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>componentDidCatch(error, info): </b>Вызывается при возникновении ошибки в
                        дочерних компонентах. Используется для отлавливания и обработки ошибок.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { Component } from 'react';

class ErrorBoundaryExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Что-то пошло не так.</h2>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>Пример использования ErrorBoundary</h1>
                <ErrorBoundaryExample>
                    {/* Твой компонент с возможной ошибкой */}
                    <ComponentWithError />
                </ErrorBoundaryExample>
            </div>
        );
    }
}

const ComponentWithError = () => {
    const [throwError, setThrowError] = useState(false);

    const handleClick = () => setThrowError(presState => !presState.throwError);

    if (throwError) {
        // Имитация ошибки
        throw new Error('Это ошибка в компоненте ComponentWithError');
    }

    return (
        <div>
            <h3>Компонент с возможной ошибкой</h3>
            <button onClick={() => handleClick()}>Генерировать ошибку</button>
        </div>
    )
}

export default App;`}
                />
            </Typography>
            <Typography variant="h5" paragraph>
                Жизненный цикл функциональных компонентов:
            </Typography>
            <Typography paragraph>
                <b>useEffect</b> - это хук в React, предназначенный для работы с методами жизненного
                цикла в функциональных компонентах.
            </Typography>
            <Typography paragraph>
                <b>Первый параметр: Функция, </b> которая должна выполниться при монтировании
                компонента и при каждом обновлении.
            </Typography>
            <Typography paragraph>
                <b>Второй параметр: Массив зависимостей </b> определяет, на что конкретно должен
                реагировать <b>useEffect</b>. Если массив пуст, <b>useEffect</b> выполняется только
                при монтировании и размонтировании. Если в массиве указаны определенные значения, то
                <b> useEffect</b> будет выполняться только тогда, когда эти значения изменяются.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) 

// Отработает как componentDidUpdate
useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

    // Отработает как componentWillUnmount
useEffect(() => {
    return () => console.log('componentWillUnmount')
}, []);`}
                />
            </Typography>
            <Typography variant="h6" paragraph>
                1. Mounting (Монтирование):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>{`useEffect(() => {}, [])`}: </b>Заменяет <b>componentDidMount()</b>.
                        Выполняет побочные эффекты только один раз после монтирования. Передавая
                        пустой массив зависимостей [], можно сделать хук <b>useEffect</b> аналогом
                        <b> componentDidMount</b>.
                    </ListItemText>
                </List>
            </Typography>
            <Typography variant="h6" paragraph>
                2. Updating (Обновление):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>{`useEffect(() => {}, [dependency])`}: </b>Заменяет
                        <b> componentDidUpdate().</b>
                        Позволяет указать зависимость для выполнения функции только при изменении
                        определенных props или state.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>{`useEffect(() => {})`}: </b>Выполняет функцию после каждого рендеринга
                        компонента. Отрабатывает как <b>componentDidMount()</b> и
                        <b> componentDidUpdate()</b>.
                    </ListItemText>
                </List>
            </Typography>
            <Typography variant="h6" paragraph>
                3. Unmounting (Размонтирование):
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>{`useEffect(() => () => {})`}: </b>Заменяет
                        <b> componentWillUnmount()</b>. Выполняет очистку и отписку от побочных
                        эффектов при размонтировании (удалении из DOM) компонента.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState, useEffect } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Компонент был монтирован');
        return () => {
            console.log('Компонент будет размонтирован');
        };
    }, []); // Пустой массив зависимостей и возвращает функцию, 
            // а значит выполнится только при монтировании и размонтировании

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}

export default Example;`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере <b>useEffect</b> выполняется при монтировании компонента и возвращает
                функцию, которая будет выполнена при размонтировании. Так как второй параметр
                <b> useEffect</b> - это пустой массив зависимостей [], он не будет срабатывать при
                обновлении состояний.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState, useEffect } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(\`Счетчик изменен на: \${count}\`);
    }, [count]); // Зависимость [count] - выполнится при изменении состояния count

    return (
        <div>
            <p>{message}</p>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}

export default Example;`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере <b>useEffect</b> выполняется при изменении значения count, так как
                count является зависимостью, переданной в массиве [count]. Когда count изменяется,
                <b>useEffect</b> обновляет состояние message, отображая новое сообщение о счетчике.
            </Typography>
        </div>
    );
};

export default LifeCycle;
