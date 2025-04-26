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
      ['default', 'outline', 'ghost', 'secondary', 'destructive', 'ink']
    >;
  };
}

export interface CoreContact extends Struct.ComponentSchema {
  collectionName: 'components_core_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    description: Schema.Attribute.String;
    emailHref: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    label: Schema.Attribute.String;
    phoneHref: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    websiteHref: Schema.Attribute.String;
    websiteLabel: Schema.Attribute.String;
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
    description: '';
    displayName: 'Image';
  };
  attributes: {
    alternate: Schema.Attribute.String;
    source: Schema.Attribute.String;
    svg: Schema.Attribute.String;
  };
}

export interface CorePricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_core_pricing_plans';
  info: {
    displayName: 'PricingPlan';
  };
  attributes: {
    consulting: Schema.Attribute.String;
    db: Schema.Attribute.String;
    maintenance: Schema.Attribute.String;
    name: Schema.Attribute.String;
    support: Schema.Attribute.String;
    users: Schema.Attribute.String;
    warranty: Schema.Attribute.String;
  };
}

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    description: '';
    displayName: 'Callout';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'core.button', true>;
    header: Schema.Attribute.Component<'core.header', false>;
    list: Schema.Attribute.Component<'core.highlight', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    avatar: Schema.Attribute.Component<'core.image', false>;
    avatarDetails: Schema.Attribute.Component<'core.highlight', false>;
    buttons: Schema.Attribute.Component<'core.button', true>;
    category: Schema.Attribute.String;
    header: Schema.Attribute.Component<'core.header', false>;
    image: Schema.Attribute.Component<'core.image', false>;
    link: Schema.Attribute.Component<'core.button', true>;
    list: Schema.Attribute.Component<'core.highlight', true>;
    tag: Schema.Attribute.String;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', false>;
    header: Schema.Attribute.Component<'core.header', false>;
    image: Schema.Attribute.Component<'core.image', false>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'core.button', true>;
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
      'core.contact': CoreContact;
      'core.header': CoreHeader;
      'core.highlight': CoreHighlight;
      'core.image': CoreImage;
      'core.pricing-plan': CorePricingPlan;
      'shared.callout': SharedCallout;
      'shared.card': SharedCard;
      'shared.feature': SharedFeature;
      'shared.hero': SharedHero;
      'shared.teck-stack': SharedTeckStack;
    }
  }
}
