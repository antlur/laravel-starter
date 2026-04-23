import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { type RouteName, route } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')) as any,
        setup: ({ App, props }) => {
            // @ts-expect-error Ziggy types on page.props
            (global as unknown as { route: typeof route }).route = (name: RouteName, params: Parameters<typeof route>[1], absolute: boolean) =>
                route(name, params, absolute, {
                    // @ts-expect-error Ziggy types on page.props
                    ...page.props.ziggy,
                    // @ts-expect-error Ziggy types on page.props
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    }),
);
