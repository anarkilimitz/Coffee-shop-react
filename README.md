# Логика фильтра

## Компонент <span style="color: #0000FF">Filter</span>

### Пропсы
- <span style="color: #0000FF">**onSearch**</span>  
  Функция, вызываемая при вводе текста в поле поиска. Передает введенный текст в компонент <span style="color: #0000FF">CatalogAbout</span> для обновления состояния <span style="color: #0000FF">searchTerm</span>.

- <span style="color: #0000FF">**onCountryFilter**</span>  
  Функция, вызываемая при клике на кнопку страны. Передает выбранную страну в компонент <span style="color: #0000FF">CatalogAbout</span> для обновления состояния <span style="color: #0000FF">selectedCountries</span>.

- <span style="color: #0000FF">**selectedCountries**</span>  
  Массив выбранных стран. Используется для добавления класса <span style="color: #FF0000">active</span> к активным кнопкам (например, тёмный фон для выбранных стран).

### Функциональность
- **Поле ввода**  
  При вводе текста вызывается функция <span style="color: #0000FF">handleInputChange</span>, которая передает текст в <span style="color: #0000FF">onSearch</span>, обновляя состояние <span style="color: #0000FF">searchTerm</span> в <span style="color: #0000FF">CatalogAbout</span>.

- **Кнопки стран**  
  При клике на кнопку (например, "Brazil") вызывается функция <span style="color: #0000FF">handleButtonClick</span>, которая передает страну в <span style="color: #0000FF">onCountryFilter</span>, обновляя состояние <span style="color: #0000FF">selectedCountries</span> в <span style="color: #0000FF">CatalogAbout</span>.

## Компонент <span style="color: #0000FF">CatalogAbout</span>

### Состояние
- <span style="color: #0000FF">**searchTerm**</span>  
  Хранит текст, введенный пользователем в поле поиска.

- <span style="color: #0000FF">**selectedCountries**</span>  
  Хранит массив выбранных стран (например, <span style="color: #FF0000">['Brazil', 'Kenya']</span>).

### Фильтрация данных
- <span style="color: #0000FF">**mockData**</span>  
  Исходный массив карточек кофе.

- <span style="color: #0000FF">**filteredData**</span>  
  Отфильтрованный массив, создаваемый на основе двух условий:
  - <span style="color: #0000FF">matchesSearch</span>: Проверяет, содержит ли заголовок карточки (<span style="color: #0000FF">title</span>) введенный текст (<span style="color: #0000FF">searchTerm</span>), игнорируя регистр.
  - <span style="color: #0000FF">matchesCountry</span>: Проверяет, соответствует ли страна карточки (<span style="color: #0000FF">descr</span>) одной из выбранных стран в <span style="color: #0000FF">selectedCountries</span>. Если <span style="color: #0000FF">selectedCountries</span> пустой, показываются все карточки.
  
  Карточка включается в <span style="color: #0000FF">filteredData</span>, только если она соответствует обоим условиям (<span style="color: #FF0000">matchesSearch && matchesCountry</span>).

### Фиксированная структура сетки
- <span style="color: #0000FF">**displayData**</span>  
  Создает массив из <span style="color: #FF0000">6 элементов</span>, добавляя пустые заглушки (<span style="color: #0000FF">null</span>), если <span style="color: #0000FF">filteredData</span> содержит меньше 6 карточек. Это гарантирует, что сетка всегда имеет структуру <span style="color: #FF0000">3×2</span> (3 колонки × 2 строки), и карточки не растягиваются, даже если их меньше.

### Рендеринг
- Реальные карточки рендерятся с помощью компонента <span style="color: #0000FF">MenuCard</span>.
- Пустые ячейки рендерятся как <span style="color: #0000FF">&lt;div&gt;</span> с классом <span style="color: #FF0000">menu__item_placeholder</span>, который занимает место в сетке, но не отображает содержимое.

## Взаимодействие компонентов
- Компонент <span style="color: #0000FF">Filter</span> передает пользовательский ввод (текст и страны) в <span style="color: #0000FF">CatalogAbout</span> через пропсы <span style="color: #0000FF">onSearch</span> и <span style="color: #0000FF">onCountryFilter</span>.
- <span style="color: #0000FF">CatalogAbout</span> обновляет состояния <span style="color: #0000FF">searchTerm</span> и <span style="color: #0000FF">selectedCountries</span>, что вызывает пересчет <span style="color: #0000FF">filteredData</span>.
- <span style="color: #0000FF">filteredData</span> определяет, какие карточки отображаются, а <span style="color: #0000FF">displayData</span> обеспечивает фиксированную структуру сетки.

## Сохранение размера блока
- Пустые заглушки (<span style="color: #FF0000">menu__item_placeholder</span>) в <span style="color: #0000FF">displayData</span> гарантируют, что сетка всегда содержит <span style="color: #FF0000">6 ячеек</span>, предотвращая растяжение или смещение оставшихся карточек.
- Стили в <span style="color: #0000FF">CatalogAbout.module.scss</span> задают для <span style="color: #FF0000">.menu__item_placeholder</span> ту же ширину (<span style="color: #FF0000">220px</span>) и минимальную высоту (<span style="color: #FF0000">260px</span>), что и для <span style="color: #FF0000">.menu__item</span>, чтобы заглушки корректно занимали место в сетке.

## Стилизация кнопок
- Активные кнопки (например, выбранная <span style="color: #FF0000">"Brazil"</span>) имеют класс <span style="color: #FF0000">styles.active</span>, который меняет их фон на тёмный и текст на белый.