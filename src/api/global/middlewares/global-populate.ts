/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';


const populate = {
  appBar:{
    populate:{
      logo:{
        populate:{
          image:{
             fields:["alternativeText","url"]
          }
        }
      },
      navItems:true
    }
  },
  footer:{
    populate:{
      navLinks:true,
      socialLinks:true
    }
  }
 }

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log(ctx.query, {depth:null});
    ctx.query.populate = populate
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
