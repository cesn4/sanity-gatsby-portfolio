export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eba8d75411ae04dcfd87613',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-paemvxw5',
                  apiId: '0e47e0ed-f3ed-42d4-8780-828d17a24cc6'
                },
                {
                  buildHookId: '5eba8d75c6dc4a6f285b0bbf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5sppkh93',
                  apiId: '57036ed4-a7d8-42e6-889b-f0febc452896'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cesn4/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5sppkh93.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
