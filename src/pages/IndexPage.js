import React from 'react';

export default function IndexPage() {
    return(
       <div className='container-index'>
            <div className='image1'>
                <img className='home-image' src="https://iemalteria-back.vercel.app/uploads/img1.jpeg"  alt='img1'/>
                <div className="image-content">
                    <h1>Institución Educativa <br/> Maltería</h1>
                    <img src="https://iemalteria-back.vercel.app/uploads/logo.png" alt='logo' />
                </div>
            </div>
            <div className='info-general'>
                <div className='mision'>
                    <h1>Misión</h1>
                    <p>Formar niños, niñas y jóvenes con enfoque humanista-socializante, inclusivo, competentes en el ámbito Industrial y del campo, para la conservación y saneamiento ambiental, con el fin de desarrollar proyectos productivos que respondan a las necesidades personales, familiares y comunitarias en contexto local, regional y Nacional, mediante metodologías flexibles dentro del modelo escuela nueva. </p>
                    <img src="https://iemalteria-back.vercel.app.app/uploads/mision.svg" alt="mision"/>
                </div>
                <div className='vision'>
                    <h1>Visión</h1>
                    <p>Para el año 2025, la institución educativa Maltería será reconocida a nivel local, regional, nacional e internacional, por su alto nivel de desarrollo de competencias laborales, generales y específicas; que respondan a las necesidades de un mundo globalizado y beneficiando la calidad de vida de sus estudiantes y sus familias. </p>
                    <img src="https://iemalteria-back.vercel.app/uploads/vision.png" alt="vision"/>
                </div>
            </div>

            <div className='semilleros'>
                <h1 className="create-title">Centros de Interés</h1>
                <div className="card-container">
                    {/* Card 1 */}
                    <div className="card">
                        <img src="https://iemalteria-back.vercel.app/uploads/musica.jpeg" alt="Semillero 1" />
                        <h3>Semillero de Formación Musical</h3>
                    </div>
                    {/* Card 2 */}
                    <div className="card">
                        <img src="https://iemalteria-back.vercel.app/uploads/emprendimiento.jpeg" alt="Semillero 2" />
                        <h3>Semillero de Emprendimiento</h3>
                    </div>
                    {/* Card 3 */}
                    <div className="card">
                        <img src="https://iemalteria-back.vercel.app/uploads/boxeo.webp" alt="Semillero 3" />
                        <h3>Semillero de Boxeo</h3>
                    </div>
                    {/* Card 4 */}
                    <div className="card">
                        <img src="https://iemalteria-back.vercel.app/uploads/futbol.png" alt="Semillero 4" />
                        <h3>Semillero de Fútbol</h3>
                    </div>
                    {/* Card 5 */}
                    <div className="card">
                        <img src="https://iemalteria-back.vercel.app/uploads/ambiental.jpeg" alt="Semillero 5" />
                        <h3>Semillero Ambiental</h3>
                    </div>
                    {/* Card 6 */}
                    <div className="card">
                        <img src="https://iemalteria-back.vercel.app/uploads/danza2.png" alt="Semillero 6" />
                        <h3>Semillero de Danza</h3>
                    </div>
                </div>
            </div>

            <div className='ubicacion'>
                <h1 className="create-title">Ubicación</h1>
                <div className="iframe-container">
                    <iframe title='ubi' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4132332889826!2d-75.43337972525883!3d5.0365480949400245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47667451b63a41%3A0xb37900572999e029!2sInstituci%C3%B3n%20Educativa%20Malter%C3%ADa!5e0!3m2!1ses!2sco!4v1716302505071!5m2!1ses!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
       </div>
    )
}
