import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfilePage from "./profile/ProfilePage";
import Landing from "./landing/Landing";
import NotFound from "./not-found/NotFound";
import PhotoBook from "./photo-book/PhotoBook";
import Projects from "./projects/Projects";
import Services from "./services/Services";

export const useQuery = () => new URLSearchParams(useLocation().search);

const RoutingWrapper = () => {
    let query = useQuery();
    return (
        <Child name={query.get("page")} />
    );
};

const Child: React.FC<{ name: string | null }> = ({ name }) => {
    switch (name) {
        case null:
            return <Landing />
        case 'profile':
            return <ProfilePage />
        case 'projects':
            return <Projects />
        case 'services':
            return <Services />
        case 'photoBook':
            return <PhotoBook />
        default:
            return <NotFound />
    }
}

export default RoutingWrapper;