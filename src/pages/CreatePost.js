import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files,setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('https://iemalteria-back.vercel.app/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        };
    }
    if (redirect) {
        return <Navigate to={'/blog'}/>
    }
    return (
        <form onSubmit={createNewPost} className="new-post">
            <h1 className="create-title">Nueva Publicación</h1>
            <input type="text" 
                placeholder={'Título'} 
                value={title} 
                onChange={ev => setTitle(ev.target.value)} />
            <input type="summary" 
                placeholder={'Resumen'} 
                value={summary} 
                onChange={ev => setSummary(ev.target.value)}/>
            <input type="file" 
                onChange={ev => setFiles(ev.target.files)} />
            <ReactQuill 
                value={content} 
                modules={modules} 
                formats={formats} 
                onChange={newValue => setContent(newValue)}/>
            <button style={{marginTop:'10px'}}>Crear Publicación</button>
        </form>
    );
}
