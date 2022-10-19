import {useState, useEffect} from 'react';
import './../style/Content.css';
import axios from 'axios';

import teachers from './Teachers';

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {IoPeopleOutline} from 'react-icons/io5';
import {RiShieldStarLine, RiFullscreenFill} from 'react-icons/ri';
import {SiOpslevel} from 'react-icons/si'
import {HiDownload, HiPlus} from 'react-icons/hi';
import {BiTimeFive} from 'react-icons/bi';
import {FaLocationArrow} from 'react-icons/fa';
import {MdOutlineRemoveRedEye} from 'react-icons/md';

const Content = () => {

  return (
    <div className="content">
  
      <div className="row">
        <div className="col">
          {/* left side user */}
          <div className="user">

            {/* user-profile */}
            <div className="user-profile">
              <div className="left">
                <img className="avatar" src="https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png" alt="avatar"  />
                <label className='name'>
                  {teachers.data[0].firstName} {teachers.data[0].lastName}
                  <br />    
                  <span className="status">Teacher</span>
                </label>        
              </div>
              <div className="right">
                <button className="btn">
                  <HiPlus className='icon' />
                </button>
              </div>
            </div>

            {/* about user */}
            <div className="about-user">
              
              {/* header */}
              <div className="about-user-header">
                <h3 className="title">
                  Information about teacher
                </h3>
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, provident.
                </p>
                <div className="more">
                  More
                  <IoIosArrowDown className='icon' />
                </div>
              </div>

              {/* achievements */}
              <div className="achievements">
                <div className="achievements-header">
                  <h3 className='title'>
                    Course 
                    <span className="text-secondary"> Achievements</span>
                  </h3>
                  <div className="dots">...</div>
                </div>
                <div className="cards">
                  <div className="card">
                    <RiShieldStarLine className='icon text-warning' />
                    <label>4/5</label>
                    <p>score</p>
                  </div>
                  <div className="card">
                    <IoPeopleOutline className='icon text-dark'  />
                    <label>{teachers.data[0].students.length}</label>
                    <p>people</p>
                  </div>
                  <div className="card">
                    <SiOpslevel className='icon text-primary' />
                    <label>Beginner</label>
                    <p>level</p>
                  </div>
                </div>
              </div>
              
              {/* materials */}
              <div className="materials">
                <div className="materials-header">
                  <h3 className='title'>
                    Course <span className="text-secondary"> materials</span>
                  </h3>
                  <div className="duration">
                  <BiTimeFive className='icon'/> 
                  90min
                  </div>
                </div>
                {/* card */}
                <div className="cards">
                  <div className="card bg-success">
                    <label>
                      <span className='count btn-success'>1</span>
                      Syllabus
                    </label>
                    <button className="btn">
                      <HiDownload className='icon'/>
                    </button>
                  </div>
                  <div className="card bg-danger">
                    <label>
                      <span className='count btn-danger'>2</span>
                      Lesson materials
                    </label>
                    <button className="btn">
                      <HiPlus className='icon'/>
                    </button>
                  </div>
                  <div className="card bg-light">
                    <label>
                      <span className='count btn-dark'>3</span>
                      Project
                    </label>
                    <button className="btn">
                      <HiPlus className='icon'/>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="col">
          {/* right side */}
          <div className="right-side">
            <img className='right-header-img' src="https://find-model.jp/insta-lab/wp-content/uploads/2021/10/youtube-creator.jpg" alt="" />

            <div className="row">
              {/* online chat */}
              <div className="online-chat">
                <div className="online-chat-header">
                  <h3 className="title">
                    Live <span className="text-secondary">Chat</span> 
                  </h3>
                  <RiFullscreenFill className='full-screen-icon' />
                </div>
                {/* chat body */}
                <div className="chat-body">

                  <div className="chatting">
                    {/* receiver */}
                    <div className="receiver">
                      <img className="avatar"  src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=""/>
                      <div className="messages">
                        <div className="message">
                          <p>Hello</p>
                        </div>
                        <div className="message">
                          <p>I like this course.</p>
                        </div>
                      </div>
                      
                    </div>
                    {/* sender */}
                    <div className="sender">
                      <div className="messages">
                        <div className="message">
                          <p> Hello!</p>
                        </div>
                        <div className="message">
                          <p>Thanks!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* input */}
                  <div className="chat-input">
                    <input type="text" placeholder='Yazın...'/>
                    <FaLocationArrow  className='send-icon'/>
                  </div>
                </div>       
              </div>

              {/* users */}
              <div className="users">
                <div className="users-header">
                  <h3 className="title">Students</h3>
                  <div className="online-people-count">
                    <label>Online</label>
                    <MdOutlineRemoveRedEye className='eye-icon' />
                    <span className="count">36</span>
                  </div>
                </div>
                {/* cards */}
                <div className="cards">
                  <div className="card">
                    {/* left */}
                    <div className="left">
                      <img src="https://365psd.com/images/istock/previews/9730/97305669-avatar-icon-of-girl-in-a-baseball-cap.jpg" alt="" className="card-img" />
                      <div className="username">
                        <h3>Leila Abbasova</h3>
                        <p>@labbasova</p>
                      </div>
                    </div>
                    {/* right */}
                    <div className="right">
                      <button className="btn">
                        <HiPlus className='icon' />
                      </button>
                    </div>
                  </div>

                  <div className="card">
                    {/* left */}
                    <div className="left">
                      <img src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="" className="card-img" />
                      <div className="username">
                        <h3>Ali Huseynli</h3>
                        <p>@huseynove</p>
                      </div>
                    </div>
                    {/* right */}
                    <div className="right">
                      <button className="btn">
                        <HiPlus className='icon' />
                      </button>
                    </div>
                  </div>

                  <div className="card">
                    {/* left */}
                    <div className="left">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="" className="card-img" />
                      <div className="username">
                        <h3>Mehman Ali</h3>
                        <p>@mhmndali</p>
                      </div>
                    </div>
                    {/* right */}
                    <div className="right">
                      <button className="btn">
                        <HiPlus className='icon' />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content