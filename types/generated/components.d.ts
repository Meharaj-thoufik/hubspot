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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'core.button': CoreButton;
      'core.header': CoreHeader;
      'core.image': CoreImage;
    }
  }
}
