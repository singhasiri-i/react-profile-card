// file นี้ใช้สร้าง function ที่สร้างครั้งเดียวแล้วเอาไปใช้ซ้ำได้

function ProfileCard( { title, handle, image, description } ) { 
    // Object ที่ส่งเข้ามาที่ parameter "props" จาก App.js 
    // จะเป็น { title: "...", handle="..." }

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={ image } alt="image loading" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{ title }</p>
                    <p className="subtitle is-6">{ handle }</p>
                </div>
                <div className="content">{ description }</div>
            </div>
        </div>
    )
}

export default ProfileCard

