
#  ElementManager 
 const X = new ElementManager(Уникальный идентификатор); 
## Проверка на уникальность идентификатора
- X.create(тэг элемента);
## Добавить классы
- X.addCSSClass(className); 
## Удалить классы
- X.removeCSSClass("className")
## Добавить/создать элемент перед элементом с которым мы работаем
- X.insertElementBefore("className")
## Добавить/создать элемент внутри элемента с которым мы работаем
- X.putInElement("className")
## Написать текст внутри элемента с которым мы работаем
- X.writeInText("className")

