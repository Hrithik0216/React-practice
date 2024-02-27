import React from 'react';

const Right = (props) => {
    let { jsonData } = props
    return (
        <div className="content-right">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map((val, index) =>
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Right;
