import React, {JSX} from "react";
import './page.sass'
import AboutSkills from "@/app/components/about-skills/about-skills";

const Page = (): JSX.Element => {
    return (
        <div className="main--container">
            <div className="description--container">
                <div className="image">
                    <picture>
                        <source src="main2.webp" type="image/webp"/>
                        <img
                            className="image"
                            src="main2.webp"
                            alt="Oscar Tacha"
                            loading="eager"
                            title="logo"
                        />
                    </picture>
                </div>
                <div className="description--text">
                    Vivo en Bogotá, Colombia, soy desarrollador fullstack y arquitecto de software, además de tener
                    conocimientos en procesos de desarrollo de software desde el análisis de requerimientos en la
                    creación de historias de usuario, modelado de software y base de datos hasta la etapa de desarrollo
                    en metodologías ágiles usando diferentes lenguajes de programación.
                </div>
            </div>
            <AboutSkills/>
        </div>
    );
}
export default Page;