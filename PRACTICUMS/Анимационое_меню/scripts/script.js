const navMenu = document.querySelector(".navMenu");
const openNavMenuBtn = document.querySelector("#openButton");
const closeNavMenuBtn = document.querySelector("#closeButton");

// ===== Данные: какие подпункты у какого пункта =====
const subMenuData = {
  Home: ["Dashboard", "Settings", "Notifications"],
  Documents: ["My files", "Shared", "Archive"],
  Profile: ["Personal info", "Security"],
  Messages: ["Inbox", "Sent"],
};

// ===== 1. Создаём подпункты динамически =====
document.querySelectorAll(".navMenuItem").forEach((item) => {
  const title = item.textContent.trim();
  const subItems = subMenuData[title];

  if (!subItems) return;

  // оборачиваем текст пункта в отдельный заголовок,
  // чтобы стрелочка и стили работали корректно
  const titleEl = document.createElement("div");
  titleEl.classList.add("navMenuItemTitle");
  titleEl.textContent = title;
  item.textContent = ""; // очищаем пункт
  item.appendChild(titleEl); // вставляем заголовок обратно

  // создаём контейнер подменю
  const subMenu = document.createElement("div");
  subMenu.classList.add("navSubMenu");

  subItems.forEach((subTitle) => {
    const subItem = document.createElement("div");
    subItem.classList.add("navSubMenuItem");
    subItem.textContent = subTitle;
    subMenu.appendChild(subItem);
  });

  item.appendChild(subMenu);

  // клик по пункту — раскрыть/скрыть подпункты
  item.addEventListener("click", (event) => {
    // клик именно по подпункту — не сворачиваем меню
    if (event.target.classList.contains("navSubMenuItem")) return;

    event.stopPropagation();

    // аккордеон: закрываем остальные открытые пункты
    document.querySelectorAll(".navMenuItem.open").forEach((opened) => {
      if (opened !== item) opened.classList.remove("open");
    });

    item.classList.toggle("open");
  });
});

// ===== 2. Открытие / закрытие меню =====
const openMenu = () => navMenu.classList.add("navMenuOpen");
const closeMenu = () => {
  navMenu.classList.remove("navMenuOpen");
  document
    .querySelectorAll(".navMenuItem.open")
    .forEach((i) => i.classList.remove("open"));
};

openNavMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  openMenu();
});

closeNavMenuBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  closeMenu();
});

// ===== 3. Закрытие по клику вне меню =====
document.addEventListener("click", (event) => {
  if (
    navMenu.classList.contains("navMenuOpen") &&
    !navMenu.contains(event.target)
  ) {
    closeMenu();
  }
});
