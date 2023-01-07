# Тестування працездатності системи

Для тестування використовувалася програма [Postman](https://www.postman.com/).

### Запуск cервера

Для запуску сервера необхідно перейти до директорії `/src/js/`:
```bash
cd ./src/js/
```

Встановити усі залежності та запустити сервер за допомогою команд:
```bash
npm i

npm start
```
![server-start](https://i.imgur.com/FjSSpGM.png)

### Отримання списку всіх тасок

`GET` `/api/tasks`

![GET /api/tasks](https://i.imgur.com/Do9BoyA.png)

### Отримання таски за id

`GET` `/api/tasks/:id`

![GET /api/tasks](https://i.imgur.com/neLWRGq.png)

У випадку, якщо таски з таким id не існує, сервер поверне помилку:

![GET /api/tasks](https://i.imgur.com/VvDCc6M.png)

### Створення таски

`POST` `/api/tasks`

Повертає створену таску

![POST /api/tasks](https://i.imgur.com/GGrTQ6g.png)

У випадку, якщо в тілі запиту відсутній `description` повертається помилка:

![POST /api/tasks](https://i.imgur.com/iDF7iGg.png)

### Оновлення таски

`PUT` `/api/tasks/:id`

Повертає оновлену таску

![PUT /api/tasks](https://i.imgur.com/RBtlkMM.png)

У випадку, якщо таска з таким id не існує, повертається помилка

![PUT /api/tasks](https://i.imgur.com/Ll9CQxU.png)

### Видалення таски

`DELETE` `/api/tasks/:id`

Повертає видалену таску

![DELETE /api/tasks](https://i.imgur.com/KvyQByu.png)

У випадку неправильного id повертається помилка:  

![DELETE /api/tasks](https://i.imgur.com/OP7lG7p.png)

