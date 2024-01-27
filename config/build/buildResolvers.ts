import type webpack from 'webpack';
import { type IBuildOptions } from './types/config';

export function buildResolvers(option: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [option.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  };
}
