https://www.instagram.com/direct/t/vadimshev_/?text=xcz
const download = new ServiceManager('invoiceSize')

// ElementManager //
const переменная = new ElementManager(Уникальный идентификатор);
// Проверка на уникальность идентификатора
// ECЛИ: существует - автоматически начинаем с ним работать
// ECЛИ: не существует - создаём новый и начинаем с ним работать
переменная.create(тэг элемента);
// Добавить классы
переменная.addCSSClass("класс/классы"); 
// Удалить классы
переменная.removeCSSClass("класс/классы")
// Добавить/создать элемент перед элементом с которым мы работаем
переменная.insertElementBefore("класс/классы")
// Добавить/создать элемент внутри элемента с которым мы работаем
переменная.putInElement("класс/классы")
// Написать текст внутри элемента с которым мы работаем
переменная.writeInText("класс/классы")

// createEle
const Json = new FetchManager('users.json')
Json.Parse()