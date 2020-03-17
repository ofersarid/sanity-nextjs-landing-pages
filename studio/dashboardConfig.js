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
                  buildHookId: '5e70facbdd40ba951ce2facf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-metw2cav',
                  apiId: 'b9d64af0-f5f0-4c58-8fa4-816fdd1c3280'
                },
                {
                  buildHookId: '5e70facb46c160017f7b53de',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vjd712q5',
                  apiId: 'a1c36f86-7980-4630-8dfb-a56fd8c34172'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ofersarid/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vjd712q5.netlify.com', category: 'apps'}
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
