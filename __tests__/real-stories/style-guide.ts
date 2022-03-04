import { generateHtml } from '../../src';

const story = {
  object: 'value',
  document: {
    object: 'document',
    data: {},
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'This content was created on&nbsp;',
            marks: [{ object: 'mark', type: 'italic', data: {} }],
          },
          {
            object: 'inline',
            type: 'link',
            data: { href: 'https://app.sigle.io' },
            nodes: [
              {
                object: 'text',
                text: 'app.sigle.io',
                marks: [{ object: 'mark', type: 'italic', data: {} }],
              },
            ],
          },
          {
            object: 'text',
            text: '',
            marks: [{ object: 'mark', type: 'italic', data: {} }],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'In just a few words, Sigle is the perfect tool for writers/bloggers to easily create&nbsp;',
            marks: [],
          },
          {
            object: 'text',
            text: 'decentralized',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: '&nbsp;content and take notes.\nThat means no one but you owns your data and published work. It is safe from any censorship and you maintain your privacy and freedom.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/Py0Nd.jpg' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Welcome to this beautiful and magic place that is called blockchain.',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'heading-one',
        data: {},
        nodes: [
          { object: 'text', text: '1 / Login with blockstack', marks: [] },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'You access Sigle through the Blockstack Browser.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/qJ2Q9.jpg' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: "If you are a new user, start by creating an ID. You'll be asked to create your decentralized identity.",
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Choose a username and click on "continue".',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Now, choose a password. We recommend you choose a complex one and use a password keeper to save it (like&nbsp;',
            marks: [],
          },
          {
            object: 'inline',
            type: 'link',
            data: {
              href: 'https://blockvault.site/?fbclid=IwAR1jQ85_15dnziN3Q5hieBo-7gUR_Ejvh2C4vwzrUyyrGVL3rlWXydRoKqk',
            },
            nodes: [{ object: 'text', text: 'BlockVault', marks: [] }],
          },
          {
            object: 'text',
            text: "&nbsp;which is a decentralized app but, because it's made with blockstack too, you must create you account first. You also can use ",
            marks: [],
          },
          {
            object: 'inline',
            type: 'link',
            data: {
              href: 'https://keepass.info/?fbclid=IwAR0LGKD0jhSBXa3T8dRlmGw_6vzIdvUv5BP8Z2vfmGMmH0AeP6k7A6Ui488',
            },
            nodes: [{ object: 'text', text: 'Keepass', marks: [] }],
          },
          {
            object: 'text',
            text: ' which is an open source project).',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'It is very important not to forget your password',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: '&nbsp;because no centralized server will be here to remind you of it!\n\nYou will then be asked for your email. It is necessary to get your recovery key. This key will be very helpful if you want to restore your account on a different browser. Save it, hide it 👻.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          { object: 'text', text: 'So far so good!&nbsp;', marks: [] },
          {
            object: 'text',
            text: 'Your ID has been created',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: "&nbsp;and you're now a part of the blockchain family. Awesome! 🤖",
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'heading-one',
        data: {},
        nodes: [{ object: 'text', text: '2 / Welcome to Sigle', marks: [] }],
      },
      {
        object: 'block',
        type: 'heading-two',
        data: {},
        nodes: [{ object: 'text', text: '2.1 • The top bar', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: "In this part, we'll go around all different aspects of the app.",
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Wherever you are on Sigle, just click the logo to go back to the main page.\n\nIn the header, you will also find your blockstack ID.\nThis is the decentralized identity you choose during the creation of your blockstack account.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/vDaKA.jpg' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'By clicking on it, you will open a new page.&nbsp;',
            marks: [],
          },
          {
            object: 'text',
            text: 'This is your blog URL.\n',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: 'Then on the right,&nbsp;you have ',
            marks: [],
          },
          {
            object: 'text',
            text: 'a button to logout.',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: 'Easy.', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'heading-two',
        data: {},
        nodes: [{ object: 'text', text: '2.2 • The interface', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'there are two sections on the left:',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'numbered-list',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'Drafts:',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              {
                object: 'text',
                text: '&nbsp;It is where all your saved stories will go. You can edit them as long as you want. All stories in this section are encrypted, so only you can see and decrypt them by clicking the "publish" button.',
                marks: [],
              },
            ],
          },
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'Published:',
                marks: [{ object: 'mark', type: 'bold', data: {} }],
              },
              {
                object: 'text',
                text: '&nbsp;After having pressed the "publish" button, your story will disappear from the draft section and will go in the published one. Be aware that also mean you just decrypted it and it\'s now public. You can now click on your ID to see it on your blog! Well done!',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/g9r7y.png' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'The "New story" button will allow you to access&nbsp;',
            marks: [],
          },
          {
            object: 'text',
            text: 'the editor page.\n',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: 'In other words, this is the place you will start creating awesome content for your blog.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/WyZLl.png' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          { object: 'text', text: 'One more thing!\n', marks: [] },
          {
            object: 'text',
            text: 'If you want to delete a story',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: ', click on the "edit" button next to your story title.\nYou will then be able to find the "delete" button.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'heading-one',
        data: {},
        nodes: [
          { object: 'text', text: '3 / Edit and create content', marks: [] },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Whether you tap the "New story" or the "edit" button, you\'ll land on the editor page.\nThis is where you will write all the ideas that cross your mind. It\'s also where we\'re writing the content from right now.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Through a clean WYSIWYG text editor, this is what you can do on sigle:',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'bulleted-list',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [{ object: 'text', text: 'Enter text content', marks: [] }],
          },
        ],
      },
      {
        object: 'block',
        type: 'bulleted-list',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'Make it bold, italic or underlined by clicking on respective icons',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/e3yOW.png' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'bulleted-list',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'Create quotes and numbered or doted lists like this one',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/NQLeg.png' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'bulleted-list',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'Create titles by choosing h1 or h2',
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/YxrNg.png' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'bulleted-list',
        data: {},
        nodes: [
          {
            object: 'block',
            type: 'list-item',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'Add custom links and add images by copying and pasting links. You must host your images before (with&nbsp;',
                marks: [],
              },
              {
                object: 'inline',
                type: 'link',
                data: { href: 'https://goopics.net/' },
                nodes: [{ object: 'text', text: 'goopics', marks: [] }],
              },
              { object: 'text', text: '&nbsp;for exemple).', marks: [] },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/pLdmR.png' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'heading-one',
        data: {},
        nodes: [{ object: 'text', text: '4 / Shoot the stars!', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: "Now, you have a few articles ready to be published in your drafts and you're now excited to spread the word.",
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/l0pjA.jpg' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: "How? It's easy as ABC.\nNext to every story you wrote in your drafts,&nbsp;",
            marks: [],
          },
          {
            object: 'text',
            text: 'push the button "publish".\n',
            marks: [{ object: 'mark', type: 'bold', data: {} }],
          },
          {
            object: 'text',
            text: 'As mentioned earlier, your stories are now in the "Published" section.',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Now, simply follow your ID link to land on your blog:',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'image',
        data: { src: 'https://i.goopics.net/vDaKA.jpg' },
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: "To share it, copy the link and send it to your friends and on social media!\nDon't forget to share it with us by mentioning&nbsp;",
            marks: [],
          },
          {
            object: 'inline',
            type: 'link',
            data: { href: 'https://twitter.com/sigleapp' },
            nodes: [{ object: 'text', text: '@sigleapp', marks: [] }],
          },
          { object: 'text', text: '&nbsp;on Twitter! 🙂', marks: [] },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: 'Your turn to give it a try!\nEnjoy writing awesome stories ! ✍️',
            marks: [],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: '', marks: [] }],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [{ object: 'text', text: 'The Sigle team.', marks: [] }],
      },
    ],
  },
};

it('render style guide story', () => {
  expect(generateHtml(story)).toMatchSnapshot();
});
