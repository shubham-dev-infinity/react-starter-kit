import Example from "pages/example";

export type TRoute = {
    path: string
    element: () => React.ReactNode;
    isProtected: boolean;
    showHeader: boolean;
    showFooter: boolean;
    children?: TRoute[];
}

function getRoutes(): TRoute[] {
    return [
        {
            path: '',
            element: Example,
            isProtected: false,
            showHeader: true,
            showFooter: true,
            children: [
                {
                    path: '1',
                    element: () => { console.log('first'); return 'asdf' },
                    isProtected: false,
                    showFooter: true,
                    showHeader: true
                }
            ]
        }
    ]
}

export default getRoutes;