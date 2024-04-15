import React from 'react';
import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const Refs = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                Refs, Fragment, key, React.memo, useMemo
            </Typography>
            <Typography variant="h5" paragraph>
                Refs
            </Typography>
            <Typography paragraph>
                Refs (далее просто “ссылки”) предоставляет способ доступа к DOM-узлам или
                React-элементам, созданным в методе render().
            </Typography>
            <Typography paragraph component="div">
                Есть несколько хороших примеров использования ссылок:
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>1. Управление фокусом, выделение текста.</ListItemText>
                    <ListItemText>2. Выполнение анимаций.</ListItemText>
                    <ListItemText>
                        3. Интеграция со сторонними библиотеками, взаимодействующие с DOM.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph sx={{ fontWeight: 500 }}>
                Управление фокусом - лучший из них:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test;`}
                />
            </Typography>

            <Typography variant="h5" paragraph>
                Fragment
            </Typography>
            <Typography paragraph>
                С помощью фрагментов можно сгруппировать список дочерних элементов без добавления
                дополнительных узлов в DOM.
            </Typography>
            <Typography paragraph>
                Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>`}
                />
            </Typography>
            <Typography paragraph>
                Существует сокращенная запись (импортировать не нужно) - недостаток сокращенной
                записи: нельзя использовать атрибуты, например className или key 😿:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < className="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>`}
                />
            </Typography>

            <Typography variant="h5" paragraph>
                key
            </Typography>
            <Typography paragraph>
                Ключи помогают React определять, какие элементы были изменены, добавлены или
                удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с
                течением времени:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);`}
                />
            </Typography>
            <Typography paragraph>
                Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать
                элемент списка от его соседей. Чаще всего ты будешь использовать ID из твоих данных
                как ключи. Если нет ID используй библиотеку uuid:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);`}
                />
            </Typography>
            <Typography paragraph>
                Ключи нужно определять непосредственно внутри массивов. Если не указать ключи, в
                консоли увидим сообщение: 
                <b>Warning: Each child in an array or iterator should have a unique “key” prop.</b>
            </Typography>
            <Typography paragraph>
                Ключи оптимизируют работу с элементами массивов, уменьшают количество ненужных
                удалений и созданий элементов.
            </Typography>
            <Typography paragraph>
                Без key механизм reconciliation сверяет компоненты попарно между текущим и новым
                VDOM. Из-за этого может происходить большое количество лишних перерисовок
                интерфейса, что замедляет работу приложения.
            </Typography>
            <Typography paragraph>
                Добавляя key, мы помогаем механизму reconciliation тем, что с key он сверяет не
                попарно, а ищет компоненты с тем же key (тег / имя компонента при этом учитывается)
                — это уменьшает количество перерисовок интерфейса. Обновлены/добавлены будут только
                те элементы, которые были изменены/не встречались в предыдущем дереве.
            </Typography>

            <Typography variant="h5" paragraph>
                React.memo
            </Typography>
            <Typography paragraph>
                React.memo — это функция высшего порядка (Higher Order Component) в библиотеке
                React, которая оптимизирует производительность функциональных компонентов. Она
                предназначена для предотвращения ненужного повторного рендеринга компонента, когда
                его пропсы и состояние не изменились.
            </Typography>
            <Typography paragraph>
                По умолчанию, при каждом изменении состояния или пропсов компонент перерисовывается,
                даже если результирующий визуальный вывод не изменился. Это может быть неэффективно
                для компонентов, которые не зависят от изменений внешних данных и всегда отображают
                одинаковый результат.
            </Typography>
            <Typography paragraph>
                React.memo использует механизм мемоизации, чтобы запоминать предыдущий результат
                рендеринга компонента и сравнивать его с текущими пропсами. Если пропсы не
                изменились, React.memo предотвращает повторный рендеринг компонента, возвращая
                сохраненный результат.
            </Typography>
            <Typography paragraph>Пример использования React.memo:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react';

const MyComponent = React.memo((props) => {
    // Компонент будет перерисовываться только при изменении пропсов
    return (
        <div>
            {props.text}
        </div>
    );
});`}
                />
            </Typography>
            <Typography paragraph>
                React.memo также принимает второй необязательный аргумент в виде функции сравнения
                (compareFunction), которая позволяет контролировать, какие пропсы должны считаться
                "равными". Если функция сравнения не указана, React.memo будет использовать
                поверхностное сравнение (shallow comparison) для сравнения пропсов.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react';

const MyComponent = React.memo((props) => {
    // Компонент будет перерисовываться только при изменении пропсов с помощью 
    // compareFunction
    return (
        <div>
            {props.text}
        </div>
    );
}, (prevProps, nextProps) => {
    // compareFunction - пользовательская функция сравнения пропсов
    // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
});`}
                />
            </Typography>
            <Typography paragraph>
                Использование React.memo позволяет сократить количество повторных рендеров и
                улучшить производительность приложения, особенно для компонентов с большим
                количеством данных или сложными вычислениями внутри.
            </Typography>

            <Typography variant="h5" paragraph>
                useMemo
            </Typography>
            <Typography paragraph>
                React хук useMemo предназначен для мемоизации вычислений в функциональных
                компонентах. Он позволяет сохранять результат вычислений и повторно использовать
                его, если входные значения (зависимости) не изменились. Это может существенно
                повысить производительность, особенно в случаях, когда сложные вычисления
                выполняются при каждом рендеринге компонента.
            </Typography>
            <Typography paragraph>Вот несколько примеров использования useMemo:</Typography>
            <Typography paragraph>1. Вычисление производительной функции:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
    const processedData = useMemo(() => {
        // Вычисления, требующие много времени или ресурсов
        // Например, фильтрация или сортировка массива данных
        return processData(data);
    }, [data]); // Зависимость - значение пропса "data"

    return (
        <div>
            {processedData}
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере результат вычисления processData будет сохраняться и пересчитываться
                только при изменении значения пропса data. При последующих рендерах, если data не
                изменилось, будет использован сохраненный результат.
            </Typography>
            <Typography paragraph>2. Кэширование компонента:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React, { useMemo } from 'react';

const ExpensiveComponent = ({ propA, propB }) => {
    // Сложный компонент, требующий много ресурсов
    return (
        // ...
    );
};

const MyComponent = ({ data }) => {
    const cachedComponent = useMemo(() => {
        // Компонент будет кэширован при каждом изменении propA или propB
        return <ExpensiveComponent propA={propA} propB={propB} />;
    }, [propA, propB]);

    return (
        <div>
            {cachedComponent}
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере компонент ExpensiveComponent будет пересоздаваться только при
                изменении пропсов propA или propB. При остальных рендерах будет использоваться
                кэшированный компонент, что помогает снизить нагрузку на рендеринг сложных
                компонентов.
            </Typography>
        </div>
    );
};

export default Refs;
