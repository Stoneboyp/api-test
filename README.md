# Green API Test Task

Тестовое задание для вакансии поддержки 2-й линии в GREEN API.

## 🚀 Что сделано

- Реализована HTML-страница с вызовами методов Green API:
  - `getSettings`
  - `getStateInstance`
  - `sendMessage`
  - `sendFileByUrl`
- Использован стек: React + Vite + TypeScript + MUI
- Добавлена валидация:
  - Номер телефона: формат `77XXXXXXXXX`
  - URL: должен начинаться с `http` или `https`
- Результат запросов отображается в правой части экрана

## 🛠 Как запустить

```bash
git clone https://github.com/your-username/green-api-test-task.git
cd api-test
npm install
npm run dev
```

## 💡 Как использовать

1. Перейдите в [Green API](https://green-api.com/) и создайте новый инстанс
2. Подключите свой WhatsApp через QR-код
3. Введите `idInstance` и `apiTokenInstance` в соответствующие поля
4. Проверьте работу:
   - `getSettings` и `getStateInstance` работают без параметров
   - `sendMessage` требует номер (77...) и текст
   - `sendFileByUrl` требует номер и URL

## 📦 Деплой

Приложение развернуто на [Vercel]

---

Готов к демонстрации и обсуждению.
