import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fullstack-beginer-course/blog',
    component: ComponentCreator('/fullstack-beginer-course/blog', '29e'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/archive',
    component: ComponentCreator('/fullstack-beginer-course/blog/archive', '439'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/authors',
    component: ComponentCreator('/fullstack-beginer-course/blog/authors', '9b2'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/fullstack-beginer-course/blog/authors/all-sebastien-lorber-articles', '9fb'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/authors/yangshun',
    component: ComponentCreator('/fullstack-beginer-course/blog/authors/yangshun', 'c3e'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/first-blog-post',
    component: ComponentCreator('/fullstack-beginer-course/blog/first-blog-post', '10c'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/long-blog-post',
    component: ComponentCreator('/fullstack-beginer-course/blog/long-blog-post', 'c3f'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/mdx-blog-post',
    component: ComponentCreator('/fullstack-beginer-course/blog/mdx-blog-post', '71c'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/tags',
    component: ComponentCreator('/fullstack-beginer-course/blog/tags', '9f9'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/tags/docusaurus',
    component: ComponentCreator('/fullstack-beginer-course/blog/tags/docusaurus', 'bf3'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/tags/facebook',
    component: ComponentCreator('/fullstack-beginer-course/blog/tags/facebook', 'b13'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/tags/hello',
    component: ComponentCreator('/fullstack-beginer-course/blog/tags/hello', 'a47'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/tags/hola',
    component: ComponentCreator('/fullstack-beginer-course/blog/tags/hola', 'cd0'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/blog/welcome',
    component: ComponentCreator('/fullstack-beginer-course/blog/welcome', '721'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/markdown-page',
    component: ComponentCreator('/fullstack-beginer-course/markdown-page', '09e'),
    exact: true
  },
  {
    path: '/fullstack-beginer-course/docs',
    component: ComponentCreator('/fullstack-beginer-course/docs', 'da7'),
    routes: [
      {
        path: '/fullstack-beginer-course/docs',
        component: ComponentCreator('/fullstack-beginer-course/docs', 'd74'),
        routes: [
          {
            path: '/fullstack-beginer-course/docs',
            component: ComponentCreator('/fullstack-beginer-course/docs', 'b5a'),
            routes: [
              {
                path: '/fullstack-beginer-course/docs/buoi0',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi0', '70d'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi1',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi1', '97b'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi10',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi10', '248'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi2',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi2', 'a21'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi3',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi3', 'ae7'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi4',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi4', 'a75'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi5',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi5', '683'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi6',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi6', '872'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi7',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi7', '97c'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi8',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi8', 'dff'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/buoi9',
                component: ComponentCreator('/fullstack-beginer-course/docs/buoi9', '086'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fullstack-beginer-course/docs/roadmap',
                component: ComponentCreator('/fullstack-beginer-course/docs/roadmap', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/fullstack-beginer-course/',
    component: ComponentCreator('/fullstack-beginer-course/', '36f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
