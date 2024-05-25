import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ReplayIcon from '@mui/icons-material/Replay';
import FolderIcon from '@mui/icons-material/Folder';
import SendIcon from '@mui/icons-material/Send';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import PdfViewer from '../components/PdfViewer';

function Reading_Mode() {

    const navigate = useNavigate();

    const handleIconClick = (page) => {
        navigate(page);
    };

    const [folderStates, setFolderStates] = useState(Array(6).fill(false)); // Assuming 6 folders initially closed

    const toggleFolder = (index) => {
        const newFolderStates = [...folderStates];
        newFolderStates[index] = !newFolderStates[index];
        setFolderStates(newFolderStates);
    };

    // const pdfUrl = './files/paper.pdf';



    return (
        <div className="reading_mode_page">

            <div className="left_side_bar">

                <div className="reading_profile_container">
                    <img src="./images/santi4.jpg" alt="" />
                </div>

                <h2>Tanvir Ahmed</h2>

                <button onClick={() => handleIconClick('/home_page')} >Switch to Junno</button>

                <hr />

                <h4>To Do Lists</h4>
                <h4 className="eye">Eye On</h4>

                <div className="folders_header">

                    <h4>Your files and folders</h4>

                </div>

                <hr className="line" />

                <div className="folders">

                    <CreateNewFolderIcon className='file_icon' />
                    <NoteAddIcon className='file_icon' />
                    <ReplayIcon className='file_icon' />

                    <div className="devider"></div>

                    {/* <h5>Python_Practice</h5> */}


                </div>

                <div className="files_and_folders_container">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="folder_container">
                            <div className="folder" onClick={() => toggleFolder(index)}>
                                <FolderIcon className='folder_icon' />
                                <h5> Folder {index + 1} </h5>
                                <div className="arrow">
                                    {folderStates[index] ? '▼' : '►'}
                                </div>
                            </div>
                            {folderStates[index] && (
                                <div className="files_in_folder">
                                    {/* You can render files or nested folders here */}
                                    <div className="file">File 1</div>
                                    <div className="file">File 2</div>
                                    <div className="file">File 3</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>




            </div>

            <div className="mid_contents">

                <div className="navigation_bar">
                    <li>Python.py</li>
                    <li>Inheritance.py</li>
                    <li>STL.pdf</li>
                    <li>tutorial.pdf</li>
                    <li>tutorial.pdf</li>
                    <li>swapLargestNumber.cpp</li>
                    <li>swapLargestNumber.cpp</li>
                    <li>swapLargestNumber.cpp</li>
                    <li>Inheritance.py</li>
                </div>

                <div className="content">

                    {/* <PdfViewer pdfUrl={pdfUrl} /> */}
                    <img src="./images/pdf_img.PNG" alt="" />
                    <img src="./images/pdf_img2.PNG" alt="" />

                </div>






            </div>

            <div className="right_contents">

                <div className="todo_lists">
                    <h4>To Do</h4>
                    <hr />
                    <li>Morning Walk</li>
                    <li>Morning Walk</li>
                    <li>Morning Walk</li>
                    <li>Morning Walk</li>

                    <h4>Eye On</h4>
                    <hr />
                    <li>Morning Walk</li>
                    <li>Morning Walk</li>
                    <li>Morning Walk</li>
                    <li>Morning Walk</li>
                </div>

                <div className="ai">

                    <div className="mid_element">
                        <img src="./images/swiftui.png" alt="" />
                        <h2>Clear your doubt</h2>

                    </div>

                    <div className="last_elements">
                        <input type="text" placeholder='Enter your query...' />
                        <SendIcon className='ask_ai' />
                    </div>

                </div>

            </div>




        </div>
    )
}

export default Reading_Mode;