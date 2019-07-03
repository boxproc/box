import { menuClasses } from './NavList';

export const removeActiveClass = (el: Element) => el.classList.remove(menuClasses.ACTIVE);

export const addActiveClass = (el: HTMLElement) => el.classList.add(menuClasses.ACTIVE);

export const toggleActiveClass = (el: HTMLElement) =>
  el.classList.contains(menuClasses.ACTIVE)
    ? removeActiveClass(el)
    : addActiveClass(el);

export const removeActiveFromAll = (
  currentItem: HTMLElement,
  className: string
) => currentItem
  .closest(`.${className}`)
  .querySelectorAll(`.${menuClasses.MENU_ITEM}`).forEach(el =>
    !currentItem.classList.contains(menuClasses.ACTIVE)
    && el.classList.contains(menuClasses.ACTIVE)
    && removeActiveClass(el)
  );

export const toggleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
  const currentItem = e.currentTarget;

  e.stopPropagation();

  currentItem.closest(`.${menuClasses.SUB_MENU}`)
    ? removeActiveFromAll(currentItem, menuClasses.SUB_MENU)
    : removeActiveFromAll(currentItem, menuClasses.MENU);

  toggleActiveClass(currentItem);
};

export const clearMenu = () =>
  document
    .querySelectorAll(`.${menuClasses.MENU_ITEM}`).forEach(el =>
      el.classList.contains(menuClasses.ACTIVE)
      && removeActiveClass(el)
    );

export const checkHasActive = () =>
  [].slice.call(document
    .querySelectorAll(`.${menuClasses.MENU_ITEM}`)).some(el =>
      el.classList.contains(menuClasses.ACTIVE)
    );

export const goToPage = (handlePushToHistory: () => void, handleClearMenu: () => void) => {
  handlePushToHistory();
  setTimeout(() => handleClearMenu(), 50);
};
