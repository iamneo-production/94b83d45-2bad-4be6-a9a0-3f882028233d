import React, { useState, useEffect } from 'react';
import BASE_URL from '../../api/axios';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineMessage } from 'react-icons/ai';
import './EnrolledStudents.css';

function EnrolledStudents({ courseId }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}courses/${courseId}/enrollments`);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [courseId]);

  return (
    <>
      {(users === null || users.length === 0) ? (
        <h1>No users curreently enrolled into this course</h1>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to="#">
                      <AiOutlineMessage />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default EnrolledStudents;
