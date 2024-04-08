import { Typography, List, ListItemText } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

const ReactRouter = () => {
    return (
        <div>
            <Typography variant="h4" paragraph>
                Роутинг в React с помощью React Router V6
            </Typography>
            <Typography variant="h5" paragraph>
                Значение роутинга в веб-приложениях
            </Typography>
            <Typography paragraph>
                Роутинг играет важную роль в разработке веб-приложений, обеспечивая навигацию и
                переходы между различными страницами и разделами приложения.
            </Typography>
            <Typography paragraph>
                Основная цель роутинга в веб-приложениях заключается в том, чтобы позволить
                пользователям перемещаться по различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ страницы.
                Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать новую
                страницу, роутинг позволяет
                <b> динамически</b> обновлять только необходимые компоненты или данные в
                соответствии с выбранным маршрутом. Это создает более плавный пользовательский опыт,
                уменьшает время загрузки и позволяет разработчикам создавать богатые и интерактивные
                приложения.
            </Typography>
            <Typography paragraph>
                Кроме того, роутинг обеспечивает возможность передачи параметров через URL, что
                позволяет приложению динамически адаптироваться к разным условиям и сценариям
                использования. Например, приложение может отображать разные данные или компоненты на
                основе параметров маршрута, таких как идентификатор пользователя или идентификатор
                записи.
            </Typography>
            <Typography variant="h5" paragraph>
                Установка и настройка React Router Dom v6
            </Typography>
            <Typography paragraph>
                Для установки React Router Dom v6 с помощью npm выполни следующую команду:{' '}
                <b>npm install react-router-dom@next</b>.
            </Typography>
            <Typography paragraph>
                После установки React Router Dom v6 ты можешь начать использовать его в проекте. Для
                этого ты должен импортировать необходимые компоненты и обернуть приложение в
                <b> BrowserRouter</b>. <b>BrowserRouter</b> - это компонент, который оборачивает
                ваше приложение и предоставляет контекст для маршрутизации. Он используется для
                настройки основного маршрутизатора в приложении:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);`}
                />
            </Typography>
            <Typography paragraph>
                Здесь оборачивается компонент App (главный компонент) в компонент
                <b> BrowserRouter</b>. Это позволяет React Router Dom управлять маршрутизацией
                внутри приложения.
            </Typography>
            <Typography paragraph>
                Теперь, когда импортировал и использовал <b>BrowserRouter</b>, ты готов начать
                использовать другие компоненты React Router Dom для определения маршрутов, создания
                ссылок и управления навигацией.
            </Typography>
            <Typography variant="h5" paragraph>
                Основные компоненты React Router Dom v6
            </Typography>
            <Typography variant="h6" paragraph>
                Routes
            </Typography>
            <Typography paragraph>
                <b>Routes</b> - это компонент, который содержит определения маршрутов и
                соответствующих им компонентов. Вы определяете маршруты внутри компонента
                <b> Routes</b>, используя элемент <b>Route</b>.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Routes, Route } from 'react-router-dom';

// ...

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes>`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем <b>Routes</b> для определения трех маршрутов: /, /about
                и /contact. Каждый маршрут связан с соответствующим компонентом (Home, About и
                Contact). При совпадении пути в URL с определенными путями маршрутов будет отображен
                соответствующий компонент.
            </Typography>

            <Typography variant="h6" paragraph>
                Route
            </Typography>
            <Typography paragraph>
                <b>Route</b> - это компонент, который определяет отдельные маршруты внутри
                <b> Routes</b> и связанные с ними компоненты. Каждый <b>Route</b> имеет свой путь
                URL(path) и элемент (element), который будет отображаться, когда маршрут совпадает.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Routes, Route } from 'react-router-dom';

// ...

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} /
</Routes>`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере каждый <b>Route</b> имеет свой путь (path) и связанный с ним элемент
                (element), который будет отображаться, когда маршрут совпадает.Также можно
                использовать дополнительные атрибуты, такие как exact для точного совпадения пути и
                (*) fallback для отображения компонента-заглушки, если не найден ни один из
                маршрутов. В этом примере мы добавили <b>Route</b> с путем "*", который
                соответствует любому несовпадающему маршруту. Он будет отображать компонент
                NotFound, если не найден ни один из определенных маршрутов.
            </Typography>

            <Typography variant="h6" paragraph>
                Link
            </Typography>
            <Typography paragraph>
                <b>Link</b> используется для создания ссылок для навигации между маршрутами в
                приложении.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Link } from 'react-router-dom';

// ..

<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы создаем три ссылки: "Главная", "О нас" и "Контакты". Когда
                пользователь кликает на ссылку, он будет перенаправлен к соответствующему маршруту.
            </Typography>

            <Typography variant="h6" paragraph>
                NavLink
            </Typography>
            <Typography paragraph>
                <b>NavLink</b> позволяет создавать и стилизировать активные ссылки, добавляя класс
                "active" к текущему активному маршруту.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { NavLink } from 'react-router-dom';

// ...

<NavLink to="/" activeClassName="active">Главная</NavLink>
<NavLink to="/about" activeClassName="active">О нас</NavLink>
<NavLink to="/contact" activeClassName="active">Контакты</NavLink>`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы также создаем три ссылки, но используем <b>NavLink</b>. Атрибут to
                указывает путь маршрута, а activeClassName добавляет класс "active" к активному
                маршруту. Мы можем использовать этот класс для стилизации и выделения текущего
                активного маршрута.
            </Typography>
            <Typography paragraph>
                Например, если пользователь находится на странице "О нас", то ссылка "О нас" будет
                иметь класс "active" и мы можем применить соответствующие стили для выделения
                активной ссылки.
            </Typography>
            <Typography paragraph>
                Основное отличие между <b>Link</b> и <b>NavLink</b> заключается в возможности
                создания активных ссылок с помощью <b>NavLink</b>. <b>NavLink</b> добавляет класс
                "active" к ссылке, когда соответствующий маршрут активен.
            </Typography>

            <Typography variant="h6" paragraph>
                useNavigate
            </Typography>
            <Typography paragraph>
                <b>useNavigate</b> - это хук, который позволяет перенаправлять пользователя на
                другие маршруты в React Router Dom v6.
            </Typography>
            <Typography paragraph>
                Когда ты используешь <b>useNavigate</b>, ты можешь получить функцию navigate и
                использовать ее для перенаправления пользователя на другой маршрут. Вот пример:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { useNavigate } from 'react-router-dom';

// ...

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <div>
            <h1>Домашняя страница</h1>
            <button onClick={handleClick}>Перейти к странице О нас</button>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем <b>useNavigate</b>, чтобы получить функцию navigate.
                При клике на кнопку, мы вызываем navigate и передаем ей путь '/about', чтобы
                перенаправить пользователя на страницу "О нас".
            </Typography>

            <Typography variant="h6" paragraph>
                useParams
            </Typography>
            <Typography paragraph>
                <b>useParams</b> - это хук, который используется для получения параметров маршрута,
                переданных через URL. Он позволяет вам извлекать и использовать динамические данные
                из пути маршрута.
            </Typography>
            <Typography paragraph>
                Когда ты используешь <b>useParams</b>, ты можешь получить объект params, который
                содержит значения параметров из текущего маршрута. Вот пример:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { useParams } from 'react-router-dom';

// ...

const UserProfile = () => {
    const params = useParams();

    return (
        <div>
            <h1>Профиль пользователя: {params.username}</h1>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем <b>useParams</b>, чтобы получить объект params. Здесь
                мы предполагаем, что в маршруте у нас есть параметр :username, и мы выводим его
                значение на странице профиля пользователя.
            </Typography>

            <Typography variant="h6" paragraph>
                useLocation
            </Typography>
            <Typography paragraph>
                <b>useLocation</b> - это хук, который позволяет получать информацию о текущем URL и
                его параметрах в React Router Dom v6.
            </Typography>
            <Typography paragraph>
                Когда ты используешь <b>useLocation</b>, ты можешь получить объект location, который
                содержит информацию о текущем пути, параметрах и других деталях URL. Вот пример:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { useLocation } from 'react-router-dom';

// ...

const Page = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Текущий URL: {location.pathname}</h1>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем <b>useLocation</b>, чтобы получить объект location.
                Здесь мы выводим путь (pathname) текущего URL на странице.
            </Typography>

            <Typography variant="h6" paragraph>
                Outlet
            </Typography>
            <Typography paragraph>
                <b>Outlet</b> - играет ключевую роль в отображении компонентов, соответствующих
                текущему маршруту.
            </Typography>
            <Typography paragraph>
                Когда ты используешь <b>Outlet</b>, он служит контейнером для отображения
                компонентов, которые соответствуют маршрутам в твоем приложении. Он заменяет
                <b> Switch</b> из версии 5 и автоматически выбирает и рендерит компонент,
                соответствующий текущему маршруту. Вот пример:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Outlet } from 'react-router-dom';

// ...

const App = () => {
    return (
        <div>
            <h1>Мое приложение</h1>
            <nav>
                {/* Навигационные ссылки */}
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем <b>Outlet</b> внутри компонента App. <b> Outlet </b>
                является местом, где будут отображаться компоненты, соответствующие текущему
                маршруту.
            </Typography>
            <Typography paragraph>
                Когда пользователь переходит по разным маршрутам, <b>Outlet</b> автоматически
                рендерит компоненты, связанные с этими маршрутами. Например, если текущий маршрут -
                "/about", то компонент, соответствующий этому маршруту, будет отображен внутри
                <b> Outlet</b>.
            </Typography>
            <Typography paragraph>
                Важно отметить, что <b>Outlet</b> должен быть расположен внутри компонента, который
                уже является частью маршрутизации, например, внутри компонента, который используется
                в маршруте.
            </Typography>
            <Typography paragraph>
                Например, если у тебя есть маршрут "/about", определенный с использованием
                компонента AboutPage, то <b>Outlet</b> должен быть включен внутри AboutPage для
                отображения компонентов, соответствующих вложенным маршрутам внутри "/about".
            </Typography>
            <Typography paragraph>
                Использование <b>Outlet</b> позволяет тебе динамически отображать компоненты на
                основе текущего маршрута без необходимости явно указывать их в коде.
            </Typography>

            <Typography variant="h5" paragraph>
                Простые маршруты и компоненты
            </Typography>
            <Typography paragraph>
                Для определения маршрутов в нашем приложении мы используем компонент <b>Routes</b>.
                Он позволяет нам указать путь и соответствующий компонент для отображения.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Мое приложение</h1>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                Каждый <b>Route</b> имеет свойство path, которое указывает путь маршрута, и свойство
                element, которое указывает компонент, который нужно отобразить при совпадении
                маршрута.
            </Typography>
            <Typography paragraph>
                Таким образом, при переходе на путь "/" будет отображаться компонент HomePage, при
                переходе на путь "/about" - AboutPage, а при переходе на путь "/contact" -
                ContactPage.
            </Typography>
            <Typography variant="h6" paragraph>
                Пример компонента
            </Typography>
            <Typography paragraph>
                Вот пример простого компонента HomePage, который может быть отображен при совпадении
                пути "/":
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const HomePage = () => {
    return (
        <div>
            <h2>Добро пожаловать на главную страницу!</h2>
            <p>Здесь ты найдешь информацию о нашем приложении.</p>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере компонент HomePage просто отображает приветственное сообщение и
                некоторую информацию о приложении.
            </Typography>
            <Typography paragraph>
                Аналогичным образом, ты можешь создавать и определять другие компоненты, такие как
                AboutPage или ContactPage, и связывать их с соответствующими путями, чтобы
                отображать их при переходе на эти пути.
            </Typography>

            <Typography variant="h5" paragraph>
                Параметры маршрутов: передача динамических данных через URL
            </Typography>
            <Typography paragraph>
                Часто в веб-приложениях нам требуется передавать динамические данные через URL.
                Например, мы можем хотеть отображать подробности конкретного элемента списка, где
                каждый элемент имеет уникальный идентификатор.
            </Typography>
            <Typography paragraph>
                В React Router Dom v6 мы можем использовать параметры маршрутов для передачи таких
                данных.
            </Typography>
            <Typography variant="h6" paragraph>
                Определение параметров маршрутов
            </Typography>
            <Typography paragraph>
                Чтобы определить параметр маршрута, мы используем двоеточие (:) перед именем
                параметра в пути маршрута. Например:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<Route path="/users/:id" element={<UserDetailPage />} />`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы определяем маршрут "/users/:id", где :id является параметром
                маршрута. Значение этого параметра будет динамически меняться в зависимости от
                выбранного пользователя.
            </Typography>
            <Typography variant="h6" paragraph>
                Использование параметров маршрутов
            </Typography>
            <Typography paragraph>
                Для доступа к значению параметра маршрута мы можем использовать хук
                <b> useParams()</b>. Он позволяет нам получить объект с значениями всех параметров
                маршрута.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Детали пользователя с ID {id}</h2>
            {/* Дополнительный контент */}
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы используем <b>useParams()</b> для получения значения параметра id.
                Затем мы можем использовать это значение внутри компонента UserDetailPage, например,
                для отображения деталей пользователя с указанным идентификатором.
            </Typography>
            <Typography variant="h6" paragraph>
                Пример использования параметров маршрутов
            </Typography>
            <Typography paragraph>
                Вот пример, как можно использовать параметры маршрутов вместе с другими
                компонентами:
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`<Routes>
    <Route path="/users/:id" element={<UserDetailPage />} />
    <Route path="/products/:productId" element={<ProductDetailPage />} />
</Routes>`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере мы определяем два маршрута, где каждый имеет свой параметр: id для
                пользователей и productId для продуктов. Мы связываем эти маршруты с
                соответствующими компонентами, которые будут отображаться при совпадении маршрутов.
            </Typography>

            <Typography variant="h5" paragraph>
                Вложенные маршруты: создание иерархии маршрутов
            </Typography>
            <Typography paragraph>
                В некоторых случаях нам нужно создать иерархию маршрутов, где определенные маршруты
                будут вложены в другие. Например, мы можем иметь главную страницу, на которой есть
                навигационное меню, и каждый пункт меню будет отображать свой собственный
                подмаршрут.
            </Typography>
            <Typography variant="h6" paragraph>
                Определение вложенных маршрутов
            </Typography>
            <Typography paragraph>
                Для создания вложенных маршрутов мы используем компонент <b>Routes</b> и определяем
                внутри него другие компоненты <b>Route</b>. Вложенные <b>Route</b> должны быть
                вложены в соответствующий родительский маршрут.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Мое приложение</h1>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />}>
                    <Route path="/" element={<AllProducts />} />
                    <Route path="/:id" element={<ProductDetail />} />
                </Route>
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере у нас есть родительский маршрут "/products", который содержит два
                вложенных маршрута: "/" и "/:id". При переходе на путь "/products" будет
                отображаться компонент ProductsPage, а при переходе на путь "/products/:id" будет
                отображаться компонент ProductDetail.
            </Typography>
            <Typography variant="h6" paragraph>
                Использование вложенных маршрутов
            </Typography>
            <Typography paragraph>
                Для использования вложенных маршрутов внутри компонента ProductsPage мы используем
                компонент <b>Outlet</b>.
            </Typography>
            <Typography paragraph>
                <b>Outlet</b> определяет место, где будут отображаться вложенные маршруты.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`const ProductsPage = () => {
    return (
        <div>
            <h2>Страница продуктов</h2>
            <ul>
                <li>
                    <Link to="/">Все продукты</Link>
                </li>
                <li>
                    <Link to="/products/1">Продукт 1</Link>
                </li>
                <li>
                    <Link to="/products/2">Продукт 2</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере компонент ProductsPage содержит ссылки на различные продукты.
                Компонент <b>Outlet</b> определяет место, где будут отображаться вложенные маршруты,
                т.е. компоненты AllProducts и ProductDetail в нашем случае.
            </Typography>

            <Typography variant="h5" paragraph>
                PrivateRoute: Защита маршрутов
            </Typography>
            <Typography paragraph>
                В некоторых случаях может потребоваться ограничить доступ к определенным маршрутам и
                дать доступ к ним только для аутентифицированных пользователей. Для этого можно
                создать компонент <b>PrivateRoute</b>, который будет проверять статус аутентификации
                пользователя и редиректить его в случае необходимости.
            </Typography>
            <Typography variant="h6" paragraph>
                Создание компонента PrivateRoute
            </Typography>
            <Typography paragraph>
                Для создания компонента <b>PrivateRoute</b> можно воспользоваться компонентом Route
                из React Router Dom v6 и добавить логику проверки аутентификации.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ ...props }) => {
    const isAuth = // Логика проверки аутентификации пользователя
    return isAuth ? <Route {...props} /> : <Navigate to="/login" replace />;
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере <b>PrivateRoute</b> проверяет аутентифицирован ли пользователь.
                Например проверит наличие token в LocalStorage. Если пользователь аутентифицирован,
                компонент <b>PrivateRoute</b> отображает <b>Route</b> с переданными пропсами, в
                противном случае происходит редирект на страницу входа с помощью компонента
                <b> Navigate</b>.
            </Typography>
            <Typography variant="h6" paragraph>
                Использование компонента PrivateRoute
            </Typography>
            <Typography paragraph>
                Теперь можно использовать компонент <b>PrivateRoute</b> для защиты маршрутов,
                доступных только для аутентифицированных пользователей.
            </Typography>
            <Typography paragraph>
                <CodeBlock
                    language={'js'}
                    text={`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <PrivateRoute path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
};`}
                />
            </Typography>
            <Typography paragraph>
                В этом примере используется <b>PrivateRoute</b> для маршрута "/dashboard". Если
                пользователь не аутентифицирован, он будет перенаправлен на страницу входа "/login".
                Если пользователь аутентифицирован, он получит доступ к защищенному маршруту
                "/dashboard".
            </Typography>

            <Typography variant="h5" paragraph>
                Итого:
                <List sx={{ margin: '0 20px', listStyle: 'disc' }}>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Роутинг является важной частью веб-приложений, которая позволяет управлять
                        навигацией и отображением различных компонентов на основе URL.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Библиотека <b>react-router-dom</b> предоставляет инструменты для реализации
                        роутинга в приложениях на React.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Основные компоненты react-router-dom v6 включают
                        <b> BrowserRouter</b>, <b>Routes</b>, <b>Route</b>, <b>Link</b>,
                        <b> NavLink</b>, <b> useNavigate</b>,<b> useParams</b>, <b> useLocation</b>,
                        и<b> Outlet</b>.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Routes</b> и <b>Route</b> позволяют нам определить маршруты и
                        соответствующие компоненты.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        <b>Link</b> и <b>NavLink</b> используются для создания навигационных ссылок.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Хуки <b>useNavigate</b>, <b>useParams</b> и <b>useLocation</b> предоставляют
                        дополнительные возможности для работы с маршрутами и URL.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Компонент <b>Outlet</b> используется для рендеринга вложенных компонентов,
                        связанных с маршрутами.
                    </ListItemText>
                    <ListItemText sx={{ display: 'list-item' }}>
                        Компонент <b>PrivateRoute</b> позволяет ограничить доступ к определенным
                        маршрутам только для авторизированных пользователей.
                    </ListItemText>
                </List>
            </Typography>
        </div>
    );
};

export default ReactRouter;
