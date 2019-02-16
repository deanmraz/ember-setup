import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('demo', module)
  .add('All', () => {
    return {
      template: hbs`
{{demo data=data}}
`,
      context: {
        data: {
          title: 'Title',
        }
      }
    }
  }, {
    notes: {
      markdown: `
## Markdown Content
- test it here

\`\`\`

  function writeCode() {

  }

\`\`\`

`
    }
  })
