import { generateHtml } from '../../src';

it('render heading', () => {
  const slateJSON = {
    object: 'value',
    document: {
      object: 'document',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'heading-one',
          data: {},
          nodes: [
            {
              object: 'text',
              text: 'Title 1',
              marks: [],
            },
          ],
        },
      ],
    },
  };
  expect(generateHtml(slateJSON)).toMatchSnapshot();
});

it('render heading 2', () => {
  const slateJSON = {
    object: 'value',
    document: {
      object: 'document',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'heading-two',
          data: {},
          nodes: [
            {
              object: 'text',
              text: 'Title 2',
              marks: [],
            },
          ],
        },
      ],
    },
  };
  expect(generateHtml(slateJSON)).toMatchSnapshot();
});

it('render heading 3', () => {
  const slateJSON = {
    object: 'value',
    document: {
      object: 'document',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'heading-three',
          data: {},
          nodes: [
            {
              object: 'text',
              text: 'Title 3',
              marks: [],
            },
          ],
        },
      ],
    },
  };
  expect(generateHtml(slateJSON)).toMatchSnapshot();
});
