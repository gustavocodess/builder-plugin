import { Builder } from '@builder.io/sdk';
import { Header } from './components/editor-header';
import { reaction } from 'mobx';

const pluginId = 'my-custom-plugin'
Builder.register('plugin', {
  // should match npm id if loading from npm
  id: pluginId,
})

reaction(
  () => true,
  (advancedMode) => {
    Builder.register('editor.header', { component: Header });
    Builder.register('editor.settings', {
      // hideHeatMap: true,
      hideCommentsTab: true,
      // hideGetFeedbackLink: true,
      hideHelpWidget: true,
      // hideMainTabs: false,
      // hideOptionsTab: true,
    })
    // Builder.register('editor.header', {
    //   component: CustomButton,
    // })
    
  },
  {
    fireImmediately: true,
  }
)