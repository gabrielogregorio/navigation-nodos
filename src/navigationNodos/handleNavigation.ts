import { defaultConfig } from './constants';
import { ConfigType, DirectionType, MapeClosedType } from './types';

export const handleNavigation = (
  direction: DirectionType,
  navigationMap: MapeClosedType,
  config: ConfigType = defaultConfig,
) => {
  const { activeElement } = document;
  const nodoId =
    activeElement?.getAttribute(config.atributeControl) ||
    document.querySelector(`[${config.atributeControl}]`)?.getAttribute(config.atributeControl);

  if (!nodoId || !navigationMap[nodoId]) return;

  const nextNodoId = navigationMap[nodoId][direction];
  if (!nextNodoId) {
    return;
  }

  document.querySelectorAll(`[${config.atributeControl}]`).forEach((el) => {
    el.classList.remove(config.classFocused);
  });

  const nextElement = document.querySelector(`[${config.atributeControl}="${nextNodoId}"]`) as HTMLButtonElement;

  nextElement?.classList.add(config.classFocused);
  nextElement?.focus();
};
