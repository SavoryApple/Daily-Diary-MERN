import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './calendar.css';
import { useHistory } from "react-router-dom";


function Calendar(props) {

    const history = useHistory();

    const [dateContext, setDateContext] = useState(moment());
    const [today, setToday] = useState(moment());
    const [showMonthPopup, setShowMonthPopup] = useState(false);
    const [showYearNav, setShowYearNav] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    // const weekdaysObj = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    const weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = moment.months();

    const year = () => {
        return dateContext.format("Y");
    }
    const month = () => {
        return dateContext.format("MMMM");
    }
    const daysInMonthFunc = () => {
        return dateContext.daysInMonth();
    }
    const currentDate = () => {
        return dateContext.get("date");
    }
    console.log("currentDate: ", dateContext.get("date"));
    const currentDay = () => {
        return dateContext.format("D");
    }

    const firstDayOfMonth = () => {
        // let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    const setMonth = (month) => {
        let monthNo = months.indexOf(month);
        let dateContextObj = Object.assign({}, dateContext);
        dateContextObj = moment(dateContext).set("month", monthNo);
        setDateContext(dateContextObj);
    }

    const nextMonth = () => {
        let dateContextObj = Object.assign({}, dateContext);
        dateContextObj = moment(dateContext).add(1, "month");
        setDateContext(dateContextObj);
        props.onNextMonth && props.onNextMonth();
    }

    const prevMonth = () => {
        let dateContextObj = Object.assign({}, dateContext);
        dateContextObj = moment(dateContext).subtract(1, "month");
        setDateContext(dateContextObj);
        props.onPrevMonth && props.onPrevMonth();
    }

    const onSelectChange = (e, data) => {
        setMonth(data);
        props.onMonthChange && props.onMonthChange();

    }
    const SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <div onClick={(e) => { onSelectChange(e, data) }}>
                        {data}
                    </div>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    const onChangeMonth = (e, month) => {
        setShowMonthPopup(!showMonthPopup)
    }

    const MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e) => { onChangeMonth(e, month()) }}>
                {month()}
                {showMonthPopup &&
                    <SelectList data={months} />
                }
            </span>
        );
    }
    const YearNav = () => {
        return (
            showYearNav ?
                <input
                    defaultValue={year()}
                    className="editor-year"
                    ref={(yearInput) => { yearInput = yearInput }}
                    onKeyUp={(e) => onKeyUpYear(e)}
                    onChange={(e) => onYearChange(e)}
                    type="number"
                    placeholder="year" />
                :
                <span
                    className="label-year"
                    onDoubleClick={(e) => { showYearEditor() }}>
                    {year()}
                </span>
        );
    }

    const showYearEditor = () => {
        setShowYearNav(true);
    }

    const setYear = (year) => {
        let dateContext = Object.assign({}, dateContext);
        dateContext = moment(dateContext).set("year", year);
        setDateContext(dateContext);
    }
    const onYearChange = (e) => {
        setYear(e.target.value);
        props.onYearChange && props.onYearChange(e, e.target.value);
    }

    const onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            setYear(e.target.value);
            setShowYearNav(false);
        }
    }


    const onDayClick = (e, day) => {
        setSelectedDay(day);
        console.log("SELECTED DAY: ", selectedDay);
        props.onDayClick && props.onDayClick(e, day);
        history.push("/calendar/entry");
    }

    // Map the weekdays i.e Sun, Mon, Tue etc as <td>
    let weekdays = weekdaysShort.map((day) => {
        return (

            <td key={day} className="week-day">{day}</td>
        )
    });

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td key={i * 80} className="emptySlot">
            {""}
        </td>
        );
    }

    console.log("blanks: ", blanks);

    let daysInMonth = [];
    for (let d = 1; d <= daysInMonthFunc(); d++) {
        let className = (d == currentDay() ? "day current-day" : "day");
        let selectedClass = (d == selectedDay ? " selected-day " : "")
        daysInMonth.push(
            <td key={d} className={className + selectedClass} onClick={(e) => onDayClick(e, d)}>
                <span >{d}</span>
            </td>
        );
    }

    console.log("days: ", daysInMonth);

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if ((i % 7) !== 0) {
            cells.push(row);
        } else {
            let insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            let insertRow = cells.slice();
            rows.push(insertRow);
        }
    });

    let trElems = rows.map((d, i) => {
        if (d.length != 0) {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            );
        }
    })

    return (
        
            <div className="calendar-container" >
                <h3>Click on a day to create your first entry!</h3>
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="1"></td>
                            <td colSpan="2">
                                <MonthNav />
                            </td>
                            <td colSpan="2">
                                <YearNav />
                            </td>
                            <td colSpan="1">
                                <img src={require('../images/arrow-left.png')} alt='arrow left' className='arrow-left' onClick={() => { prevMonth() }} />
                            </td>
                            <td colSpan="1">
                                <img src={require('../images/arrow-right.png')} alt='arrow right' className='arrow-right' onClick={() => { nextMonth() }} />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
            </div>
       
    );

}

export default Calendar;