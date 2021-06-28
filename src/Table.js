import { useEffect, useState } from "react";


const Table = () => {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then(resp => resp.json())
            .then(resp => {
                setPeople(resp.results)
                console.log(resp.results)
            })
    }, [])

    const SortByLastName = () => {
        console.log('Hello');
        const comparator = (a, b) => {
            if (a.name.last > b.name.last) return 1;
            if (a.name.last < b.name.last) return -1;
            return 0;
        }
        const sortedPeople = people.sort(comparator);
        setPeople([...sortedPeople]);

    }

    const SortByFirstName = () => {
        console.log('Hello');
        const comparator = (a, b) => {
            if (a.name.first > b.name.first) return 1;
            if (a.name.first < b.name.first) return -1;
            return 0;
        }
        const sortedPeople = people.sort(comparator);
        setPeople([...sortedPeople]);

    }
    console.log(people);
    return (
        <table className="table table-striped justify-content-center">
            <thead className='thead-dark'>
                <tr>
                    <th>Picture</th>
                    <th onClick={SortByFirstName}>First Name <button>sort</button></th>
                    <th onClick={SortByLastName}>Last Name <button>sort</button></th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {people.map(person =>
                    <tr key={person.name.last}>
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
            </tbody>
        </table>
    );
}

export default Table;