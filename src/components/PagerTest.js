import React, { Component } from "react";
import Pager from "./Pager";
import StudentsList from "./StudentsList";
export default class PagerTest extends Component {
  state = {
    current: 1,
    total: 0,
    limit: 10,
    panelNumber: 5,
    students: [],
  };
  constructor(props) {
    super(props);
    this.fetchStudents();
  }
  async fetchStudents() {
    const resp = await fetch(
      `http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.data);


    this.setState({
      total: resp.cont,
      students: resp.findByPage,
    });
  }
  handlePageChange = (newPage) => {
    this.setState({
      current: newPage,
    });
    this.fetchStudents()
  };
  render() {
    return (
      <div className="container">
        <StudentsList stus={this.state.students} />
        <div className="pager">
          <Pager {...this.state} onPageChange={this.handlePageChange} />
        </div>
      </div>
    );
  }
}
