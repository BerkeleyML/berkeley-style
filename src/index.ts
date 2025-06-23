import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

// Import the CSS file
import '../style/berkeley.css';


/**
 * Initialization data for the berkeley-style extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'berkeley-style:plugin',
  description: 'A JupyterLab extension that changes markdown formatting to be more Cal.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension berkeley-style is activated!');
  }
};

export default plugin;
