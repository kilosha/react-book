import { Typography, Button, Input } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const Events = () => {
    const handleClick = () => {
        alert('Кликнули!');
    };

    const handleChange = (event) => {
        console.log('Изменилось значение:', event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Форма отправлена!');
    };

    const handleMouseOver = () => {
        console.log('Курсор наведен!');
    };

    const handleKeyDown = (event) => {
        console.log('Нажата клавиша:', event.key);
    };

    return (
        <div>
            <Typography variant="h4" paragraph>
                Events
            </Typography>
            <Typography paragraph>
                В React события (events) являются важной частью взаимодействия с пользователем. Они
                позволяют обрабатывать действия пользователя, такие как клики, наведение курсора,
                отправка формы и другие.
            </Typography>
            <Typography paragraph variant="h5">
                Несколько наиболее часто используемых событий и примеры их применения:
            </Typography>
            <Typography paragraph variant="h6" component="div">
                1. onClick (клик)
                <Button
                    sx={{ ml: 1, color: 'black', border: '1px solid black' }}
                    onClick={handleClick}>
                    Нажми меня
                </Button>
            </Typography>
            <Typography paragraph>
                Событие onClick возникает при клике на элемент. Это одно из наиболее
                распространенных событий в React.
            </Typography>
            <Typography paragraph sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CodeBlock
                    language={'js'}
                    text={`const MyComponent = () => {
    const handleClick = () => {
        alert('Кликнули!');
    }

    return (
        <button onClick={handleClick}>Нажми меня</button>
    );
}`}
                />
            </Typography>
            <Typography paragraph variant="h6" component="div">
                2. onChange (изменение):
                <Input
                    sx={{ ml: 1, color: 'black', border: '1px solid black' }}
                    onChange={handleChange}></Input>
            </Typography>
            <Typography paragraph>
                Событие onChange возникает при изменении значения элемента формы, такого как
                текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio).
            </Typography>
            <Typography paragraph>
                В React, параметр event в callback-функции представляет объект события, который
                генерируется при изменении значения элемента формы или компонента.
                event.target.value содержит текущее значение input элемента.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const MyComponent = () => {
    const handleChange = (event) => {
        console.log('Изменилось значение:', event.target.value);
    }

    return (
        <input type="text" onChange={handleChange} />
    );
}`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                3. onSubmit (Отправка формы):
            </Typography>
            <Typography paragraph>
                Событие onSubmit возникает при отправке формы. Оно позволяет выполнить действия,
                связанные с отправкой данных формы на сервер.
            </Typography>
            <Typography
                paragraph
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                component="div">
                <CodeBlock
                    language={'js'}
                    text={`const MyComponent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Форма отправлена!');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Ваши поля формы */}
            <label>Имя: </label>
            <input />
            <br />
            <button type="submit">Отправить</button>
        </form>
    );
}`}
                />
                <form onSubmit={handleSubmit}>
                    <label>Имя: </label>
                    <input />
                    <br />
                    <button type="submit">Отправить</button>
                </form>
            </Typography>

            <Typography paragraph variant="h6">
                4. onMouseOver (Наведение курсора):
            </Typography>
            <Typography paragraph>
                Событие onMouseOver возникает, когда курсор наводится на элемент. Оно может
                использоваться для отображения дополнительной информации или изменения состояния
                компонента при наведении.
            </Typography>
            <Typography
                paragraph
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                component="div">
                <CodeBlock
                    language={'js'}
                    text={`const MyComponent = () => {
    const handleMouseOver = () => {
        console.log('Курсор наведен!');
    }
                        
    return (
        <div onMouseOver={handleMouseOver}>
            Наведите курсор на меня
        </div>
    );
}`}
                />
                <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
            </Typography>

            <Typography paragraph variant="h6">
                5. onKeyDown (Нажатие клавиши):
            </Typography>
            <Typography paragraph>
                Событие onKeyDown возникает при нажатии клавиши на клавиатуре. Оно позволяет
                реагировать на определенные комбинации клавиш или выполнять действия на основе
                нажатых клавиш.
            </Typography>
            <Typography
                paragraph
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                component="div">
                <CodeBlock
                    language={'js'}
                    text={`const MyComponent = () => {
    const handleKeyDown = (event) => {
        console.log('Нажата клавиша:', event.key);
    }
                        
    return (
        <input type="text" onKeyDown={handleKeyDown} />
    );
}`}
                />
                <Input
                    sx={{ border: '1px solid black', height: '25px' }}
                    type="text"
                    onKeyDown={handleKeyDown}
                />
            </Typography>

            <Typography paragraph>
                Существует множество других событий, таких как onFocus, onBlur, onScroll,
                onKeyPress, onKeyUp и т. д., которые могут быть использованы в зависимости от
                конкретных потребностей приложения.
            </Typography>
        </div>
    );
};

export default Events;
