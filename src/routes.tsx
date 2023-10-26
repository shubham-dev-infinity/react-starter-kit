import getRoutes, { TRoute } from "utils/getRoutes.util"
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";

const routeData = getRoutes();

const Routes_ = () => {
    // we want to impliment nested routes at any depth. here any depth meaning a route have more then one children route and that children route may have more children route
    //so rather define hardcode routes we will use recursion to render nested routes
    // and here also for first main parent route we are using routewrapper which check does is this route is private or not? and for nested route we will not define any erapper logic
    return (
        <Routes>
            {
                routeData.map((route) => (
                    <Route
                        // key={route.path}
                        path={route.path}
                        element={
                            <RouteWrapper
                                element={route.element}
                                isProtected={route.isProtected}
                                showHeader={route.showHeader}
                                showFooter={route.showFooter}
                            />
                        }
                    >
                        {route.children && renderNestedRoutes(route.children)}
                    </Route>
                ))
            }
        </Routes>
    )
}

type TRoutewrapper = {
    element: () => React.ReactNode;
    isProtected: boolean;
    showHeader: boolean;
    showFooter: boolean;
}

const RouteWrapper = ({ element, isProtected, showHeader, showFooter }: TRoutewrapper) => {
    const authInfo = useAppSelector((state) => state.auth)
    if (isProtected && !authInfo.isLoggedIn) {
        return <Navigate to='/login' />
    }
    return (
        <>
            {showHeader && 'Header Component'}
            {element()}
            {showFooter && 'Footer Component'}
        </>
    )
}


const renderNestedRoutes = (childrens: TRoute[]) => {

    return <Route>
        {childrens && childrens?.length !== 0 &&
            childrens.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element()}
                >
                    {
                        route.children && renderNestedRoutes(route.children)
                    }
                </Route>
            ))
        }
    </Route>

}
export default Routes_
