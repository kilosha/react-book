import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const HOC = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                HOС (Higher-Order Components)
            </Typography>
            <Typography paragraph>
                Higher Order Components (HOC) являются паттерном в библиотеке React, позволяющим
                повысить переиспользуемость компонентов и управление состоянием. В этой главе мы
                рассмотрим, зачем они нужны, как их создавать, как прокидывать props, а также какие
                проблемы они помогают решить.
            </Typography>
            <Typography paragraph variant="h5">
                Зачем нужен HOC?
            </Typography>
            <Typography paragraph>
                HOC — это функции высшего порядка, которые принимают компонент и возвращают новый
                компонент с расширенным функционалом.
            </Typography>
            <Typography paragraph>
                Они помогают избежать дублирования кода, управлять состоянием, обеспечивают
                абстракцию поведения и позволяют добавлять функциональность к компонентам без
                изменения их кода.
            </Typography>
            <Typography paragraph variant="h5">
                Проблемы, которые решает HOC
            </Typography>
            <Typography paragraph>
                HOC решает несколько проблем в разработке React-приложений:
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>
                        1. <b>Логическое переиспользование:</b> HOC позволяют выделить общую логику
                        компонентов, такую как обработка аутентификации или получение данных, и
                        применять ее ко множеству компонентов без дублирования кода.
                    </ListItemText>
                    <ListItemText>
                        2. <b>Прокинуть дополнительные props:</b> HOC позволяют добавлять или
                        модифицировать props компонентов. Это удобно, например, для передачи данных
                        из контекста или оборачивания компонентов в дополнительные компоненты
                        высшего порядка.
                    </ListItemText>
                    <ListItemText>
                        3. <b>Обертывание компонентов:</b> HOC могут использоваться для обертывания
                        компонентов дополнительным функциональным слоем, например, для логирования,
                        манипуляции с состоянием и т.д.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph variant="h5">
                Как создать HOC?
            </Typography>
            <Typography paragraph>
                Создание HOC включает в себя определение функции, которая принимает компонент и
                возвращает новый компонент.
            </Typography>
            <Typography paragraph>
                Создание HOC - это простой процесс:
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>
                        1. Напиши функцию, которая принимает компонент в качестве аргумента.
                    </ListItemText>
                    <ListItemText>
                        2. Внутри функции определи новый компонент, который использует переданный
                        компонент и может добавлять ему дополнительную функциональность.
                    </ListItemText>
                    <ListItemText>3. Верни этот новый компонент.</ListItemText>
                </List>
            </Typography>
            <Typography paragraph>Вот простой пример:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log('Component rendered:', WrappedComponent.name);
        return <WrappedComponent {...props} />;
    };
};`}
                />
            </Typography>
            <Typography paragraph variant="h5">
                Как прокинуть props?
            </Typography>
            <Typography paragraph>
                Props могут быть переданы из HOC в оборачиваемый компонент следующим образом:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const withExtraProps = (WrappedComponent) => {
    return (props) => {
        const extraProps = { additionalProp: "I'm extra!" };
        return <WrappedComponent {...props} {...extraProps} />;
    };
};`}
                />
            </Typography>
            <Typography paragraph variant="h5">
                Примеры использования HOC
            </Typography>
            <Typography paragraph variant="h6">
                1. Логирование
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
    return (props) => {
        useEffect(() => {
            console.log(Component WrappedComponent.name mounted.);
        }, []);

        return <WrappedComponent {...props} />;
    };
};`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                2. Аутентификация
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const withAuth = (WrappedComponent) => {
    return (props) => {
        const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
        if (isAuthenticated) {
            return <WrappedComponent {...props} />;
        } else {
            return <p>Please log in to access this content.</p>;
        }
    };
};
    
const AuthenticatedComponent = withAuth(ProfileComponent);`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                3. Локализация
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const withLocalization = (WrappedComponent) => {
    return (props) => {
        const locale = getCurrentLocale(); // Получение текущей локали.
        const localizedContent = getLocalizedContent(locale);
        return <WrappedComponent {...props} localizedContent={localizedContent} />;
    };
};

const LocalizedProfile = withLocalization(ProfileComponent);`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                4. Управление состоянием
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useState } from 'react';

// HOC
const withCounter = (WrappedComponent) => {
    return (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(count + 1);
        };

        return (
            <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            {...props}
            />
        );
    };
};
                    
// Компонент, который будет обернут HOC
const Counter = ({ count, incrementCount }) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

// Применение HOC к компоненту
const CounterWithHOC = withCounter(Counter);

// Компонент, использующий обернутый компонент с HOC
const App = () => {
    return (
        <div>
            <h1>Counter App</h1>
            <CounterWithHOC />
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере withCounter - это функция высшего порядка компонентов, которая
                принимает компонент WrappedComponent и возвращает новый компонент, который добавляет
                состояние count и функцию incrementCount. Counter - это компонент, который
                отображает текущее значение count и кнопку для увеличения счетчика. CounterWithHOC -
                это Counter, обернутый в withCounter.
            </Typography>
            <Typography paragraph>
                В итоге, когда ты используешь CounterWithHOC в App, он будет иметь состояние count и
                функцию incrementCount, добавленные благодаря HOC.
            </Typography>
            <Typography paragraph variant="h5">
                Заключение
            </Typography>
            <Typography paragraph>
                Higher Order Components предоставляют инструмент для повышения переиспользуемости
                компонентов и добавления функциональности. При правильном использовании они помогают
                улучшить структуру и модульность твоего кода в приложении на React.
            </Typography>
        </div>
    );
};

export default HOC;
