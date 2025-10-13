export interface Answer {
  answer: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface DifficultyLevel {
  title: string;
  base: Question[];
  medium: Question[];
  advanced: Question[];
}

export interface ITestQuestions {
  readonly [key: string]: DifficultyLevel;
}

export const testQuestions: ITestQuestions = {
  html: {
    title: "HTML",
    base: [
      {
        question: "Что такое HTML?",
        answers: [
          { answer: "Язык разметки гипертекста", isCorrect: true },
          { answer: "Язык программирования", isCorrect: false },
          { answer: "Фреймворк для создания сайтов", isCorrect: false },
          { answer: "База данных", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для создания гиперссылки?",
        answers: [
          { answer: "<a>", isCorrect: true },
          { answer: "<link>", isCorrect: false },
          { answer: "<href>", isCorrect: false },
          { answer: "<url>", isCorrect: false },
        ],
      },
      {
        question: "Какой тег задаёт заголовок страницы в браузере?",
        answers: [
          { answer: "<title>", isCorrect: true },
          { answer: "<header>", isCorrect: false },
          { answer: "<head>", isCorrect: false },
          { answer: "<meta>", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для вставки изображения?",
        answers: [
          { answer: "<img>", isCorrect: true },
          { answer: "<image>", isCorrect: false },
          { answer: "<picture>", isCorrect: false },
          { answer: "<src>", isCorrect: false },
        ],
      },
      {
        question: "Что делает атрибут alt в теге <img>?",
        answers: [
          {
            answer: "Добавляет альтернативный текст для изображения",
            isCorrect: true,
          },
          { answer: "Устанавливает высоту изображения", isCorrect: false },
          { answer: "Определяет путь к изображению", isCorrect: false },
          { answer: "Делает изображение кликабельным", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для создания списка с маркерами?",
        answers: [
          { answer: "<ul>", isCorrect: true },
          { answer: "<ol>", isCorrect: false },
          { answer: "<li>", isCorrect: false },
          { answer: "<list>", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для нумерованного списка?",
        answers: [
          { answer: "<ol>", isCorrect: true },
          { answer: "<ul>", isCorrect: false },
          { answer: "<dl>", isCorrect: false },
          { answer: "<li>", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для вставки таблицы?",
        answers: [
          { answer: "<table>", isCorrect: true },
          { answer: "<tab>", isCorrect: false },
          { answer: "<tr>", isCorrect: false },
          { answer: "<td>", isCorrect: false },
        ],
      },
      {
        question:
          "Какой атрибут используется для задания ссылки на изображение?",
        answers: [
          { answer: "src", isCorrect: true },
          { answer: "href", isCorrect: false },
          { answer: "alt", isCorrect: false },
          { answer: "path", isCorrect: false },
        ],
      },
      {
        question: "Что делает тег <br>?",
        answers: [
          { answer: "Добавляет перенос строки", isCorrect: true },
          { answer: "Создаёт горизонтальную линию", isCorrect: false },
          { answer: "Добавляет абзац", isCorrect: false },
          { answer: "Создаёт отступ", isCorrect: false },
        ],
      },
    ],
    medium: [
      {
        question: "Для чего используется тег <meta>?",
        answers: [
          { answer: "Для хранения метаданных о документе", isCorrect: true },
          { answer: "Для отображения текста", isCorrect: false },
          { answer: "Для подключения изображений", isCorrect: false },
          { answer: "Для создания ссылок", isCorrect: false },
        ],
      },
      {
        question: 'Что делает атрибут target="_blank" в теге <a>?',
        answers: [
          { answer: "Открывает ссылку в новой вкладке", isCorrect: true },
          { answer: "Открывает ссылку в том же окне", isCorrect: false },
          { answer: "Добавляет всплывающее окно", isCorrect: false },
          { answer: "Закрывает вкладку", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для вставки видео на страницу?",
        answers: [
          { answer: "<video>", isCorrect: true },
          { answer: "<media>", isCorrect: false },
          { answer: "<movie>", isCorrect: false },
          { answer: "<source>", isCorrect: false },
        ],
      },
      {
        question:
          "Какой атрибут тега <form> указывает адрес для отправки данных?",
        answers: [
          { answer: "action", isCorrect: true },
          { answer: "method", isCorrect: false },
          { answer: "target", isCorrect: false },
          { answer: "submit", isCorrect: false },
        ],
      },
      {
        question: "Какой атрибут указывает метод отправки формы?",
        answers: [
          { answer: "method", isCorrect: true },
          { answer: "action", isCorrect: false },
          { answer: "type", isCorrect: false },
          { answer: "post", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для выделения важного текста?",
        answers: [
          { answer: "<strong>", isCorrect: true },
          { answer: "<b>", isCorrect: false },
          { answer: "<em>", isCorrect: false },
          { answer: "<u>", isCorrect: false },
        ],
      },
      {
        question: "Какой тег определяет заголовок первого уровня?",
        answers: [
          { answer: "<h1>", isCorrect: true },
          { answer: "<head>", isCorrect: false },
          { answer: "<title>", isCorrect: false },
          { answer: "<header>", isCorrect: false },
        ],
      },
      {
        question: "Как вставить комментарий в HTML?",
        answers: [
          { answer: "<!-- комментарий -->", isCorrect: true },
          { answer: "// комментарий", isCorrect: false },
          { answer: "# комментарий", isCorrect: false },
          { answer: "/* комментарий */", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для определения области навигации?",
        answers: [
          { answer: "<nav>", isCorrect: true },
          { answer: "<menu>", isCorrect: false },
          { answer: "<section>", isCorrect: false },
          { answer: "<aside>", isCorrect: false },
        ],
      },
      {
        question: "Что делает тег <hr>?",
        answers: [
          { answer: "Добавляет горизонтальную линию", isCorrect: true },
          { answer: "Добавляет перенос строки", isCorrect: false },
          { answer: "Создаёт таблицу", isCorrect: false },
          { answer: "Создаёт список", isCorrect: false },
        ],
      },
    ],
    advanced: [
      {
        question: "Что такое семантическая разметка в HTML?",
        answers: [
          {
            answer: "Использование тегов по смыслу их содержания",
            isCorrect: true,
          },
          { answer: "Добавление CSS-оформления", isCorrect: false },
          { answer: "Использование нестандартных тегов", isCorrect: false },
          { answer: "Сжатие HTML-файла", isCorrect: false },
        ],
      },
      {
        question: "Для чего используется атрибут aria-label?",
        answers: [
          { answer: "Для улучшения доступности элементов", isCorrect: true },
          { answer: "Для добавления всплывающей подсказки", isCorrect: false },
          { answer: "Для задания ID элемента", isCorrect: false },
          { answer: "Для подключения стилей", isCorrect: false },
        ],
      },
      {
        question:
          "Какой элемент используется для вставки другого HTML-документа на страницу?",
        answers: [
          { answer: "<iframe>", isCorrect: true },
          { answer: "<embed>", isCorrect: false },
          { answer: "<object>", isCorrect: false },
          { answer: "<include>", isCorrect: false },
        ],
      },
      {
        question: "Что делает тег <template>?",
        answers: [
          {
            answer: "Хранит HTML-код, не отображаемый на странице",
            isCorrect: true,
          },
          { answer: "Создаёт шаблон для e-mail", isCorrect: false },
          { answer: "Добавляет повторяющийся элемент", isCorrect: false },
          { answer: "Создаёт форму", isCorrect: false },
        ],
      },
      {
        question:
          "Какой тег используется для определения основного содержимого страницы?",
        answers: [
          { answer: "<main>", isCorrect: true },
          { answer: "<body>", isCorrect: false },
          { answer: "<section>", isCorrect: false },
          { answer: "<article>", isCorrect: false },
        ],
      },
      {
        question: "Что делает атрибут crossorigin у тега <script>?",
        answers: [
          {
            answer: "Указывает, как обрабатываются кросс-доменные запросы",
            isCorrect: true,
          },
          { answer: "Запрещает загрузку внешних скриптов", isCorrect: false },
          { answer: "Добавляет токен авторизации", isCorrect: false },
          { answer: "Отключает CORS", isCorrect: false },
        ],
      },
      {
        question:
          "Какой элемент используется для подключения внешнего JavaScript файла?",
        answers: [
          { answer: "<script src='...'>", isCorrect: true },
          { answer: "<link>", isCorrect: false },
          { answer: "<js>", isCorrect: false },
          { answer: "<include>", isCorrect: false },
        ],
      },
      {
        question: "Для чего используется тег <noscript>?",
        answers: [
          {
            answer: "Отображает контент, если JavaScript отключен",
            isCorrect: true,
          },
          { answer: "Отключает выполнение скриптов", isCorrect: false },
          { answer: "Скрывает элементы", isCorrect: false },
          { answer: "Добавляет inline-скрипт", isCorrect: false },
        ],
      },
      {
        question:
          "Какой тег используется для группировки логически связанных элементов формы?",
        answers: [
          { answer: "<fieldset>", isCorrect: true },
          { answer: "<group>", isCorrect: false },
          { answer: "<formset>", isCorrect: false },
          { answer: "<section>", isCorrect: false },
        ],
      },
      {
        question: "Что делает элемент <picture>?",
        answers: [
          {
            answer:
              "Позволяет использовать разные изображения для разных устройств",
            isCorrect: true,
          },
          { answer: "Добавляет фон", isCorrect: false },
          { answer: "Создаёт галерею", isCorrect: false },
          { answer: "Добавляет подпись под картинкой", isCorrect: false },
        ],
      },
    ],
  },
  css: {
    title: "CSS",
    base: [
      {
        question: "Что такое CSS?",
        answers: [
          {
            answer: "Язык описания внешнего вида HTML-документа",
            isCorrect: true,
          },
          { answer: "Язык программирования", isCorrect: false },
          { answer: "Библиотека для JavaScript", isCorrect: false },
          { answer: "Формат хранения данных", isCorrect: false },
        ],
      },
      {
        question:
          "Какой атрибут используется для добавления CSS в HTML элемент?",
        answers: [
          { answer: "style", isCorrect: true },
          { answer: "css", isCorrect: false },
          { answer: "design", isCorrect: false },
          { answer: "format", isCorrect: false },
        ],
      },
      {
        question: "Какой тег используется для подключения внешнего CSS-файла?",
        answers: [
          { answer: "<link>", isCorrect: true },
          { answer: "<style>", isCorrect: false },
          { answer: "<css>", isCorrect: false },
          { answer: "<head>", isCorrect: false },
        ],
      },
      {
        question: "Какой символ используется для обозначения класса в CSS?",
        answers: [
          { answer: ".", isCorrect: true },
          { answer: "#", isCorrect: false },
          { answer: "@", isCorrect: false },
          { answer: "$", isCorrect: false },
        ],
      },
      {
        question: "Какой символ используется для обозначения ID в CSS?",
        answers: [
          { answer: "#", isCorrect: true },
          { answer: ".", isCorrect: false },
          { answer: "*", isCorrect: false },
          { answer: "@", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство задаёт цвет текста?",
        answers: [
          { answer: "color", isCorrect: true },
          { answer: "text-color", isCorrect: false },
          { answer: "font-color", isCorrect: false },
          { answer: "background-color", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство отвечает за размер шрифта?",
        answers: [
          { answer: "font-size", isCorrect: true },
          { answer: "text-size", isCorrect: false },
          { answer: "size", isCorrect: false },
          { answer: "font-weight", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство задаёт цвет фона?",
        answers: [
          { answer: "background-color", isCorrect: true },
          { answer: "color", isCorrect: false },
          { answer: "fill", isCorrect: false },
          { answer: "bg-color", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство отвечает за выравнивание текста?",
        answers: [
          { answer: "text-align", isCorrect: true },
          { answer: "align", isCorrect: false },
          { answer: "justify", isCorrect: false },
          { answer: "font-align", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство делает текст жирным?",
        answers: [
          { answer: "font-weight", isCorrect: true },
          { answer: "font-style", isCorrect: false },
          { answer: "text-transform", isCorrect: false },
          { answer: "text-decoration", isCorrect: false },
        ],
      },
    ],
    medium: [
      {
        question: "Что делает свойство display: flex?",
        answers: [
          {
            answer: "Создаёт гибкий контейнер для выравнивания элементов",
            isCorrect: true,
          },
          { answer: "Добавляет сетку", isCorrect: false },
          { answer: "Скрывает элемент", isCorrect: false },
          { answer: "Изменяет прозрачность", isCorrect: false },
        ],
      },
      {
        question:
          "Какой селектор выбирает все элементы с классом 'btn' внутри элемента div?",
        answers: [
          { answer: "div .btn", isCorrect: true },
          { answer: ".div.btn", isCorrect: false },
          { answer: "div#btn", isCorrect: false },
          { answer: "div:btn", isCorrect: false },
        ],
      },
      {
        question: "Что делает свойство position: absolute?",
        answers: [
          {
            answer:
              "Размещает элемент относительно ближайшего позиционированного родителя",
            isCorrect: true,
          },
          { answer: "Фиксирует элемент при прокрутке", isCorrect: false },
          { answer: "Убирает элемент из потока документа", isCorrect: false },
          { answer: "Выравнивает по центру", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство задаёт отступы внутри элемента?",
        answers: [
          { answer: "padding", isCorrect: true },
          { answer: "margin", isCorrect: false },
          { answer: "border", isCorrect: false },
          { answer: "space", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство задаёт отступы вне элемента?",
        answers: [
          { answer: "margin", isCorrect: true },
          { answer: "padding", isCorrect: false },
          { answer: "gap", isCorrect: false },
          { answer: "border-spacing", isCorrect: false },
        ],
      },
      {
        question: "Что делает свойство overflow: hidden?",
        answers: [
          {
            answer: "Обрезает содержимое, выходящее за границы блока",
            isCorrect: true,
          },
          { answer: "Добавляет скролл", isCorrect: false },
          { answer: "Выравнивает содержимое по центру", isCorrect: false },
          { answer: "Скрывает блок полностью", isCorrect: false },
        ],
      },
      {
        question:
          "Какое значение display превращает элемент в строчно-блочный?",
        answers: [
          { answer: "inline-block", isCorrect: true },
          { answer: "block", isCorrect: false },
          { answer: "inline", isCorrect: false },
          { answer: "flex", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство позволяет изменить прозрачность элемента?",
        answers: [
          { answer: "opacity", isCorrect: true },
          { answer: "visibility", isCorrect: false },
          { answer: "filter", isCorrect: false },
          { answer: "alpha", isCorrect: false },
        ],
      },
      {
        question: "Какой селектор выберет первый элемент списка?",
        answers: [
          { answer: "li:first-child", isCorrect: true },
          { answer: "li:first", isCorrect: false },
          { answer: "li:first-of", isCorrect: false },
          { answer: "li:one", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство отвечает за тень у блока?",
        answers: [
          { answer: "box-shadow", isCorrect: true },
          { answer: "text-shadow", isCorrect: false },
          { answer: "filter-shadow", isCorrect: false },
          { answer: "shadow", isCorrect: false },
        ],
      },
    ],
    advanced: [
      {
        question: "Что делает свойство will-change?",
        answers: [
          {
            answer:
              "Подсказывает браузеру, какие свойства могут измениться для оптимизации",
            isCorrect: true,
          },
          { answer: "Изменяет поведение анимаций", isCorrect: false },
          { answer: "Удаляет кеш стилей", isCorrect: false },
          { answer: "Меняет приоритет стилей", isCorrect: false },
        ],
      },
      {
        question: "Для чего используется @keyframes?",
        answers: [
          { answer: "Для создания анимаций", isCorrect: true },
          { answer: "Для объявления переменных", isCorrect: false },
          { answer: "Для подключения шрифтов", isCorrect: false },
          { answer: "Для задания брейкпоинтов", isCorrect: false },
        ],
      },
      {
        question: "Что делает свойство mix-blend-mode?",
        answers: [
          {
            answer: "Определяет, как элемент смешивается с фоном",
            isCorrect: true,
          },
          { answer: "Меняет цвет текста", isCorrect: false },
          { answer: "Смешивает цвета градиентов", isCorrect: false },
          { answer: "Определяет прозрачность", isCorrect: false },
        ],
      },
      {
        question: "Что делает функция calc() в CSS?",
        answers: [
          {
            answer: "Позволяет выполнять вычисления прямо в CSS",
            isCorrect: true,
          },
          { answer: "Вычисляет цвета", isCorrect: false },
          { answer: "Создаёт градиент", isCorrect: false },
          { answer: "Задаёт шрифт", isCorrect: false },
        ],
      },
      {
        question: "Что делает свойство backdrop-filter?",
        answers: [
          { answer: "Применяет фильтр к фону за элементом", isCorrect: true },
          { answer: "Добавляет тень за элементом", isCorrect: false },
          { answer: "Размывает сам элемент", isCorrect: false },
          { answer: "Создаёт фон с градиентом", isCorrect: false },
        ],
      },
      {
        question: "Что делает значение grid-template-areas?",
        answers: [
          { answer: "Определяет области сетки по именам", isCorrect: true },
          { answer: "Создаёт автоматическую сетку", isCorrect: false },
          { answer: "Выравнивает элементы по центру", isCorrect: false },
          { answer: "Определяет размеры ячеек", isCorrect: false },
        ],
      },
      {
        question: "Какое свойство позволяет использовать переменные в CSS?",
        answers: [
          { answer: "var()", isCorrect: true },
          { answer: "let()", isCorrect: false },
          { answer: "const()", isCorrect: false },
          { answer: "prop()", isCorrect: false },
        ],
      },
      {
        question: "Что делает свойство object-fit?",
        answers: [
          {
            answer: "Определяет, как изображение вписывается в контейнер",
            isCorrect: true,
          },
          { answer: "Определяет прозрачность изображения", isCorrect: false },
          { answer: "Изменяет положение изображения", isCorrect: false },
          { answer: "Добавляет фильтр", isCorrect: false },
        ],
      },
      {
        question: "Что делает селектор :not()?",
        answers: [
          {
            answer: "Выбирает элементы, не соответствующие заданному условию",
            isCorrect: true,
          },
          { answer: "Выбирает первый элемент", isCorrect: false },
          { answer: "Выбирает соседний элемент", isCorrect: false },
          { answer: "Отменяет стиль", isCorrect: false },
        ],
      },
      {
        question: "Что делает свойство clip-path?",
        answers: [
          {
            answer: "Обрезает часть элемента по заданной форме",
            isCorrect: true,
          },
          { answer: "Добавляет обводку элементу", isCorrect: false },
          { answer: "Создаёт тень", isCorrect: false },
          { answer: "Изменяет размеры блока", isCorrect: false },
        ],
      },
    ],
  },
};
