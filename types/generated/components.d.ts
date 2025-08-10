import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.Text;
    navLinks: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_slides';
  info: {
    displayName: 'Hero Slide';
  };
  attributes: {
    bgImageUrl: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    href: Schema.Attribute.String;
    imageUrl: Schema.Attribute.Media<'images'>;
    linkText: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_teams';
  info: {
    displayName: 'Our Team';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    teamMembers: Schema.Attribute.Component<'shared.team-member', true>;
  };
}

export interface LayoutTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials_sections';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    testimonialItems: Schema.Attribute.Component<'shared.testimony', true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['LINK', 'DROPDOWN']> &
      Schema.Attribute.DefaultTo<'LINK'>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    email: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'example@gmail.com'>;
    imageUrl: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'0000000000000'>;
    position: Schema.Attribute.String;
    whatsapp: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'https://web.whatsapp.com'>;
  };
}

export interface SharedTestimony extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonies';
  info: {
    displayName: 'testimony';
  };
  attributes: {
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    testimony: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-slide': LayoutHeroSlide;
      'layout.our-team': LayoutOurTeam;
      'layout.testimonials-section': LayoutTestimonialsSection;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.team-member': SharedTeamMember;
      'shared.testimony': SharedTestimony;
    }
  }
}
