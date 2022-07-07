import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const QNA = ({ questionsAndAnswers }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Questions</th>
          <th>Your Answers</th>
          <th>Correct Answers</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {questionsAndAnswers.map((item, i) => (
          <tr key={i + 1}>
            <td>{i + 1}</td>
            <td>{item.question}</td>
            <td>{item.user_answer}</td>
            <td>{item.correct_answer}</td>
            <td>{item.point}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};



export default QNA;
