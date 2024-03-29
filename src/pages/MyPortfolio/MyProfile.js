import React from 'react';

const MyProfile = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-xl font-bold text-center text-red-800'>My portfolio</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Education</th>
                            <th>Skills</th>
                            <th>Project Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Sabiha Wasema</td>
                            <td>sabihawasemaa1244@gmail.com</td>
                            <td>

                                B.SC in CSE
                            </td>
                            <td>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>React Router</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                            </td>
                            <td>
                                <li><a>Livesite</a></li>
                                <li><a href=': https://independent-service-prov-553a2.web.app/'>Livesite</a></li>
                                <li><a href='https://gauche-fruit-center.web.app/'>Livesite</a></li>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;