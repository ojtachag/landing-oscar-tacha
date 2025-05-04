'use client';
import React, {JSX, MouseEvent} from "react";
import './app-header.sass'
import {useRouter} from "next/navigation";

const AppHeader = (): JSX.Element => {
    const router = useRouter();
    return (
        <div className="app-header--container">
            <div className="app-header--container__logo">
                <picture>
                    <source src="logo.svg" type="image/svg"/>
                    <img
                        className="app-header--logo"
                        src="logo.svg"
                        alt="logo"
                        loading="eager"
                        title="logo"
                    />
                </picture>
            </div>
            <div className="app-header--menu">
                <div className="header--menu"
                     onClick={(event: MouseEvent<HTMLDivElement>) => router.push('/')}>
                    Inicio
                </div>
                <div className="header--menu"
                     onClick={(event: MouseEvent<HTMLDivElement>) => {
                         router.push('/about');
                     }}>
                    Acerca de mi
                </div>
                <div className="header--menu"
                     onClick={(event: MouseEvent<HTMLDivElement>) => router.push('/experience')}>
                    Experiencia
                </div>
                <div className="header--menu"
                     onClick={(event: MouseEvent<HTMLDivElement>) => router.push('/projects')}>
                    Proyectos
                </div>
                <div className="header--menu"
                     onClick={(event: MouseEvent<HTMLDivElement>) => router.push('/contact-me')}>
                    Contactame
                </div>
                <div className="header--menu">
                    CV
                </div>
            </div>
        </div>
    );
};
export default AppHeader;