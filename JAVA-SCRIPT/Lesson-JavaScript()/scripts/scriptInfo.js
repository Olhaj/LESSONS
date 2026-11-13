// .cloneNode() => это метод,
// который создает глубокую копию элементов,
// включая все его потомки.

// -------- Пример: ---------
// let originalElement = document.getElementById("original");
// let clonedElement = originalElement.cloneNode(true); // значение true говорить копировать с дочерним элементом, а false говорит без дочерного элемента.
// --------------------------------------------------

// .InnerHTML "" => это свойство элемента,
// которое содержит HTML содержимое элемента в
// виде строки. Можно скопировать содержимое элемента.

// -------- Пример: ---------
// let originalElement = document.getElementById("original");
// let clonedElement = document.createElement("div"); // это создано через дом
// clonedElement.innerHTML = originalElement.innerHTML; // от куда, куда копируем элемент
// ---------------------------------------------------

// .outerHTML "" => это свойство элемента,
// который содержит HTML код элемента, включая сам
// элемент и его содержимое. Можно скопировать элемент
// полностью, присвоить его значение другому элементу.

// -------- Пример: ---------
// let originalElement = document.getElementById("original");
// let clonedElement = document.createElement("div");
// clonedElement.outerHTML = originalElement.outerHTML; // он такойже как и innerHTML
//----------------------------------------------------

// .importNode() => это метод, который позволяет импортировать элемент из
// другого документа или фрагмента документа. Он создает
// глубокую копию элемента, включая все его потомки.

// -------- Пример: ---------
// let originalElement = document.getElementById('original');
// let clonedElement = document.importNode(originalElement, true);
//-----------------------------------------------------

// .remove() => это метод, который удаляет элемент из DOM.

// -------- Пример: ---------
// const element = document.querySelector("#move");
// element.remove();
//----------------------------------------------------

// parentNode.removeChild() => это метод, который
// удаляет элемент, используя его родительский элемент.

// ---------------- Пример: ----------------------
// const parentElement = document.getElementById("parentElement");
// const childElement = document.getElementById("childElement");
// parentElement.removeChild(childElement);
//----------------------------------------------------

// .append() => это метод, который добавляет элемент в
// конец родительского элемента, но если элемент уже
// находится внутри дерева, он будет перемещен в конец
// родительского элемента. Используется для перемещения
// элемента внутри DOM-дерева.

// ---------------- Пример: ----------------------
// const element = document.getElementById("move");
// document.getElementById("destination").append(element);
