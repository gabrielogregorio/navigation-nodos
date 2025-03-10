import { defaultConfig } from './constants';
import { ClosestType, ConfigType, MapeClosedType } from './types';

export const generateNavigationMapClosestNodo = (config: ConfigType = defaultConfig) => {
  const elements = [...document.querySelectorAll(`[${config.atributeControl}]`)];
  const mapClosestNodo: MapeClosedType = {};

  elements.forEach((currentElement) => {
    const rect = currentElement.getBoundingClientRect();
    const nodoId = currentElement.getAttribute(config.atributeControl)!;

    const closest: ClosestType = { up: null, down: null, left: null, right: null };
    const minDistances = { up: Infinity, down: Infinity, left: Infinity, right: Infinity };

    elements.forEach((otherElement) => {
      if (currentElement === otherElement) return;

      const otherRect = otherElement.getBoundingClientRect();
      const otherId = otherElement.getAttribute(config.atributeControl);

      const dx = otherRect.left - rect.left;
      const dy = otherRect.top - rect.top;
      const distance = Math.abs(dx) + Math.abs(dy);

      if (dy < 0 && minDistances.up > distance) {
        closest.up = otherId;
        minDistances.up = distance;
      }
      if (dy > 0 && minDistances.down > distance) {
        closest.down = otherId;
        minDistances.down = distance;
      }

      if (dx < 0 && minDistances.left > distance) {
        closest.left = otherId;
        minDistances.left = distance;
      }
      if (dx > 0 && minDistances.right > distance) {
        closest.right = otherId;
        minDistances.right = distance;
      }
    });

    mapClosestNodo[nodoId] = closest;
  });

  return mapClosestNodo;
};
