import React from 'react';
import { Typography, Button } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
import ModeContext from '../contexts/ModeContext.js';

const Context = () => {
    const { toggleColorMode, mode } = React.useContext(ModeContext);

    return (
        <div>
            <Typography variant="h4" paragraph>
                Context (useContext)
            </Typography>
            <Typography paragraph>
                Context предоставляет способ передачи данных через дерево компонентов без
                использования пропсов, передающихся по цепочке от родительских компонентов к
                дочерним.
            </Typography>
            <Typography paragraph>
                Context решает проблему props drilling, когда компоненту нужно передать данные через
                несколько уровней других компонентов, которые их не используют. Пропс-дриллинг может
                привести к избыточности и усложнению кода. Он также делает компоненты более
                зависимыми от их иерархии, что может затруднить их переиспользование и модификацию.
            </Typography>
            <Typography paragraph variant="h5">
                Использование Context (на примере изменения темы этого приложения 😎):
                <Button sx={{ ml: 1 }} onClick={toggleColorMode}>
                    Нажми меня (текущая тема: {mode})
                </Button>
            </Typography>
            <Typography paragraph variant="h6">
                Шаг 1: Создание контекста
            </Typography>
            <Typography paragraph>
                Сначала мы должны создать контекст с помощью функции `createContext()` из модуля
                react. В этом примере ниже создается новый контекст с помощью `createContext()` и
                экспортируется для дальнейшнего использования (в качестве аргументов можно передать
                default значения для параметров):
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`//contexts/ModeContext.js 
import React from 'react'; 
const ModeContext = React.createContext({ toggleColorMode: () => {} }); 
export default ModeContext;`}
                />
            </Typography>

            <Typography paragraph variant="h6">
                Шаг 2: Предоставление значения контекста
            </Typography>
            <Typography paragraph variant="caption">
                * фрагменты кода, относящиеся конкретно к изменению темы для MUI, опущены, это
                просто пример работы с контектом. Полная версия в репозитории проекта.
            </Typography>
            <Typography paragraph>
                Следующим шагом нужно предоставить значение контекста внутри компонента-провайдера.
                Компонент-провайдер обертывает дерево компонентов, которым нужен доступ к контексту.
            </Typography>
            <Typography paragraph variant="subtitle1">
                Вариант 1. Использование провайдера в самом компоненте
            </Typography>
            <Typography paragraph>
                В этом примере используется ModeContext.Provider для предоставления значения
                контекста. Значение value будет доступно всем дочерним компонентам, которые
                подписаны на этот контекст.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// App.js
import React from 'react';
import ModeContext from './contexts/ModeContext.js';
import ComponentA from './ComponentA';

const App = () => {
    const [mode, setMode] = React.useState('light');
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ModeContext.Provider value={{toggleColorMode, mode}}>
            <ComponentA />
        </ModeContext.Provider>
    );
}

export default App;`}
                />
            </Typography>

            <Typography paragraph variant="subtitle1">
                Вариант 2. Создание отдельного файла для провайдера
            </Typography>
            <Typography paragraph>
                Чтобы отделить всю логику провайдера от компонентов, можно создать отдельную папку
                providers, где хранить все провайдеры и их логику. Пример ниже:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// providers/ModeProvider.js
import React from 'react';
import ModeContext from '../contexts/ModeContext.js';

const ModeProvider = ({ children }) => {
    const [mode, setMode] = React.useState('light');
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ModeContext.Provider value={{toggleColorMode, mode}}>
                {children}
        </ModeContext.Provider>
    )
}

export default ModeProvider;

// App.js
import React from 'react';
import ModeProvider from './providers/ModeProvider.js';
import ComponentA from './ComponentA';

const App = () => {
    return (
        <ModeProvider>
            <ComponentA />
        </ModeProvider>
    );
}

export default App;`}
                />
            </Typography>

            <Typography paragraph variant="h6">
                Шаг 3: Использование хука useContext
            </Typography>
            <Typography paragraph>
                Теперь можно использовать хук useContext внутри функционального компонента, чтобы
                получить доступ к значению контекста. В этом примере импортируем useContext из react
                и вызываем его, передавая контекст ModeContext. Хук useContext возвращает текущее
                значение контекста, из которого с помощью деструктуризации мы получаем необходимые
                нам значения. Пример:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'jsx'}
                    text={`// ComponentA.jsx
import React, { useContext } from 'react';
import ModeContext from '../contexts/ModeContext.js';
import ComponentB from './ComponentB';

function ComponentA() {
  const {toggleColorMode, mode} = useContext(ModeContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Текущая тема: {mode}</p>
      <button onClick={toggleColorMode}>Изменить тему</button>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}
                />
            </Typography>

            <Typography paragraph variant="h6">
                Шаг 4: Подписка на контекст (еще один вариант)
            </Typography>
            <Typography paragraph>
                Есть еще один вариант подписаться на контекст в компонентах, где нужны переданные
                значения. Для этого используется ModeContext.Consumer. Значение контекста будет
                доступно внутри функции-рендерера в виде аргумента (тут снова использовали
                деструктуризацию).
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'jsx'}
                    text={`// ComponentA.jsx
import React from 'react';
import ModeContext from '../contexts/ModeContext.js';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <ModeContext.Consumer>
        {({ toggleColorMode, mode }) => (
            <p>Текущая тема: {mode}</p>
            <button onClick={toggleColorMode}>Изменить тему</button>
        )}
      </ModeContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}
                />
            </Typography>
        </div>
    );
};

export default Context;
