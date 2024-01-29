// Делает доступным import classes from 'some_name.module.scss'
declare module '*.module.css';
declare module '*.module.scss' {
  const cls: Record<string, string>;
  export default cls;
}
declare module '*.svg' {
  import { type ElementType } from 'react';
  const content: ElementType;
  export default content;
}

declare const _IS_DEV_: boolean;
declare const _API_URL_: string;
