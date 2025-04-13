import type { Schema, Struct } from '@strapi/strapi';

export interface CoreButton extends Struct.ComponentSchema {
  collectionName: 'components_core_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    description: Schema.Attribute.Text;
    formMode: Schema.Attribute.Enumeration<
      ['booking', 'contact', 'download', 'undefined']
    >;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['default', 'outline', 'ghost', 'secondary', 'destructive', 'link']
    >;
  };
}

export interface CoreCard extends Struct.ComponentSchema {
  collectionName: 'components_core_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    publishedDate: Schema.Attribute.String;
    sourceName: Schema.Attribute.String;
    summary: Schema.Attribute.String;
  };
}

export interface CoreContact extends Struct.ComponentSchema {
  collectionName: 'components_core_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    emailHref: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    phoneHref: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
  };
}

export interface CoreHeader extends Struct.ComponentSchema {
  collectionName: 'components_core_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    badge: Schema.Attribute.String;
    highlight: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CoreHighlight extends Struct.ComponentSchema {
  collectionName: 'components_core_highlights';
  info: {
    description: '';
    displayName: ' Highlight';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface CoreImage extends Struct.ComponentSchema {
  collectionName: 'components_core_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    aspectRatio: Schema.Attribute.Enumeration<
      ['square', 'video', 'wide', 'auto']
    >;
    height: Schema.Attribute.String;
    position: Schema.Attribute.String;
    src: Schema.Attribute.String;
    svg: Schema.Attribute.String;
    width: Schema.Attribute.String;
  };
}

export interface CoreList extends Struct.ComponentSchema {
  collectionName: 'components_core_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    itemFour: Schema.Attribute.String;
    itemOne: Schema.Attribute.String;
    itemThree: Schema.Attribute.String;
    itemTwo: Schema.Attribute.String;
  };
}

export interface SharedBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    list: Schema.Attribute.Component<'core.list', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    description: '';
    displayName: 'Callout';
  };
  attributes: {
    button: Schema.Attribute.Component<'core.button', false>;
    header: Schema.Attribute.Component<'core.header', false>;
    list: Schema.Attribute.Component<'core.list', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'core.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'core.header', false>;
    highlight: Schema.Attribute.Component<'core.highlight', true>;
    image: Schema.Attribute.Component<'core.image', false>;
  };
}

export interface SharedTeckStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_teck_stacks';
  info: {
    description: '';
    displayName: 'TeckStack';
  };
  attributes: {
    heading: Schema.Attribute.Component<'core.header', false>;
    point: Schema.Attribute.Component<'core.highlight', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'core.button': CoreButton;
      'core.card': CoreCard;
      'core.contact': CoreContact;
      'core.header': CoreHeader;
      'core.highlight': CoreHighlight;
      'core.image': CoreImage;
      'core.list': CoreList;
      'shared.block': SharedBlock;
      'shared.callout': SharedCallout;
      'shared.hero': SharedHero;
      'shared.teck-stack': SharedTeckStack;
    }
  }
}
