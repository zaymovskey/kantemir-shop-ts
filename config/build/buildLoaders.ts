import type webpack from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { type IBuildOptions } from './types/config';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  const svgLoader = buildSvgLoader();

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = buildScssLoader(options.mode);

  return [babelLoader, typescriptLoader, cssLoader, svgLoader];
}
