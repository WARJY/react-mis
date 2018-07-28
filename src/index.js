import App from './App';
import props from './props.js'
import controller from './REACT_CPT_GUOH/container.js'
import registerServiceWorker from './registerServiceWorker';

new App(controller).render(props);

registerServiceWorker();
