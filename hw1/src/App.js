import React, { Component } from 'react'
import FeedbackOptions from './components/button/Button'
import NotificationRevue from './components/notification/notification'
import Sectiontitle from './components/Sectiontitle/Sectiontitle'
import Statistics from './components/statistics/Statistics'

class App extends Component{
    state={
        good: 0,
        neutral: 0,
        bad: 0,
        total: ()=>{
            const{good, neutral, bad} = this.state
            return good + neutral + bad
        },
        percentage: ()=>{
            return Math.round((this.state.good+this.state.neutral)/this.state.total()*100)
        }
    }
    onHandleClick=(e)=>{
        const name = e.target.name
        this.setState({[name]: this.state[name] + 1 })
    }
        render(){
                return (
                    <>
                    <Sectiontitle title="Please leave feedback">
                        <FeedbackOptions onHandleClick = {this.onHandleClick}/>
                    </Sectiontitle>
                {
                    this.state.total() === 0
                    ?<NotificationRevue message="No feedback given"/>
                    :<Sectiontitle title="STATISTIC">
                        <Statistics {...this.state}/>
                        </Sectiontitle>
                }
                    </>
        );
    }

}
export default App