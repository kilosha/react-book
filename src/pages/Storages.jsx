import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const Storages = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                Про STORAGEs (Local Storage, Session Storage, Local Forage…)
            </Typography>

            <Typography paragraph variant="h5">
                Local Storage
            </Typography>
            <Typography paragraph>
                <b>Local Storage</b> - это механизм, который позволяет веб-приложениям сохранять
                данные локально в браузере. Это означает, что данные будут сохранены после закрытия
                браузера и перезагрузки страницы.
            </Typography>
            <Typography paragraph>
                LocalStorage может быть использован для хранения различных типов данных, таких как
                строки, числа, булевы значения и объекты. Он может быть полезен для хранения
                пользовательских настроек (например темная тема на сайте), предпочтений пользователя
                и других данных, которые могут быть использованы для персонализации
                пользовательского опыта.
            </Typography>
            <Typography paragraph>
                Для записи данных в LocalStorage можно использовать localStorage объекта window в
                JavaScript. Например, чтобы записать строку "Hello, Masha!" в LocalStorage, можно
                использовать:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`localStorage.setItem('myData', 'Hello, Masha!');`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы записываем строку "Hello, Masha!" в LocalStorage с ключом
                "myData".
            </Typography>
            <Typography paragraph>
                Чтобы получить данные из LocalStorage, можно использовать метод getItem() объекта
                localStorage. Например, чтобы получить значение, которое мы только что записали,
                можно использовать следующий код:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const myData = localStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Masha!"`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы получаем значение из LocalStorage с ключом "myData" и записываем
                его в переменную myData.
            </Typography>
            <Typography paragraph>
                Обрати внимание, что данные в LocalStorage хранятся в виде строк. При необходимости
                данные могут быть преобразованы в другие типы данных с помощью методов JavaScript,
                например parseInt() или JSON.parse().
            </Typography>
            <Typography paragraph>
                LocalStorage является безопасным механизмом хранения данных, поскольку данные
                сохраняются локально на компьютере пользователя и не передаются на сервер. Это также
                означает, что данные хранятся в пределах ограниченного объема памяти, доступного для
                браузера.Использование LocalStorage может улучшить пользовательский опыт, позволяя
                сохранять данные между визитами на сайт.
            </Typography>

            <Typography paragraph variant="h5">
                Использование Cookies в React приложениях: Хранилище состояния и работа с ним
            </Typography>
            <Typography paragraph>
                <b>Cookies</b> - это небольшие текстовые файлы, которые веб-сайты отправляют и
                хранят на компьютере пользователя через его веб-браузер. Они представляют собой
                удобный механизм для хранения небольших данных, связанных с пользователем и
                веб-сайтом. В контексте React приложений, cookies могут быть использованы для
                сохранения состояния приложения и обеспечения персонализации.
            </Typography>
            <Typography paragraph variant="h6">
                Зачем нужно хранилище в виде Cookies?
            </Typography>
            <Typography paragraph>
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>
                        1. <b>Сохранение состояния:</b> Cookies позволяют хранить небольшие объемы
                        данных, такие как пользовательские настройки, предпочтения, идентификаторы
                        сессий и другие данные, которые нужно сохранить между различными запросами
                        или сеансами пользователей.
                    </ListItemText>
                    <ListItemText>
                        2. <b>Аутентификация и авторизация:</b> Cookies могут использоваться для
                        хранения токенов аутентификации, позволяя пользователю оставаться
                        аутентифицированным в приложении даже после перезапуска браузера.
                    </ListItemText>
                    <ListItemText>
                        3. <b>Персонализация и отслеживание:</b> Cookies могут использоваться для
                        анализа поведения пользователя на сайте и предоставления
                        персонализированного опыта. Например, рекомендации товаров, основанные на
                        предыдущих покупках.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph variant="h6">
                Отличие от LocalStorage
            </Typography>
            <Typography paragraph>
                Local Storage и Cookies - это два разных механизма хранения данных на стороне
                клиента, и у них есть несколько ключевых различий:
                <List sx={{ margin: '0 20px' }}>
                    <ListItemText>
                        1. <b>Емкость данных:</b> Cookies могут содержать до 4KB данных, в то время
                        как Local Storage позволяет хранить около 5MB данных.
                    </ListItemText>
                    <ListItemText>
                        2. <b>Срок хранения:</b> Cookies имеют срок хранения, который можно указать,
                        в то время как данные в Local Storage хранятся неограниченное время, пока их
                        явно не удалить.
                    </ListItemText>
                    <ListItemText>
                        3. <b>!!!Передача данных!!!:</b> Cookies автоматически включаются в
                        заголовки каждого HTTP-запроса к определенному домену, что делает их более
                        подходящими для некоторых сценариев, таких как авторизация. Local Storage
                        данные не автоматически передаются с каждым запросом.
                    </ListItemText>
                </List>
            </Typography>
            <Typography paragraph variant="h6">
                Работа с Cookies в React
            </Typography>
            <Typography paragraph>
                В React приложениях можно работать с cookies, используя JavaScript API для работы с
                ними или же библиотеку https://www.npmjs.com/package/cookie.
            </Typography>
            <Typography paragraph>Вот как осуществляется базовая работа:</Typography>
            <Typography paragraph>Установка Cookie:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// Установка cookie на определенное количество дней
document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";`}
                />
            </Typography>
            <Typography paragraph>Получение Cookie:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// Получение всех cookie в виде строки
const allCookies = document.cookie;

// Разбивка строки на отдельные cookie
const cookiesArray = allCookies.split("; ");
const cookies = {};
cookiesArray.forEach(cookie => {
    const [name, value] = cookie.split("=");
    cookies[name] = value;
});`}
                />
            </Typography>
            <Typography paragraph>Удаление Cookie:</Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`// Удаление cookie путем установки срока действия в прошлое
document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
                />
            </Typography>
            <Typography paragraph variant="h6">
                Заключение
            </Typography>
            <Typography paragraph>
                Cookies - это удобный механизм хранения небольших данных на стороне клиента, который
                можно использовать в React приложениях для сохранения состояния, аутентификации и
                персонализации. Однако стоит помнить о его ограничениях, таких как ограниченный
                объем данных и срок хранения. При выборе между Cookies и Local Storage важно
                учитывать конкретные требования вашего приложения и его функциональности.
            </Typography>

            <Typography paragraph variant="h5">
                Session Storage
            </Typography>
            <Typography paragraph>
                <b>Session Storage</b> - это еще один механизм хранения данных в браузере, который
                работает так же, как и LocalStorage. Однако Session Storage имеет ряд отличий от
                LocalStorage.
            </Typography>
            <Typography paragraph>
                Session Storage сохраняет данные только на время сеанса браузера. Это означает, что
                данные будут удалены после закрытия браузера или вкладки. Это может быть полезно для
                хранения временных данных, таких как формы, которые не нужно сохранять после
                закрытия браузера.
            </Typography>
            <Typography paragraph>
                Кроме того, Session Storage имеет более ограниченный объем хранения данных, чем
                LocalStorage. Это означает, что он может быть полезен для хранения небольших объемов
                данных, которые нужно сохранить только на время сеанса браузера.
            </Typography>
            <Typography paragraph>СИНТАКСИС ТАКОЙ ЖЕ КАК И У LocalStorage</Typography>
            <Typography paragraph>
                Чтобы записать данные в Session Storage, можно использовать объект sessionStorage в
                JavaScript. Например, чтобы записать строку "Hello, Masha!" в Session Storage, можно
                использовать:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`sessionStorage.setItem('myData', 'Hello, Masha!');`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы записываем строку "Hello, Masha!" в Session Storage с ключом
                "myData".
            </Typography>
            <Typography paragraph>
                Чтобы получить данные из Session Storage, можно использовать метод getItem() объекта
                sessionStorage. Например, чтобы получить значение, которое мы только что записали,
                можно использовать следующий код:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const myData = sessionStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Masha!"`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы получаем значение из Session Storage с ключом "myData" и
                записываем его в переменную myData.
            </Typography>
            <Typography paragraph>
                Обрати внимание, что данные в Session Storage также хранятся в виде строк. При
                необходимости данные могут быть преобразованы в другие типы данных с помощью методов
                JavaScript, например parseInt() или JSON.parse().
            </Typography>
            <Typography paragraph>
                Использование Session Storage может помочь улучшить пользовательский опыт, позволяя
                сохранять временные данные между переходами на разные страницы сайта.
            </Typography>

            <Typography paragraph variant="h5">
                localForage
            </Typography>
            <Typography paragraph>
                <b>localForage</b> - это JavaScript-библиотека, предоставляющая удобный асинхронный
                интерфейс для работы с локальными хранилищами в браузерах. Эта библиотека позволяет
                сохранять данные в браузере пользователя, используя различные хранилища, такие как
                IndexedDB, WebSQL и localStorage, в зависимости от поддержки браузера.
            </Typography>
            <Typography paragraph variant="h6">
                Установка localForage
            </Typography>
            <Typography paragraph>
                <b>Ссылка на описание</b> → https://www.npmjs.com/package/localforage
            </Typography>
            <Typography paragraph>
                Прежде чем начать использовать localForage, необходимо установить эту библиотеку в
                проекте на React. Выполни следующую команду:
            </Typography>
            <Typography paragraph>
                <CodeBlock language={'js'} text={`npm install localforage`} />
            </Typography>
            <Typography paragraph variant="h6">
                Использование localForage в React
            </Typography>
            <Typography paragraph>
                Давайте представим, что у нас есть React-приложение, в котором мы хотим сохранить и
                извлечь пользовательские настройки. Допустим, мы хотим сохранить и извлечь язык,
                выбранный пользователем:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import localforage from 'localforage';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    useEffect(() => {
        // Извлекаем сохраненный язык при загрузке компонента
        localforage.getItem('language').then(language => {
            if (language) {
                setSelectedLanguage(language);
            }
        });
    }, [ ]);

    const handleLanguageChange = (language) => {
        // Сохраняем выбранный язык в локальном хранилище
        localforage.setItem('language', language).then(() => {
            setSelectedLanguage(language);
        });
    };

    return (
        <>
        <h1>Настройки</h1>
        <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
            <option value="en">Английский</option>
            <option value="fr">Французский</option>
            <option value="es">Испанский</option>
        </select>
        </>
    );
};

export default App;`}
                />
            </Typography>
            <Typography paragraph>
                Эта библиотека позволяет асинхронно сохранять и извлекать данные из различных
                хранилищ, обеспечивая более эффективное управление данными на стороне клиента.
                Работа с localForage интуитивно понятна и удобна для сохранения пользовательских
                настроек, кэширования данных и других задач, требующих локального хранения данных.
            </Typography>
            <Typography paragraph>
                P.S Еще существуют IndexedDB и облачные хранилища (Cloud Storage).
            </Typography>
        </div>
    );
};

export default Storages;
