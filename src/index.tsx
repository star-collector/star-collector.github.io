import 'core-js/stable';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import ':styles/global.scss';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<App />);
}
