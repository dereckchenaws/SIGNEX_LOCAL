import type { StackbitConfig } from '@stackbit/types';

const config: StackbitConfig = {
  contentSources: [
    {
      type: 'git',
      models: [
        {
          name: 'page',
          label: 'Page',
          isPage: true,
          urlPath: '/{slug}',
          fields: [
            { name: 'title', type: 'string', label: 'Title' },
            { name: 'slug', type: 'string', label: 'Slug' },
            { name: 'body', type: 'markdown', label: 'Body' }
          ]
        },
        {
          name: 'project',
          label: 'Project',
          isPage: true,
          urlPath: '/project/{slug}',
          fields: [
            { name: 'title', type: 'string', label: 'Project Title' },
            { name: 'slug', type: 'string', label: 'Slug' },
            { name: 'description', type: 'markdown', label: 'Description' },
            { name: 'image', type: 'image', label: 'Project Image' }
          ]
        }
      ]
    }
  ]
};

export default config; 