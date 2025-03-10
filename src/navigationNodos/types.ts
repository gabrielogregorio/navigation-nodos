export type ClosestType = {
  up: null | string;
  down: null | string;
  left: null | string;
  right: null | string;
};

export type ConfigType = {
  atributeControl: string;
  classFocused: string;
};

export type DirectionType = 'up' | 'down' | 'left' | 'right';
export type MapeClosedType = { [key: string]: ClosestType };
