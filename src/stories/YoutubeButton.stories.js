import { fn } from '@storybook/test';
import YoutubeButton from '../components/YoutubeButton.vue';
import '../style.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  component: YoutubeButton,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => ({
    components: { YoutubeButton },
    setup() {
      return { args };
    },
    template: '<YoutubeButton v-bind="args" />',
  }),
  args: {
    href: 'Youtube'
  },
};

