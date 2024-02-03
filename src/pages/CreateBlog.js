import React, { useState, useEffect } from 'react';
import { BaseUrl, ApiBaseUrl } from '../config.js';
import '../css/CreateBlog.css'

function redirectTo(link){window.location.href = link;}

function CreateBlog() {
  const [formMode, setFormMode] = useState('Create Blog'); // ['create-blog', 'update-blog', 'create-project', 'update-project'
  const [title, setTitle] = useState('');
  const [uniqueLinkId, setUniqueLinkId] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [update, setUpdate] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [color, setColor] = useState('transparent');
  const [responseMessage, setResponseMessage] = useState('Sending message . . .');

  const [blogs, setBlogs] = useState(null);
  const [projects, setProjects] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null);

  const [highlights, setHighlights] = useState(null);
  const [highlightsLink, setHighlightsLink] = useState('');
  const [isHighlight, setIsHighlight] = useState(false);

  // for styling
  const [descriptionDisplay, setDescriptionDisplay] = useState('block');
  const [fileSelectorDisplay, setFileSelectorDisplay] = useState('flex');
  const [uniqueLinkIdDisplay, setUniqueLinkIdDisplay] = useState('block');
  const [deleteCheckboxDisplay, setDeleteCheckboxDisplay] = useState('none');
  const [linkDisplay, setLinkDisplay] = useState('none');
  
  const [submited, setSubmited] = useState(false);


  // fetching all bogs data
  useEffect(()=>{
    fetch(ApiBaseUrl+'get-all-blogs' )
    .then(response => response.json())
    .then(data => {
        setBlogs(data.blogs); 
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
  },[submited])

  // fetching all bogs data
  useEffect(()=>{
    fetch(ApiBaseUrl+'get-all-projects' )
    .then(response => response.json())
    .then(data => {
        setProjects(data.projects); 
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
  },[submited])

  useEffect(()=>{
    fetch(ApiBaseUrl+'highlights' )
    .then(response => response.json())
    .then(data => {
        setHighlights(data.highlights); 
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
  },[submited])

  useEffect(()=>{
    if(isHighlight){
      setDescriptionDisplay('none');
      setFileSelectorDisplay('none');
      setUniqueLinkIdDisplay('none');
      setLinkDisplay('block');
      if(highlightsLink == ''){
        setUpdate(false);
        setFormMode('Create Highlights');
      }
      document.getElementById('projects-checkbox-container').style.display = 'none';
      document.getElementById('featured-checkbox-container').style.display = 'none';
      document.getElementById('highlights-checkbox-container').style.display = 'none';
    }
  },[isHighlight])

  useEffect(()=>{
    if(isProject && title == ''){
      setFormMode('Create Project');
    }else{setFormMode('Create Blog');}
  },[isProject])

  if((blogs == null) || (projects == null) || (highlights == null)){
    return(<div>loading</div>)
  }

  function clearInputFields(){
    setFormMode('Create Blog');
    setTitle('');
    setUniqueLinkId('');
    setDescription('');
    setHighlightsLink('');
    setSelectedFile(null);
    setFeatured(false);
    setUpdate(false);
    setIsProject(false);
    setIsHighlight(false);
    setIsDelete(false);
    setDeleteCheckboxDisplay('none');

    setSubmited(false);
    setColor('transparent');

    setDescriptionDisplay('block');
    setFileSelectorDisplay('flex');
    setUniqueLinkIdDisplay('block');
    setLinkDisplay('none');

    document.getElementById('file-selector').value = '';
    document.getElementById('response-msg').value = '';
    document.getElementById('projects-checkbox-container').style.display = 'flex';
    document.getElementById('featured-checkbox-container').style.display = 'flex';
    document.getElementById('highlights-checkbox-container').style.display = 'flex';
  }

  function fillBlogData  (blogData){
    clearInputFields();
    setTitle(blogData.blog_title);
    setDescription(blogData.blog_description);
    setUniqueLinkId(blogData.blog_id);
    setFeatured(blogData.featured);
    setUpdate(true);
    document.getElementById('projects-checkbox-container').style.display = 'none';
    document.getElementById('highlights-checkbox-container').style.display = 'none';
    setDeleteCheckboxDisplay('flex');
    setFormMode('Update Blog');
  }
  function fillProjectData  (projectData){
    clearInputFields();
    setTitle(projectData.project_title);
    setDescription(projectData.project_description);
    setUniqueLinkId(projectData.project_id);
    setFeatured(projectData.featured);
    setUpdate(true);
    setIsProject(true);
    document.getElementById('projects-checkbox-container').style.display = 'none';
    document.getElementById('highlights-checkbox-container').style.display = 'none';
    setDeleteCheckboxDisplay('flex');
    setFormMode('Update Project');
  }
  function fillHighlightsData  (highlightsData){
    clearInputFields();
    setTitle(highlightsData.content);
    setHighlightsLink(highlightsData.link);
    setIsHighlight(true);
    setUpdate(true);
    
    setDescriptionDisplay('none');
    setFileSelectorDisplay('none');
    setUniqueLinkIdDisplay('none');
    setLinkDisplay('block');
    
    document.getElementById('highlights-checkbox-container').style.display = 'none';
    document.getElementById('featured-checkbox-container').style.display = 'none';
    document.getElementById('projects-checkbox-container').style.display = 'none';
    setDeleteCheckboxDisplay('flex');
    setFormMode('Update Highlights');
  }

  // creating content
  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setColor('green');

    const formData = new FormData();
    if(selectedFile != null){formData.append("file", selectedFile);}
    if(!isProject && !isHighlight && !isDelete){
      formData.append("blog_title", title);
      formData.append("blog_description", description);
      formData.append("blog_id", uniqueLinkId);
      formData.append("featured", featured);
    }
    else if(isProject && !isDelete){
      formData.append("project_title", title);
      formData.append("project_description", description);
      formData.append("project_id", uniqueLinkId);
      formData.append("featured", featured);
    }
    else if(isHighlight && !isDelete){
      formData.append("content", title);
      formData.append("link", highlightsLink);
    }
    
    if(update || isDelete){formData.append("time_stamp",timeStamp)}

    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); 
  }

    try{
        let endpoint = ApiBaseUrl;
        if(!isProject){
          if(update && !isDelete){endpoint = ApiBaseUrl + "update-blog"}
          else if(isDelete){endpoint = ApiBaseUrl + "delete-blog"}
          else{endpoint = ApiBaseUrl + "create-blog"}
        }
        if(isProject){
          if(update && !isDelete){endpoint = ApiBaseUrl + "update-project"}
          else if(isDelete){endpoint = ApiBaseUrl + "delete-project"}
          else{endpoint = ApiBaseUrl + "create-project"}
        }
        if(isHighlight){
          if(update && !isDelete){endpoint = ApiBaseUrl + "update-highlight"}
          else if(isDelete){endpoint = ApiBaseUrl + "delete-highlight"}
          else{endpoint = ApiBaseUrl + "create-highlight"}
        }
        const response = await fetch(endpoint, {
            method: "POST",
            body: formData,
        });
        console.log("Form Data:");
        for (let pair of formData.entries()) {
          console.log(pair[0]+ ', '+ pair[1]); 
        }
        console.log(endpoint)
        console.log("Form Entries:");
        console.log("File:", typeof selectedFile, selectedFile);
        console.log("Blog Title:", typeof title, title);
        console.log("Blog Description:", typeof description, description);
        console.log("Blog ID:", typeof uniqueLinkId, uniqueLinkId);
        console.log("Featured:", typeof featured, featured);
        console.log("timestamp:", typeof timeStamp, timeStamp);
      
        if (response.ok) {
            const data = await response.json();
            if(data.error_message){
                setResponseMessage(data.error_message)
                setColor('red');
            }else{
                setResponseMessage(data.message)
                setColor('green');
                setTitle('');
                setDescription('');
                setUniqueLinkId('');
                setHighlightsLink('');
                setSelectedFile(null);
                setFeatured(false);
                setUpdate(false);
                setIsProject(false);
                setIsDelete(false);
                document.getElementById('file-selector').value = '';
            }
        }else { 
            setResponseMessage("Something went wrong! 1"+response.error);
            setColor('red');
        }
    }catch(error){
      setResponseMessage("Something went wrong! 2 " + error);
      setColor('red');
    }
    setSubmited(true);
  };

  // styling
  const descriptionStyle = {display:descriptionDisplay}
  const fileSelectorStyle = {display:fileSelectorDisplay}
  const uniqueLinkIdStyle = {display:uniqueLinkIdDisplay}
  const linkDisplayStyle = {display:linkDisplay}

  const deleteCheckboxStyle = {display:deleteCheckboxDisplay}

  return (
    <div id='creator-page' >
      <div id='data-selector-panel'>

        <div className='data-selector-container'>
            <h3 className='data-selector-title'>Blogs</h3>
            <div className='data-container'>
              {
                Object.keys(blogs).map((key)=>{
                  return(
                    <p className='data-row' onClick={()=>{fillBlogData(blogs[key]);setTimeStamp(blogs[key].time_stamp)}} key={blogs[key].time_stamp}> 
                      {blogs[key].blog_title}
                    </p>
                  )
                })
              }
            </div>
        </div>

        <div className='data-selector-container'>
            <h3 className='data-selector-title'>Projects</h3>
            <div className='data-container'>
              {
                Object.keys(projects).map((key)=>{
                  return(
                    <p className='data-row' onClick={()=>{fillProjectData(projects[key]);setTimeStamp(projects[key].time_stamp)}} key={projects[key].time_stamp}> 
                      {projects[key].project_title}
                    </p>
                  )
                })
              }
            </div>
        </div>

        <div className='data-selector-container'>
            <h3 className='data-selector-title'>Highlights</h3>
            <div className='data-container'>
              {
                Object.keys(highlights).map((key)=>{
                  return(
                    <p className='data-row' onClick={()=>{fillHighlightsData(highlights[key]);setTimeStamp(highlights[key].time_stamp)}} key={highlights[key].time_stamp}> 
                      {highlights[key].content}
                    </p>
                  )
                })
              }
            </div>
        </div>

      </div>

      <form id="form" onSubmit={handleSubmit}>
        <h1 style={{"margin":"0px"}} id="form-title">{formMode}</h1>
        <div id="form-input-container">
            <input 
                className="form-input-box"
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
                maxLength="1000" 
                required 
            />

            <textarea id="description-textbox" 
            className="form-input-box" 
            type="text" 
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Description . . ." 
            maxLength="1000" 
            style={descriptionStyle}
            >
            </textarea>

            <input 
            className="form-input-box"
            type="text" 
            value={uniqueLinkId}
            onChange={(e) => setUniqueLinkId(e.target.value)} 
            placeholder="unique-link-Id" 
            maxLength="50" 
            style={uniqueLinkIdStyle}
            />
            <input 
            className="form-input-box"
            type="text" 
            value={highlightsLink}
            onChange={(e) => setHighlightsLink(e.target.value)} 
            placeholder="link" 
            maxLength="50" 
            style={linkDisplayStyle}
            />

            <div id='file-selector-container' style={fileSelectorStyle}>
                <input id="file-selector" type="file" onChange={handleFileChange}/>
            </div>


            <p id="response-msg" style={{color:color}}>{responseMessage}</p>
        </div>


        <div id="submit-btn-container">
        <div className='checkbox-container'>
              <div className='checkbox-input' id='highlights-checkbox-container'>
                <input type='checkbox' checked={isHighlight} onChange={(e) => setIsHighlight(e.target.checked)} />
                <p>Highlights</p>
              </div>

              <div className='checkbox-input' id='projects-checkbox-container'>
                <input type='checkbox' id='projects-checkbox' checked={isProject} onChange={(e) => setIsProject(e.target.checked)} />
                <p>Project</p>
              </div>

              <div className='checkbox-input' id='featured-checkbox-container'>
                <input type='checkbox' id='featured-checkbox' checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
                <p>Featured</p>
              </div>

              <div className='checkbox-input' id='delete-checkbox-container' style={deleteCheckboxStyle}>
                <input type='checkbox' id='delete-checkbox' checked={isDelete} onChange={(e) => setIsDelete(e.target.checked)} />
                <p>Delete</p>
              </div>

          </div>
          <div id='buttons-container'>
            <button id='clear-button' onClick={()=>clearInputFields()}>Clear</button>
            <input type="submit" id="submit-btn" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;