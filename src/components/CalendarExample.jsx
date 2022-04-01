import React from 'react'
import './css/calendarexample.css'
import { Link } from 'react-router-dom';

export const CalendarExample = () => {
    return (


        <div className='example-calendar-container '>

            <div className='example-row'>
                <h2 className="march">March 2022</h2>
                <div className='example-arrows-div'>
                    <img src={require('../images/arrow-left.png')} alt='arrow left' className='arrow-left' onClick={(e) => { this.prevMonth() }} />
                    <img src={require('../images/arrow-right.png')} alt='arrow right' className='arrow-right' onClick={(e) => { this.nextMonth() }} />
                </div>
            </div>
            <div className='example-header3'>
                <div className='example-header2'><h4 className="weeks">Sun</h4></div>
                <div className='example-header2'><h4 className="weeks">Mon</h4></div>
                <div className='example-header2'><h4 className="weeks">Tue</h4></div>
                <div className='example-header2'><h4 className="weeks">Wed</h4></div>
                <div className='example-header2'><h4 className="weeks">Thu</h4></div>
                <div className='example-header2'><h4 className="weeks">Fri</h4></div>
                <div className='example-header2'><h4 className="weeks">Sat</h4></div>
            </div>
            <div className='example-row'>
                <div className='example-calendar-day'></div>
                <div className='example-calendar-day'></div>
                <div className='example-calendar-day'><h6 className="dayNum">1</h6></div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        2
                        <br />
                        <Link to='/calendar/entry/6244f6ce98af81f16497f1a2'>First Journal</Link>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        3
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        4
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        5
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
            </div>
            <div className='example-row'>
                <div className='example-calendar-day'><h6 className="dayNum">6</h6></div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        7
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'><h6>8</h6></div>
                <div className='example-calendar-day'><h6>9</h6></div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        10
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'><h6 className="dayNum">11</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">12</h6></div>
            </div>
            <div className='example-row'>
                <div className='example-calendar-day'><h6 className="dayNum">13</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">14</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">15</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">16</h6></div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        17
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'><h6 className="dayNum">18</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">19</h6></div>
            </div>
            <div className='example-row'>
                <div className='example-calendar-day'><h6 className="dayNum">20</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">21</h6></div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        22
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'>
                    <h6 className="dayNum">
                        23
                        <br />
                        <a href='#'>Example entry</a>
                        <br />
                        <a href='#'>Example entry</a>
                    </h6>
                </div>
                <div className='example-calendar-day'><h6 className="dayNum">24</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">25</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">26</h6></div>
            </div>
            <div className='example-row'>
                <div className='example-calendar-day'><h6 className="dayNum">27</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">28</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">29</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">30</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum">31</h6></div>
                <div className='example-calendar-day'><h6 className="dayNum"></h6></div>
                <div className='example-calendar-day'><h6 className="dayNum"></h6></div>
            </div>
        </div>


    )
}
export default CalendarExample;