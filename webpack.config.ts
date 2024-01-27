import path from 'path';
import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  type IBuildEnv,
  type TypeBuildMode,
  type IBuildPaths
} from './config/build/types/config';

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const mode: TypeBuildMode = env.mode ?? 'development';
  const port = env.port ?? 3000;

  return buildWebpackConfig({
    mode,
    paths,
    port
  });
};
