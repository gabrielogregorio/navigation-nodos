import { defaultConfig } from './constants';
import { ConfigType, DirectionType, MapeClosedType } from './types';

export const handleNavigation = (
  direction: DirectionType,
  navigationMap: MapeClosedType,
  config: ConfigType = defaultConfig,
) => {
  const nodoId =
    document.activeElement && document.activeElement.getAttribute(config.atributeControl)
      ? document.activeElement.getAttribute(config.atributeControl)
      : document.querySelector(`[${config.atributeControl}]`)?.getAttribute(config.atributeControl);

  if (!nodoId || !navigationMap[nodoId]) return;

  document.querySelectorAll(`[${config.atributeControl}]`).forEach((el) => {
    el.classList.remove(config.classFocused);
  });

  const nextNodo = navigationMap[nodoId][direction];
  if (!nextNodo) {
    return;
  }

  const nextElement = document.querySelector(`[${config.atributeControl}="${nextNodo}"]`) as HTMLButtonElement;

  nextElement?.classList.add(config.classFocused);
  nextElement?.focus();
};
