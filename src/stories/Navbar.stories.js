import { fn } from '@storybook/test';
import Navbar from '../components/Navbar.vue';
import '../style.css'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  component: Navbar,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => ({
    components: { Navbar },
    setup() {
      return { args };
    },
    template: '<Navbar v-bind="args" />',
  })
};

