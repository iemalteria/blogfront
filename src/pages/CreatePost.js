import React, { useState } from "react";
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

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null); // Cambié 'files' a 'file' para manejar un solo archivo
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (ev) => {
        ev.preventDefault();

        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        data.append('file', file);

        try {
            const response = await fetch('https://backend-nu-virid.vercel.app/api/post', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });

            if (response.ok) {
                setRedirect(true);
            } else {
                console.error('Error al crear el post:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    if (redirect) {
        return <Navigate to={'/blog'}/>
    }

    return (
        <form onSubmit={createNewPost} className="new-post">
            <h1 className="create-title">Nueva Publicación</h1>
            <input
                type="text"
                placeholder={'Título'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <input
                type="text"
                placeholder={'Resumen'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
            />
            <input
                type="file"
                onChange={ev => setFile(ev.target.files[0])} // Cambié setFiles a setFile
            />
            <ReactQuill
                value={content}
                modules={modules}
                formats={formats}
                onChange={newValue => setContent(newValue)}
            />
            <button style={{marginTop:'10px'}}>Crear Publicación</button>
        </form>
    );
};

export default CreatePost;
