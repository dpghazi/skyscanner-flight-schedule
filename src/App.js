// Combine Calendar code into App.js
import React, { Component } from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
// Import CALENDAR_SELECTION_TYPE:
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import format from 'date-fns/format';
import STYLES from './App.scss';


const c = className => STYLES[className] || 'UNKNOWN';
const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
// Add the rest of the days:
const daysOfWeek = [
    {
        name: 'Sunday',
        nameAbbr: 'Sun',
        index: 0,
        isWeekend: true,
    },
    {
        name: 'Monday',
        nameAbbr: 'Mon',
        index: 1,
        isWeekend: false,
    },
    {
        name: 'Tuesday',
        nameAbbr: 'Tues',
        index: 2,
        isWeekend: false,
    },
    {
        name: 'Wednesday',
        nameAbbr: 'Wed',
        index: 3,
        isWeekend: false,
    },
    {
        name: 'Thursday',
        nameAbbr: 'Thur',
        index: 4,
        isWeekend: false,
    },
    {
        name: 'Friday',
        nameAbbr: 'Fri',
        index: 5,
        isWeekend: false,
    },
    {
        name: 'Saturday',
        nameAbbr: 'Sat',
        index: 6,
        isWeekend: true,
    },
];

// Convert functional to class component:
export default class App extends Component {
    constructor () {
        super();

        this.state = {
            selectionConfiguration: {
                type: CALENDAR_SELECTION_TYPE.single,
                date: null,
            }
        };
    }

    handleDateSelect = (date) => {
        this.setState({
            selectionConfiguration: {
                type: CALENDAR_SELECTION_TYPE.single,
                date: date,
            },
        });
    }

    render () {
        return (
            <div className={c('App')}>
                <header className={c('App__header')}>
                    <div className={c('App__header-inner')}>
                        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Skyscanner Flight Schedule</BpkText>
                    </div>
                </header>
                <main className={c('App__main')}>
                    {/* Remove <BpkInput /> because we just want to select date from calendar*/}
                    <div>
                        <BpkCalendar
                            id='calendar'
                            onDateSelect={this.handleDateSelect}
                            formatMonth={formatMonth}
                            formatDateFull={formatDateFull}
                            daysOfWeek={daysOfWeek}
                            weekStartsOn={0}
                            changeMonthLabel="Change month"
                            nextMonthLabel="Next month"
                            previousMonthLabel="Previous month"
                            selectionConfiguration={this.state.selectionConfiguration}
                        />
                    </div>
                    <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
                </main>
            </div>
        )
    }
}