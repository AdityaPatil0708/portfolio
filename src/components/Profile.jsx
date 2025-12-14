import profile from '/images/adityaprofile2.webp';

export default function Profile() {
    return (
        <section className="profile">
            <div className='profile-1'>
                <img src={profile} alt="Aditya's profile" className="avatar" /><br />
                <p>Aditya Patil</p>
            </div>
            <div className='profile-2'>
                <h2>Skills</h2>
                <p> <strong>• Languages :</strong> C++, HTML, CSS, JavaScript</p>
                <p> <strong>• Technologies :</strong> Express.js, Node.js, Websockets, MongoDB, PostgreSQL </p>
                <p> <strong>• DevOps and Tools :</strong> Docker, Kubernetes, AWS, GitHub, Jenkins, GitHub Actions </p>
                <p> <strong>• General:</strong> Data Structures, Algorithms, Database Management System, Computer Networks.</p>
            </div>

        </section>
    );
}
