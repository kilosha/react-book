import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const Components = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                Components
            </Typography>
            <Typography paragraph>
                Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса
                (строительные блоки React приложения), которые объединены вместе, чтобы создать
                более крупные приложения. Компоненты позволяют разбить интерфейс на независимые
                части, про которые легко думать в отдельности. Во многом компоненты ведут себя как
                обычные функции JavaScript. Они принимают произвольные входные данные (так
                называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть
                на экране.
            </Typography>
            <Typography paragraph component="div">
                Компонента должна себя вести как чистая функция. “Чистой” называется функция,
                которая:
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>
                        1. Для одинаковых входных данных всегда возвращает один результат.
                    </ListItemText>
                    <ListItemText>
                        2. Не имеет побочных эффектов (то есть не изменяет внешние состояния).
                    </ListItemText>
                    <ListItemText>3. Не зависит от внешних состояний.</ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                React компоненты могут быть классовыми или функциональными. Сейчас в основном
                используются функциональные. Разница заключается в том, что классовый компонент
                наследуется от базового класса React.Component и имеет доступ к дополнительным
                функциям, таким как состояние и методы жизненного цикла. В функциональных
                компонентах для этого используются хуки.
            </Typography>
            <Typography paragraph variant="h5">
                Пример объявления функционального компонента в React:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const MyComponent = () => {
    return <div>Hello, Redev!</div>;
};
export default MyComponent;`}
                />
            </Typography>
            <Typography paragraph variant="h5">
                Пример объявления классового компонента в React:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`class MyComponent extends React.Component {
    render() {
        return <div>Hello, Redev!</div>;
    }
};
export default MyComponent;`}
                />
            </Typography>
        </div>
    );
};

export default Components;
