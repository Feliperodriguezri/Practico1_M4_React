export default function DoctorCard({ doctor, experiencia, descripcion, especialidad }
) {
    return (
        <div className="col-3">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{doctor}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">{experiencia}</p>
                    <p className="card-text">{especialidad}</p>
                </div>
            </div>
        </div>


    )
}