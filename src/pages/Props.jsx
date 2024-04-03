import React from 'react';
import { Typography } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const Props = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                Props
            </Typography>
            <Typography paragraph>
                Пропсы (сокращение от properties) - это данные, которые передаются из родительского
                компонента в дочерний компонент React для настройки его поведения и внешнего вида.
            </Typography>
            <Typography paragraph variant="h5">
                Передача пропсов компонентам
            </Typography>
            <Typography paragraph>
                Props можно передавать в компоненты как атрибуты. В родительском компоненте нужно
                указать имя атрибута и значение, которое будет передано в дочерний компонент. Props
                можно читать в компоненте через объект props. Этот объект содержит все переданные в
                компонент атрибуты. К слову, props можно использовать для передачи любых данных,
                включая строки, числа, массивы, объекты и функции (и даже другие компоненты).
            </Typography>
            <Typography paragraph>
                Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую. Если нужно
                изменить данные в дочернем компоненте, следует использовать состояние (state).
            </Typography>
            <Typography paragraph variant="h6">
                Пример передачи пропсов для функциональной компоненты:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// Родительский компонент
const ParentComponent = () => {
    const object = { name: "Sasha", age: 28 }
    const array = [1, 4, 2, 5];
    const subSecondComponent = () => <h4>SubSecondComponent</h4>;
    
    return <ChildComponent numberProps={5} name={"Masha"} isOnline={true} function={subSecondComponent} obj={object} arr={array} />;
}

// Дочерний компонент
const ChildComponent = ({ numberProps, name, isOnline, subSecondComponent, obj, arr }) => { // можно сразу сделать деструктуризацию, ведь props это обычный объект
    return (
            <div> 
                <div>Число: {numberProps}</div>
                <span>{name}</span>
                {isOnline && <span> В сети </span>}
                {subSecondComponent()}
                <p>
                    {obj.name}, {obj.age} лет
                </p>
                <div>{arr}</div>
                {arr && arr.map((item) => <div key={item}>Элемент массива: {item}</div>)}
            </div>
)}`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                Пример передачи пропсов для классовой компоненты (здесь данные доступны чере
                this.props):
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// Родительский компонент
const ParentComponent = () => {
    const object = { name: "Sasha", age: 28 }
    const array = [1, 4, 2, 5];
    const subSecondComponent = () => <h4>SubSecondComponent</h4>;
    
    return <ChildComponent numberProps={5} name={"Masha"} isOnline={true} function={subSecondComponent} obj={object} arr={array} />;
}

//ChildComponent.js
import React from 'react';

class ChildComponent extends React.Component{
  render(){
// хорошей практикой считается выполнять деструктуризацию пропсов перед их использованием
    const { numberProps, name, isOnline, obj, arr, subSecondComponent } = this.props; 
    return (
        <div>
            <div>{numberProps}</div>
            <div>{name}</div>
            {isOnline && <div>Online</div>}
            {obj.name} <br />
            {obj.age} <br />
            {arr} <br />
            {subSecondComponent()}
        </div>
    );
  }
}

export default ChildComponent;`}
                />
            </Typography>
        </div>
    );
};

export default Props;
