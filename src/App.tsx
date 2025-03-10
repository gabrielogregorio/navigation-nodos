import { useEffect } from 'react';
import { useKeyPress } from './useKeyPress';
import { generateNavigationMapClosestNodo } from './navigationNodos/generateNavigationMapClosestNodo';
import { handleNavigation } from './navigationNodos/handleNavigation';

const App = () => {
  const key = useKeyPress();

  useEffect(() => {
    const map = generateNavigationMapClosestNodo();

    if (key.ArrowDown) {
      handleNavigation('down', map);
    } else if (key.ArrowUp) {
      handleNavigation('up', map);
    } else if (key.ArrowLeft) {
      handleNavigation('left', map);
    } else if (key.ArrowRight) {
      handleNavigation('right', map);
    }
  }, [key]);

  return (
    <div className="base">
      <h1>Navigation Nodos</h1>

      <div>Use ArrowKeys to navigate</div>

      <div className="grids">
        <button type="button" data-nodo="item1">
          Item1
        </button>
        <button type="button" data-nodo="item2">
          Item2
        </button>
        <button type="button" data-nodo="item3">
          Item3
        </button>
      </div>

      <div className="grids">
        <button type="button" data-nodo="item4">
          Item4
        </button>
        <button type="button" data-nodo="item5">
          Item5
        </button>
        <button type="button" data-nodo="item6">
          Item6
        </button>
      </div>

      <div className="grids">
        <button type="button" data-nodo="item7">
          Item7
        </button>
        <button type="button" data-nodo="item8">
          Item8
        </button>
        <button type="button" data-nodo="item9">
          Item9
        </button>
      </div>

      <div className="section-more-items">
        <button type="button" data-nodo="moreItems">
          mais items
        </button>
      </div>

      <div>
        <div>ArrowUp: {JSON.stringify(key.ArrowUp)}</div>
        <div>ArrowDown: {JSON.stringify(key.ArrowDown)}</div>
        <div>ArrowLeft: {JSON.stringify(key.ArrowLeft)}</div>
        <div>ArrowRight: {JSON.stringify(key.ArrowRight)}</div>
      </div>
    </div>
  );
};

export default App;
