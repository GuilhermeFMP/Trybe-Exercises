import React from "react";
import Loading from "./Loading";
import PersonalCard from "./PersonalCard";

class PersonalDetails extends React.Component {
    constructor() {
        super()

        this.state = {
            person: [],
            loading: true,
        };

        this.getUserElements = this.getUserElements.bind(this);
    }

    shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.person[0].dob.age < AGE) return true;
    }

    getUserElements(user) {
        return {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          age: user.dob.age,
          image: user.picture.thumbnail,
        };
      }

    componentDidMount() {
        const URL = 'https://api.randomuser.me/'
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    person: data.results,
                    loading: false,
                })
            })
    }

    render() {
        const { loading, person } = this.state
        if (loading) return <Loading />
        return (
            <div>
                <PersonalCard person={ this.getUserElements(person[0])} />
            </div>
        )
    }
}

export default PersonalDetails;