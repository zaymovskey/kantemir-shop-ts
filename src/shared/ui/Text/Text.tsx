import { type FC } from 'react';
import { JSX } from 'react/jsx-runtime';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import IntrinsicElements = JSX.IntrinsicElements;

export enum EnumTextType {
  TEXT = 'text',
  TITLE = 'title'
}

export enum EnumTextSize {
  XXS = 'size-xxs',
  XS = 'size-xs',
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
  XXl = 'size-xxl'
}

export interface ITextProps {
  className?: string;
  type?: EnumTextType;
  size?: EnumTextSize;
  tagName?: keyof IntrinsicElements;
  children?: string;
}

export const Text: FC<ITextProps> = ({
  className,
  children: childrenText,
  type = EnumTextType.TEXT,
  size = EnumTextSize.XXS,
  tagName: TagName = 'p'
}) => {
  return (
    <TagName className={classNames(cls.Text, {}, [className, cls[type], cls[size]])}>
      {childrenText}
    </TagName>
  );
};
