
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import BaseTemplate, {ICatCard} from './CatCard'
import {mockCatCardProps} from './CatCard.mocks'

export default {
  title: 'card/catCard',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCatCardProps.base,
} as ICatCard;

