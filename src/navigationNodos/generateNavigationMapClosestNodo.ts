import { defaultConfig } from './constants';
import { ClosestType, ConfigType, MapeClosedType } from './types';

export const generateNavigationMapClosestNodo = (config: ConfigType = defaultConfig) => {
  const elements = Array.from(document.querySelectorAll(`[${config.atributeControl}]`));

  const mapClosestNodo: MapeClosedType = {};

  elements.forEach((currnetElement) => {
    const rect = currnetElement.getBoundingClientRect();
    const nodoId = currnetElement.getAttribute(config.atributeControl)!;

    const closest: ClosestType = {
      up: null,
      down: null,
      left: null,
      right: null,
    };
    const minDistances = {
      up: Infinity,
      down: Infinity,
      left: Infinity,
      right: Infinity,
    };

    elements.forEach((unknowNodo) => {
      if (currnetElement === unknowNodo) return;

      const otherRect = unknowNodo.getBoundingClientRect();
      const otherId = unknowNodo.getAttribute(config.atributeControl);

      const dxUnknowNodo = otherRect.left - rect.left;
      const dyUnknowNodo = otherRect.top - rect.top;
      const distanceUnknowNodo = Math.abs(dxUnknowNodo) + Math.abs(dyUnknowNodo);

      if (dyUnknowNodo < 0 && minDistances.up > distanceUnknowNodo) {
        closest.up = otherId;
        minDistances.up = distanceUnknowNodo;
      }
      if (dyUnknowNodo > 0 && minDistances.down > distanceUnknowNodo) {
        closest.down = otherId;
        minDistances.down = distanceUnknowNodo;
      }

      if (dxUnknowNodo < 0 && minDistances.left > distanceUnknowNodo) {
        closest.left = otherId;
        minDistances.left = distanceUnknowNodo;
      }
      if (dxUnknowNodo > 0 && minDistances.right > distanceUnknowNodo) {
        closest.right = otherId;
        minDistances.right = distanceUnknowNodo;
      }
    });

    mapClosestNodo[nodoId] = { ...closest };
  });

  return mapClosestNodo;
};
