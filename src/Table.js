import { useEffect, useState } from "react";


const Table = () => {
    const [count, setCount] = useState([]);


    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then(resp => resp.json())
            .then(resp => {
                setCount(resp.results)
                console.log(resp.results)
            })
    }, [])

    return (
        <table className="table justify-content-center">
            <thead className='thead-light'>
                <tr>
                    <th>Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            {count.map(person =>
                <tr>
                    <td>
                        <img src={person.picture.thumbnail} />
                    </td>
                    <td> {person.name.first}</td>
                    <td> {person.name.last}</td>
                    <td> {person.location.state}, {person.location.country}</td>
                    <td> {person.email}</td>
                    <td> {person.phone}</td>
                </tr>
            )}
        </table>
    );
}

export default Table;