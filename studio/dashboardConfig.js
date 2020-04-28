export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea79941198bf7cc170139cc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s9fjt9hq',
                  apiId: 'e52b2835-fea0-419b-84f8-d2bfcd0961c2'
                },
                {
                  buildHookId: '5ea79941a438a7afde27abb4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ybkh5bov',
                  apiId: '994e2378-ab74-48bc-8d5a-671fa75ffba4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AhmadSayadi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ybkh5bov.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
