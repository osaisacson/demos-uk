import React, { Component } from "react";
import VotingSection from "./VotingSection";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class RepVotes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //Structure returning each particular voting category and its items
  VotingSection = props => (
    <div>
      <h2>{props.title}</h2>
      {props.category.map(item => {
        return (
          <>
            <p>{item.text}</p>
            <p>{item.voted}</p>
          </>
        );
      })}
    </div>
  );

  render() {
    let comparisonScore = "28%";
    //Based on below UI which should show the issues on which the rep has voted, and let the user click agree or not agree. user agrees with all, comparisonScore is 100%, with none, 0%.

    // Define subsets of main card set
    let socialIssues = this.props.votingRecord.filter(
      record => record.category === "social issues"
    );
    let foreignPolicy = this.props.votingRecord.filter(
      record => record.category === "foreign policy and defence"
    );
    let welfareAndBenefits = this.props.votingRecord.filter(
      record => record.category === "welfare and benefits"
    );

    let allVotingCategories = [
      {
        eventKey: "social-issues",
        title: "Social Issues",
        category: socialIssues
      },
      {
        eventKey: "foreign-policy",
        title: "Foreign Policy & Defense",
        category: foreignPolicy
      },
      {
        eventKey: "welfare-and-benefits",
        title: "Welfare & Benefits",
        category: welfareAndBenefits
      }
    ];

    return (
      <>
        <Tabs
          className="tabs"
          defaultActiveKey="social-issues"
          id="uncontrolled-tab-example"
        >
          {allVotingCategories.map(category => {
            return (
              <Tab
                className="tab"
                key={category.eventKey}
                eventKey={category.eventKey}
                title={category.title}
              >
                <VotingSection category={category.category} />
              </Tab>
            );
          })}
        </Tabs>

        <h1>{comparisonScore}</h1>
      </>
    );
  }
}
