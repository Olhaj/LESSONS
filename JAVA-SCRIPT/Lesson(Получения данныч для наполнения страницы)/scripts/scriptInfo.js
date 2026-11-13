// *====================== API =====================================
// !API — это механизмы,
// которые позволяют двум программным компонентам взаимодействовать
// друг с другом, используя набор определений и протоколов. Интерфейс
// API позволяет разработчику получать доступ к функциям одного
// приложения или веб-сайта из другого.

// ?Работа с запросами:
// const newPost = {
//  title: 'Task',
//  body: 'do something',
//  userId: 1,
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//  method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//  body: JSON.stringify(newPost), // Тело запроса в JSON-формате
//  headers: {
//   Добавляем необходимые заголовки
//  'Content-type': 'application/json; charset=UTF-8',
//  },
// })
//  .then((response) => response.json())
//  .then((data) => {
//  console.log(data)
//   {title: 'Task', body: 'do something', userId: 1, id: 101}
//  })

//? Работа с запросами:
// fetch('https://jsonplaceholder.typicode.com/there-is-no-such-route')
//  .then((response) => {
//  Проверяем успешность запроса и возвращаем ошибку
//  if (!response.ok) {
//  throw new Error('Error occurred!')
//  }
//  return response.json()
//  })
//  .catch((err) => {
//  console.log(err)
//  }) // Error: Error occurred!
