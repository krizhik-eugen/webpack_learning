import webpack from 'webpack';
import path from 'path';
import {buildWebpack} from './config/build/buildWebpack';
import {BuildMode, BuildPaths, BuildPlatform} from './config/build/types/types';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        public: path.resolve(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        output: path.resolve(__dirname, 'build'),
    }

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })
    return config
}
