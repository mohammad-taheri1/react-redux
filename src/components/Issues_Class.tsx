import axios from 'axios';
import React, { Component } from 'react';

// Types
type Issue = {
    number: number,
    title: string,
    state: string
}
type Props = {};
type State = { issues: Issue[]};

class Issues_Class extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
        .then((response: any) => {
            this.setState({
                issues: response.data 
            })
        })
    }

    render() {
        const { issues = []} = this.state;

        return (
            <>
                <h1>ContentPI Isuues</h1>

                {issues.map((issue: Issue) => (
                    <p key={issue.title}>
                        <strong>#{issue.number}</strong> {' '}
                        <a href = {`https://api.github.com/repos/ContentPI/ContentPI/issues/${issue.number}`} target="_blank">
                            {issue.title} {' '}
                        </a>
                        {issue.state}
                    </p>
                ))}
            </>
        );
    }
}

export default Issues_Class;