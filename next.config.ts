const path = require('path');
const process = require('process');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pathBuilder = (subpath) => path.join(process.cwd(), subpath);

// Define source and destination paths for Cesium assets
const cesiumSource = pathBuilder('node_modules/cesium/Build/Cesium');
const cesiumEngineSource = pathBuilder('node_modules/@cesium/engine/Source');
const cesiumDestination = pathBuilder('public/cesium');

import type { NextConfig } from 'next';

const nextConfig = {
    webpack: (config, { webpack }) => {
        // Add CopyWebpackPlugin to copy Cesium assets
        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    // Copy from old cesium package structure
                    {
                        from: path.join(cesiumSource, 'Workers'),
                        to: path.join(cesiumDestination, 'Workers'),
                        info: { minimized: true }, // Indicate files are already minimized
                    },
                    {
                        from: path.join(cesiumSource, 'ThirdParty'),
                        to: path.join(cesiumDestination, 'ThirdParty'),
                        info: { minimized: true },
                    },
                    {
                        from: path.join(cesiumSource, 'Assets'),
                        to: path.join(cesiumDestination, 'Assets'),
                        info: { minimized: true },
                    },
                    {
                        from: path.join(cesiumSource, 'Widgets'),
                        to: path.join(cesiumDestination, 'Widgets'),
                        info: { minimized: true },
                    },
                    // Copy from new @cesium/engine package structure
                    {
                        from: path.join(cesiumEngineSource, 'Workers'),
                        to: path.join(cesiumDestination, 'Workers'),
                        info: { minimized: true },
                    },
                    {
                        from: path.join(cesiumEngineSource, 'ThirdParty'),
                        to: path.join(cesiumDestination, 'ThirdParty'),
                        info: { minimized: true },
                    },
                    {
                        from: path.join(cesiumEngineSource, 'Assets'),
                        to: path.join(cesiumDestination, 'Assets'),
                        info: { minimized: true },
                    },
                    {
                        from: path.join(cesiumEngineSource, 'Widget'),
                        to: path.join(cesiumDestination, 'Widget'),
                        info: { minimized: true },
                    },
                ].filter(pattern => {
                    // Only include patterns where the source directory exists
                    return require('fs').existsSync(pattern.from);
                }), // Filter out non-existent source directories
            }),
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('/cesium'),
            })
        );

        return config;
    },
    env: {
        CESIUM_BASE_URL: '/cesium',
    },
    output: 'standalone',
};

export default nextConfig;