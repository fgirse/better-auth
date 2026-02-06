import type { CollectionConfig } from 'payload'
import type { User } from '@/payload-types'
import { protectRoles } from './hooks/protectRoles'
import editor from '@/config/collections/Users/access/editor';
import user from '@/config/collections/Users/access/user';
import admin from '@/config/collections/Users/access/admin';
import { checkRole } from './access/checkRole';


export const Users: CollectionConfig = {
  slug: 'users',
  access:{
    create: editor,
    read: user,
    update: user,
    delete: admin,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  defaultPopulate:{
    slug:true,
    name:true,
  },
  fields: [
     {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
      {  
  name: 'roles',  
  type: 'select',  
  hasMany: true,  
  saveToJWT: true,  
  options: [  
    {label: 'Admin', value: 'admin'},  
    {label: 'Editor', value: 'editor'},  
    {label: 'User', value: 'user'},  
  ],  
  hooks:{
    beforeChange: [protectRoles]
  },
  access:{
    update: ({req:{user}}) => checkRole(['admin'], user as User)
  }
},

{
      name: 'emailVerified',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },

    ],
  
    timestamps: true,
  }
