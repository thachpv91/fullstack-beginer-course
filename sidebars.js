// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  courseSidebar: [
    {
      type: 'category',
      label: 'Khóa học Lập trình Web',
      items: [
        { type: 'doc', id: 'buoi0', label: 'Buổi 0: Welcome & Git' },
        { type: 'doc', id: 'buoi1', label: 'Buổi 1: Hello World với Node.js' },
        { type: 'doc', id: 'buoi2', label: 'Buổi 2: HTML, CSS, JS Cơ bản' },
        { type: 'doc', id: 'buoi3', label: 'Buổi 3: Router & Express.js' },
        { type: 'doc', id: 'buoi4', label: 'Buổi 4: Middleware & Static Files' },
        { type: 'doc', id: 'buoi5', label: 'Buổi 5: Session, Cookie & Login' },
        { type: 'doc', id: 'buoi6', label: 'Buổi 6: Templating với EJS' },
        { type: 'doc', id: 'buoi7', label: 'Buổi 7: Database Cơ bản' },
        { type: 'doc', id: 'buoi8', label: 'Buổi 8: Hoàn thiện Notes App' },
        { type: 'doc', id: 'buoi9', label: 'Buổi 9: Final Project' },
        { type: 'doc', id: 'buoi10', label: 'Buổi 10: Deploy lên Render/Vercel' },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
