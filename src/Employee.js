import React, { useState } from 'react'
import employee_contact from "./assets/employee_contact.png"
import employee_logo from "./assets/employee_logo.png"
import { FcHome } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

function Employee() {
    const users = [
        { empId: 1, name: 'Atanu', dob: '26/11/1996', role: 'Software Developer' },
        { empId: 2, name: 'Arjun', dob: '26/11/1996', role: 'Software Developer' },
        { empId: 3, name: 'suhas', dob: '26/11/1996', role: 'Software Developer' },
        { empId: 4, name: 'deepak', dob: '26/11/1996', role: 'Software Developer' },
    ];
    const [activeTab, setActiveTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
    
        setFilteredUsers(filtered); // Set filtered users, even if it's empty
    };

    return (
        <div className='employee_main'>
            <div className='employee_div'>
                <img className='contact_logo' src={employee_contact} alt='img' /> {activeTab === 'home' ? 'active' : ''}
                <div className='employee_logo_div'>
                    <img className='employee_logo' src={employee_logo} alt='img' />
                    <p className='employee_count'>4</p>
                </div>
                {activeTab === 'home' ?
                    <div className='search_employee_main'>
                        <p className='search_employee_text'>Employee Productivity Dashboard</p>
                        <div className='progress-main'>
                            <div className='progress-div'>
                                <p className='progress_title'>Productivity on Monday</p>
                                <p className='progress_percentage'>4%</p>
                            </div>
                            <div class="w3-round-xlarge">
                                <div class="w3-container progress-bar w3-round-xlarge" style={{ width: '4%', height: '11px' }}></div>
                            </div>

                            <div className='progress-div'>
                                <p className='progress_title'>Productivity on Tuesday</p>
                                <p className='progress_percentage'>92%</p>
                            </div>
                            <div class="w3-round-xlarge">
                                <div class="w3-container progress-bar w3-round-xlarge" style={{ width: '70%', height: '11px' }}></div>
                            </div>

                            <div className='progress-div'>
                                <p className='progress_title'>Productivity on Wednesday</p>
                                <p className='progress_percentage'>122%</p>
                            </div>
                            <div class="w3-round-xlarge">
                                <div class="w3-container progress-bar w3-round-xlarge" style={{ width: '100%', height: '11px' }}></div>
                            </div>

                            <div className='progress-div'>
                                <p className='progress_title'>Productivity on Thursday</p>
                                <p className='progress_percentage'>93%</p>
                            </div>
                            <div class="w3-round-xlarge">
                                <div class="w3-container progress-bar w3-round-xlarge" style={{ width: '73%', height: '11px' }}></div>
                            </div>

                            <div className='progress-div'>
                                <p className='progress_title'>Productivity on Friday</p>
                                <p className='progress_percentage'>89%</p>
                            </div>
                            <div class="w3-round-xlarge">
                                <div class="w3-container progress-bar w3-round-xlarge" style={{ width: '69%', height: '11px' }}></div>
                            </div>

                            <div className='progress-div'>
                                <p className='progress_title'>Productivity on Saturday</p>
                                <p className='progress_percentage'>98%</p>
                            </div>
                            <div class="w3-round-xlarge">
                                <div class="w3-container progress-bar w3-round-xlarge" style={{ width: '78%', height: '11px' }}></div>
                            </div>

                        </div>
                    </div>
                    : ''
                }

                {activeTab === 'contacts' ?
                    <div className='user-main'>
                        <div className="user-div">
                            <input
                                type='text'
                                className='user_input'
                                placeholder='Search with name'
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <CiSearch className='search-icon' />
                            <div className='userMainard'>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, index) => (
                                    <div className='user-card' key={index}>
                                        <div>
                                            <div className='user-details'>
                                                <p>EMP ID</p>
                                                <p>:</p>
                                                <span className='user-details-number'>{user.empId}</span>
                                            </div>
                                            <div className='user-details'>
                                                <p>Name</p>
                                                <p>:</p>
                                                <span className='user-details-number'>{user.name}</span>
                                            </div>
                                            <div className='user-details'>
                                                <p>DOB</p>
                                                <p>:</p>
                                                <span className='user-details-dob'>{user.dob}</span>
                                            </div>
                                            <div className='user-details'>
                                                <p>Role</p>
                                                <p>:</p>
                                                <span className='user-details-role'>{user.role}</span>
                                            </div>
                                        </div>
                                        <div className='user-count'>{user.empId}</div>
                                    </div>
                                ))
                            ) : (
                                <p className='no-data'>No users found.</p>
                            )}

</div>                            </div>
                    </div>
                    : ''
                }

            </div>
            <div className={`tab_bottom_section ${activeTab === 'home' ? 'active' : ''}`}>
                <div className={`bottom-div ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                    <FcHome className='home-icon' />
                </div>
                <div className={`bottom-div ${activeTab === 'contacts' ? 'active' : ''}`} onClick={() => setActiveTab('contacts')}>
                    <RiContactsFill className='home-icon' />
                </div>
            </div>
        </div>
    )
}

export default Employee
