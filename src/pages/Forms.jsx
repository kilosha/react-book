import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const Forms = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                Формы и их обработка в React. react-hook-form VS <b>formik</b>
            </Typography>
            <Typography paragraph>
                Формы - это часть большинства веб-приложений. Однако их создание и управление может
                быть сложным для новичков.
            </Typography>
            <Typography paragraph component="div">
                В React существует несколько способов использования форм в приложении, в зависимости
                от потребностей и предпочтений разработчика. Ниже перечислены основные варианты
                использования форм в React приложении:
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Управляемые компоненты форм:</b> В этом подходе значения полей формы
                        хранятся в состоянии компонента. Каждое поле формы связано с состоянием и
                        обновляется через callback-функцию.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Неуправляемые компоненты форм:</b> В этом подходе значения полей формы
                        хранятся непосредственно в DOM, а не в состоянии компонента.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Ref-подход:</b> В этом случае значения полей формы считываются через ref,
                        которые позволяют получить доступ к DOM-элементам. Этот подход может быть
                        удобен (нет😐), когда тебе нужно быстро получить значения полей без явного
                        сохранения их в состояние компонента.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Библиотеки управления формами:</b> Существуют библиотеки, такие как
                        <b> React Hook Form</b> и <b>Formik</b> , которые предоставляют более
                        высокоуровневые решения для работы с формами. Они упрощают управление
                        состоянием, валидацией, обработкой отправки и другими аспектами работы с
                        формами.
                    </ListItemText>
                </List>
            </Typography>
            <Typography variant="h5" paragraph>
                React Hook Form
            </Typography>
            <Typography paragraph>
                <b>React Hook Form </b> - это библиотека, которая значительно упрощает процесс
                работы с формами в React приложениях. Она позволяет создавать интерактивные и
                дружественные формы с минимумом лишнего кода.
            </Typography>
            <Typography variant="h6" paragraph>
                Основы Использования
            </Typography>
            <Typography paragraph>
                1. Установи библиотеку <b>React Hook Form</b>: <b>npm install react-hook-form</b>
            </Typography>
            <Typography paragraph>2. Импорт и инициализация хука:</Typography>
            <Typography paragraph>
                Внутри функциональной компоненты, вызови хук useForm() для инициализации:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { useForm } from 'react-hook-form';

const Test = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    ///...
}`}
                />
            </Typography>
            <Typography paragraph>3. Создание Формы:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<form onSubmit={handleSubmit(onSubmit)}>
    {/* Поля формы */}
</form>`}
                />
            </Typography>
            <Typography paragraph>4. Добавление Полей:</Typography>
            <Typography paragraph>Начинай описывать поля формы используя register:</Typography>
            <Typography paragraph>
                <CodeBlock language={'js'} text={`<input {...register('name')} />`} />
            </Typography>
            <Typography paragraph>5. Валидация:</Typography>
            <Typography paragraph>
                <b>React Hook Form</b> предоставляет механизм валидации:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<input
    type='number'
    {...register('age', {
        required: 'Обязательное поле',
        min: {
            value: 18,
            message: 'Вам должно быть 18 лет или больше'
        }
    })}
/>
<p>{errors.age?.message}</p>`}
                />
            </Typography>
            <Typography paragraph>6. Обработка Отправки:</Typography>
            <Typography paragraph>
                Создайте функцию onSubmit, которая будет вызвана при отправке формы:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const onSubmit = (data) => {
    console.log(data);
};`}
                />
            </Typography>
            <Typography paragraph>7. Кнопка Отправки:</Typography>
            <Typography paragraph>Добавьте кнопку отправки, связанную с handleSubmit:</Typography>
            <Typography paragraph>
                <CodeBlock language={'js'} text={`<button type="submit">Отправить</button>`} />
            </Typography>

            <Typography variant="h6" paragraph>
                Кейсы валидации:
            </Typography>
            <Typography paragraph>
                <b>register</b> - это функция из библиотеки react-hook-form, которая используется
                для связывания инпутов и других элементов формы с состоянием и валидацией формы.
            </Typography>
            <Typography paragraph component="div">
                Когда ты вызываешь register('fieldName', validationRules), библиотека
                react-hook-form выполняет следующие действия:
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Регистрирует поле внутри твоей формы, связывая его с именем fieldName.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Применяет указанные правила валидации (validationRules) к этому полю.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>Примеры использования register:</Typography>
            <Typography paragraph>
                1. <b>Базовое использование:</b>
            </Typography>
            <Typography paragraph>
                <CodeBlock language={'js'} text={`<input {...register('name')} />`} />
            </Typography>
            <Typography paragraph>
                В этом случае name - это имя поля в твоем объекте данных, который будет передан в
                функцию onSubmit.
            </Typography>
            <Typography paragraph>
                2. <b>Добавление правил валидации:</b>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<input {...register('email', { required: 'Введите email' })} />`}
                />
            </Typography>
            <Typography paragraph>
                Здесь мы добавили правило, что поле email обязательно для заполнения. Если это поле
                останется пустым, будет показано сообщение "Введите email".
            </Typography>
            <Typography paragraph>
                3. <b>Использование нескольких правил:</b>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<input
    {...register('age', {
        required: 'Укажите возраст',
        min: { value: 18, message: 'Вам должно быть 18 лет или больше' }
    })}
/>`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем несколько правил: required для обязательности поля и
                min для проверки, что возраст больше 18 лет.
            </Typography>
            <Typography paragraph>
                4. <b>Поле с типом radio или checkbox:</b>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<input type="radio" {...register('gender', { required: 'Выберите пол' })} value="male" />
<input type="radio" {...register('gender', { required: 'Выберите пол' })} value="female" />`}
                />
            </Typography>
            <Typography paragraph>
                Здесь мы используем одно и то же имя gender для обеих радио-кнопок, чтобы они были
                связаны как группа. Если не выбрано ни одно из значений, будет показано сообщение
                "Выберите пол".
            </Typography>
            <Typography paragraph>
                4. <b>Поле с паттерном валидации:</b>
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<input
    {...register('email', {
        required: 'Поле обязательно для заполнения',
        pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/,
            message: 'Введите корректный email'
        }
    })}
/>`}
                />
            </Typography>
            <Typography paragraph>
                Сообщение об ошибке будет показано, если введенный email не соответствует шаблону
                или если поле осталось пустым.
            </Typography>
            <Typography paragraph>
                Обрати внимание, что register не работает с компонентами Controller, и их нельзя
                комбинировать в одном поле. Тебе следует использовать либо register, либо
                Controller, в зависимости от потребностей.
            </Typography>

            <Typography variant="h6" paragraph>
                Controller
            </Typography>
            <Typography paragraph component="div">
                Вот несколько ситуаций, когда стоит использовать Controller:
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Использование сторонних библиотек (ANTD или MUI): React Hook Form </b>
                        сделал интеграцию с внешними библиотеками компонентов пользовательского
                        интерфейса очень простой.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Использование сторонних библиотек валидации:</b> Если вы используете
                        сторонние библиотеки валидации, такие как yup или joi, Controller позволяет
                        вам интегрировать их правила валидации с формой.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph>
                Пример интеграции <b>React Hook Form</b> + ANTD
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Radio, Checkbox, DatePicker, Button } from 'antd';

const FormWithRHFController = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <Controller
                    name='email'
                    control={control}
                    rules={{
                    required: 'Поле обязательно для заполнения',
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/,
                        message: 'Введите корректный email'
                    }
                    }}
                    render={({ field }) => <Input {...field} placeholder='Email' />}
                />
                <p>{errors.email?.message}</p>
            </div>

            <div>
                <label>Текст:</label>
                <Controller
                    name='text'
                    control={control}
                    rules={{ required: 'Поле обязательно для заполнения' }}
                    render={({ field }) => <Input {...field} placeholder='Текст' />}
                />
                <p>{errors.text?.message}</p>
            </div>

            <div>
                <label>Число:</label>
                <Controller
                    name='number'
                    control={control}
                    rules={{ required: 'Поле обязательно для заполнения' }}
                    render={({ field }) => (
                    <Input type='number' {...field} placeholder='Число' />
                    )}
                />
                <p>{errors.number?.message}</p>
            </div>

            <div>
                <label>Пол:</label>
                <Controller
                    name='gender'
                    control={control}
                    rules={{ required: 'Выберите пол' }}
                    render={({ field }) => (
                    <Radio.Group {...field}>
                        <Radio value='male'>Мужской</Radio>
                        <Radio value='female'>Женский</Radio>
                    </Radio.Group>
                    )}
                />
                <p>{errors.gender?.message}</p>
            </div>

            <div>
                <label>Чекбокс:</label>
                <Controller
                    name='checkbox'
                    control={control}
                    rules={{ required: 'Подтвердите выбор' }}
                    render={({ field }) => <Checkbox {...field}>Я согласен</Checkbox>}
                />
                <p>{errors.checkbox?.message}</p>
            </div>

            <div>
                <label>Дата:</label>
                <Controller
                    name='date'
                    control={control}
                    rules={{ required: 'Выберите дату' }}
                    render={({ field }) => <DatePicker {...field} />}
                />
                <p>{errors.date?.message}</p>
            </div>

            <Button type='primary' htmlType='submit'>
                Отправить
            </Button>
        </form>
    )
}

export default FormWithRHFController;`}
                />
            </Typography>
            <Typography paragraph>
                Пример интеграции <b>React Hook Form</b> + ANTD + yup
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Radio, Checkbox, DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required('Поле обязательно для заполнения').email('Введите корректный email'),
    text: yup.string().required('Поле обязательно для заполнения'),
    number: yup.number().required('Поле обязательно для заполнения'),
    gender: yup.string().required('Выберите пол'),
    checkbox: yup.boolean().oneOf([true], 'Подтвердите выбор'),
    date: yup.date().required('Выберите дату'),
});

const App = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Email" />}
                />
                <p>{errors.email?.message}</p>
            </div>

            <div>
                <label>Текст:</label>
                <Controller
                    name="text"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Текст" />}
                />
                <p>{errors.text?.message}</p>
            </div>

            <div>
                <label>Число:</label>
                <Controller
                    name="number"
                    control={control}
                    render={({ field }) => <Input type="number" {...field} placeholder="Число" />}
                />
                <p>{errors.number?.message}</p>
            </div>

            <div>
                <label>Пол:</label>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                    <Radio.Group {...field}>
                        <Radio value="male">Мужской</Radio>
                        <Radio value="female">Женский</Radio>
                    </Radio.Group>
                    )}
                />
                <p>{errors.gender?.message}</p>
            </div>

            <div>
                <label>Чекбокс:</label>
                <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => <Checkbox {...field}>Я согласен</Checkbox>}
                />
                <p>{errors.checkbox?.message}</p>
            </div>

            <div>
                <label>Дата:</label>
                <Controller
                    name="date"
                    control={control}
                    render={({ field }) => <DatePicker {...field} />}
                />
                <p>{errors.date?.message}</p>
            </div>

            <Button type="primary" htmlType="submit">
                Отправить
            </Button>
        </form>
    );
};

export default App;`}
                />
            </Typography>
            <Typography variant="h6" paragraph>
                Заключение
            </Typography>
            <Typography paragraph>
                С использованием <b>React Hook Form</b>, создание и управление формами становится
                намного проще. Ты можешь легко добавлять поля ввода, устанавливать правила валидации
                и обрабатывать отправку формы.
            </Typography>

            <Typography variant="h5" paragraph>
                Formik
            </Typography>
            <Typography paragraph>
                <b>Formik </b> - это еще одна библиотека для управления формами в приложениях на
                React. Её основная цель - упростить и облегчить процесс работы с формами, сбора
                данных от пользователя и их валидации.
            </Typography>
            <Typography variant="h6" paragraph>
                Основы Использования
            </Typography>
            <Typography paragraph>
                1. Установи библиотеку <b>Formik</b>: <b>npm install formik</b>
            </Typography>
            <Typography paragraph>2. Импорт и cоздание компонента формы:</Typography>
            <Typography paragraph>
                Оберни форму в компонент <b>Formik</b>, передавая начальные значения (initialValues)
                и функцию обработки отправки (onSubmit):
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<Formik
    initialValues={{ username: '', email: '' }}
    onSubmit={(values) => {
        console.log(values);
    }}>
    <Form>
        {/* Элементы формы будут здесь */}
    </Form>
</Formik>`}
                />
            </Typography>
            <Typography paragraph>3. Добавление Полей:</Typography>
            <Typography paragraph>
                Для каждого поля ввода, используй компонент Field, передавая ему имя поля:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<Field type="text" name="username" placeholder="Имя пользователя" />
<ErrorMessage name="username" component="div" />`}
                />
            </Typography>
            <Typography paragraph>4. Валидация:</Typography>
            <Typography paragraph>
                Ты можешь добавить правила валидации прямо в Field, используя атрибут validate:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<Field
    type="email"
    name="email"
    placeholder="Электронная почта"
    validate={(value) => {
        let error;
        if (!value) {
            error = 'Поле обязательно';
        } else if (!/\\S+@\\S+\\.\\S+/.test(value)) {
            error = 'Некорректный адрес';
        }
        return error;
    }}/>
    <ErrorMessage name="email" component="div" />`}
                />
            </Typography>
            <Typography paragraph>5. Обработка Отправки:</Typography>
            <Typography paragraph>
                <b>Formik</b> автоматически обрабатывает отправку формы. Вызов функции onSubmit
                будет происходить только если все поля прошли валидацию.
            </Typography>
            <Typography paragraph>6. Кнопка Отправки:</Typography>
            <Typography paragraph>Добавь кнопку отправки внутри компонента Form:</Typography>
            <Typography paragraph>
                <CodeBlock language={'js'} text={`<button type="submit">Отправить</button>`} />
            </Typography>
            <Typography paragraph>Пример формы</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegistrationForm = () => {
    return (
        <Formik
        initialValues={{ username: '', email: '' }}
        onSubmit={(values) => {
            console.log(values);
        }}
        >
            <Form>
                <Field type="text" name="username" placeholder="Имя пользователя" />
                <ErrorMessage name="username" component="div" />

                <Field
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    validate={(value) => {
                        let error;
                        if (!value) {
                            error = 'Поле обязательно';
                        } else if (!/\\S+@\\S+\\.\\S+/.test(value)) {
                            error = 'Некорректный адрес';
                        }
                        return error;
                    }}
                />
                <ErrorMessage name="email" component="div" />

                <button type="submit">Зарегистрироваться</button>
            </Form>
        </Formik>
    );
}

export default RegistrationForm;`}
                />
            </Typography>
            <Typography variant="h5" paragraph>
                Вывод
            </Typography>
            <Typography paragraph>
                Используй <b>react-hook-form</b>, если тебе нужна более производительная библиотека
                с отложенной валидацией и ты хочешь более гибко управлять компонентами формы.
            </Typography>
            <Typography paragraph>
                Используй <b>formik</b>, если тебе нужен более широкий набор функциональности,
                включая комплексную валидацию, и удобство использования, особенно для сложных форм.
            </Typography>
        </div>
    );
};

export default Forms;
